

function rightWalk() {
	// walk action
	$(".three").css("display", "none");
	$(".four").css("display", "none");
	if ($(window).scrollTop() % 120 > 60) {
		$(".one").css("display", "none");
		$(".two").css("display", "block");
	}
	else {
		$(".one").css("display", "block");
		$(".two").css("display", "none");
	}
}

function leftWalk() {
	// walk action
	$(".one").css("display", "none");
	$(".two").css("display", "none");
	if ($(window).scrollTop() % 120 > 60) {
		$(".three").css("display", "none");
		$(".four").css("display", "block");
	}
	else {
		$(".three").css("display", "block");
		$(".four").css("display", "none");
	}
}

$(document).ready(function(){

	var height = 8454; // total height (px)
	var scroll_ms = 3500; // scroll pass (ms)

	// auto scroll in scroll_ms (var)
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $body.animate({
        scrollTop: height - $(window).height()
    }, scroll_ms, 'easeInOutQuad');

    setTimeout(function(){
    	$(".walk").fadeIn();
    	// change to walk in screen
    }, scroll_ms);


	$(window).scroll(function () {
		var adjust = ($(window).width() / 1280);
		var scrollBtm = $(document).height() - $(window).height() - $(window).scrollTop()

		// walk path
		// num == scroll interval static
		// num_top, num_left == position
		var one = 1360;
		var one_top = 8200;
		var one_left = 230;
		var two = 475;
		var two_top = 6530;
		var two_left = 1040;
		var three = 1360;
		var three_top = 6450;
		var three_left = 320;
		// var 


		if (scrollBtm > ( one + two ) * adjust) {
			$(".walk").css("top", three_top * adjust - ( scrollBtm - ( one + two ) * adjust ) * ( 1680 / three ) + "px"); 
			$(".walk").css("left", three_left * adjust + ( scrollBtm - ( one + two ) * adjust ) * ( 820 / three ) + "px");
			rightWalk();
		}
		else if (scrollBtm > one * adjust) {
			$(".walk").css("top", two_top * adjust - ( scrollBtm - one * adjust ) * ( (two_top - three_top) / two ) + "px"); 
			$(".walk").css("left", two_left * adjust - ( scrollBtm - one * adjust ) * ( (two_left - three_left) / two ) + "px");
			leftWalk();
		}
		else {
			$(".walk").css("top", one_top * adjust - scrollBtm * ( (one_top - two_top) / one ) + "px");
			$(".walk").css("left", one_left * adjust - scrollBtm * ( (one_left - two_left) / one ) + "px");
			rightWalk();
		}
	});




	$(".background").click(function(){
		// alert($(document).height() - $(window).height() - $(window).scrollTop());
		// alert((( 7802 - $(window).scrollTop() ) / 23 ) + 23 + "vw");
		// alert($(window).width());
	});

});