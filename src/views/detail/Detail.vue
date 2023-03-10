<template>
  <div class="page">
    <el-container>
      <el-main>
        <div style="position:relative">
          <el-image style="width: 100%; height: 100%; display: block;" fit="cover"
            :src="require('@/assets/images/天堂湾.jpg')">
          </el-image>
          <div style="position: absolute;top: 40%;left:10%;text-align: left;color: #fff;">
            <span style="font-size:42px;font-weight: bold;">电脑</span>
            <p style="width:60%;font-size: 16px;">介绍了计算机发展历史、操作界面等基本知识和常规操作方法介绍了计算机发展历史、操作界面等基本知识和常规操作方法</p>
          </div>
        </div>
        <el-row type="flex" justify="center" style="flex-direction: column;align-items: center;padding:4% 0">
          <div style="font-size: 48px;line-height: 58px;color: rgb(23, 26, 29);font-weight: 500;margin-bottom: 4%;">方面优势
          </div>
          <div
            style="width:70%;height: 200px;background-color: #fff;border-radius: 16px;padding: 40px 32px;display: flex;justify-content: center;box-shadow: rgba(23, 26, 29, 0.06) 7px 10px 40px 0px, rgba(23, 26, 29, 0.08) 9px 10px 60px 0px;">
            <div
              style="display:flex;flex-direction: column;width:33%;height: 100%;border-right:1px solid rgba(126,134,142,.16);text-align: left;padding: 0 36px;">
              <div style="margin-top:auto;">
                <h3>协同效率低</h3>
              </div>
              <div style="margin:1% 0">
                <span>跨部门/上下游协作困难</span>
              </div>
              <div style="margin:1% 0">
                <span>人员及权限管理复杂</span>
              </div>
              <div style="margin:1% 0">
                <span>数据安全难保障</span>
              </div>
            </div>
            <div
              style="display:flex;flex-direction: column;width:33%;height: 100%;border-right:1px solid rgba(126,134,142,.16);text-align: left;padding: 0 36px;">
              <div style="margin-top:auto;">
                <h3>协同效率低</h3>
              </div>
              <div style="margin:1% 0">
                <span>跨部门/上下游协作困难</span>
              </div>
              <div style="margin:1% 0">
                <span>人员及权限管理复杂</span>
              </div>
              <div style="margin:1% 0">
                <span>数据安全难保障</span>
              </div>
            </div>
            <div
              style="display:flex;flex-direction: column;width:33%;height: 100%;border:0;text-align: left;padding: 0 36px;">
              <div style="margin-top:auto;">
                <h3>协同效率低</h3>
              </div>
              <div style="margin:1% 0">
                <span>跨部门/上下游协作困难</span>
              </div>
              <div style="margin:1% 0">
                <span>人员及权限管理复杂</span>
              </div>
              <div style="margin:1% 0">
                <span>数据安全难保障</span>
              </div>
            </div>
          </div>
        </el-row>
        <el-row type="flex" justify="center" style="flex-direction: column;align-items: center;padding:4% 0">
          <div style="font-size: 48px;line-height: 58px;color: rgb(23, 26, 29);font-weight: 500;margin-bottom: 4%;">方面优势
          </div>
          <div
            style="width:70%;height:350px;background-color: #fff;border-radius: 16px;display: flex;justify-content: center;box-shadow: rgba(23, 26, 29, 0.06) 7px 10px 40px 0px, rgba(23, 26, 29, 0.08) 9px 10px 60px 0px;">
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

            <div
              style="display:flex;flex-direction: column;width:75%;height: 100%;border:0;text-align: left;">
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
  export default {
    name: "Detail",
    data() {
      return {
        id: this.$route.query.id,
        title: "",
        content: "",
        created: "",
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

  .o-time {
    display: flex;
    /* 主轴对齐方式 */
    justify-content: center;
    /* 侧轴对齐方式 */
    align-items: center;
  }

  .time {
    font-size: 18px;
    color: #999;
  }
</style>