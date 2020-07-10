<template>
    <div class="commodity">
      <commodity :msg="msg"></commodity>
      <commodity :msg="msg2"></commodity>
      <commodity :msg="msg3"></commodity>
      <commodity :msg="msg4"></commodity>
      <commodity :msg="msg5"></commodity>
    </div>
</template>
<script>
// 1. 先引入子组件
import commodity from './commodity.vue'
    export default {
        name:'App',
        data(){
            return {
                
            }
        },
        props:{

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
