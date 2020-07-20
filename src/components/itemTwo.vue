<template>
  <div class="itemTwo">
    <div class="itemTwo-left">
      <div class="itemTwo-title">{{itemTwo_data[0].item_name}}</div>
      <div class="itemTwo-titleTwo">{{itemTwo_data[0].item_text}}</div>
      <el-image :src="itemTwo_data[0].item_src" fit="cover"></el-image>
    </div>
    <div class="itemTwo-right">
      <div class="itemTwo-right-one">
        <div class="itemTwo-right-div">
          <div class="itemTwo-title">{{itemTwo_data[1].item_name}}</div>
          <div class="itemTwo-titleTwo">{{itemTwo_data[1].item_text}}</div>
          <!-- <div>{{itemTwo_data[1].item_price}}</div> -->
        </div>
        <el-image :src="itemTwo_data[1].item_src"></el-image>
      </div>
      <el-divider></el-divider>
      <div class="itemTwo-right-two">
        <div class="itemTwo-right-div">
          <div class="itemTwo-title">{{itemTwo_data[2].item_name}}</div>
          <div class="itemTwo-titleTwo">{{itemTwo_data[2].item_text}}</div>
          <!-- <div>{{itemTwo_data[1].item_price}}</div> -->
        </div>
        <el-image :src="itemTwo_data[2].item_src"></el-image>
      </div>
    </div>
  </div>
</template>
<script>
// 1. 先引入子组件
export default {
  name: "itemTwo",
  data() {
    return {};
  },
  props: ['itemTwo_data'],
  methods: {},
  computed: {}
};
</script>
<style>
.itemTwo{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  height: 100%;
  padding-bottom: 10%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.itemTwo-title{
  display: flex;
  width: 100%;
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: 600;
}
.itemTwo-titleTwo{
  display: flex;
  width: 100%;
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.itemTwo-left{
  display: flex;
  width: 50%;
  height: 100%;
  background: #f1efef;
  margin-right: 10px;
  flex-direction: column;
}
.itemTwo-right{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
}
.itemTwo-right-one{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 45%;
}
.itemTwo-right-two{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 45%;
}
.itemTwo-right-div{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.itemTwo-right-div div:first-child{
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 10px;
}
.itemTwo-right-text{
  display: flex;
  width: 100%;
}
</style>
