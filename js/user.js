function getUserName() {
  var name = localStorage.getItem("name");
  $('#ui_name').text(name)
  console.log(name)
}

function userInfo() {
  var layer = layui.layer; //layer初始化 
  $('#ui_grxx').on('click', function () {
    //获取宽度

    //获取高度
    layer.open({
      type: 2,
      title: '个人信息',
      maxmin: true,
      offset: ['15%', "10%"],//相对定位
      shadeClose: true, //点击遮罩关闭层
      area: ['100%', '100%'],
      content: 'index.html'
    });
  });
}

function head_img(){
  let ww = $('aside').css('width');
  let rr = parseInt(ww)/2;
  $('#user_head').css('width',ww);
  $('#user_head').css('height',ww);
  $('#user_head').css('border-radius',rr);
  $('body').css('height',$(window).height()+'px');
}

$(window).resize(head_img);