

$(document).ready(function(){ 

	$(".secondLayer .topic a").click(function(){
		if ($(this).attr("id") == "unactive") {

			$(".secondLayer .topic a").each(function(){
				$(this).attr("id", "unactive");
			});

			$(this).removeAttr("id");
			var text = $(this).text()

			if(text == "文字解釋") {
				$(".explanation").css("display", "none");
				$("#exOne").css("display", "block");
				// alert("a");
			}
			if(text == "造 詞") {
				$(".explanation").css("display", "none");
				$("#exTwo").css("display", "block");
				// alert("b");
			}
			if(text == "各家解釋") {
				$(".explanation").css("display", "none");
				$("#exThree").css("display", "block");
				// alert("c");
			}

		};
	});

});


