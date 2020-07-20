<template>
    <div class="itemOne-list">
        <div class="itemOne" v-for="(value,key) of itemOne_data" :key="key">
            <!-- <div class="itemOne-name">
                {{value.item_name}}
            </div> -->
            <div class="itemOne-body">
                <div class="itemOne-left">
                    <!-- <img :src="value.item_src" :alt="value.item_name"> -->
                    <el-image :src="value.item_src" :alt="value.item_name" fit="cover"></el-image>
                    <a href="#" class="litmOne-a"></a>
                </div>
                <div class="itemOne-right">
                    <div class="itemOne-name">{{value.item_name}}</div>
                    <div class="itemOne-text">{{value.item_text}}</div>
                    <div class="itemOne-text">设计者 王明 </div>
                    <div class="itemOne-type">
                        <el-tag v-for="(val,index) of value.item_type" :key="index" effect="plain">{{val}}</el-tag>
                    </div>
                </div>
            </div>
        </div>
        <div class="itemOne-btn">
            <el-button type="info" plain ><a class="carousel-a">查看更多</a></el-button>
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
    background: #f1efef;
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
}
.itemOne-name{
    width: 100%;
    font-size: 2rem;
    margin-bottom: 1rem;
}
.itemOne-body{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
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
}
.itemOne-btn{
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 1%;
}
.itemOne-btn button a{
    color: black;
}
.itemOne-type span{
    margin: 3px;
}
.litmOne-a{
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: -100%;
}

</style>
