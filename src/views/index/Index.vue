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
                                <el-carousel-item v-for="(item, index) in banners1" :key="index">
                                    <div style="color:#fff">
                                        <el-image style="width: 100%; height: 100%" fit="fill" :src="item.url"
                                            :alt="item.alt"></el-image>
                                        <h1
                                            style="position: absolute; bottom: 50%; left: 8%;opacity:0.9;text-align:left;border-radius:4px;">
                                            {{item.title}}
                                        </h1>
                                        <h4
                                            style="position: absolute; top: 45%; left: 8%;opacity:0.9;text-align:left;border-radius:4px;width: 30%;">
                                            {{item.info}}
                                        </h4>
                                        <el-button type="primary"
                                            style="position: absolute; bottom: 25%; left: 8%;opacity:0.9;text-align:left;border-radius:4px;">
                                            {{item.btn}}</el-button>

                                    </div>
                                </el-carousel-item>
                            </template>
                        </el-carousel>
                    </el-col>
                </el-row>

                <el-divider><i class="el-icon-help"></i>科技拥抱生活</el-divider>

                <!-- 分类内容 -->
                <el-row style="background:#e7f8ff;margin:2% 0;padding-bottom:2%">
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
                </el-row>
                <el-row style="background:#e7f8ff;padding-bottom:2%;margin: 2% 0;">
                    <div style="white-space: pre-wrap; font-size: 48px; color: rgb(23, 26, 29);padding: 3% 0">
                        {{this.contentDataList[1].mainTitle}}
                    </div>
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane :label="item.mainTitle.toString()" :name="index.toString()"
                            v-for="(item,index) in this.contentDataList[1].children" :key="index">
                            <el-row type="flex" style="border-radius:16px;padding: 2% 0;">

                                <el-col :span="5" :offset="3" style="color:#000;border-radius:0 16px 16px 0">
                                    <div style="text-align: left;">
                                        <div class="item-title">{{item.subtitle}}</div>
                                        <div>
                                            <el-button type="primary" class="title-button"
                                                @click="toDetail(item.id,item.routerPath)">查看详情</el-button>
                                        </div>
                                        <div class="title-content">
                                            sdgewhsdhsdg好的实际发货时间肯定更好的数据库给你吧科技的估计还得上课
                                        </div>
                                        <div class="title-content">
                                            sdhwehsdfsd
                                        </div>
                                        <div class="title-content">
                                            sdfgskjdgnsdk
                                        </div>

                                    </div>

                                </el-col>
                                <el-col :span="12" :offset="1">
                                    <el-image style="border-radius:2%;box-shadow: 10px 10px 20px rgba(0,0,0,.5);"
                                        :src="item.imgUrl"></el-image>
                                </el-col>
                            </el-row>
                        </el-tab-pane>

                    </el-tabs>
                </el-row>
                <el-row style="background:#e7f8ff;padding:2% 5%;margin: 2% 0;">
                    <div style="white-space: pre-wrap; font-size: 48px; color: rgb(23, 26, 29);padding: 3% 0">
                        {{this.contentDataList[2].mainTitle}}
                    </div>
                    <!-- <el-col :span="4" :offset="1" style="height: 400px;"> -->
                    <div style="display:flex;justify-content: center;">
                        <div class="company-culture" style="background:#666666" v-for="(item, index) in this.contentDataList[2].children"
                            :key="index" :style="getStyle(index,item)" @mouseenter="onMouseEnter(index)"
                            @mouseleave="onMouseLeave">
                            <div style="padding: 10% 0;text-align: left;">
                                <div v-if="activeIndex === index">
                                    <div style="font-size: 36px;color: rgba(0,0,0,1);font-weight: bold;">{{item.mainTitle}}
                                    </div>
                                    <div style="font-size: 16px;color: rgba(0,0,0,1);" v-for="(info, index) in item.titleInfoList" :key="index">
                                        {{info}}</div>
                                </div>
                                <div v-else>
                                    <div style="font-size: 14px;color: rgba(0,0,0,1);">
                                        {{item.mainTitle}}</div>
                                    <div style="font-size: 30px;color: rgba(0,0,0,1);font-weight: bold;">{{item.subtitle}}
                                    </div>

                                </div>
                            </div>
                            <div style="width:100%;text-align: left;" v-if="activeIndex === index">
                                <el-button type="primary" class="title-button"
                                    @click="toDetail(item.id,item.routerPath)">
                                    查看详情</el-button>
                            </div>
                        </div>
                    </div>
                    <!-- </el-col> -->
                </el-row>
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

                banners1:[{
                    url: require('@/assets/images/banner1.jpg'),
                    title:"工业自动化发展",
                    info:"自动化在信息化与工业化之间发挥着桥梁和纽带作用，面对我国传统工业的落后现状，国家将加大技术改造的步伐，使我国工业技术向多样化、自动化、智能化方向发展。",
                    btn:"查看详情"
                },
                {
                    url: require('@/assets/images/banner2.jpg'),
                    title:"工业自动化",
                    info:"工业自动化在工业生产中采用自动控制、自动调整装置，用以代替人工操纵机器和机器体系加工生产",
                    btn:"查看详情"
                },
                {
                    url: require('@/assets/images/banner3.jpeg'),
                    title:"提高工业自动化",
                    info:"生产设备可以根据自身环境或状况作出调整，自主安排生产任务，或者灵活的调整自己的控制算法，提高机械化系统的智能生产能力，",
                    btn:"查看详情"
                },
                {
                    url: require('@/assets/images/banner4.jpg'),
                    title:"“工业4.0”+“工业自动化”",
                    info:"“工业时代”“自动化生产”已成为时代的主题。很多装备制造业已经用到了自动化生产机械设备，“工业4.0”+“工业自动化” 推动整个自动化行业生产制造商",
                    btn:"查看详情"
                }
                ],

                topBannerNavBg: {
                    background: ''
                },

                contentDataList: [{
                    mainTile: "",
                    children: [{
                        mainTile: ""
                    }]
                }],
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                carouselHeight: 0,
                screenWidth: 0,

                items: [0, 1, 2,3], // 这里可以是您的数据，或者根据实际情况修改
                activeIndex: 0, // 跟踪当前鼠标移入的div索引

                bottomCon:[{
                    maintitle:"工业视觉软件",
                    subtitle:"致力于为客户提供操作流程简单易搭建的视觉软件工具",
                    info1:"易用性高，通用识别能力强",
                    info2:"提供实时仿真验证",
                    info3:"单目标精定位",
                    url: require('@/assets/images/home_pic_vision_nor@2x.png'),
                },
                {
                    maintitle:"工业智能相机",
                    subtitle:"针对不同应用场景物体可输出高质量点云数据图",
                    info1:"采用主动 DLP 结构光技术，拍摄速度快",
                    info2:"成像精细、方案成熟稳定",
                    info3:"精度高、速度快、环境自适应性强",
                    url: require('@/assets/images/home_pic_sense_nor@2x.png'),
                },
                {
                    maintitle:"智能视觉",
                    subtitle:"跟据客户实际视觉需求匹配软硬件集成一体化设备",
                    info1:"低成本、高效率的完成灵活多变",
                    info2:"灵活支持工厂智能化升级中的复杂工艺",
                    info3:"智能3D视觉算法与移动策略",
                    url: require('@/assets/images/home_pic_dexone_nor@2x.png'),
                }
                ],
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
                    console.log(this.contentDataList)
                })
            },
            // 分类数据获取 End

            toDetail(id, path) {
                console.log("path",path)
                this.$router.push({
                    path: "/detail" + path,
                    query: {
                        id: id,
                    },
                    
                });
            },
            onMouseEnter(index) {
                this.activeIndex = index; // 设置当前鼠标移入的div索引
            },
            onMouseLeave() {
                // this.activeIndex = 0; // 重置当前鼠标移入的div索引为null
            },
            getStyle(index,item) {
                if (this.activeIndex === index) {
                    return {
                        width: "50%",
                        backgroundImage: 'url('+item.imgUrl+')'
                    }; // 当前鼠标移入的div宽度变大
                }
                return {
                    width: "20%",
                    backgroundImage: 'url('+item.imgUrl+')'
                }; // 其他div宽度还原
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
        background: #fff;
        text-align: center;
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
        box-shadow: 0 0 10px #000;
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
        /* text-align: left; */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        font-size: 32px;

    }

    .title-content {
        width: 70%;
        position: relative;
        line-height: 1.4em;
        font-size: 16px;
        overflow: hidden;
        margin: 5% 0% 2% 2%;
        /* text-align: left; */
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

    .company-culture {
        display: inline-block;
        width: 20%;
        height: 300px;
        padding: 5%;
        margin: 0 2%;
        transition: width 0.6s;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, .5);
        border-radius: 30px;
    }

    .company-culture:hover {
        width: 50%;
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