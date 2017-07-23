

$(document).ready(function(){

	$(".burger, .walk").click(function(){
		$(".menu").fadeIn()
	});

	$(".final").click(function(){
		$(".menu").fadeOut();
	});

	$(".Q").click(function(){
		$(".A").css("display", "none");
		$(this).children(".A").css("display", "block");
		// children for one layer; find for all child
	})


	setInterval(function(){
	if ($(window).scrollTop() % 100 > 50) {
		$(".one").css("display", "none");
		$(".two").css("display", "block");
	}
	else {
		$(".one").css("display", "block");
		$(".two").css("display", "none");
	}

	}, 10);

});