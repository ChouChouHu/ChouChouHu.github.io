	$(document).ready(function(){
		$(".leave > .img").click(function(){
			$(this).find(".before").css("display", "none");
			$(this).find(".after").css("display", "block");
		});
	});