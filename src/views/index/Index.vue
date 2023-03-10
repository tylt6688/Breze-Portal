<!--
 * @Author: LeoChan
 * @Description: 
 * @Date: 2022-08-31 21:17:07
 * @LastEditTime: 2022-09-09 23:39:18
 * Copyright (c) 2022 , 青枫网络工作室
-->
<template>
    <div class="page">
        <el-container>
            <el-main>
                <!-- 走马灯轮播图 -->
                <el-row>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-carousel :interval="4000" :height="carouselHeight+'px'">
                            <template :slot-scope="banners">
                                <el-carousel-item v-for="(item, index) in banners" :key="index">
                                    <el-image style="width: 100%; height: 100%" fit="fill" :src="item.url"
                                        :alt="item.alt" :preview-src-list="[item.url]"></el-image>
                                </el-carousel-item>
                            </template>
                        </el-carousel>
                    </el-col>
                </el-row>

                <el-divider><i class="el-icon-help"></i>科技拥抱生活</el-divider>

                <!-- 分类内容 -->
                <div style="background:#ffffff;margin:2% 0;padding-bottom:2%">
                    <div style="white-space: pre-wrap; font-size: 48px; color: rgb(23, 26, 29);padding: 3% 0">
                        {{this.contentDataList[0].mainTitle}}
                    </div>

                    <div style="display:flex;justify-content: space-evenly">
                        <div class="image-animate" v-for="(item,index) in this.contentDataList[0].children"
                            :key="index">
                            <el-image style="border-radius:16px;width: 100%;height: 100%;" :src="item.imgUrl">
                            </el-image>
                            <div class="box-content">
                                <p>{{item.subtitle}}</p>
                                <p>{{item.titleInfo}}</p>
                            </div>
                            <div class="box-title">
                                <p>{{item.mainTitle}}</p>
                            </div>
                            <div class="box-icon" style="font-size:18px">
                                <div class="icon-item">
                                    <span class="el-icon-view"></span>
                                </div>
                                <div class="icon-item">
                                    <span class="el-icon-download"></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div style="background:#ffffff;padding-bottom:2%">
                    <div style="white-space: pre-wrap; font-size: 48px; color: rgb(23, 26, 29);padding: 3% 0">
                        {{this.contentDataList[1].mainTitle}}
                    </div>
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane :label="item.mainTitle.toString()" :name="index.toString()"
                            v-for="(item,index) in this.contentDataList[1].children" :key="index">
                            <el-row type="flex" justify="center" style="margin:0 10%;border-radius:16px">
                                <el-col :span="12">
                                    <el-image style="border-radius:16px 0 0 16px" :src="item.imgUrl"></el-image>
                                </el-col>
                                <el-col :span="12"
                                    style="color:#ffffff;background-image: url('https://i-1.lanrentuku.com/2020/12/29/20d1e770-88b4-4574-867f-a3bddc433e9d.jpg?imageView2/2/w/500');border-radius:0 16px 16px 0">
                                    <div
                                        style="display:flex;justify-content: center;flex-direction:column;align-items:center;height:100%;margin: 0 5%;text-align: left;">
                                        <div class="item-title">{{item.subtitle}}</div>
                                        <div class="title-content">
                                            {{item.titleInfo}}
                                        </div>
                                        <div>
                                            <el-button class="title-button" @click="toDetail(item.id,item.routerPath)" type="primary">查看详情></el-button>
                                        </div>
                                    </div>

                                </el-col>
                            </el-row>
                        </el-tab-pane>

                    </el-tabs>
                </div>
            </el-main>

        </el-container>

    </div>
</template>

<script>
    import index from "@/api/index/index";
    export default {
        name: "Index",
        data() {
            return {
                activeName: '0',

                banners: [],


                topBannerNavBg: {
                    background: ''
                },

                contentDataList: [{
                    mainTile: "",
                    children: [{
                        mainTile:""
                    }]
                }],
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                carouselHeight: 0,
                screenWidth: 0
            };
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.getBanner();
                this.getContentData();
                this.getScreenWidth();
            },
            getScreenWidth() {
                // 首次加载时,初始化高度
                this.screenWidth = window.innerWidth
                this.carouselHeight = 600 / 1450 * this.screenWidth
                // 窗口大小发生改变
                window.onresize = () => {
                    this.screenWidth = window.innerWidth
                    this.carouselHeight = 600 / 1450 * this.screenWidth
                }
            },

            // 获取轮播图 Start
            getBanner() {
                index.getBannerInfo().then((res) => {
                    this.banners = res.data.result.data;
                });
            },
            // 获取轮播图 End
            getContentData() {
                let param = {
                    titleName: "",
                    parentId: 0
                }
                index.getContentList(param).then((res) => {
                    this.contentDataList = res.data.result.data;
                    console.log("contentDataList", this.contentDataList)
                })
            },
            // 分类数据获取 End

            toDetail(id,path){
                this.$router.push({
                    path: "/detail"+path,
                    query: {
                        id: id,
                    },
                });
            },

            handleClick(tab, event) {
                console.log(tab, event);
            },

        },

    };
</script>

<style scoped>
    .el-image {
        display: inherit
    }

    .page {
        background: #F2F4F8;
    }

    .el-main {
        text-align: center;
        padding: 0 0;
    }
    body>>>.el-container {
        margin-bottom: 40px;
    }

    .image-animate {
        width: 250px;
        height: 250px;
        overflow: hidden;
        position: relative;
    }

    .image-animate::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        left: 0;
        top: 0;
        background: rgba(255, 255, 255, 0.5);
        opacity: 0;
        /* 添加过渡效果 */
        transition: all 0.4s ease;
    }

    .image-animate:hover img {
        opacity: 0.8;
        filter: brightness(1.5);
    }

    .image-animate:hover::before {
        height: 70%;
        border-radius: 0 0 150px 150px;
        box-shadow: 0 0 20px #000;
        opacity: 1;
    }

    .box-content {
        width: 90%;
        color: #333;
        text-align: center;
        position: absolute;
        top: 18%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        opacity: 0;
        /* 添加过渡效果 */
        transition: all 0.4s ease;
    }

    .image-animate:hover .box-content {
        opacity: 1;
    }

    .box-content p:nth-child(1) {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 8px;
        /* 定义无小写字母，仅有大写字母 */
        text-transform: uppercase;
        margin: 0 0 2px;
        overflow: hidden;
        /*  超出的文本隐藏 */
        display: -webkit-box;
        /*将对象作为弹性伸缩盒子模型显示。 */
        -webkit-line-clamp: 2;
        /* 这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。 */
        -webkit-box-orient: vertical;
    }

    .box-content p:nth-child(2) {
        font-size: 16px;
        /* 文本中的每个单词以为=大写字母开头 */
        text-transform: capitalize;
        color: #303133;
    }

    .box-title {
        opacity: 1;
        width: 100%;
        color: #fff;
        text-align: center;
        position: absolute;
        bottom: 10%;
        font-size: 22px;
        transition: all 0.2s ease;
    }

    .image-animate:hover .box-title {
        opacity: 0;
    }

    .image-animate .box-icon {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 10px;
        display: flex;
        align-items: center;
    }

    .box-icon .icon-item {
        margin: 0 2px;
        background: rgba(255, 255, 255, 0.5);
        width: 35px;
        height: 35px;
        text-align: center;
        line-height: 31px;
        border: 2px solid #fff;
        cursor: pointer;
        /* 添加过渡效果 */
        transition: all 0.4s ease;
    }

    .box-icon .icon-item:nth-child(1) {
        transform: translateX(-200px);
    }

    .box-icon .icon-item:nth-child(2) {
        transform: translateX(200px);
    }

    /* icon的hover事件 */
    .box-icon .icon-item:hover {
        background: #fff;
        border-radius: 50%;
    }

    /* box hover的时候 显示按钮 */
    .image-animate:hover .icon-item {
        transform: translate(0);
    }

    /* .showAnimate {
        width: 60%;
        background: red;
        margin: 0 1%;
        transition: all 1s;
    } */

    .item-title {
            /* width: 65%; */
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            -o-text-overflow: ellipsis;
            font-size: 22px;
    
        }
    .title-content {
        position: relative;
        line-height: 1.4em;
        font-size: 16px;
        height: 7.2em;
        overflow: hidden;
        margin: 5% 0;
    }

    /* .row-content {
        display: flex;
        flex-flow: row wrap;
        box-sizing: border-box;
        align-items: center;
        justify-content: space-between;
    } */


    .title-button {
        margin-top: 5%;
        width: 100%;
    }

    ::v-deep .el-tabs__nav {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    ::v-deep .el-tabs__active-bar {
        display: none;
    }

    ::v-deep .el-tabs .el-tabs__nav-wrap::after {
        position: static;
    }

    /* .content-col {
        margin: 2% 0;
    } */

    @media (max-width:1200px) {
        .title-content {
            position: relative;
            line-height: 1.4em;
            font-size: 16px;
            height: 4.2em;
            overflow: hidden;
            margin: 5% 0;
        }
    }

    @media (max-width: 768px) {

        .item-title {
            /* width: 65%; */
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            -o-text-overflow: ellipsis;
            font-size: 16px;
            margin-bottom: 3%
        }

        .title-content {
            position: relative;
            line-height: 1.4em;
            font-size: 12px;
            height: 2.8em;
            overflow: hidden;
            margin: 3% 0;
        }


    }
</style>
<style>


</style>