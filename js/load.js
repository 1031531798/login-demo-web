window.onload = function (){
    var title = document.getElementsByTagName('title')[0].text;
    console.log(title)
    //判断页面是登录还是注册
    switch(title){
        case "Regist" : registChange();break;
        case "Home" : carousel();side_click();saveUserName();token();setNavAnimation();side_foucs();break;
        //case "User Interface" :;break;
    }

}