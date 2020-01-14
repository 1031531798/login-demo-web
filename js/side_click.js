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
	//获取滚动条位置为以后侧栏定位做准备
	$(window).scroll(function () {
		var top = $(window).scrollTop();
		console.log(top)
	});
	$('.side').click(style_change)
}