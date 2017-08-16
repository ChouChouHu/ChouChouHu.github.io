

$(document).ready(function(){

	// burger
	$(".burger, .walk").click(function(){
		$(".menu").fadeIn()
	});

	$(".final").click(function(){
		$(".menu").fadeOut();
	});

	$(".bar .proposal").hover(function(){
		$(".bar .proposal .pulse").css("display", "block");
	}, function(){
		$(".bar .proposal .pulse").fadeOut();
	})

	// menu

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



	// activities

	$(window).scroll(function () {
		if ($(window).scrollTop() > 500) {
			$(".elevator").fadeIn();
		}
		else {
			$(".elevator").fadeOut();	
		}
	})

	$(".elevator").click(function(){
	    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	    $body.animate({
	        scrollTop: 0
	    }, 700, 'easeInOutQuad');
	})

	$(".activityBtnGrp #actBtn").click(function(){
		$(".activities").css("display", "block");
		$(".time").css("display", "none");
		$(".QandA").css("display", "none");
		$(".activityBtnGrp .btn").removeClass("active");
		$(this).addClass("active");
	})

	$(".activityBtnGrp #timeBtn").click(function(){
		$(".activities").css("display", "none");
		$(".time").css("display", "block");
		$(".QandA").css("display", "none");
		$(".activityBtnGrp .btn").removeClass("active");
		$(this).addClass("active");
	})

	$(".activityBtnGrp #QABtn").click(function(){
		$(".activities").css("display", "none");
		$(".time").css("display", "none");
		$(".QandA").css("display", "block");
		$(".activityBtnGrp .btn").removeClass("active");
		$(this).addClass("active");
	})

	// Q&A
	$(".Q").click(function(){
		$(".A").css("display", "none");
		$(this).children(".A").css("display", "block");
		$(".Q .topic").removeClass("yellowTopic");
		$(this).children(".topic").addClass("yellowTopic");
		// children for one layer; find for all child
	})

	// partner

	$(".trackOneBtn").click(function(){
		$(".track").css("display", "none");
		$(".trackOne").css("display", "block");
		// $(".trackOne").fadeIn();
	})
	$(".trackTwoBtn").click(function(){
		$(".track").css("display", "none");
		$(".trackTwo").css("display", "block");
	})
	$(".trackThreeBtn").click(function(){
		$(".track").css("display", "none");
		$(".trackThree").css("display", "block");
	})

	$(".Xone").click(function(){
		$(".Xprofile").css("display", "none");
		$(".XPone").css("display", "block");

		$(".X").removeClass("active");
		$(this).addClass("active");
	})
	$(".Xtwo").click(function(){
		$(".Xprofile").css("display", "none");
		$(".XPtwo").css("display", "block");

		$(".X").removeClass("active");
		$(this).addClass("active");
	})
	$(".Xthree").click(function(){
		$(".Xprofile").css("display", "none");
		$(".XPthree").css("display", "block");

		$(".X").removeClass("active");
		$(this).addClass("active");
	})
	$(".Xfour").click(function(){
		$(".Xprofile").css("display", "none");
		$(".XPfour").css("display", "block");

		$(".X").removeClass("active");
		$(this).addClass("active");
	})
	$(".Xfive").click(function(){
		$(".Xprofile").css("display", "none");
		$(".XPfive").css("display", "block");

		$(".X").removeClass("active");
		$(this).addClass("active");
	})

	$(".objectOne").hover(function(){
		$(".ansOne").css("display", "block");
	}, function(){
		$(".ansOne").css("display", "none");
	})
	$(".objectTwo").hover(function(){
		$(".ansTwo").css("display", "block");
	}, function(){
		$(".ansTwo").css("display", "none");
	})
	$(".objectThree").hover(function(){
		$(".ansThree").css("display", "block");
	}, function(){
		$(".ansThree").css("display", "none");
	})
	$(".objectFour").hover(function(){
		$(".ansFour").css("display", "block");
	}, function(){
		$(".ansFour").css("display", "none");
	})
	$(".objectFive").hover(function(){
		$(".ansFive").css("display", "block");
	}, function(){
		$(".ansFive").css("display", "none");
	})
	$(".objectSix").hover(function(){
		$(".ansSix").css("display", "block");
	}, function(){
		$(".ansSix").css("display", "none");
	})

});





