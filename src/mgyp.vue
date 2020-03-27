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
                     imgSrc:"../img/mg1.jpg",
                     text:"桃木雕刻龙扣挂件",
                     text2:"汽车钥匙链装饰品 平安扣件 龙纹木质工艺品。",
                     price:"80"
                }
               },
                msg2(){
                    return{
                      imgSrc:"../img/mg2.jpg",
                      text:"黄杨木雕刻工艺品",
                      text2:"用黄杨木雕刻的天鹅，象征宁静和纯洁，用来装饰最合适不过。",
                      price:"230"
                    }
                },
                msg3(){
                    return{
                      imgSrc:"../img/mg3.jpg",
                      text:"花梨木挠痒棒",
                      text2:"健身的人常因为背阔肌过大而挠不到后背，有了这个“神器”再也不用怕痒了！",
                      price:"55"
                    }
                },
                msg4(){
                    return{
                      imgSrc:"../img/mg4.jpg",
                      text:"东阳木雕双龙戏珠",
                      text2:"用于挂在客厅等地方，让室内有一丝古风之气！",
                      price:"188"
                    }
                },
                msg5(){
                    return{
                      imgSrc:"../img/mg5.jpg",
                      text:"十二生肖鸡",
                      text2:"金鸡报晓，象征勤奋，给孩子来一个！",
                      price:"399"
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
