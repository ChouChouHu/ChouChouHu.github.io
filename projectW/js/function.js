

$(window).scroll(function () {
    $(".slide").css({"opacity": 1-(($(window).scrollTop()-360)/100)});
});

$(document).ready(function(){ 

	// slide
	$(".life_design").click(function(){
	    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	    $body.animate({
	        scrollTop: 3250 * ($(window).width() / 1280)
	    }, 1500);
	})

	// hover
	$(".draw .control_one").hover(function(){
		$(".draw img").css("display", "none");
		$(".second_sec .text").css("display", "none");
		$(".draw .one").css("display", "block");
		$(".second_sec #text_one").css("display", "block");
	}, function(){
		;
	})

	$(".draw .control_two").hover(function(){
		$(".draw img").css("display", "none");
		$(".second_sec .text").css("display", "none");
		$(".draw .two").css("display", "block");
		$(".second_sec #text_two").css("display", "block");
	}, function(){
		;
	})

	$(".draw .control_three").hover(function(){
		$(".draw img").css("display", "none");
		$(".second_sec .text").css("display", "none");
		$(".draw .three").css("display", "block");
		$(".second_sec #text_three").css("display", "block");
	}, function(){
		;
	})



});