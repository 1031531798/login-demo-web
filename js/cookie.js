/**
 * 保存token
 * 
 */
function saveCookie(token) {
    $.cookie('token', token, {
        expires: 7
    });
}