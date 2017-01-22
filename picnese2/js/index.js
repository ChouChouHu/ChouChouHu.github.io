

$(document).ready(function(){

	$(".treetop").click(function(){
		$(".chouWindowContent iframe").attr("src", "PicneseEra.html");
		$(".chouWindow").fadeIn();
	});

	$(".cooperation").click(function(){
		$(".chouWindowContent iframe").attr("src", "cooperation.html");
		$(".chouWindow").fadeIn();
	});

	$(".guess").click(function(){
		$(".chouWindowContent iframe").attr("src", "guess.html");
		$(".chouWindow").fadeIn();
	});

	$(".tableGame").click(function(){
		$(".chouWindowContent iframe").attr("src", "tableGame.html");
		$(".chouWindow").fadeIn();
	});

	$(".chouWindow").click(function(){
		$(this).css("display", "none");
	});
});

