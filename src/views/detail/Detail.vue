<template>
  <div class="page">
    <el-container>
      <el-main>
        <div style="position:relative;">
          <el-image style="width: 100%; height: 100%; max-height: 500px;" fit="cover"
            :src="require('@/assets/images/天堂湾.jpg')">
          </el-image>
          <div style="position: absolute;top: 40%;left:10%;text-align: left;color: #fff;">
            <span style="font-size:42px;font-weight: bold;">{{ this.contentList[0].mainTitle }} </span>
            <p style="width:60%;font-size: 16px;">{{this.contentList[0].info}}</p>
          </div>
        </div>
        <el-row type="flex" justify="center"
          style="flex-direction: column;align-items: center;padding:4% 0;background: #e7f8ff;margin: 1% 0;">
          <div style="font-size: 48px;line-height: 58px;color: rgb(23, 26, 29);font-weight: 500;margin-bottom: 4%;">
            {{this.contentList[1].mainTitle}}
          </div>
          <div
            style="width:70%;height: 200px;background-color: #eef6f7;border-radius: 16px;padding: 40px 32px;display: flex;justify-content: center;box-shadow: rgba(23, 26, 29, 0.06) 7px 10px 40px 0px, rgba(23, 26, 29, 0.08) 9px 10px 60px 0px;">

            <div
              style="display:flex;flex-direction: column;width:33%;height: 100%;border-right:1px solid rgba(126,134,142,.16);text-align: left;padding: 0 36px;"
              v-for="(item,index) in this.contentList[1].children" :key="index">
              <div>
                <el-image style="width: 20%; max-height: 500px;" fit="cover" :src="require('@/assets/images/logo11.png')">
                </el-image>
              </div>
              <div style="margin-top:auto;">
                <h3>{{item.mainTitle}}</h3>
              </div>
              <div style="margin:1% 0;font-size: 12px;" v-for="(infoitem,index) in item.infoList" :key="index">
                <span>{{infoitem}}</span>
              </div>
      
            </div>
          </div>
        </el-row>
        <el-row type="flex" justify="center"
          style="flex-direction: column;align-items: center;padding:4% 0;background: #e7f8ff;margin: 1% 0;">
          <div style="background:#e7f8ff;padding-bottom:2%">
            <div style="white-space: pre-wrap; font-size: 48px; color: rgb(23, 26, 29);padding: 3% 0">
              {{this.contentList[2].mainTitle}}
            </div>
            <el-tabs v-model="activeName" @tab-click="handleClick" >
              <el-tab-pane :label="item.mainTitle" :name="index.toString()" v-for="(item,index) in this.contentList[2].children" :key="index">
                <el-row type="flex" style="border-radius:16px;padding: 2% 0;">

                  <el-col :span="5" :offset="3" style="color:#000;border-radius:0 16px 16px 0;margin-top: 2%;">
                    <div style="text-align: left;">
                      <div class="item-title">{{item.subTitle}}</div>
                      <div class="title-content">
                        {{item.info | removeHyphen }}
                      </div>

                    </div>

                  </el-col>
                  <el-col :span="12" :offset="1">
                    <el-image style="border-radius:2%;box-shadow: 10px 10px 20px rgba(0,0,0,.5);"
                      :src="require('@/assets/images/天堂湾.jpg')"></el-image>
                  </el-col>
                </el-row>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-row>
        <el-row type="flex" justify="center"
          style="flex-direction: column;align-items: center;padding:4% 0;background: #e7f8ff;">
          <div style="font-size: 48px;line-height: 58px;color: rgb(23, 26, 29);font-weight: 500;margin-bottom: 1%;">
            {{this.contentList[3].mainTitle}}
          </div>
          <div style="margin-bottom: 3%;font-size: 18px;line-height: 28px;width: 60%;">
            {{this.contentList[3].info | removeHyphen }}
          </div>
          <div
            style="width:70%;height:400px;background-color: #fff;border-radius: 16px;display: flex;justify-content: center;box-shadow: rgba(23, 26, 29, 0.06) 7px 10px 40px 0px, rgba(23, 26, 29, 0.08) 9px 10px 60px 0px;">
            <div
              style="display:flex;flex-direction: column;justify-content: space-around;width:25%;height: 100%;border-right:1px solid rgba(126,134,142,.16);text-align: left;color: #fff;padding: 0 36px;border-radius: 16px 0 0 16px;background: linear-gradient(170deg,#007fff 31%,#00ebb6 143%);">
              <div style="font-size: 42px;">
                <i class="el-icon-service"></i>
              </div>
              <div style="font-size: 24px;font-weight: bold;">
                <span>助力企业数字化全程为你服务</span>
              </div>
              <el-button style="width:60%;color:#007fff;border-radius: 6px;">立即咨询</el-button>
            </div>

            <div style="display:flex;flex-direction: column;width:75%;height: 100%;border:0;text-align: left;">
              //TODO 展示用，暂已注释
              <!-- <el-image style="width: 100%; height: 100%; display: block;" fit="fill"
                :src="require('@/assets/images/2222.png')">
              </el-image> -->
            </div>
          </div>
        </el-row>
      </el-main>
    </el-container>

  </div>

</template>

<script>
  import moment from "moment";
  import detail from "@/api/detail/detail";
  import content from "@/api/content/content";
  export default {
    name: "Detail",
    data() {
      return {
        id: this.$route.query.id,
        title: "",
        content: "",
        created: "",
        activeName: '0',
        contentList: [],
      };
    },
    filters: {
    removeHyphen: function(value) {
      // 使用过滤器去掉 <-> 并返回新的字符串
      return value.replace('<->', '');
    }
  },
    mounted() {
      this.getContentById(this.id)
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
      getContentById(id) {
        content.getContentById(id).then((res) => {
          this.contentList = res.data.result.data;
          console.log("contentlist", this.contentList)
        })
      },
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

      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
  };
</script>

<style scoped>
  .page {
    background-color: #fff;
  }

  .el-main {
    text-align: center;
    padding: 0 0;
  }

  .o-time {
    display: flex;
    /* 主轴对齐方式 */
    justify-content: center;
    /* 侧轴对齐方式 */
    align-items: center;
  }

  .item-title {
    font-size: 28px;
    font-weight: 500;
    line-height: 46px;
    letter-spacing: 0;
    margin: 32px 0 24px;
  }

  .title-content {
    font-size: 18px;
    line-height: 32px;
    color: rgba(23, 26, 29, .6);
  }

  /* .row-content {
        display: flex;
        flex-flow: row wrap;
        box-sizing: border-box;
        align-items: center;
        justify-content: space-between;
    } */

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
</style>