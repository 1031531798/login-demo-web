<template>
  <header class="header">
    <div id="top">
      <div id="welcome" v-if="user_out">欢迎来到本网站！<a href="user.html"><span id="user-name"></span></a><a href="login.html" id="outUser" >登出</a>
      </div>
      <!-- <div class="actionBar" title="新消息">
        <span class="glyphicon glyphicon-exclamation-sign"></span>
        <div class="actionNum">1</div>
      </div> -->
      <div id="sigin">
        <a href="login.html">登 录</a>
        <a href="regist.html">点击注册</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "userHeader", // footer：Vfooter,content:content
  data(){
    return{
      imgSrc: '../../user-head.jpg',
      visible: false,
      user_out: false
    }
  }
};
</script>

<style>
.header {
  display: flex;
  flex-direction: row;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  color: #f0f8ff;
  font-family: 黑体;
  z-index: 100;
}
a {
  text-decoration: none;
  color: black;
}

#top {
  display: flex;
  flex-direction: row;
  position: relative;
  left: 70%;
  width: 100%;
  height: 50px;
  line-height: 50px;
}

#top a {
  margin-left: 20px;
  color: #F0F8FF;
}
</style>
