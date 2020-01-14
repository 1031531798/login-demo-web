function autoUesrname() {
    document.getElementById('save').onclick = function () {
        //是否保存用户名
        var saveUser = $('#save').prop('checked');
        if (saveUser) {
            //获取用户名
            var username = document.getElementById('username').value;
            var userCookie = document.cookie = "username=" + username;
            "expires=7";
        }
    }
}

function autoLogin() {
    document.getElementById('auto').onclick = function () {
        var autoCondition = $('#auto').prop('checked');
        if (autoCondition) {
            var autoCookie = document.cookie = autoCondition;
            "expires=7";
        }
    }
}

/**
 * 保存token
 * 
 */
function saveCookie(token) {
    $.cookie('token', token, {
        expires: 7
    });
}

/**
 * 登出以消除token
 * 
 */
$('#logout a').click(function () {

    $.cookie("token", "", {
        expires: -1
    });
})