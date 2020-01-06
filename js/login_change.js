window.onload = function () {
    var flag = false;
    //邮箱验证
    var email = document.getElementById("username");
    flag = email.onblur = function () {
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

    function getUser() {
        console.log($('#form').serializeJSON());
        console.log(JSON.stringify($('#form').serializeJSON()));
        return JSON.stringify($('#form').serializeJSON());
    }

    document.getElementById("login").onclick = function check() {
        //创建判断
        if (flag) {
            //AJAX部分
            var data = getUser();
            $.ajax({
                type: "POST",
                url: "api/regist",
                data: data,
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    alert(data.message);
                },
                statusCode: {
                    403: function () {
                        document.getElementById("password-box").innerHTML = "<img src='img/error.png'>  邮箱或密码错误";
                        document.getElementById("password-box").style.color = "red";
                        flag = false;
                    }
                }
            });
        } else {
            return false;
        }
    }
    entrance();
}