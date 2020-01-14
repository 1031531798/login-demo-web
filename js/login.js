//获取cookie中的token
var token = $.cookie('token');
if (token != null) {
    window.location.href = "index.html";
} else {
    $("#login").click(function () {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'api/login/userLogin', true);
        xhr.send(new FormData($("#login_form")[0]));
        // Track the state changes of the request.
        xhr.onreadystatechange = function () {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    //判断是否勾选保存用户名
                    autoUesrname();
                    var result = JSON.parse(xhr.responseText);
                    token = result.token;
                    //保存token
                    saveCookie(token)
                    //登录成功！跳转到主页
                    window.location.href = "index.html";
                } else {
                    alert('Error: ' + xhr.message); // An error occurred during the request.
                }
            }
        }
    })
}