<template>
    <div class="shade">
      <slot name="header">头</slot>
      <slot name="center" class="user-box">中</slot>
      <slot name="floot">尾</slot>
    </div>
</template>
<script>
    export default {
        name:'shade',
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
        }
    }
</script>
<style>
  .shade {
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    font-size: 2rem;
    font-weight: 600;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
    height: 100%;
    width: 100%;
    color: white;
    z-index: 9999;
    padding-left:10px;
  }
  .user-box{
    display: flex;
    flex-direction: row;
  }
</style>