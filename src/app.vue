<template>
  <div class="app">
    <carousel :carouselImgSrc="carouselImgSrc"></carousel>
    <titleText :title_text="title_textArr[0]" id="titleOne"></titleText>
    <itemOne :itemOne_data="itemOne_data" id="itemOne"></itemOne>
    <titleText :title_text="title_textArr[1]" id="titleTwo"></titleText>
    <itemTwo :itemTwo_data="itemTwo_data" id="itemTwo"></itemTwo>
    <titleText :title_text="title_textArr[2]" id="titleThr"></titleText>
    <itemThr :itemThr_data="itemThr_data" id="itemThr"></itemThr>
    <bottom class="bottom"></bottom>
  </div>
</template>
<script>
// 1. 先引入子组件
import itemOne from './components/itemOne';
import itemTwo from './components/itemTwo';
import itemThr from './components/itemThr';
import carousel from './components/carousel';
import titleText from "./components/title";
import bottom from "./components/bottom";
export default {
  name: "App",
  data() {
    return {
      src:'../../img/ss1.jpg',
      title_textArr:[
        {text:'每日优选',details:'优选每日精品工艺作品'},
        {text:'热门活动',details:'每期优惠 百万福利'},
        {text:'名家名作',details:'专家品质认证'},
        {text:'即将上线',details:'各商家正在紧密研发中...'},
      ],
      itemOne_data: [
        {
          item_src: "../img/it1.jpg",
          item_name: "手工磨砂酒瓶",
          item_text: "由手工制成，适合家居装饰，为生活增添色彩。",
          item_price: "35",
          item_designer: "王明",
          item_type: ["手工","瓷器"],
        },
        {
          item_src: "../img/it2.jpg",
          item_name: "玻璃树",
          item_text: "通透的玻璃树，纯洁的代表作",
          item_price: "260",
          item_designer: "王明",
          item_type: ["瓷器"]
        },
        {
          item_src: "../img/it3.jpg",
          item_name: "家具装饰品",
          item_text: "手工家具装饰品",
          item_price: "29",
          item_designer: "王明",
          item_type: ["手工","摆件"]
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
          item_src: "../img/hd3.jpg",
          item_name: "荷花刺绣图",
          item_text: "清纯可爱 活泼动人",
          item_price: "298",
          item_designer: "王明",
          item_type: ["木雕","挂饰"]
        },
        {
          item_src: "../img/hd1.jpg",
          item_name: "贵族纹路",
          item_text: "稳重中透露贵气",
          item_price: "298",
          item_designer: "王明",
          item_type: ["木雕","挂饰"]
        },
        {
          item_src: "../img/hd2.jpg",
          item_name: "花",
          item_text: "采用多次绘制 色彩鲜丽动人",
          item_price: "298",
          item_designer: "王明",
          item_type: ["木雕","挂饰"]
        },
        {
          item_src: "../img/hd4.jpg",
          item_name: "花",
          item_text: "采用多次绘制 色彩鲜丽动人",
          item_price: "298",
          item_designer: "王明",
          item_type: ["木雕","挂饰"]
        }
      ],
      itemThr_data: [
        {
          item_src: "../img/dk1.jpg",
          item_name: "手工磨砂酒瓶",
          item_text: "由手工制成，适合家居装饰，为生活增添色彩。",
          item_price: "35",
          item_designer: "王明",
          item_type: ["手工"]
        },
        {
          item_src: "../img/dk2.jpg",
          item_name: "玻璃树",
          item_text: "通透的玻璃树，纯洁的代表作",
          item_price: "260",
          item_designer: "王明",
          item_type: ["玻璃"]
        },
        {
          item_src: "../img/dk3.jpg",
          item_name: "家具装饰品",
          item_text: "手工家具装饰品",
          item_price: "29",
          item_designer: "王明",
          item_type: ["手工"]
        },
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
    itemThr,
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
  margin-top: 10%;
}
#titleFour{
  display: flex;
  width: 80%;
  height: 300px;
}

</style>
