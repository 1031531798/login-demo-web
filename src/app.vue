<template>
  <div class="app">
    <carousel :carouselImgSrc="carouselImgSrc"></carousel>
    <titleText :title_text="title_textArr[0]" id="titleOne"></titleText>
    <itemOne :itemOne_data="itemOne_data"></itemOne>
    <titleText :title_text="title_textArr[1]" id="titleOne"></titleText>
    <itemTwo :itemTwo_data="itemTwo_data"></itemTwo>
    <bottom class="bottom"></bottom>
  </div>
</template>
<script>
// 1. 先引入子组件
import itemOne from './components/itemOne';
import itemTwo from './components/itemTwo';
import carousel from './components/carousel';
import titleText from "./components/title";
import bottom from "./components/bottom";
export default {
  name: "App",
  data() {
    return {
      title_textArr:[
        {text:'最新上线',details:'优选每日精品工艺作品'},
        {text:'生活艺术',details:'让艺术充满生活 创造生活情调'}
      ],
      itemOne_data: [
        {
          item_src: "../img/it1.jpg",
          item_name: "手工磨砂酒瓶",
          item_text: "由手工制成，适合家居装饰，为生活增添色彩。",
          item_price: "35",
          item_designer: "王明",
          item_type: ["手工"]
        },
        {
          item_src: "../img/it2.jpg",
          item_name: "玻璃树",
          item_text: "通透的玻璃树，纯洁的代表作",
          item_price: "260",
          item_designer: "王明",
          item_type: ["玻璃"]
        },
        {
          item_src: "../img/it3.jpg",
          item_name: "家具装饰品",
          item_text: "手工家具装饰品",
          item_price: "29",
          item_designer: "王明",
          item_type: ["手工"]
        },
        {
          item_src: "../img/it4.jpg",
          item_name: "木制挂件",
          item_text: "可爱的挂件，原木制成，打磨光滑",
          item_price: "298",
          item_designer: "王明",
          item_type: ["木雕","挂饰"]
        }
      ],
      itemTwo_data:[
        {
          item_src: "../img/it5.jpg",
          item_name: "艺术蜡烛",
          item_text: "可爱的挂件，原木制成，打磨光滑",
          item_price: "298",
          item_designer: "王明",
          item_type: ["木雕","挂饰"]
        },
        {
          item_src: "../img/it6.jpg",
          item_name: "木制挂件",
          item_text: "可爱的挂件，原木制成，打磨光滑",
          item_price: "298",
          item_designer: "王明",
          item_type: ["木雕","挂饰"]
        },
        {
          item_src: "../img/it7.jpg",
          item_name: "艺术花瓶",
          item_text: "别出心裁的制作方法 让家拥有自然的美丽",
          item_price: "298",
          item_designer: "王明",
          item_type: ["木雕","挂饰"]
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
    itemOne,
    itemTwo,
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
