<template>
  <div class="itemThr">
    <div class="itemThr-item">
      <div class="itemThr-item-one">
        <el-image :src="itemThr_data[0].item_src" fit="cover" class="itemThr-item-one-img" >
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
        <div class="itemThr-item-one-massge">
          <div>
          </div>
        </div>
      </div>
    </div>
    <div class="itemThr-item">
      <div class="itemThr-item-two">
        <el-image :src="itemThr_data[1].item_src" fit="cover" class="itemThr-item-two-img">
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
      </el-image>
      </div>
    </div>
    <div class="itemThr-item">
      <div class="itemThr-item-thr">
        <el-image :src="itemThr_data[2].item_src" fit="cover" class="itemThr-item-thr-img">
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
      </el-image>
      </div>
    </div>
  </div>
</template>
<script>
// 1. 先引入子组件
export default {
  name: "itemThr",
  data() {
    return {
  
    };
  },
  props: ['itemThr_data'],
  methods: {},
  computed: {}
};
</script>
<style>
.itemThr{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  height: 100%;
  padding-bottom: 10%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.itemThr-item{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 10em;
  justify-content: flex-start;
}
.itemThr-item-one{
  display: flex;
  width: 60%;
  height: 40rem;
}

</style>
