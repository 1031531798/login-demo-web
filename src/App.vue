<template>
    <div class="app">
        <div class="commodity">
          <Vcontent :msg="msg"></Vcontent>
          <Vcontent :msg="msg2"></Vcontent>
          <Vcontent :msg="msg3"></Vcontent>
          <Vcontent :msg="msg4"></Vcontent>
          <Vcontent :msg="msg5"></Vcontent>
        </div>
    </div>
</template>
<script>
// 1. 先引入子组件
import Vcontent from './components/Vcontent.vue'
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
                      text2:"你想在寂寞的夜里有个温暖的怀抱吗？你想有个充实的床伴吗？",
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
                      price:"99999"
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
            Vcontent,
        }
    }
</script>
<style>
  .app{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .commodity {
      width: 1100px;
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
