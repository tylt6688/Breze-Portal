<template>
	<div id="app">
		<el-header style="width:100%;position: fixed;top: 0;z-index:10">
			<el-row type="flex" justify="space-around" class="header-row" :style="topBannerNavBg">
				<div class="log-col" style="position:relative">
					<el-image class="logo-image" :src="require('@/assets/images/logo.png')" fit="fill">
					</el-image>
				</div>
				<el-menu :default-active="activeIndex" background-color="rgba(0,0,0,0.2)" text-color="#fff"
					active-text-color="#1c88cf" style="border: 0;background: transparent;"
					class="el-menu-demo menu-block" mode="horizontal" @select="handleSelect">
					<div v-for="(item,index) in this.menuList" :key="index">
						<el-menu-item :index="(index).toString()" v-if="item.navbarChildren.length === 0">
							{{item.titleName}}
						</el-menu-item>

						<el-submenu menu-trigger="click" :index="(index).toString()"
							v-if="item.navbarChildren.length !== 0">
							<template slot="title">{{item.titleName}}</template>
							<el-menu-item class="navbar-item" :index="(index+'-'+number).toString()"
								v-for="(test,number) in item.navbarChildren" :key="number">
								{{test.titleName}}
							</el-menu-item>

						</el-submenu>
					</div>
				</el-menu>
				<div class="header-title search-input">
					<el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
						<el-button slot="append" icon="el-icon-search"></el-button>
					</el-input>
				</div>

				<div class="header-title min-menu">
					<i class="el-icon-menu menu-i" @click="drawer = true"></i>
				</div>

			</el-row>
			<el-drawer :visible.sync="drawer" :modal="false" size="100%" direction="rtl" :show-close="false">
				<el-tree node-key="id" highlight-current :data="menuList" :props="defaultProps"
					@node-click="handleNodeClick"></el-tree>
				<!-- <el-row type="flex" class="drawer-row" v-for="(item,index) in menuList" :key="index">
                        <el-link :href="item.titleUrl" target="_blank" :underline="false">
                            <el-col :span="4" class="drawer-col">
                                <span class="title-drawer">{{item.titleName}}</span>
                            </el-col>
                            <el-col :span="1" :offset="19">
                                <span class="title-drawer"><i class="el-icon-arrow-right"></i></span>
                            </el-col>
                        </el-link>
                        <div v-if="item.navbarChildren.length !==0">
                            <div v-for="(second,num) in item.navbarChildren" :key="num">

                                <el-link :href="second.titleUrl" target="_blank" :underline="false"  >
                                    <el-col :span="4" class="drawer-col">
                                        <span class="title-drawer">{{second.titleName}}</span>
                                    </el-col>
                                    <el-col :span="1" :offset="19">
                                        <span class="title-drawer"><i class="el-icon-arrow-right"></i></span>
                                    </el-col>
                                </el-link>
                            </div>
                        </div>
                    </el-row> -->
			</el-drawer>

		</el-header>
		<router-view />
		<el-footer style="height:100%;">
			<el-row class="footer-wrapper">
				<div>
					<el-image style="width:100px;height:100px" :src="require('@/assets/images/logo.png')" fit="fill">
					</el-image>
				</div>
				<div style="width:80%;display: flex;justify-content: space-around;">
					<div v-for="(item,index) in footerMenuList" :key="index">
						<div>
							<div class="footer-title">{{item.titleName}}</div>
							<div class="footer-link" v-for="(secondaryTitle,index) in item.navbarChildren" :key="index">
								<el-link :underline="false">
									{{secondaryTitle.titleName}}
								</el-link>
							</div>
						</div>
					</div>
				</div>

			</el-row>
			<div style="position: relative;bottom: 1%;">© Breze 2022. All rights reserved.</div>
		</el-footer>
	</div>
</template>
<script>
	import index from "@/api/index/index";
	export default {
		name: "Index",
		data() {
			return {
				drawer: false,
				activeIndex: '0',
				input3: "",
				topBannerNavBg: {
					background: 'linear-gradient(rgba(0,0,0,.85),rgba(0,0,0,.0 ))'
				},
				menuList: [],
				defaultProps: {
					children: 'navbarChildren',
					label: 'titleName'
				},
				footerMenuList: [],
				carouselHeight: 0,
				screenWidth: 0,

			};
		},
		mounted() {
			this.getNavbarData(0);
				this.getFooterNavbar(1);
				window.addEventListener('scroll', this.handleScroll) // 监听页面滚动
		},
		methods: {
			// 滚动页面时触发导航变色
			handleScroll() {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				// 设置背景颜色的透明度
				if (scrollTop >= 200) {
					this.topBannerNavBg.background = 'rgba(0,0,0,.85)' // scrollTop + 多少根据自己的需求设置
				} else if (scrollTop === 0) {
					this.topBannerNavBg.background =
						'linear-gradient(rgba(0,0,0,.85),rgba(0,0,0,.0 ))' // 设置回到顶部时，背景颜色为透明
				}
			},
			/**
			 * @description: 
			 * @param {*} id
			 * @param {*} flag
			 * @return {*}
			 */
			toDetail(id, flag) {
				console.log(id, flag);
				this.$router.push({
					path: "/detail",
					query: {
						flag: flag,
						id: id,
					},
				});
			},

			getNavbarData(flag) {
				let param = {
					flag: flag
				}
				index.getNavbarList(param).then((res) => {
					this.menuList = res.data.result.data;
					console.log("nabar", this.menuList)
				})
			},

			getFooterNavbar(flag) {
				let param = {
					flag: flag
				}
				index.getNavbarList(param).then((res) => {
					this.footerMenuList = res.data.result.data;
					console.log("footerMenuList", this.footerMenuList)
				})
			},

			// 分类数据获取 End

			handleSelect(key, keyPath) {
				let path = "";
				if (keyPath.length > 1) {
					path = this.menuList[key.split("-")[0]].navbarChildren[key.split("-")[1]].titleUrl;
				} else {
					path = this.menuList[key.split("-")[0]].titleUrl
				}
				this.$router.push({
					path: path,
					
				});
			},
			handleNodeClick(data) {
				console.log(data);
			}
		},
		// 滚动之前重置
		beforeDestroy() {
			window.removeEventListener('scroll', this.handleScroll)
		},


	};
</script>

<style>
	#app {
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑";
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}

	html,
	body,
	#app {
		width: 100%;
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
	}


	.el-tree-node__content:hover {
		background-color: #1c88cf !important;
	}

	.el-tree-node.is-current>.el-tree-node__content {
		background: rgba(255, 255, 255, .3) !important;
	}
</style>
<style scoped>
	.el-header {
		text-align: center;
		padding: 0 0;
	}

	.el-footer {
		text-align: center;
		padding: 1% 0;
		background: #e9e9e9;
	}

	.menu-block {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 50%;
	}

	.header-title {
		margin-top: 4px;
	}

	.logo-image {
		width: 60px;
		height: 60px;
	}

	.el-menu>>>.el-submenu__icon-arrow {
		position: relative;
		right: -5px;
		top: 3%;
	}

	.el-menu>>>.el-menu-item,
	.el-submenu>>>.el-submenu__title {
		font-size: 16px;
		font-weight: bold;
		position: relative;
		background: transparent !important;
	}

	.el-menu>>>.el-submenu__icon-arrow {
		position: relative;
		left: 4%;
		top: 6%;
		color: #fff;
		font-size: 14px;
		font-weight: bold;
	}

	.el-menu>>>.el-menu-item:hover {
		background: transparent !important;
		color: #1c88cf !important;
	}

	.el-menu>>>.el-submenu__title:hover {
		background: transparent !important;
		color: #1c88cf !important;
	}

	.el-menu>>>.el-menu-item.is-active {
		background: transparent !important;
		color: #1c88cf !important;
	}

	.el-menu>>>.el-submenu__title.is-active .el-submenu__title {
		background: transparent !important;
		color: #1c88cf !important;
	}


	.search-input {
		margin-top: 12px;
	}

	.search-input>>>input,
	.search-input>>>input+.el-input-group__append {
		background: transparent;
		border: 2px solid #fff;
		font-size: 16px;
		color: #fff;
	}

	.search-input>>>input+.el-input-group__append {
		border-left: 0;
	}

	.el-input-group {
		width: 80%;
	}

	.el-input-group>>>.el-input__inner {
		border-radius: 45px 0px 0px 45px;
		border-right: 0;
	}

	.el-input-group>>>.el-input-group__append {
		border-radius: 0px 45px 45px 0px;
	}

	.min-menu {
		display: none;
	}

	.min-menu i {
		color: #fff;
	}

	.header-title>>>.menu-i {
		margin-top: 20px;
		position: absolute;
		top: 7%;
		right: 3%;
	}

	.el-drawer__wrapper>>>.el-drawer.rtl {
		top: 60px;
		background: rgba(0, 0, 0, .85);
	}

	.el-tree {
		background: none;
		color: #fff
	}

	.el-tree>>>.el-tree-node {
		margin: 1% 0;
	}

	.footer-wrapper {
		display: flex;
		width: 100%;
		margin: 2% auto;
		text-align: left;
		justify-content: space-between;
	}

	.footer-title {
		width: 100%;
		margin-bottom: 2%;
		font-weight: bold;
	}

	.footer-link {
		margin: 10% 0%;
	}

	@media(max-width: 992px) {
		.menu-block {
			display: none;
		}

		.min-menu {
			display: inline;
		}

		.el-input-group {
			width: 100%;
		}

	}

	@media (max-width: 768px) {

		/* .title-drawer {
			font-size: 12px;
		} */
	}

	@media (max-width: 500px) {
		.footer-wrapper {
			width: 100%;
			display: flex;
			flex-flow: column;
			justify-content: space-evenly;

			padding: 0 2%;
		}

		.footer-title {
			width: 100%;
			margin-bottom: 2%;
			font-weight: bold;
		}

		.footer-link {
			margin: 4% 5%;
		}
	}
</style>