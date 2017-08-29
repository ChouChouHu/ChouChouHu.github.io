function timeCount(ms, s){

	$("#ms").text(ms);
	$("#s").text(s);
	
	if (ms < 100) {
		ms++;
		setTimeout("timeCount(" + ms + ", " + s + ")", 10);
	}
	else {
		ms = 0;
		s++;
		setTimeout(timeCount(ms, s), 10);
	}
	
}

$(document).ready(function(){ 

	// $("#one_one").click(function(){
	// 	$(".chooseWord").css("display", "block")
	// })

	// $(".chooseWord #one_one_1").click(function(){
	// 	$(".possibleWord").css("display", "none");
	// 	$("#one_one_one").css("display", "block");
	// 	$(".chooseWord").css("display", "none");
	// 	// $(".chooseWord .eachWord").removeClass("active");
	// 	$(this).addClass("active");
	// })

	// $(".chooseWord #one_one_2").click(function(){
	// 	$(".possibleWord").css("display", "none");
	// 	$("#one_one_two").css("display", "block");
	// 	// $(".chooseWord .eachWord").removeClass("active");
	// 	$(this).addClass("active");
	// })


	// $(".possibleWord .eachWord").click(function(){
	// 	$(".chooseWord").css("display", "none");
	// 	$(".possibleWord").css("display", "none");
	// })

	// $("#answer").click(function(){
	// 	$(".input input").attr("value", "佬");
	// 	$(".chooseWord .eachWord").removeClass("active");
	// 	// alert("d");
	// })

	// $(".input input").click(function(){
	// 	$(".keyBoard").css("display", "block");
	// })


	var active = false;

	$("#Aone").click(function(){
		// $(this).css("opacity", "0");

		if (active) {
			$(".window").css("display", "block");
			$("body").css("cursor", "default");
			active = false;
			// alert("f");
		}
		else {
			$(this).css("border-color", "transparent");
			$(this).css("font-size", "4vw");
			$(this).text("listen");

			$(".Q").css("display", "none");
			$("#one").css("display", "block");
		}

	})

	$("#Atwo").click(function(){
		// $(this).css("opacity", "0");

		$(this).css("border-color", "transparent");
		$(this).css("font-size", "4vw");
		$(this).text("ear");

		$(".Q").css("display", "none");
		$("#two").css("display", "block");
	})

	$("#Athree").click(function(){
		// $(this).css("opacity", "0");

		$(this).css("border-color", "transparent");
		$(this).css("font-size", "4vw");
		$(this).text("mouth");

		$(".Q").css("display", "none");
		$("#three").css("display", "block");
	})

	$(".function").click(function(){
		active = true;
		$("body").css("cursor", "help");
		// alert("f");
	})

	$(".window").click(function(){
		$(this).css("display", "none");
	})

	timeCount(0, 0);

});


