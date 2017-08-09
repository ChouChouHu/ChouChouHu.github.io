

$(document).ready(function(){

	// burger
	$(".burger, .walk").click(function(){
		$(".menu").fadeIn()
	});

	$(".final").click(function(){
		$(".menu").fadeOut();
	});


	// Q&A
	$(".Q").click(function(){
		$(".A").css("display", "none");
		$(this).children(".A").css("display", "block");
		// children for one layer; find for all child
	})

	$("#btnNews").hover(function(){
		$("#picNews").css("display", "block");
	}, function(){
		$("#picNews").css("display", "none");
	})
	$("#btnAbout").hover(function(){
		$("#picAbout").css("display", "block");
	}, function(){
		$("#picAbout").css("display", "none");
	})
	$("#btnActivity").hover(function(){
		$("#picActivity").css("display", "block");
	}, function(){
		$("#picActivity").css("display", "none");
	})
	$("#btnWall").hover(function(){
		$("#picWall").css("display", "block");
	}, function(){
		$("#picWall").css("display", "none");
	})
	$("#btnPartner").hover(function(){
		$("#picPartner").css("display", "block");
	}, function(){
		$("#picPartner").css("display", "none");
	})
	$("#btnDaily").hover(function(){
		$("#picDaily").css("display", "block");
	}, function(){
		$("#picDaily").css("display", "none");
	})


});