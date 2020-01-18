function side_click() {
	function style_restore() {
		$(".side").css('background', '')
		$(".side").css('fontWeight', '')
	}

	function style_change() {
		style_restore();
		$('#' + this.id).css("background", "rgb(255,127,80)")
		$('#' + this.id).css("fontWeight", "bolder")
	}
	var top = function (){};
	//获取滚动条位置为以后侧栏定位做准备
	$(window).scroll(function () {
		var dt = top.prototype.y;
		console.log(dt)
		top.prototype.y = $(window).scrollTop();
		console.log(top.prototype.y)
		if(dt > top.prototype.y){
			$('#header').slideDown();
		}else{
			$('#header').slideUp();
		}
		if(top.prototype.y > 100){
			//取消动画滞后
			$('#move_top').stop();
			//下滑显示
			$('#move_top').slideDown();
		}else{
			//取消动画滞后
			$('#move_top').stop();
			//上滑隐藏
			$('#move_top').slideUp();
		}
	})
	$('.side').click(style_change)
}