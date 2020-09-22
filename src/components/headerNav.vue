<template>
  <header class="header">
    <div class="user-login">
      <div class="sigin">
        <a href="#titleOne">最新上线</a>
        <a href="#">刺绣</a>
        <a href="#">雕刻</a>
        <a href="#">玉石</a>
        <a href="#">瓷器</a>
        <a href="login.html">Login</a>
        <a href="regist.html">Register</a>
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
  width: 80%;
  background: (33,37,41, rgba0.5);
  color: #e2e8ee;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  z-index: 100;
  margin-top: 0px;
  align-self: flex-start;
  justify-content: flex-end;
  font-size: 1.5rem;
  font-weight: 600;
  border: 1px solid rgba(221, 221, 221, 0.25);
  border-width: 0 0 1px 0;
}

.header a:hover{
  text-decoration: none;
  color: #fd7e14;
}
.user-login {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 100%;
  height: 50px;
}

.user-login a {
  margin-left: 20px;
  color: rgb(220, 227, 233);
}
</style>
