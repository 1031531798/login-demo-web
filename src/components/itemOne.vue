<template>
    <div class="itemOne-list">
        <div class="itemOne" v-for="(value,key) of itemOne_data" :key="key">
            <div class="itemOne-body">
                <div class="itemOne-left">
                    <el-image :src="value.item_src" :alt="value.item_name" fit="cover"></el-image>
                    <!-- <a href="#" class="litmOne-a"></a> -->
                    <div class="itemOne-buy">
                        <span class="itemOne-buy-text">前往购买</span>
                        <div class="itemOne-buy-btn"><i class="el-icon-right"></i></div>
                    </div>
                </div>
                <div class="itemOne-right">
                    <div class="itemOne-name">{{value.item_name}}</div>
                    <div class="itemOne-text">{{value.item_text}}</div>
                    <div class="itemOne-text">设计者 王明 </div>
                    <div class="itemOne-type">
                        <el-tag v-for="(val,index) of value.item_type" :key="index" effect="plain">{{val}}</el-tag>
                    </div>
                    <div class="itemOne-price">
                        <span>￥{{value.item_price}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="itemOne-btn">
            <el-button type="info" plain ><a class="carousel-a">更多优选精品</a></el-button>
        </div>
    </div>
</template>
<script>
// 1. 先引入子组件
    export default {
        name:'itemOne',
        data(){
            return {
            }
        },
        props:['itemOne_data'],
        methods: {
        },
    }
</script>
<style>
.itemOne-list{
    width: 90%;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.itemOne{
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    height: auto;
    margin: 5rem;
    position: relative;
    overflow: hidden;
}
.itemOne-name{
    width: 100%;
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight:600;
}
.itemOne-body{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #f1efef;
}
.itemOne-left{
    width: 30rem;
    height: 30rem;
    border: 0px solid black;
}
.el-image{
    width: 100%;
    height: 100%;
}
.itemOne-right{
    display: flex;
    justify-content: center;
    width: 30rem;
    height: auto;
    flex-direction: column;
    position: relative;
    word-wrap:normal;
    padding-left: 10px;
}
.itemOne-text{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
.itemOne-btn{
    display: flex;
    width: 20%;
    flex-direction: column;
    margin-top: 1%;
    border: 0px solid;
    border-radius: 30%;
    min-width: 10em;
}
.itemOne-btn button a{
    color: black;
}
.itemOne-type span{
    margin: 3px;
}
.itemOne-price{
    font-weight: 400;
    font-size: 2rem;
    color: #F56C6C;
    position: absolute;
    left: 80%;
    top: 8rem;
}
/* .litmOne-a{
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: -100%;
} */
.itemOne-buy{
  background: rgba(0,0,0,0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  top: 100%;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: inherit;
  font-size: 2em;
}
.itemOne-buy-text{
  position: relative;
  top: -10px;
  opacity: 1;
  z-index: 20;
  cursor: pointer;
  font-weight: 600;
}
.itemOne-buy-btn{
  width: 5rem;
  height: 5rem;
  background: #3399ff;
  opacity: 1;
  z-index: 20;
  border: 0px solid;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  cursor: pointer;
  transition: all 0.3s;
}
.itemOne-left:hover .itemOne-buy{
  top:0%;
}
</style>
