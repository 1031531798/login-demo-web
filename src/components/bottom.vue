<template>
    <footer>
		<div id="footer">
            <div id="contact">
                <h2>
                    联系方式
                </h2>
                <div id="footer_phone">
                    手机 : 13735003264
                </div>
                <br>
                <div id="footer_qq">
                    QQ : 1031531798
                </div>
                <br>
                <div id="footer_email">
                    邮箱 : 1031531798@qq.com
                </div>
            </div>
        </div>
	</footer>
</template>
<script>
// 1. 先引入子组件
    export default {
        name:'bottom',
        data(){
            return {
              
            }
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
<style lang:'scss'>
$color = red;
 #footer {
     width: 100%;
    height: 25rem;
    background: black;
    color: white;
    font-family: Montserrat , sans-serif;
    font-size: 14px;
}
#contact{
    position: relative;
    top: 10%;
    left: 10%;
}
</style>
