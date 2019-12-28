function check() {

}

window.onload = function() {
    //邮箱验证
    var email = document.getElementById("email");
    email.onblur = function() {
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            var obj = email;
            if (obj.value === "") { //输入不能为空
                console.log("输入不能为空!");
                document.getElementById("email-box").innerHTML = "邮箱地址不能为空";　　　　
                return false;　　
            } else if (!reg.test(obj.value)) { //正则验证不通过，格式不对
                console.log("验证不通过!");
                document.getElementById("email-box").innerHTML = "邮箱地址格式有误";　　　　
                return false;　　
            } else {
                document.getElementById("email-box").innerHTML = ""
                return true;　　
            }
        }
        //密码验证
    var password = document.getElementById('password');
    password.onblur = function() {
        //创建正则表达式
        var reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{0,64}$/;
        if (password.value === "") { //验证密码是否为空
            document.getElementById("password-box").innerHTML = "密码不能为空";
            return false;
        } else if (!reg.test(password.value)) { //正则不通过，格式不对
            document.getElementById("password-box").innerHTML = "密码必须包含 数字,英文,字符中的两种以上";
            return false;
        } else if (password.value.length < 8) { //密码不能小于8个字符
            document.getElementById("password-box").innerHTML = "密码不能小于8位字符";
            return false;
        } else {
            document.getElementById("password-box").innerHTML = "";
            return true;
        }
    }
}