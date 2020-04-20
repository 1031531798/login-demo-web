<template>
    <div class="app">
        <div class="commodity">
          <commodity :msg="msg"></commodity>
          <commodity :msg="msg2"></commodity>
          <commodity :msg="msg3"></commodity>
          <commodity :msg="msg4"></commodity>
          <commodity :msg="msg5"></commodity>
        </div>
    </div>
</template>
<script>
// 1. 先引入子组件
import commodity from './components/commodity.vue'
    export default {
        name:'App',
        data(){
            return {
                msg(){
                  return{
                     imgSrc:"../img/cy1.jpg",
                     text:"鼠年限定精致陶偶",
                     text2:"由手工制成，适合家居装饰，为生活增添色彩。",
                     price:"35"
                }
               },
                msg2(){
                    return{
                      imgSrc:"../img/dswo.jpg",
                      text:"性感等身玩偶",
                      text2:"99.9%鹅毛填充，柔软加温暖，无线裁缝技术让你摸不到的丝滑。",
                      price:"260"
                    }
                },
                msg3(){
                    return{
                      imgSrc:"../img/hc.jpg",
                      text:"儿童隧道火车玩具",
                      text2:"让你的孩子动手开发大脑，在游戏中健康成长！",
                      price:"560"
                    }
                },
                msg4(){
                    return{
                      imgSrc:"../img/yg.jpg",
                      text:"浮士德鱼缸",
                      text2:"想养鱼吗？你不用998，不用698，现在只要298！",
                      price:"298"
                    }
                },
                msg5(){
                    return{
                      imgSrc:"../img/cc.jpg",
                      text:"反叛的鲁路修-C.C手办",
                      text2:"反叛的鲁路修动漫中女主角，有着惊人的美貌与气质！",
                      price:"999"
                    }
                }
            }
        },
        methods: {

        },
        computed: {

        },
        // 2. 挂载组件
        components:{
            commodity,
        }
    }
</script>
<style>
  .app{
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
  }
  .commodity {
      position: relative;
      width: 1200px;
      height: 350px;
      display: flex;
      flex-wrap: nowrap;
      background: rgb(231, 229, 229);
      padding: 5px 43px 5px 43px;
  }
  #pp{
    position: relative;
    left: 20%;
  }
</style>
