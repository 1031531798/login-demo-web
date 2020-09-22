<template>
  <div class="itemTwo">
    <div class="itemTwo-main">
      <el-image class="itemTwo-main-img" :src="itemTwo_data[0].item_src" :alt="itemTwo_data[0].item_name" fit="cover"></el-image>
    </div>
    <div id="itemTwo-right">
      <div class="itemTwo-right-unit" v-for="(unit,key) in itemTwo_data" :key="key">
        <el-image :src="itemTwo_data.item_src" :alt="itemTwo_data.item_name" fit="cover"></el-image>
      </div>
    </div>
  </div>
</template>
<script>
// 1. 先引入子组件
export default {
  name: "itemTwo",
  data() {
    return {
      arr:['qiaozhi','zuofei','liming','xiena'],
      age:['16','11','12','22']
    };
  },
  props: ['itemTwo_data'],
  created(){
  },
  methods: {
  },
  computed: {
    num:function(){
      this.index = this.index + this.xun;
      return this.index;
    }
  }
};
</script>
<style>
.itemTwo{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  height: 100%;
  padding-bottom: 10%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.itemTwo-main{
  display: flex;
  width: 40rem;
  height: 50rem;
  border: 0px;
  border-radius: 3rem;
  overflow: hidden;
}
.itemTwo-right{
  display: flex;
}
.itemTwo-right-unit{
  display: flex;
}
</style>
