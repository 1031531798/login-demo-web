<template>
  <div class="carousel">
    <headerNav></headerNav>
    <el-carousel :interval="5000" class="carousel-body" trigger="click" height="100%" arrow="never">
      <el-carousel-item v-for="(value,key) of carouselImgSrc" :key="key" :name='value.item_text'>
        <!-- <img :src="value.img_src" class="carousel-img"/> -->
        <div class="carousel-img" :style="{ 'background-image': 'url(' + value.img_src + ')','background-repeat':'no-repeat','background-size':'cover' }" ></div>
        <div class="shabe"></div>
        <div class="carousel-div">
          <div class="carousel-text">{{value.item_text}}</div>
          <el-button type="primary" plain class="carousel-btn"><a class="carousel-a">前往购买</a></el-button>
          <el-button type="warning" plain class="carousel-btn"><a class="carousel-a">查看更多</a></el-button>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import headerNav from './headerNav';
export default {
  name: "carousel", // footer：Vfooter,content:content
  data() {
    return {
      imgHeight: "",
      index:0
    };
  },
  props: ["carouselImgSrc"],
  mounted() {
    this.setImgHeight();
    window.onresize = this.setImgHeight;
  },
  methods: {
    //计算走马灯图片尺寸
    setImgHeight: function() {
      //获取页面可视尺寸
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
      //图片在页面宽度1596px之前可以自动等比例缩放，1596px之后根据下方逻辑等比例缩放
      if(parseInt(windowWidth) > 1596){
        this.imgHeight = parseInt(windowHeight) - 150;
        $(".carousel").css("height", this.imgHeight + "px");
        $(".carousel-img").css("width",  windowWidth);
      }else if(parseInt(windowWidth) < 1596){
        this.imgHeight = parseInt(windowWidth)/1.8;
        $(".carousel").css("height", this.imgHeight + "px");
        $(".carousel-img").css("width",  windowWidth);
      };
    },
  },
  components:{
    headerNav
  }
};
</script>

<style>
.carousel {
  position: relative;
  width: 100%;
  min-height: 789px;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel-body {
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: 0;
}

.carousel-img{
  position: relative;
  width: 100%;
  height: 100%;
}
.shabe{
  background: #212529;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 5;
  opacity: 0.5;
}
.carousel-div{
  position: absolute;
  width: 600px;
  height: 150px;
  margin-left: 20px;
  top: 10%;
  z-index: 100;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  color: aliceblue;
  font-size: 3rem;
}
.carousel-text{
  margin-bottom: 20px;
}
.carousel-div .carousel-btn{
  border: 2px solid #fff;
  width: 150px;
  border-radius: 0.3rem;
  color: #fff;
  transition: all 0.3s;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  align-items: center;
}
.carousel-a{
  color: #fff;
  text-decoration: none;
}
/* 当页面宽度<1200PX */
@media screen and (max-width: 1419px){
  .carousel{
    min-height: 550px;
  }
  .carousel-div .carousel-btn{
    width: 120px;
  }
}
/* 当页面宽度<991PX */
@media screen and (max-width: 991px){
  .carousel{
    min-height: 426px;
  }
  .carousel{
    font-size: 2rem;
  }
  .carousel-div .carousel-btn{
    width: 100px;
  }
  .carousel{
    font-size: 1rem;
  }
}
/* 当页面宽度<768PX */
@media screen and (max-width: 767px){
  .carousel{
    min-height: 200px;
  }
  .carousel-div{
    position: absolute;
    width: 600px;
    height: 150px;
    margin-left: 20px;
    top: 10%;
    z-index: 100;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color: aliceblue;
    font-size: 1rem;
  }
  .carousel-div .carousel-btn{
    width: 80px;
    padding-left: 15px;
  }
  .itemOne-left + .itemOne-right{
    width: 100%!important;
  }
  .itemOne-price{
    left:75%!important;
  }
}
</style>
