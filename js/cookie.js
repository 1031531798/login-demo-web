/**
 * 保存token
 * 
 */
function saveCookie(token) {
    $.cookie('token', token, {
        expires: 7
    });
}
//保存用户名
function saveUserName() {
    var text = $("#user-name").click(function () {
        var name = $("#user-name").text();
        localStorage.setItem("name", name);
    })
}