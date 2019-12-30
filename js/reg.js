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
    document.getElementById("login").onclick = function check() {
        //创建判断
        if (document.getElementById("email-box").innerHTML == "" && document.getElementById("password-box").innerHTML == "") {

            //AJAX部分
            var request = new XMLHttpRequest();
            var form = document.getElementById('form');
            var fd = new FormData(form);
            request.addEventListener('load', function() {
                console.log('成功')
            })
            request.addEventListener('error', function() {
                console.log('失败')
            })
            request.open('POST', 'https://example.com/cors.php', true);
            request.send(fd);
        } else {
            return false;
        }
    }
    document.getElementsByClassName('sign-up-form')[0].style.opacity = 1;
    document.getElementsByClassName('sign-up-form')[0].style.top = 0 + 'px';
}