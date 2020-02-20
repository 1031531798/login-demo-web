function token() {
    var token = $.cookie('token');
    if (token != null || token != undefined) {
        $("#welcome").show(userDetails(token));
        $("#sigin").hide();
        $("#outUser").click(function () {
            $.ajax({
                url: "/api/login/userLogout",
                type: "GET",
                dataType: "text",
                async: false,
                headers: {
                    "Authorization": token
                },
                success: function (msg) {
                    var result = JSON.parse(msg);
                    if (result.code == "200") {
                        $.cookie("token", "", {
                            expires: -1
                        });
                        window.location.href = "../login.html";
                    }
                }
            })
        })
    } else {
        $("#welcome").hide();
        $("#sigin").show();
    }


    function userDetails(token) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'api/user/details', true);
        xhr.setRequestHeader("Authorization", token)
        xhr.send();
        // Track the state changes of the request.
        xhr.onreadystatechange = function () {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    var result = JSON.parse(xhr.responseText);
                    if(result.code == "401"){
                        $.cookie("token", "", {
                            expires: -1
                        });
                        window.location.href = "../login.html";
                    }
                    $('#user-name').html(result.result.name);
                    console.log(xhr.status)
                }
            }
        }
    }
}