<template>
  <div class="page">
    <el-header>
      <h2 style="text-align: center">{{ title }}</h2>
    </el-header>
    <el-main>
      <div v-html="content"></div>
      <div class="o-time">
        <time class="time">{{ formatDate(created) }}</time>
      </div>
    </el-main>
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
      flag: this.$route.query.flag,
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