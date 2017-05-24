var black = true;

$(document).ready(function(){


	$(".letterbox").click(function(){
		$(".chouWindow").fadeIn();
	});

	$(".chouWindowContent").click(function(){
		$(this).css("display", "block");
		black = false;
	});

	$(".chouWindow").click(function(){
		if(black){
			$(this).css("display", "none");
		}
		black = true;
	});

});