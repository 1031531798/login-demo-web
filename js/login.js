function login() {
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
                    var result = JSON.parse(xhr.responseText)
                    alert(result.msg); // 'This is the output.'
                } else {
                    alert('Error: ' + xhr.status); // An error occurred during the request.
                }
            }
        }
    })
    //写入用户名
    setUser ();
}