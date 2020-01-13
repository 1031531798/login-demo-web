window.onload = function () {
    var flag = false;
    //用户名验证
    //邮箱验证
    var email = document.getElementById("email");
    flag = email.onblur = function () {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var obj = email;
        if (obj.value === "") { //输入不能为空
            console.log("输入不能为空!");
            document.getElementById("email-box").innerHTML = "<img src='img/error.png'>  邮箱地址不能为空";
            document.getElementById("email-box").style.color = "red";
            return false;
        } else if (!reg.test(obj.value)) { //正则验证不通过，格式不对
            console.log("验证不通过!");
            document.getElementById("email-box").innerHTML = "<img src='img/error.png'>  邮箱地址格式有误";
            document.getElementById("email-box").style.color = "red";
            return false;
        } else {
            // $.ajax 方法校验邮箱是否已注册
            $.ajax({
                url: "/api/check/email",
                type: "GET",
                data: "email=" + email.value,
                dataType: "text",
                async: false,
                success: function (msg) {
                    var result = JSON.parse(msg);
                    if (result.code == "200") {
                        document.getElementById("email-box").innerHTML = "<img src='img/ok.png'>  邮箱可注册！";
                        document.getElementById("email-box").style.color = "green";
                        flag = true;
                    } else {
                        document.getElementById("email-box").innerHTML = "<img src='img/error.png'>  " + result.message;
                        document.getElementById("email-box").style.color = "red";
                        flag = false;
                    }
                }
            })
            return flag;
        }
    }
    var password = document.getElementById('password');
    //密码验证
    flag = password.onblur = function () {
        //创建正则表达式
        var password = document.getElementById('password');
        var reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{0,64}$/;
        if (password.value === "") { //验证密码是否为空
            document.getElementById("password-box").innerHTML = "<img src='img/error.png'> 密码不能为空";
            document.getElementById("password-box").style.color = "red";
            return false;
        } else if (!reg.test(password.value)) { //正则不通过，格式不对
            document.getElementById("password-box").innerHTML = "<img src='img/error.png'> 密码必须包含 数字,英文,字符中的两种以上";
            document.getElementById("password-box").style.color = "red";
            console.log(password.value)
            return false;
        } else if (password.value.length < 8) { //密码不能小于8个字符
            document.getElementById("password-box").innerHTML = "<img src='img/error.png'> 密码不能小于8位字符";
            document.getElementById("password-box").style.color = "red";
            return false;
        } else {
            document.getElementById("password-box").innerHTML = "<img src='img/ok.png'> 密码通过";
            document.getElementById("password-box").style.color = "green";
            console.log(password.value)
            return true;
        }
    }
    //二次密码校验
    var tow_password = document.getElementById('two_password');
    flag = two_password.onblur = function () {
        var tow_password = document.getElementById('two_password');
        var color = document.getElementById("password-box").style.color;
        //创建正则表达式
        var reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{0,64}$/;
        //检验密码是否设置正确
        if (color == "red") {
            console.log(color)
            document.getElementById("two_password-box").innerHTML = "<img src='img/error.png'> 请输入正确的密码";
            document.getElementById("two_password-box").style.color = "red";
            return false;
        } else if (tow_password.value !== password.value) { //判断两次密码是否相等
            document.getElementById("two_password-box").innerHTML = "<img src='img/error.png'> 两次密码不一致";
            document.getElementById("two_password-box").style.color = "red";
            console.log(password)
            return false;
        } else { //密码一致
            document.getElementById("two_password-box").innerHTML = "<img src='img/ok.png'> 密码一致";
            document.getElementById("two_password-box").style.color = "green";
            console.log(two_password.value)
            return true;
        }
    }

    function getUser() {
        console.log($('#regist_form').serializeJSON());
        console.log(JSON.stringify($('#regist_form').serializeJSON()));
        return JSON.stringify($('#regist_form').serializeJSON());
    }

    document.getElementById("regist").onclick = function regist_check() {
        //创建判断
        if (flag) {
            var data = getUser();
            $.ajax({
                type: "POST",
                url: "api/regist",
                data: data,
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    alert(data.message);
                }
            });
        }
    }
}