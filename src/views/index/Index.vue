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
            <el-header>
                <el-row>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" style="margin:0%"
                            @select="handleSelect">
                            <el-row type="flex" justify="center" class="header-row">
                                <el-col :span="3">
                                    <el-image class="logo-image" :src="require('@/assets/images/logo.jpg')" :fit="fit">
                                    </el-image>
                                    <span class="logo-name">青枫网络</span>
                                </el-col>
                                <el-col :span="2" v-for="(item,index) in menuList" :key="index"
                                    class="header-title menu-show">

                                    <el-link :href="item.url" target="_blank" v-if="item.url.length === 0">
                                        <el-menu-item :index="index+1">{{item.name}}</el-menu-item>
                                    </el-link>
                                    <el-submenu menu-trigger="click" :index="index+1" v-if="item.url.length !== 0">
                                        <template slot="title">{{item.name}}</template>
                                        <el-menu-item class="navbar-item" 
                                            :index="index+1+'-'+number" v-for="(test,number) in item.url" :key="number">
                                            <el-link :href="item.url" target="_blank" :underline="false">
                                                {{test.secondTitle}}
                                                <i class="el-icon-top-right"></i>
                                            </el-link>
                                        </el-menu-item>

                                        <!-- <el-row v-if="item.flag === '1'" style="width: 100%;">
                                            <el-col :span="9" :offset="3" style="text-align: left;padding: 2%;"
                                                v-for="(test,number) in item.url" :key="number">
                                                <div class="item-title">{{test.secondTitle}}</div>
                                                <div class="title-content" style="width:80%">
                                                    {{test.secondContetn}}
                                                </div>
                                                <div>
                                                    <el-button type="primary" round>{{test.buttonName}}</el-button>
                                                </div>
                                                <div style="width:80%">
                                                    <el-image style="border-radius: 10%;" :src="test.src"></el-image>
                                                </div>
                                            </el-col>

                                        </el-row>
                                        <el-row v-if="item.flag === '2'">
                                            <el-col :span="9" :offset="3" style="padding: 2%;">
                                                <el-row>
                                                    <el-col :span="10" :offset="1"
                                                        style="border-top:1px solid #cccccc;padding: 2% 0;"
                                                        v-for="(test,number) in item.url" :key="number">
                                                        <div style="font-size: 16px;font-weight:bold">
                                                            {{test.secondTitle}}</div>
                                                        <div style="overflow:hidden;height: 1.3em;font-size: 12px;">
                                                            {{test.secondContetn}}
                                                        </div>
                                                    </el-col>

                                                </el-row>
                                            </el-col>
                                            <el-col :span="12" style="padding: 2%;background: #E4E7ED;">
                                                <div style="font-size:20px;font-weight:bold;margin-bottom:1%;">
                                                    {{item.thirdTitle}}</div>
                                                <el-row style="border-top:1px solid #C0C4CC;padding: 2% 0;width: 80%;"
                                                    v-for="(fest,number) in item.thirdList" :key="number">
                                                    <el-col :span="24">
                                                        <div style="font-size: 16px;font-weight:bold">{{fest.titleName}}
                                                            <i class="el-icon-s-promotion" style="float: right;"></i>
                                                        </div>

                                                    </el-col>
                                                </el-row>


                                            </el-col>
                                        </el-row> -->

                                    </el-submenu>
                                </el-col>

                                <el-col :span="9" :offset="1" class="header-title search-input">
                                    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                                        <el-button slot="append" icon="el-icon-search"></el-button>
                                    </el-input>
                                </el-col>

                                <!-- <el-col :span="2" class="header-title" >
                                    <el-menu-item class="login-register" :index="this.menuList.length+1">登录/注册
                                    </el-menu-item>
                                </el-col> -->
                                <el-col :span="1" class="header-title min-menu">
                                    <i class="el-icon-menu menu-i" @click="drawer = true"></i>
                                </el-col>

                            </el-row>
                        </el-menu>
                        <el-drawer :visible.sync="drawer" :modal="false" size="100%" :direction="direction"
                            :show-close="false">
                            <el-row type="flex" class="drawer-row" v-for="(item,index) in menuList" :key="index">
                                <el-link :href="item.url" target="_blank" :underline="false">
                                    <el-col :span="4" class="drawer-col">
                                        <span class="title-drawer">{{item.name}}</span>
                                    </el-col>
                                    <el-col :span="1" :offset="19">
                                        <span class="title-drawer"><i class="el-icon-arrow-right"></i></span>
                                    </el-col>
                                </el-link>
                            </el-row>
                        </el-drawer>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <!-- 走马灯轮播图 -->
                <el-row style="margin:1% 0%">
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
                <el-row :gutter="20" type="flex" justify="space-between" v-for="(item,index) in contentDataList"
                    :key="index" style="background:#ffffff;margin:2% 0; box-shadow: 0 2px 12px 0 rgb(0 0 0 / 5%);">
                    <el-col class="content-col" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-row class="row-content" v-if="(index+1) % 2 !== 0">
                            <el-col :span="8">
                                <el-image style="border-radius: 10%;" :src="src"></el-image>
                            </el-col>
                            <el-col :span="8" :offset="1" style="text-align:center">
                                <div class="item-title">学社是哪个</div>
                                <div class="title-content">
                                    通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号

                                </div>
                                <div>
                                    <el-button class="title-button" type="primary">主要按钮</el-button>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="row-content" v-if="(index+1) % 2 === 0" style="flex-direction: row-reverse;">
                            <el-col :span="8" :offset="1">
                                <el-image style="border-radius: 10%;" :src="src"></el-image>
                            </el-col>
                            <el-col :span="8" :offset="1" style="text-align:center">
                                <div class="item-title">学社是哪个</div>
                                <div class="title-content">
                                    通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号通知公告六号

                                </div>
                                <div>
                                    <el-button class="title-button" type="primary">主要按钮</el-button>
                                </div>
                            </el-col>
                        </el-row>

                        <!-- <div class="grid-content bg-purple">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <span>{{item.titleName}}</span>
                                    <el-button style="float: right; padding: 3px 0" type="text">更多
                                        <i class="el-icon-d-arrow-right"></i>
                                    </el-button>
                                </div>

                                <div v-for="test in notify" :key="test.id" class="text item">
                                    <el-link @click="toDetail(test.id, 1)" :underline="false">
                                        <el-row type="flex">
                                            <el-col :span="12">
                                                <div class="item-title">{{ test.title }}</div>
                                            </el-col>
                                            <el-col :span="12">
                                                <time style="float: right" class="time">
                                                    {{ formatDate(test.created) }}
                                                </time>
                                            </el-col>
                                        </el-row>
                                    </el-link>
                                </div>
                            </el-card>
                        </div> -->
                    </el-col>
                </el-row>
            </el-main>
            <el-footer style="height:100%;">
                <el-row class="footer-wrapper">
                    <div v-for="(item,index) in footerList" :key="index">
                        <el-col :span="6" class="foot-col">
                            <div class="footer-title">{{item.footerTitle}}</div>
                            <div class="footer-link" v-for="(secondaryTitle,index) in item.contentList" :key="index">
                                {{secondaryTitle.footerContent}}</div>
                        </el-col>
                    </div>
                </el-row>
                <div style="position: relative;bottom: 1%;">© Breze 2022. All rights reserved.</div>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import moment from "moment";
    import index from "@/api/index/index";
    export default {
        name: "Index",
        data() {
            return {
                // 分页请求数据
                size: 4,
                current: 1,

                drawer: false,
                // 回显数据数组
                banners: [],
                notify: [],
                news: [],
                presence: [],
                thought: [],
                menuList: [{
                        name: "首页",
                        url: []
                    },
                    {
                        name: "处理中心",
                        flag: "1",
                        url: [{
                                secondTitle: "222222",

                            },
                            {
                                secondTitle: "222222",

                            },
                            {
                                secondTitle: "222222",

                            },
                            {
                                secondTitle: "222222",

                            },
                        ]

                    },
                    {
                        name: "处理中心",
                        flag: "2",
                        url: [{
                                secondTitle: "111111",

                            },
                            {
                                secondTitle: "111111",

                            },
                            {
                                secondTitle: "111111",

                            },
                            {
                                secondTitle: "111111",

                            },

                        ],
                        thirdTitle: "快捷操作",
                        thirdList: [{
                                titleName: "首页"
                            },
                            {
                                titleName: "首页"
                            },
                            {
                                titleName: "首页"
                            },
                            {
                                titleName: "首页"
                            },
                        ]
                    },
                    {
                        name: "关于我们",
                        url: []
                    },

                ],
                contentDataList: [{
                        titleName: "学生天地",
                        contentList: [{
                            id: 1,
                            content: "<p>通知公告六号</p>",
                            created: "2022年9月7号",
                            title: "通知公告六号"
                        }]
                    },
                    {
                        titleName: "学生天地",
                        contentList: [{
                            id: 1,
                            content: "<p>通知公告六号</p>",
                            created: "2022年9月7号",
                            title: "通知公告六号"
                        }]
                    },
                    {
                        titleName: "学生天地",
                        contentList: [{
                            id: 1,
                            content: "<p>通知公告六号</p>",
                            created: "2022年9月7号",
                            title: "通知公告六号"
                        }]
                    },
                    {
                        titleName: "学生天地",
                        contentList: [{
                            id: 1,
                            content: "<p>通知公告六号</p>",
                            created: "2022年9月7号",
                            title: "通知公告六号"
                        }]
                    },

                ],
                footerList: [{
                        footerTitle: "产品与解决方案",
                        contentList: [{
                                footerContent: "概述"
                            },
                            {
                                footerContent: "概述"
                            },
                            {
                                footerContent: "概述"
                            },
                        ]
                    },
                    {
                        footerTitle: "资料与文档",
                        contentList: [{
                                footerContent: "文档"
                            },
                            {
                                footerContent: "博客"
                            },
                        ]
                    },
                    {
                        footerTitle: "关于我们",
                        contentList: [{
                                footerContent: "关于Breze"
                            },
                            {
                                footerContent: "领导团队"
                            },
                            {
                                footerContent: "联系我们"
                            },
                        ]
                    },
                ],
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                carouselHeight: 0,
                screenWidth: 0,
                divScreenWidth: 0,
                menuItemWidth: window.innerWidth,
            };
        },
        mounted() {
            this.getBanner();
            this.getNotify();
            this.getNews();
            this.getPresence();
            this.getThought();
            this.getScreenWidth();
        },
        methods: {
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
            // 格式化时间 Start
            formatDate(date) {
                if (date == null) {
                    return null;
                }
                return moment(date).format("YYYY 年 MM 月 DD 日");
            },
            // 格式化时间 End

            // 获取轮播图 Start
            getBanner() {
                index.getBannerInfo().then((res) => {
                    this.banners = res.data.result.data;
                });
            },
            // 获取轮播图 End

            // 分类数据获取 Start
            getNotify() {
                let params = {
                    current: this.current,
                    size: this.size,
                };
                index.getNotifyInfo(params).then((res) => {
                    this.notify = res.data.result.data.records;
                    console.log("notify", this.notify)
                });
            },
            getNews() {
                let params = {
                    current: this.current,
                    size: this.size,
                };
                index.getNewsInfo(params).then((res) => {
                    this.news = res.data.result.data.records;
                });
            },

            getPresence() {
                let params = {
                    current: this.current,
                    size: this.size,
                };
                index.getPresenceInfo(params).then((res) => {
                    this.presence = res.data.result.data.records;
                });
            },
            getThought() {
                let params = {
                    current: this.current,
                    size: this.size,
                };
                index.getThoughtInfo(params).then((res) => {
                    this.thought = res.data.result.data.records;
                });
            },
            // 分类数据获取 End

            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
    };
</script>
<style scoped>
    .page {
        background: #F2F4F8;
    }

    .el-header {
        text-align: center;
        padding: 0 0;
    }

    .el-main {
        text-align: center;
        padding: 0 0;
    }

    .el-footer {
        text-align: center;
        padding: 0 0;
        background: #C0C4CC;
    }

    body>>>.el-container {
        margin-bottom: 40px;
    }

    .header-title {
        margin-top: 4px;
    }

    .header-row {
        position: relative;
    }

    .logo-image {
        width: 60px;
        height: 60px;
        position: absolute;
        top: 0;
        left: 4%;
    }

    .logo-name {
        position: absolute;
        top: 30%;
        left: 10%;
        font-size: 20px;
        color: #4490f1;
    }


    .header-title>>>.el-submenu__icon-arrow {
        right: 12%;
    }

    .search-input {
        margin-top: 12px;
    }

    .el-input-group {
        width: 70%;
    }

    .el-input-group>>>.el-input__inner {
        border-radius: 45px 0px 0px 45px;
        border-right: 0;
    }

    .el-input-group>>>.el-input-group__append {
        border-radius: 0px 45px 45px 0px;
        border-left: 0;
        background: #ffffff;
    }

    .el-input-group>>>.el-input__inner:focus {
        outline: none;
        border: 1px solid #DCDFE6;
        border-right: 0;
    }

    .header-title>>>.menu-i {
        margin-top: 20px;
        position: absolute;
        top: 7%;
        right: 3%;
    }

    .el-drawer__wrapper>>>.el-drawer.rtl {
        top: 60px;
        background: #303133;
    }

    .drawer-row {
        font-size: 24px;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
    }

    .drawer-row>>>.el-link {
        padding: 2% 0;
        width: 100%;
    }

    .drawer-row>.el-link:hover {
        background: #909399;
    }

    .drawer-row>.el-link>>>.el-link--inner {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .drawer-col {
        width: 100%;
        text-align: left;
        margin-left: 2%;
    }

    .title-drawer {
        font-size: 16px;
        color: #ffffff;
    }
    .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title{
        padding: 0;
    }
    .navbar-item >>>.el-link {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .navbar-item>.el-link:hover {
        background:#E4E7ED;
        color:#303133
    }
    .navbar-item>.el-link>>>.el-link--inner {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0 10px
    }
    .min-menu {
        display: none;
    }

    .el-menu-demo {
        height: 60px;
        width: 100%;
    }

    .el-card.is-always-shadow {
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 25%);
    }

    .item-title {
        /* width: 65%; */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        font-size: 24px;
        margin-bottom: 5%
    }

    .title-content {
        position: relative;
        line-height: 1.4em;
        font-size: 16px;
        height: 7.2em;
        overflow: hidden;
        margin: 5% 0;
    }

    .row-content {
        display: flex;
        flex-flow: row wrap;
        box-sizing: border-box;
        align-items: center;
        justify-content: space-between;
    }

    .title-button {
        margin-top: 5%;
        width: 80%;
    }

    .content-col {
        margin: 2% 0;
    }

    .footer-wrapper {
        display: flex;
        width: 100%;
        margin: 2% auto;
        text-align: left;
        justify-content: space-between;
    }

    .footer-wrapper .foot-col {
        width: 100%;

    }

    .footer-title {
        width: 100%;
        margin-bottom: 2%;
        font-weight: bold;
    }

    .footer-link {
        margin: 4% 0%;
    }

    @media (min-width:1200px) and (max-width:1280px) {

        /* .text>>>.el-link {
            display: block;
            font-size: 12px;
        } */
        .header-title>>>.el-submenu__icon-arrow {
            right: 5%;
        }
    }

    @media (max-width:1200px) {
        .title-content {
            position: relative;
            line-height: 1.4em;
            font-size: 16px;
            height: 4.2em;
            overflow: hidden;
            margin: 5% 0;
        }

        .header-title>>>.el-submenu__icon-arrow {
            right: -5%;
        }
    }


    @media(max-width: 992px) {
        .menu-show {
            display: none;
        }

        .min-menu {
            display: inline;
        }

        .el-input-group {
            width: 100%;
        }

        .logo-name {
            display: none;
        }
    }

    @media (max-width: 768px) {
        .menu-show {
            display: none;
        }

        .min-menu {
            display: inline;
        }

        .el-input-group {
            width: 100%;
        }

        .title-drawer {
            font-size: 12px;
        }

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

        .title-button {
            margin-top: 3%;
            width: 60%;
        }
    }

    @media (max-width: 500px) {
        .title-button {
            margin-top: 3%;
            width: 80%;
        }

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