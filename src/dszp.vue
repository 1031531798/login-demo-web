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
                     imgSrc:"../img/da1.jpg",
                     text:"老仙雕",
                     text2:"脚踩祥云渡东海，飘逸的雕刻引人入境，仿佛在你面前的就是一位充满智慧的老者。",
                     price:"600000"
                }
               },
                msg2(){
                    return{
                      imgSrc:"../img/da2.jpg",
                      text:"碧罗瓶",
                      text2:"浑然一体般的美丽，让人挪不开眼。",
                      price:"22230"
                    }
                },
                msg3(){
                    return{
                      imgSrc:"../img/da3.jpg",
                      text:"碧血玉玺",
                      text2:"抛开这价值连城的血玉，这雕工也是万里挑一，栩栩如生！",
                      price:"6020000"
                    }
                },
                msg4(){
                    return{
                      imgSrc:"../img/da4.jpg",
                      text:"达摩雕像",
                      text2:"作者可能来自印度，达摩神韵自在心中！",
                      price:"82298"
                    }
                },
                msg5(){
                    return{
                      imgSrc:"../img/da5.jpg",
                      text:"观世音",
                      text2:"传世之作，每一处细节都完美如意，这是中国的瑰宝！",
                      price:"99999999"
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
