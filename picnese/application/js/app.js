
$(document).ready(function(){ 

	$("#Wone").click(function(){
		$(this).css("display", "none");
		$("#Wtwo").css("display", "block");
	})

	$("#Wtwo").click(function(){
		$(this).css("display", "none");
		$("#Wthree").css("display", "block");
	})

	$("#Wthree").click(function(){
		$(this).css("display", "none");
		$("#Wfour").css("display", "block");
	})

	$("#Wfour").click(function(){
		$(this).css("display", "none");
		$("#Wfive").css("display", "block");
	})

	$(".up").click(function(){
		// alert("fuck");
		$(".wordBackground").animate({marginTop: 0}, 1000, 'easeInOutQuad');
		$("#treeTwo").css("display", "none");
		$("#treeThree").css("display", "block");
	})

	$(".down").click(function(){
		// alert("fuck");
		$(".wordBackground").animate({marginTop: -100+"vh"}, 1000, 'easeInOutQuad');
	})

	$("#treeOne").click(function(){
		$("#treeOne").css("display", "none");
		$("#treeTwo").css("display", "block");
	})

	$(".switch").click(function(){
		// alert("f");
		$(".background").each(function(){
			// alert("f");
			if($(this).hasClass("default")) {
				$(this).removeClass("default");

			}
			else {
				$(this).addClass("default");
			}
		})
	})

	$(".baoDiv").click(function(){
		$(".background").each(function(){
	
			if($(this).hasClass("default")) {
				$(this).removeClass("default");

			}
			else {
				$(this).addClass("default");
			}
		})
	})


});


