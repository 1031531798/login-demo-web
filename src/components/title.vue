<template>
  <div class="title">
    <div class="title-div"></div>
    <div class="title-div"></div>
    <h2 class="title-text">热门推荐</h2>
    <div class="title-more">
      <el-link type="primary"><i class="el-icon-position"></i>查看更多</el-link>
    </div>
  </div>
</template>
<script>
// 1. 先引入子组件
export default {
  name: "titleText",
  data() {
    return {};
  },
  props: {},
  methods: {},
  computed: {}
};
</script>
<style>
.title {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
  left: 20px;
  width: 100%;
}
.title-div {
  width: 5px;
  height: 35px;
  border: 0px solid;
  border-radius: 2.5px;
  background: red;
  margin-left: 5px;
}
.title-text {
  position: relative;
  margin: 0px 100px 0px 20px;
}
.title-more{
  position: relative;
  float: right;
}
</style>
