//获取cookie中的token
var token = $.cookie('token');
if (token != null) {
    window.location.href = "../index.html";
} else {
    loginChange();
    //回车登录
    enter()
}

function enter() {
    $('input').keypress(function (e) {
        var keyCode = e.keyCode;
        if (keyCode == "13") {
            submit()
        }
    });
}
//邮箱密码校验
function loginChange() {
    var emailFlag = false;
    emailFlag = $("#username").blur(function () {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if ($("#username").val() === "") { //输入不能为空
            console.log("输入不能为空!");
            document.getElementById("email-box").innerHTML = "<img src='img/error.png'>  邮箱地址不能为空";
            document.getElementById("email-box").style.color = "red";
            return false;
        } else if (!reg.test($("#username").val())) { //正则验证不通过，格式不对
            console.log("验证不通过!");
            document.getElementById("email-box").innerHTML = "<img src='img/error.png'>  邮箱地址格式有误";
            document.getElementById("email-box").style.color = "red";
            return false;
        } else {
            document.getElementById("email-box").innerHTML = "";
            return true;
        }
    })
    var passwordFlag = false;
    passwordFlag = $("#password").blur(function () {
        if ($("#password").val() === "") { //输入不能为空
            document.getElementById("password-box").innerHTML = "<img src='img/error.png'>  密码不能为空";
            document.getElementById("password-box").style.color = "red";
            return false;
        } else {
            document.getElementById("password-box").innerHTML = "";
            return true;
        }
    })
    $("#login").click(submit)
}
//登录提交事件
function submit() {
    if ($("#username").val() === "") { //输入不能为空
        console.log("输入不能为空!");
        document.getElementById("email-box").innerHTML = "<img src='img/error.png'>  邮箱地址不能为空";
        document.getElementById("email-box").style.color = "red";
        emailFlag = false;
    } else {
        document.getElementById("email-box").innerHTML = "";
        emailFlag = true;
    }
    if ($("#password").val() === "") { //输入不能为空
        document.getElementById("password-box").innerHTML = "<img src='img/error.png'>  密码不能为空";
        document.getElementById("password-box").style.color = "red";
        passwordFlag = false;
    } else {
        document.getElementById("password-box").innerHTML = "";
        passwordFlag = true;
    }
    if (emailFlag && passwordFlag) {
        //loading动画显示
        $('#loading').show();
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'api/login/userLogin', true);
        xhr.send(new FormData($("#login_form")[0]));
        // Track the state changes of the request.
        xhr.onreadystatechange = function () {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                //loading动画隐藏
                $('#loading').hide();
                if (xhr.status === OK) {
                    var result = JSON.parse(xhr.responseText);
                    if (result.code === "200") {
                        token = result.token;
                        //保存token
                        saveCookie(token)
                        //登录成功！跳转到主页
                        window.location.href = "../index.html";
                    } else {
                        alert('Error: ' + result.message);
                    }
                } else {
                    alert('Error: ' + xhr.msg); // An error occurred during the request.
                }
            }
        }
    }
}