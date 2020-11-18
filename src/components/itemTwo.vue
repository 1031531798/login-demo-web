<template>
  <div class="itemTwo">
    <div class="itemTwo-main">
      <el-image class="itemTwo-main-img" :src="itemTwo_data.main[0].item_src" :alt="itemTwo_data.main[0].item_title" fit="cover"></el-image>
      <shade class="itemTwo-shabe">
        <div slot="header" class="itemTwo-shabe-title">
          {{itemTwo_data.main[0].item_text}}
        </div>
        <div slot="center" class="shabe-user-box">
          <userUnit :userName='itemTwo_data.main[0].item_user.text'></userUnit>
          <el-button type="primary"  plain class="itemTwo-main-text-bottom-btn">参与活动</el-button>
        </div>
        <div slot="floot" class="shabe-bottom">
          <p class="itemTwo-main-text-link">了解更多<i class="el-icon-arrow-right link-icon"></i></p>
        </div>
      </shade>
    </div>
    <div class="itemTwo-center">
      <div class="itemTwo-center-left">
        <el-image :src="itemTwo_data.left[0].item_src" :alt="itemTwo_data.left[0].item_title" fit="scale-down"></el-image>
      </div>
      <div class="itemTwo-center-right" >
        <div v-for="(unit,key) in itemTwo_data.right" :key="key">
          <el-image :src="unit.item_src" :alt="unit.item_title" fit="cover"></el-image>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 1. 先引入子组件
import userUnit from './userUnit';
import shade from './shade';
export default {
  name: "itemTwo",
  data() {
    return {
    };
  },
  props: {
    itemTwo_data:{
      type:Object
    },
    
  },
  created(){
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
    shade,
  }
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
.itemTwo img{
  transition: all 0.5s;
}
.itemTwo-main{
  display: flex;
  width: 100%;
  height: 50rem;
  border: 0px;
  border-radius: 3rem;
  overflow: hidden;
  position: relative;
}
.itemTwo-main-img{
  z-index: 99;
}
.itemTwo-main-title{
  position: absolute;
  display: flex;
  color: #E6CEAC;
  font-weight: 600;
  font-size: 4rem;
  margin: 10px 0px 0px 10px;
}
.itemTwo-main-text{
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: white;
  font-size: 2rem;
  font-weight: 600;
  bottom:0;
  background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
  min-height: 56px;
  height: 100%;
  width: 100%;
  padding-left: 10px;
}
.itemTwo-main-text p:nth-child(1){
  display: flex;
  font-size: 2rem;
  justify-content: center;
  color: white;
  cursor: pointer;
}
.itemTwo-main-text-bottom{
  display: flex;
  font-size: 16px;
}
.itemTwo-main-text-bottom-btn {
  margin-left: 20px;
  color: white !important;
  display: flex;
  align-items: center;
  bottom: 0;
}
.itemTwo-main-text-link{
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px;
  font-weight: 300;
  font-size: 1.5rem;
  cursor: pointer;
  width: 100px;
  margin-left:0px;
}
.link-icon{
  font-size: 1.5rem;
  color: crimson;
  font-weight: 600;
}
.itemTwo-main-text-link :hover .link-icon{
  color :cyan;
}
.itemTwo-center{
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  position: relative;
}
.itemTwo-center-left{
  width: 40%;
  height: 40rem;
  border: 0px;
}
.itemTwo-center-right{
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  border: 0px;
  /* border-radius: 3rem; */
  overflow: hidden;
  position: relative;
  justify-content: center;
}
.itemTwo-center-right img{
  width: 10rem;
  height: 10rem;
}
.itemTwo-center-unit-txte{
  display: flex;
  position: absolute;
  font-size: 2rem;
  color: #F4606C;
}
.shabe-user-box{
  display: flex;
  flex-direction: row;
  margin:10px 0px 10px 0px;
}
.itemTwo-shabe{
  top:50px;
  transition: all 0.5s;
}

</style>
