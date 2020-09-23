<template>
  <div class="itemTwo">
    <div class="itemTwo-main">
      <el-image class="itemTwo-main-img" :src="itemTwo_main_Data[0].item_src" :alt="itemTwo_main_Data[0].item_title" fit="cover"></el-image>
      <div class="itemTwo-main-text">
        <p><i class="el-icon-star-off"></i> {{itemTwo_main_Data[0].item_title}}}</p>
        <p>{{itemTwo_main_Data[0].item_text}}</p>
        <div class="itemTwo-main-text-bottom">
          <div class="itemTwo-main-text-bottom-store">
            <userUnit :userName='userUnitData[0].text'></userUnit>
          </div>
          <el-button type="primary" icon="el-icon-thumb" plain class="itemTwo-main-text-bottom-btn">参与活动</el-button>
        </div>
      </div>
    </div>
    <div id="itemTwo-right">
      <div class="itemTwo-right-unit" v-for="(unit,key) in itemTwo_data" :key="key">
        <el-image :src="unit.item_src" :alt="unit.item_title" fit="cover"></el-image>
      </div>
    </div>
  </div>
</template>
<script>
// 1. 先引入子组件
import userUnit from './userUnit';
export default {
  name: "itemTwo",
  data() {
    return {
      userUnitData:[
        {head_src:'',text:'德国钟周建筑'},
        {head_src:'',text:'现代石器行'},
        {head_src:'',text:'现代石器行'},
      ]
    };
  },
  props: ['itemTwo_data','itemTwo_main_Data'],
  created(){
    console.log(itemTwo_main_Data)
  },
  methods: {
  },
  computed: {
    num:function(){
      this.index = this.index + this.xun;
      return this.index;
    }
  },
  components:{
    userUnit,
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
  position: relative;
}
.itemTwo-main-text{
  position: absolute;
  color: white;
  font-size: 2rem;
  font-weight: 600;
  bottom:0;
  background: rgba(0,0,0,0.5);
  min-height: 56px;
  height: 30%;
  width: 100%;
}
.itemTwo-main-text:first-line {
  color: brown;
  text-indent: 5%;
}
.itemTwo-main-text p:nth-child(2){
  display: flex;
  font-size: 1.7rem;
  justify-content: center;
  color: white;
  cursor: pointer;
}
.itemTwo-main-text-bottom{
  display: flex;
  flex-direction: row;
}
.itemTwo-main-text-bottom-btn {
  margin-left: 20px;
  color: white !important;
  display: flex;
  align-items: center;
}
.itemTwo-main-text-bottom-btn i{
  font-size: 2rem;
  
}
.itemTwo-right{
  display: flex;
}
.itemTwo-right-unit{
  display: flex;
  width: 20rem;
  height: 10rem;
}
</style>
