<template>
    <div class="page">
        <el-container>
            <el-main>
                <div style="position:relative">
                    <el-image style="width: 100%; height: 500px; display: block;" fit="cover"
                        :src="require('@/assets/images/天堂湾.jpg')">
                    </el-image>
                    <div
                        style="position: absolute;top: 40%;left:50%;margin-left:-100px;text-align: center;color: #fff;">
                        <span style="font-size:42px;font-weight: bold;">关于青枫</span>
                        <p style="width:100%;font-size: 16px;">ABOUT BREZE</p>
                    </div>
                </div>
                <el-row style="padding:0 2%">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="公司简介" name="first">
                            <el-row type="flex" justify="center" style="padding:4% 0;margin:1% 0;background:#e7f8ff">

                                <el-col :span="10" style="color:#000;border-radius:0 16px 16px 0;text-align: left;">
                                    <div
                                        style="font-size: 48px;line-height: 58px;color: rgba(122,140,157,1);font-weight: bold;margin-bottom: 2%;">
                                        ABOUT US
                                    </div>
                                    <div
                                        style="font-size: 42px;line-height: 58px;color: rgb(23, 26, 29);font-weight: bold;margin-bottom: 2%;">
                                        公司名称
                                    </div>
                                    <div
                                        style="font-size: 16px;color: rgba(153,153,153,1);line-height: 1.8;width: 90%;">
                                       公司名称成立于2012年6月，总部位于山东省济南市高新技术开发区，在上海、杭州、深圳设有子公司，研发、办公、生产总面积3万余平，是一家集工业机器人研发和制造、控制系统开发、视觉系统开发、智能制造解决方案和设备提供于一体的高新技术企业。公司名称已成长为全球领先的轻工业全品类机器人及智能制造系统提供商。公司拥有轻量级工业机器人及核心零部件的全品类产品矩阵，包括并联机器人、Scara机器人、小六轴机器人、坐标机器人、AGV机器人、晶圆搬运机器人、控制器、视觉系统等。公司以客户需求为导向，凭借雄厚的技术积累和突出的研发能力，为轻工行业客户提供一站式的智能制造解决方案，产品现已遍布国内百余个城市，出口欧美、东南亚等十余个国家和地区。
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <el-image style="border-radius:2%;box-shadow: 10px 10px 20px rgba(0,0,0,.5);"
                                        :src="require('@/assets/images/天堂湾.jpg')">
                                    </el-image>
                                </el-col>
                            </el-row>
                            <el-row type="flex" justify="center" class="company-info"
                                style="align-items: center;padding:4% 0;margin:1% 0;width: 100%;">
                                <el-col :span="4" :offset="1" style="height: 400px;">
                                    <div class="company-culture" style="background:#DE5312;">
                                        <div style="padding: 20% 0;text-align: left;">
                                            <div style="font-size: 36px;color: rgba(255,255,255,1);font-weight: bold;">
                                                公司愿景</div>
                                            <div style="font-size: 16px;color: rgba(255,255,255,1);font-weight: bold;">
                                                CORPORATE
                                                VISION</div>
                                            <div
                                                style="margin-top:10%;font-size: 14px;color: rgba(255,255,255,1);font-weight: normal;">
                                                以推进民族工业智能化进程为己任，致力成为国际一流机器人品牌</div>
                                        </div>
                                        <div style="width:100%;text-align: left;">
                                            <el-image style="width: 40%; max-height: 500px;" fit="cover"
                                                :src="require('@/assets/images/logo11.png')">
                                            </el-image>
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="4" :offset="1" style="height: 400px;">
                                    <div class="company-culture" style="background:#DB650D;">
                                        <div style="padding: 20% 0;text-align: left;">
                                            <div style="font-size: 36px;color: rgba(255,255,255,1);font-weight: bold;">
                                                公司愿景</div>
                                            <div style="font-size: 16px;color: rgba(255,255,255,1);font-weight: bold;">
                                                CORPORATE
                                                VISION</div>
                                            <div
                                                style="margin-top:10%;font-size: 14px;color: rgba(255,255,255,1);font-weight: normal;">
                                                以推进民族工业智能化进程为己任，致力成为国际一流机器人品牌</div>
                                        </div>
                                        <div style="width:100%;text-align: left;">
                                            <el-image style="width: 40%; max-height: 500px;" fit="cover"
                                                :src="require('@/assets/images/logo11.png')">
                                            </el-image>
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="4" :offset="1" style="height: 400px;">
                                    <div class="company-culture" style="background:#666666">
                                        <div style="padding: 20% 0;text-align: left;">
                                            <div style="font-size: 36px;color: rgba(255,255,255,1);font-weight: bold;">
                                                公司愿景</div>
                                            <div style="font-size: 16px;color: rgba(255,255,255,1);font-weight: bold;">
                                                CORPORATE
                                                VISION</div>
                                            <div
                                                style="margin-top:10%;font-size: 14px;color: rgba(255,255,255,1);font-weight: normal;">
                                                以推进民族工业智能化进程为己任，致力成为国际一流机器人品牌</div>
                                        </div>
                                        <div style="width:100%;text-align: left;">
                                            <el-image style="width: 40%; max-height: 500px;" fit="cover"
                                                :src="require('@/assets/images/logo11.png')">
                                            </el-image>
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="4" :offset="1" style="height: 400px;">
                                    <div class="company-culture" style="background:#313131;">
                                        <div style="padding: 20% 0;text-align: left;">
                                            <div style="font-size: 36px;color: rgba(255,255,255,1);font-weight: bold;">
                                                公司愿景</div>
                                            <div style="font-size: 16px;color: rgba(255,255,255,1);font-weight: bold;">
                                                CORPORATE
                                                VISION</div>
                                            <div
                                                style="margin-top:10%;font-size: 14px;color: rgba(255,255,255,1);font-weight: normal;">
                                                以推进民族工业智能化进程为己任，致力成为国际一流机器人品牌</div>
                                        </div>
                                        <div style="width:100%;text-align: left;">
                                            <el-image style="width: 40%; max-height: 500px;" fit="cover"
                                                :src="require('@/assets/images/logo11.png')">
                                            </el-image>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                        <el-tab-pane label="合作伙伴" name="second">配置管理</el-tab-pane>
                        <el-tab-pane label="领导团队" name="third">角色管理</el-tab-pane>
                        <el-tab-pane label="联系我们" name="fourth">
                            <el-row type="flex" justify="center" style="padding:4% 0;margin:1% 0;background:#e7f8ff">
                                <el-col :span="10" style="color:#000;border-radius:0 16px 16px 0;text-align: left;">
                                    <el-card class="box-card">
                                    <div slot="header" class="clearfix">
                                        <span>公司名称</span>
                                    </div>
                                    <div class="text item">
                                        <span class="el-icon-location-information"></span>
                                        济南总部：山东省济南市高新技术开发区航天大道普翼机器人产业园
                                    </div>
                                    <div class="text item">
                                        <span class="el-icon-message"></span>
                                        邮箱：marketing@robotphoenix.com
                                    </div>
                                    <div class="text item">
                                        <span class="el-icon-phone-outline"></span>
                                        服务热线：400-116-0626
                                    </div>
                                    <div class="text item">
                                        服务热线：400-116-0626
                                    </div>
                                    <div class="text item">
                                        服务热线：400-116-0626
                                    </div>
                                    <div class="text item">
                                        服务热线：400-116-0626
                                    </div>
                                </el-card>
                                </el-col>
                                <el-col :span="10" :offset="1">
                                    <el-image style="border-radius:2%;box-shadow: 10px 10px 20px rgba(0,0,0,.5);"
                                        :src="require('@/assets/images/天堂湾.jpg')">
                                    </el-image>
                                </el-col>
                            </el-row>
                            <el-row type="flex" justify="center" style="padding:4% 0;margin:1% 0;background:#e7f8ff">
                                
                            </el-row>
                        </el-tab-pane>
                    </el-tabs>
                </el-row>

            </el-main>
        </el-container>

    </div>

</template>

<script>
    import moment from "moment";
    import detail from "@/api/detail/detail";
    export default {
        name: "Detail",
        data() {
            return {
                id: this.$route.query.id,
                title: "",
                content: "",
                created: "",
                activeName:"first"
            };
        },
        mounted() {
            console.log(this.id, this.flag);
            if (this.flag == 1) {
                this.getNotify();
            }
        },
        methods: {
            //格式化时间 Start
            formatDate(date) {
                if (date == null) {
                    return null;
                }
                return moment(date).format("YYYY年MM月DD日");
            },
            //格式化时间 End

            //获取公告详情 Start
            getNotify() {
                detail.getNotifyInfo(this.id).then((res) => {
                    console.log(res.data.result.data);
                    this.title = res.data.result.data.title;
                    this.content = res.data.result.data.content;
                    this.created = res.data.result.data.created;
                });
            },
            //获取公告详情 End
        },
    };
</script>

<style scoped>
    .page {
        background-color: #EEF7F2;
    }

    .el-main {
        text-align: center;
        padding: 0 0;
    }

    .company-culture {
        height: 100%;
        padding: 5%;
        transition: all 0.6s linear;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, .5);
        border-radius: 10px;
    }

    .company-culture:hover {
        transform: translateY(-8px);
    }

    .company-info {
        background-image: url('../../assets//images/bg.jpeg');
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
    clear: both
  }

</style>