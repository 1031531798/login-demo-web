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
                     imgSrc:"../img/cq1.jpg",
                     text:"千花万朵碗",
                     text2:"浮夸的绘画，精致的抛光，只适合少数人的审美。",
                     price:"100"
                }
               },
                msg2(){
                    return{
                      imgSrc:"../img/cq2.jpg",
                      text:"纹龙颈瓶",
                      text2:"仿古的画风，象征皇家地位，适合插花。",
                      price:"230"
                    }
                },
                msg3(){
                    return{
                      imgSrc:"../img/cq3.jpg",
                      text:"山水方罐",
                      text2:"罐身的山水画让人沉醉，无疑是一件优秀的作品，超大的空间，买到就是赚到！",
                      price:"330"
                    }
                },
                msg4(){
                    return{
                      imgSrc:"../img/cq4.jpg",
                      text:"青花青龙瓶",
                      text2:"工艺精湛，整体美观大气，扑面而来的是来自青花瓷的气息！",
                      price:"898"
                    }
                },
                msg5(){
                    return{
                      imgSrc:"../img/cq5.jpg",
                      text:"花鸟碗",
                      text2:"配色好看，做工优良，吃饭的时候用这个碗，让你多吃三碗！",
                      price:"99"
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
 
</style>
