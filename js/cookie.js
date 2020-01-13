function autoUesrname (){
    document.getElementById('save').onclick = function(){
        //是否保存用户名
        var saveUser = $('#save').prop('checked');
        if(saveUser){
             //获取用户名
            var username = document.getElementById('username').value;
            var userCookie = document.cookie = "username="+username; "expires=7";
        }
    }
}
//勾选保存用户名
function setUser (){
    if(document.cookie){
        //获取cookie值
        var username = document.cookie;
        //取得=的下标
        var frist = username.lastIndexOf("=");
        //获得用户名值
        var data = username.substring(frist + 1,username.length);
        //设置用户名
        $('#username').val(data);
        //勾选保存用户名
        $('#save').attr('checked','checked');
    }else{
        return false;
    }
}
function autoLogin(){
    document.getElementById('auto').onclick = function (){
        var autoCondition = $('#auto').prop('checked');
        if(autoCondition){
            var autoCookie = document.cookie = autoCondition; "expires=7";
        }
    }
}
//保存token
function cookies (tokens){
    var tokenCookie = document.cookie = "token="+tokens; "expires=7";
}