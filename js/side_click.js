function side_click() {
  //获取滚动条位置
  $(window).scroll(function () {
    header_show();
    side_foucs();
  })
  //避免刷新页面后无法直接显示回到顶部按钮
  if ($(window).scrollTop() > 100) {
    $('#move_top').stop();
    //下滑显示
    $('#move_top').slideDown();
  };
  $('.side').click(function () {
    id = "#" + this.id;
    style_change(id);
  });
}
//header和回到顶部下滑
function header_show() {
  var top = function () {};
  //保存滚动条位置
  var dt = top.prototype.y; //设置第一次高度的值
  //获取滚动条位置
  top.prototype.y = $(window).scrollTop(); //设置第二次高度的值
  //比较两次位置判断上滑还是下滑
  if (dt > top.prototype.y) {
    $('#header').stop();
    $('#header').slideDown();
  } else {
    $('#header').stop();
    $('#header').slideUp();
  }
  //设置回到顶部
  if (top.prototype.y > 100) {
    //取消动画滞后
    $('#move_top').stop();
    //下滑显示
    $('#move_top').slideDown();
  } else {
    //取消动画滞后
    $('#move_top').stop();
    //上滑隐藏
    $('#move_top').slideUp();
  }
}
//加上样式
function style_change(option) {
  style_restore(".side");
  $(option).css("background", "rgb(255,127,80)");
  $(option).css("fontWeight", "bolder");
}
//设置将样式清空
function style_restore(option) {
  $(option).css('background', '')
  $(option).css('fontWeight', '')
}
//设置跟随页面位置显示侧边栏选中状态
function side_foucs() {
  let top = document.documentElement.scrollTop || document.body.scrollTop;
  //获取各个内容的位置
  let side1 = 20;
  let side2 = 480;
  let side3 = 983;
  let side4 = 1424;
  let side5 = 1700;
  // let side6 = $("#side6").offset().top;//页面长度不够暂时不考虑
  //判断当前页面处于哪个内容
  if (top > side1 && top < side2) {
    style_change("#side1");
  } else if (top > side2 && top < side3) {
    style_change("#side2");
  } else if (top > side3 && top < side4) {
    style_change("#side3");
  } else if (top > side4 && top < side5) {
    style_change("#side4");
  } else if (top > side5 && top < 2000) {
    style_change("#side5");
  }
}

//封装页面导航动画
function setNavAnimation() {
  function navAnimation(obj) {
    var pos = $("#" + obj).offset().top;
    console.log(pos);
    $('html,body').animate({
      scrollTop: pos - 30
    }, "normal");
  };
  //为导航栏绑定跳转动画
  $('#side1').click(function () {
    navAnimation("commodity_rmtj");
  });
  $('#side2').click(function () {
    navAnimation("commodity_sgyp");
  });
  $('#side3').click(function () {
    navAnimation("commodity_jmcq");
  });
  $('#side4').click(function () {
    navAnimation("commodity_mgyp");
  });
  $('#side5').click(function () {
    navAnimation("commodity_dszp");
  });
  $('#side6').click(function () {
    navAnimation("footer");
  });
  $('#move_top').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, "normal");
  });
}
