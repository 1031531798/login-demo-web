window.onload = function (){
    var title = document.getElementsByTagName('title')[0].text;
    console.log(title)
    //判断页面是登录还是注册
    switch(title){
        case "Login" : autoLogin();break;
        case "regist" : registChange();break;
        case "home" : Carousel();break;
    }
}