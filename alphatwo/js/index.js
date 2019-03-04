

// function fuck(){
// 	alert("fuck");
// }

$(document).ready(function(){

	$(".group").click(function(){
		if ($(this).hasClass("default")) {

		}
		else {
			$(".group").removeClass("default");
			$(this).addClass("default");
			$(".project").removeClass("display");
		}

		if ($(this).hasClass("group_one")) {
			$(".project_one").addClass("display")
		}
		if ($(this).hasClass("group_two")) {
			$(".project_two").addClass("display")
		}
		if ($(this).hasClass("group_three")) {
			$(".project_three").addClass("display")
		}
	})


	$(".read_more").click(function(){
		$(".more_text").css("display", "block");
		// alert("fuck")
	})

	// $(".chou").click(fuck());
var btn_or_not = false;

	$("#chou").click(function(){
		$("#chou_display").css("animation-name", "shit");
		$("#chou_display").css("display", "block");
		btn_or_not = true;
	}
)

$(".content").click(function(){
	btn_or_not = true;
}
)

	$("body").click(function(){
		if (btn_or_not == false) {
			$("#chou_display").css("animation-name", "shit_reverse");
			// alert("fuck");
		}
		btn_or_not = false;
	})

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

	var t = 800; // delay
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
