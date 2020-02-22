var vm = new Vue({
    el:'#commodity_1',
    data () {
        return {
            
        }
    },
    components:{
        'commodity':httpVueLoader('./vue/Vcontent.vue')
    }
})