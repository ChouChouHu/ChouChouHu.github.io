

$(document).ready(function(){

	$(".burger").click(function(){
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

});