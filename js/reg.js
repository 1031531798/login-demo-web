function check() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var obj = document.getElementById("email");
    if(obj.value === ""){ //输入不能为空
        console.log("输入不能为空!");
        document.getElementById("email-box").innerHTML = "邮箱地址不能为空";
　　　　return false;
　　}else if(!reg.test(obj.value)){ //正则验证不通过，格式不对
        console.log("验证不通过!");
        document.getElementById("email-box").innerHTML = "邮箱地址格式有误";
　　　　return false;
　　}else{
        document.getElementById("email-box").innerHTML =""
        return true;
　　}
}
