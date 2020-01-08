window.onload = function () {
    function getUser() {
        // console.log($('#login_form').serializeJSON());
        // console.log(JSON.stringify($('#login_form').serializeJSON()));
        return JSON.stringify($('#login_form').serializeJSON());
    }

    document.getElementById("login").onclick = function login_check() {
            //AJAX部分
            var data = getUser();
            console.log(data)
            // $.ajax({
            //     type: "POST",
            //     url: "api/login/userLogin",
            //     data: data,
            //     dataType: "json",
            //     contentType: "application/json",
            //     success: function (data) {
            //         alert(data.message);
            //     },
            //     statusCode: {
            //         403: function () {
            //             document.getElementById("password-box").innerHTML = "<img src='img/error.png'>  邮箱或密码错误";
            //             document.getElementById("password-box").style.color = "red";
            //         }
            //     }
            // });//AJAX部分
                var request = new XMLHttpRequest();
                var form = document.getElementById('login_form');
                var fd = new FormData(form);
                request.addEventListener('load', function() {
                    console.log('成功')
                })
                request.addEventListener('error', function() {
                    console.log('失败')
                })
                request.open('POST', 'api/login/userLogin', true);
                request.send(fd);
                
        } 
        entrance();
    }
   
