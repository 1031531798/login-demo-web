//封装页面导航动画
function setNavAnimation(){
    function navAnimation(obj) {
        var pos = $("#"+obj).offset().top;
        console.log(pos);
        $('html,body').animate({ scrollTop: pos}, "normal");
    };
    //为导航栏绑定跳转动画
    $('#side1').click(function(){
        navAnimation("commodity_rmtj");
    });
    $('#side2').click(function(){
        navAnimation("commodity_sgyp");
    });
    $('#side3').click(function(){
        navAnimation("commodity_jmcq");
    });
    $('#side4').click(function(){
        navAnimation("commodity_mgyp");
    });
    $('#side5').click(function(){
        navAnimation("commodity_dszp");
    });
    $('#side6').click(function(){
        navAnimation("footer");
    });
}
