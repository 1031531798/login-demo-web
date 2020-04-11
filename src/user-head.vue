<template>
  <div class="user_head">
      <img src="imgSrc" alt="头像" class="head_img">

  </div>
</template>

<script>
  export default {
          name:'headPortrait',// footer：Vfooter,content:content
          imgSrc:"../img/user.png",
      }
</script>

<style>
  .user-head{
    display: flex;
    flex-direction: row;
  }

  .head_img{
    width: 20px;
    height: 20px;
    border-radius: 10px;
  }
</style>
