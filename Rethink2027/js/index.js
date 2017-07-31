

$(document).ready(function(){

	var height = 8454; // total height (px)
	var scroll_ms = 0; // scroll pass (ms)

	// auto scroll in scroll_ms (var)
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $body.animate({
        scrollTop: height - $(window).height()
    }, scroll_ms, 'easeInOutQuad');

    setTimeout(function(){
    	$(".walk").fadeIn();
    }, scroll_ms);


	// window height = 652
	// 7802 23 13
	// 6470 81 31
	// 6236 100 11

	// 把 vh vw 系統改掉！！！！！！！！

	$(window).scroll(function () {
		var adjust = ($(window).width() / 1280);
		// var scroll = $(window).scrollTop() + ( $(window).height() * adjust );
		var scrollBtm = $(document).height() - $(window).height() - $(window).scrollTop()

		// walk action
		if ($(window).scrollTop() % 120 > 60) {
			$(".one").css("display", "none");
			$(".two").css("display", "block");
		}
		else {
			$(".one").css("display", "block");
			$(".two").css("display", "none");
		}

		// // walk path
		// if ($(window).scrollTop() > 6470 * adjust) {
		// 	// 6470 (second stop)
		// 	$(".walk").css("left", ( ( 8454 * adjust - scroll ) / 22.3 ) + 23 + "vw");
		// 	$(".walk").css("bottom", ( ( 8454 * adjust - scroll ) / 74 ) + 12 + "vw");
		// 	// 8454 = 7802(first stop) + 652 = real height
		// }
		// else if ($(window).scrollTop() > 6236 * adjust) {
		// 	$(".walk").css("left", ( ( 7122 * adjust - scroll ) / 12.3 ) + 82.730941704 + "vw");
		// 	$(".walk").css("bottom", 30 - ( ( 7122 * adjust - scroll ) / 12.5 ) + "vw");
		// }

		// walk path
		if (scrollBtm > 1322) {
			$(".walk").css("left", 1060 * adjust + ( scrollBtm - 1332 * adjust ) * ( 220 / 200 ) + "px");
			$(".walk").css("top", 6660 * adjust + "px"); 
		}
		else if (scrollBtm > 0){
			$(".walk").css("left", 290 * adjust + scrollBtm * ( 770 / 1332 ) + "px");
			$(".walk").css("top", 8220 * adjust - scrollBtm * ( 1560 / 1332 ) + "px");
		}
	});




	$(".background").click(function(){
		alert($(document).height() - $(window).height() - $(window).scrollTop());
		// alert((( 7802 - $(window).scrollTop() ) / 23 ) + 23 + "vw");
		// alert($(window).width());
	});







});