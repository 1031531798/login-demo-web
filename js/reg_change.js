window.onload = function () {
    //邮箱验证
    var email = document.getElementById("username");
    email.onblur = function () {
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
            document.getElementById("email-box").innerHTML = "";
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
            request.addEventListener('load', function () {
                console.log('成功')
            })
            request.addEventListener('error', function () {
                console.log('失败')
            })
            request.open('POST', '/api/login/userLogin', true);
            request.send(fd);
        } else {
            return false;
        }
    }
    entrance();
}