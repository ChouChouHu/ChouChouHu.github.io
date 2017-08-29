
var moreClick = false;
var clickContent = false;



$(document).ready(function(){ 

	// before log in
	$(".more").click(function(){
		if(!moreClick) {
			$(".moreClick").css("display", "block");
			// $(".searchBar").css("margin-top", "170px");
			moreClick = true;
		}
		else {
			$(".moreClick").css("display", "none");
			// $(".searchBar").css("margin-top", "80px");
			moreClick = false;
		}
	})

	// after log in
	$(".more").click(function(){
		$(".menu").css("display", "block");
	})

	$(".menuContent").click(function(){
		clickContent = true;
	})

	$(".threeLine").click(function(){
		$(".menu").css("display", "none");
	})

	$(".menu").click(function(){
		if(!clickContent)
			$(this).css("display", "none");

		clickContent = false;
	})


});