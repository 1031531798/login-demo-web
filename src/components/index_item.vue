<template>
    <div class="item-list">
        <div class="item" v-for="(value,key) of item_data" :key="key">
            <div class="item-name">
                {{value.item_name}}
            </div>
            <div class="item-body">
                <div class="item-left">
                    <img :src="value.item_src" :alt="value.item_name">
                </div>
                <div class="item-right">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// 1. 先引入子组件
    export default {
        name:'item',
        data(){
            return {
            }
        },
        props:['item_data'],
        methods: {

        },
    }
</script>
<style>
.item-list{
    display: flex;
    flex-direction: column;
    width: 80%;
}
.item{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 5%;
}
.item-name{
    width: 100%;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
}
.item-body{
    display: flex;
    flex-direction: row;
    width: 100%;
}
.item-left{
    width: 70%;
    height: 30rem;
    border: 1px solid black;
}
.item-left img{
    width: 100%;
    height: 100%;
    box-shadow: 4px 4px 4px gray;
}
.item-right{
    width: 30%;
    height: 30rem;
    border: 1px solid black;
    margin-left: 1%;
}
</style>
