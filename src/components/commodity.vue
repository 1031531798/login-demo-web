<template>
  <div class="commodity_unit">
  			<div>
  				<img :src="msg().imgSrc" alt="这是一张图片" class="commodity_img">
  			</div>
  			<div class="commodity_footer">
          <div class="commodity_text">
          	{{msg().text}}
          </div>
          <div class="commodity_text2">
          	{{msg().text2}}
          </div>
          <div class="commodity_price">
          	￥{{msg(). price}}
          </div>
        </div>
        <a id="commodity_url"></a>
  		</div>
</template>

<script>
  export default {
          name:'commodity',// footer：Vfooter,content:content
          props:{
            msg:{
              type: Function
            },
          },
      }
</script>

<style>
  .commodity_unit {
      width: 200px;
      height: 330px;
      background: rgb(241, 240, 239);
      margin: 10px 10px 10px 10px;
      border-left: white;
      transition: all 0.5s;
      border: 1px solid;
      border-color: #fff;
      position: relative;
  }

  .commodity_unit:hover {
    border-color: red;
  }

  .commodity_unit:hover .commodity_text2{
    text-decoration: underline;
  }

  .commodity_footer{
    position: relative;
    height: 100px;
  }

  .commodity_img {
      width: 200px;
      height: 230px;
  }

  .commodity_text {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
  }

  .commodity_text2 {
      font-size: 14px;
  }

  .commodity_price {
      position: absolute;
      right: 0;
      bottom: 0;
      color: tomato;
  }

  #commodity_rmtj{
      position: relative;
      margin-top: 50px;
      line-height: 80px;
  }

  #commodity_url{
    width: 200px;
    height: 330px;
    display: block;
    position: absolute;
    top: 0;
    cursor: pointer;
  }
</style>
