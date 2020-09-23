<template>
    <div class="userUnit">
        <el-avatar :src="headPortrait"></el-avatar>
        <span class="userUnit-text">{{userName}}</span>
    </div>
</template>
<script>
// 1. 先引入子组件
    export default {
        name:'userUnit',
        data(){
            return {
            }
        },
        props:{
            headPortrait:{
                type:String,
                default:'../../img/head.png'
            },
            userName:{
                type:String,
                default:''
            }
        },
        created(){
        },
        methods: {

        },
        computed: {

        },
        // 2. 挂载组件
        components:{
        }
    }
</script>
<style>
    .userUnit{
        display: flex;
        align-items: center;
        position: relative;
    }
    .userUnit span{
        margin-left: 10px;
        margin-right: 5px;
        cursor: pointer;
    }
    .userUnit-text:hover{
        padding-bottom:2px;
        border-bottom:1px solid #fff;
    }
</style>
