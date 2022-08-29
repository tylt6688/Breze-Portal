<template>
    <div class="page">
        <!-- 走马灯轮播图 -->
        <el-carousel :interval="4000" type="card" height="20rem">
            <template :slot-scope="banners">
                <el-carousel-item v-for="(item, index) in banners" :key="index">
                    <el-image style="width: 100%; height: 100%" fit="fill" :src="item.url" :alt="item.alt"
                        :preview-src-list="[item.url]"></el-image>
                </el-carousel-item>
            </template>
        </el-carousel>

        <el-divider><i class="el-icon-help"></i></el-divider>

        <!-- 分类内容 -->
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>通知公告</span>
                            <el-button style="float: right; padding: 3px 0" type="text">更多
                                <i class="el-icon-d-arrow-right"></i>
                            </el-button>
                        </div>

                        <div v-for="item in notify" :key="item.id" class="text item">
                            <el-link @click="toDetail(item.id, 1)" style="display: block" :underline="false">
                                <el-row type="flex">
                                    <el-col :span="12">
                                        <div class="item-title">{{ item.title }}</div>
                                    </el-col>
                                    <el-col :span="12">
                                        <time style="float: right" class="time">
                                            {{ formatDate(item.created) }}
                                        </time>
                                    </el-col>
                                </el-row>
                            </el-link>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>新闻动态</span>
                            <el-button style="float: right; padding: 3px 0" type="text">更多 <i
                                    class="el-icon-d-arrow-right"></i>
                            </el-button>
                        </div>

                        <div v-for="item in news" :key="item.id" class="text item">
                            <el-link style="display: block" :underline="false">
                                <el-row type="flex">
                                    <el-col :span="12">
                                        <div class="item-title">{{ item.title }}</div>
                                    </el-col>
                                    <el-col :span="12">
                                        <time style="float: right" class="time">{{
                        formatDate(item.created)
                      }}</time>
                                    </el-col>
                                </el-row>
                            </el-link>
                        </div>
                    </el-card>
                </div>
            </el-col>

            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>学生天地</span>
                            <el-button style="float: right; padding: 3px 0" type="text">更多
                                <i class="el-icon-d-arrow-right"></i>
                            </el-button>
                        </div>

                        <div v-for="item in presence" :key="item.id" class="text item">
                            <el-link style="display: block" :underline="false">
                                <el-row type="flex">
                                    <el-col :span="12">
                                        <div class="item-title">{{ item.title }}</div>
                                    </el-col>
                                    <el-col :span="12">
                                        <time style="float: right" class="time">
                                            {{ formatDate(item.created) }}
                                        </time>
                                    </el-col>
                                </el-row>
                            </el-link>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>思政教育</span>
                            <el-button style="float: right; padding: 3px 0" type="text">更多
                                <i class="el-icon-d-arrow-right"></i>
                            </el-button>
                        </div>
                        <div v-for="item in thought" :key="item.id" class="text item">
                            <el-link style="display: block" :underline="false">
                                <el-row type="flex">
                                    <el-col :span="12">
                                        <div class="item-title">{{ item.title }}</div>
                                    </el-col>
                                    <el-col :span="12">
                                        <time style="float: right" class="time">
                                            {{ formatDate(item.created) }}
                                        </time>
                                    </el-col>
                                </el-row>
                            </el-link>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
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

                // 回显数据数组
                banners: [],
                notify: [],
                news: [],
                presence: [],
                thought: [],
            };
        },
        mounted() {
            this.getBanner();
            this.getNotify();
            this.getNews();
            this.getPresence();
            this.getThought();
        },
        methods: {
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
        },
    };
</script>

<style scoped>
    .el-carousel__item img {
        color: #475669;
        font-size: 16px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both;
    }

    .box-card {
        width: auto;
    }

    .item-title {
        /* width: 65%; */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
    }
</style>