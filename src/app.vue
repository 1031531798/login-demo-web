<template>
  <div class="app">
    <userTop></userTop>
    <carousel :carouselImgSrc="carouselImgSrc"></carousel>
    <titleText></titleText>
    <div class="commodity">
      <item :item_data="rmtjMsg"></item>
    </div>
    <bottom class="bottom"></bottom>
  </div>
</template>
<script>
// 1. 先引入子组件
import item from './components/index_item';
import userTop from './components/user-head';
import carousel from './components/carousel';
import titleText from "./components/title";
import bottom from "./components/bottom";
export default {
  name: "App",
  data() {
    return {
      rmtjMsg: [
        {
          item_src: "../img/rmtj1.jpg",
          item_name: "鼠年限定精致陶偶",
          item_text: "由手工制成，适合家居装饰，为生活增添色彩。",
          item_price: "35"
        },
        {
          item_src: "../img/rmtj2.jpg",
          item_name: "性感等身玩偶",
          item_text: "99.9%鹅毛填充，柔软加温暖，无线裁缝技术让你摸不到的丝滑。",
          item_price: "260"
        },
        {
          item_src: "../img/rmtj3.jpg",
          item_name: "儿童隧道火车玩具",
          item_text: "让你的孩子动手开发大脑，在游戏中健康成长！",
          item_price: "560"
        },
        {
          item_src: "../img/yg.jpg",
          item_name: "浮士德鱼缸",
          item_text: "想养鱼吗？你不用998，不用698，现在只要298！",
          item_price: "298"
        }
      ],
      carouselImgSrc:[
        {img_src:"../../img/lb1.png",item_text:'帕加尼 Huayra BC Roadster 巅峰制造。',item_href:"#"},
        {img_src:"../../img/lb2.png",item_text:'豪华复古内饰 品味细致生活。',item_href:"#"},
        {img_src:"../../img/lb3.png",item_text:'最新人体科学操作 全功能方向盘。',item_href:"#"},
        {img_src:"../../img/lb4.png",item_text:'全车手工 精度世界领先 每一处都是艺术。',item_href:"#"},
        {img_src:"../../img/lb5.png",item_text:'流线型车身，超快加速，享受刺激人生。',item_href:"#"},
        {img_src:"../../img/lb6.png",item_text:'顶级赛车 刀锋车头 彰显王者霸气。',item_href:"#"}
      ],
    }
  },
  methods: {},
  computed: {},
  // 2. 挂载组件
  components: {
    item,
    userTop,
    carousel,
    titleText,
    bottom
  }
};
</script>
<style>
body{
  margin: 0;
  padding: 0;
  width: 100%;
  -webkit-user-select: none;
  overflow-x: hidden;
}
.app{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.commodity{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.bottom{
  display: flex;
  width: 100%;
}
</style>
