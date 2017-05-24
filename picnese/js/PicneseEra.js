

$(document).ready(function(){


	$("#one").click(function(){
		$("#pageOne").css("display", "block");
		$("#pageTwo, #pageThree, #pageFour").css("display", "none");

		$(".pageGrp .btn").each(function(){
			$(this).attr("class", "btn");
		})
		$(this).attr("class", "btn active");
	});

	$("#two").click(function(){
		$("#pageTwo").css("display", "block");
		$("#pageOne, #pageThree, #pageFour").css("display", "none");

		$(".pageGrp .btn").each(function(){
			$(this).attr("class", "btn");
		})
		$(this).attr("class", "btn active");
	});

	$("#three").click(function(){
		$("#pageThree").css("display", "block");
		$("#pageOne, #pageTwo, #pageFour").css("display", "none");

		$(".pageGrp .btn").each(function(){
			$(this).attr("class", "btn");
		})
		$(this).attr("class", "btn active");
	});

	$("#four").click(function(){
		$("#pageFour").css("display", "block");
		$("#pageOne, #pageTwo, #pageThree").css("display", "none");

		$(".pageGrp .btn").each(function(){
			$(this).attr("class", "btn");
		})
		$(this).attr("class", "btn active");
	});





});