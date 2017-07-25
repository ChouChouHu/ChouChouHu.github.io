

$(document).ready(function(){

	var height = 8454; // px
	var scroll_ms = 3500; // ms

	// auto scroll
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
	$(window).scroll(function () {
		var scroll = $(window).scrollTop() + $(window).height();

		// walk action
		if ($(window).scrollTop() % 120 > 60) {
			$(".one").css("display", "none");
			$(".two").css("display", "block");
		}
		else {
			$(".one").css("display", "block");
			$(".two").css("display", "none");
		}

		// walk path
		if (scroll > 7122) {
			$(".walk").css("left", ( ( 8454 - scroll ) / 22.3 ) + 23 + "vw");
			$(".walk").css("bottom", ( ( 8454 - scroll ) / 74 ) + 12 + "vw");
		}
		else if (scroll > 6888) {
			$(".walk").css("left", ( ( 7122 - scroll ) / 12.3 ) + 82.730941704 + "vw");
			$(".walk").css("bottom", 30 - ( ( 7122 - scroll ) / 12.5 ) + "vw");
		}
	});






	$(".background").click(function(){
		// alert($(window).scrollTop());
		// alert((( 7802 - $(window).scrollTop() ) / 23 ) + 23 + "vw");
		// alert($(window).height());
	});





});