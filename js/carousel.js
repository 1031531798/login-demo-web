function carousel() {
    $('#Carousel_img').css('opacity', '1')
    soTime();
    //轮播上方图片添加鼠标事件
    $('#lb_a1').mouseout(soTime);
    $('#lb_a1').mouseover(stopTime);
    //轮播下方按钮添加鼠标事件
    $("[name='btn']").mouseout(soTime);
    $("[name='btn']").mouseover(stopTime);
}

function swimg(id) {
    switch (id) {
        case 'r1':
            //取消动画滞后
            $("#Carousel_img").stop(true, true);
            //改变小圆点样式
            $(".ra2").attr('class', 'ra1')
            $('#r1').attr('class', 'ra2')
            //切换效果
            $('#Carousel_img').attr('src', 'img/lb1.png')
            //将不用的图片隐藏并将所要展示的图片显示
            dis_none("Carousel_img")
            break;
        case 'r2':
            $("#Carousel_img").stop(true, true);
            $(".ra2").attr('class', 'ra1')
            $("#r2").attr('class', 'ra2')
            dis_none("Carousel_img2")
            break;
        case 'r3':
            $("#Carousel_img").stop(true, true);
            $(".ra2").attr('class', 'ra1')
            $("#r3").attr('class', 'ra2')
            dis_none("Carousel_img3")
            break;
        case 'r4':
            $("#Carousel_img").stop(true, true);
            $(".ra2").attr('class', 'ra1')
            $('#r4').attr('class', 'ra2')
            dis_none("Carousel_img4")
            break;
        case 'r5':
            $("#Carousel_img").stop(true, true);
            $(".ra2").attr('class', 'ra1')
            $('#r5').attr('class', 'ra2')
            dis_none("Carousel_img5")
            break;
        case 'r6':
            $("#Carousel_img").stop(true, true);
            $(".ra2").attr('class', 'ra1')
            $('#r6').attr('class', 'ra2')
            dis_none("Carousel_img6")
            break;
        case 'r7':
            $("#Carousel_img").stop(true, true);
            $(".ra2").attr('class', 'ra1')
            $('#r7').attr('class', 'ra2')
            dis_none("Carousel_img7")
            break;
    }

}
//将不用的图片隐藏并将所要展示的图片显示
function dis_none(id) {
    $('.lb').css('opacity', '0');
    document.getElementById(id).style.opacity = "1";
}
//定义自动换图逻辑
function tu() {
    var b = document.getElementsByClassName('ra2')[0].nextElementSibling;
    if (b === null) {
        var b = document.getElementById('r1')
    }
    var c = b.id;
    swimg(c);
}
//定义定时器
function soTime() {
    t = setInterval(tu, 7000)
}

function stopTime() {
    clearInterval(t)
}