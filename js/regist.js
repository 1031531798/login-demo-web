window.onload = function() {
    //邮箱验证
    var email = document.getElementById("email");
    email.onblur = function() {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var obj = email;
        if (obj.value === "") { //输入不能为空
            console.log("输入不能为空!");
            document.getElementById("email-box").innerHTML = "邮箱地址不能为空";
            document.getElementById("email-box").style.color = "red";
            return false;
        } else if (!reg.test(obj.value)) { //正则验证不通过，格式不对
            console.log("验证不通过!");
            document.getElementById("email-box").innerHTML = "邮箱地址格式有误";
            document.getElementById("email-box").style.color = "red";
            return false;
        } else {
            document.getElementById("email-box").innerHTML = "邮箱地址可用"
            document.getElementById("email-box").style.color = "green";
            return true;
        }
    }
    var password = document.getElementById('password');
    //密码验证
    password.onblur = function() {
            //创建正则表达式
            var password = document.getElementById('password');
            var reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{0,64}$/;
            if (password.value === "") { //验证密码是否为空
                document.getElementById("password-box").innerHTML = "密码不能为空";
                document.getElementById("two_password-box").style.color = "red";
                return false;
            } else if (!reg.test(password.value)) { //正则不通过，格式不对
                document.getElementById("password-box").innerHTML = "密码必须包含 数字,英文,字符中的两种以上";
                document.getElementById("password-box").style.color = "red";
                console.log(password.value)
                return false;
            } else if (password.value.length < 8) { //密码不能小于8个字符
                document.getElementById("password-box").innerHTML = "密码不能小于8位字符";
                document.getElementById("password-box").style.color = "red";
                return false;
            } else {
                document.getElementById("password-box").innerHTML = "密码通过";
                document.getElementById("password-box").style.color = "green";
                console.log(password.value)
                return true;
            }
        }
        //二次密码校验
    var tow_password = document.getElementById('two_password');
    two_password.onblur = function() {
        //创建正则表达式
        var tow_password = document.getElementById('two_password');
        var password = document.getElementById('password').value;
        //检验密码是否设置正确
        var checkpass = document.getElementById("password-box").style.color;
        alert(checkpass)
            // if（ checkpass == "green"） {
            //     document.getElementById("two_password-box").innerHTML = "请输入正确的密码";
            //     document.getElementById("two_password-box").style.color = "red";
            // }
        var reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{0,64}$/;
        if (tow_password.value == password) { //验证密码是否一致
            document.getElementById("two_password-box").innerHTML = "密码一致";
            document.getElementById("two_password-box").style.color = "green";
            console.log(two_password.value)
            return true;
        } else {
            document.getElementById("two_password-box").innerHTML = "两次密码不一致";
            document.getElementById("two_password-box").style.color = "red";
            console.log(two_password.value)
            return false;
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
                //添加到本地存储
                var email_local = document.getElementById('email').value;
                var password_local = document.getElementById('password').value;
                localStorage.setItem('email', email_local);
                localStorage.setItem('password', password_local);
            } else {
                return false;
            }
        }
        //入场动画效果
    document.getElementsByClassName('sign-up-form')[0].style.opacity = 1;
}