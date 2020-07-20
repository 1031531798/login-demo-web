<template>
  <div class="title">
    <div class="title-div">
      <span class="title-text">{{title_text.text}}</span>
      <span class="title-textDetails">{{title_text.details}}</span>
    </div>
  </div>
</template>
<script>
// 1. 先引入子组件
export default {
  name: "titleOne",
  data() {
    return {};
  },
  props: ['title_text'],
  methods: {},
  computed: {}
};
</script>
<style>
.title {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3%;
  left: 20px;
  font-family: ProximaNova,Helvetica,Arial,sans-serif;
  font-size: 3rem;
  font-weight: 800;
}
.title-div {
  display: flex;
  flex-direction: row;
  text-align: center;
}
.title-text {
  position: relative;
  margin: 0px 100px 0px 15px;
}
.title-more{
  position: relative;
  float: right;
}
.title-textDetails{
  font-size: 1.5rem;
}
</style>
