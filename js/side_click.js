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
	var top = function () {};
	//获取滚动条位置
	$(window).scroll(function () {
		//保存滚动条位置
		var dt = top.prototype.y;
		//获取滚动条位置
		top.prototype.y = $(window).scrollTop();
		//比较两次位置判断上滑还是下滑
		if (dt > top.prototype.y) {
			$('#header').stop();
			$('#header').slideDown();
		} else {
			$('#header').stop();
			$('#header').slideUp();
		}
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
	})
	$('.side').click(style_change)
}