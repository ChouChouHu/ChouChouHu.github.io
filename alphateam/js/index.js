

// function fuck(){
// 	alert("fuck");
// }

$(document).ready(function(){

	// ourworks 的點擊
	$(".each_project").click(function(){
		$(this).children(".ourworks_content").css("display", "block");
	})
	$(".black_mask").click(function(){
		$(".ourworks_content").fadeOut();
	})
	$(".each .close").click(function(){
		$(".ourworks_content").fadeOut();
	})


	$(".group").click(function(){
		if ($(this).hasClass("default")) {
			// 原本就藍，就不用再藍了
		}
		else {
			$(".group").removeClass("default");
			$(this).addClass("default");
			$(".each_project").removeClass("display");
		}

		if ($(this).hasClass("group_one")) {
			$(".project_govern").addClass("display")
		}
		if ($(this).hasClass("group_two")) {
			$(".project_teaching").addClass("display")
		}
		if ($(this).hasClass("group_three")) {
			$(".project_company").addClass("display")
		}
		if ($(this).hasClass("group_four")) {
			$(".project_book").addClass("display")
		}
	})

	// 閱讀更多，舊
	// var read = false;
	// $(".read_more").click(function(){
	// 	if (read) {
	// 		// alert("fuck");
	// 		$(".more_text").css("animation-name", "unread");
	// 		read = false;
	// 	}
	// 	else {
	// 		$(".more_text").css("animation-name", "read");
	// 		$(".more_text").css("display", "block");
	// 		read = true;
	// 	}
	// })


	$(".each_member").hover(function(){
		$(".each_member .display").css("display", "none");
		$(this).children(".display").css("display", "block");
	}, function(){
		// $(this).children(".display").css("display", "none");
	})

	$(window).scroll(function () {
		// alert($(window).scrollTop());
		if ($(window).scrollTop() < 5600) {
			$(".each_member .display").css("opacity", ($(window).scrollTop() - 5400) / 200);
		}
		if ($(window).scrollTop() < 5400) {
			$(".each_member .display").css("display", "none");
		}
	});

// var btn_or_not = false;
// var any_display = false
//
// 	$("#chou").click(function(){
// 		if (any_display) {
// 			$(".display .content").css("display", "none");
// 		}
// 		$(".display").css("animation-name", "shit");
// 		$(".display").css("display", "block");
// 		$("#chou_display").css("display", "block");
// 		btn_or_not = true;
// 		any_display = true;
// 	}
// )
//
// 	$("#echim").click(function(){
// 		if (any_display) {
// 			$(".display .content").css("display", "none");
// 		}
// 		$(".display").css("animation-name", "shit");
// 		$(".display").css("display", "block");
// 		$("#echim_display").css("display", "block");
// 		btn_or_not = true;
// 		any_display = true;
// 	}
// )
//
// 	$(".content").click(function(){
// 		btn_or_not = true;
// 	}
// )
//
// 	$("body").click(function(){
// 		if (btn_or_not == false) {
// 			$(".display").css("animation-name", "shit_reverse");
// 			// alert("fuck");
// 			// any_display = false;
// 		}
// 		btn_or_not = false;
// 	})

	$(".sound").click(function(){
		// alert("f");
		var boolie = $(".bgsound").prop("muted");
    	$(".bgsound").prop("muted",!boolie);

    	if ($(".bgsound").prop("muted") == true) {
    		alert("ture");
    	}
    	else {
    		alert("false");
    	}
	})

	var t = 1400; // delay
	var a = 70; // gap

	setTimeout(function(){
		$("#A").css("display", "none");
	}, t)
	setTimeout(function(){
		$("#l").css("display", "none");
	}, t + a*1)
	setTimeout(function(){
		$("#p").css("display", "none");
	}, t + a*2)
	setTimeout(function(){
		$("#h").css("display", "none");
	}, t + a*3)
	setTimeout(function(){
		$("#a").css("display", "none");
	}, t + a*4)
	setTimeout(function(){
		$("#T").css("display", "none");
	}, t + a*5)
	setTimeout(function(){
		$("#e").css("display", "none");
	}, t + a*6)
	setTimeout(function(){
		$("#a_2").css("display", "none");
	}, t + a*7)
	setTimeout(function(){
		$("#m").css("display", "none");
	}, t + a*8)
	setTimeout(function(){
		$("#_").css("animation-name", "slash");
	}, t + a*9)

});
