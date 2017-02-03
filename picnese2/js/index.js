

$(document).ready(function(){

	n = $(window).height();
	if( n > 480 ) {
		$(".tree").css("transform", "scale(" + ( 1 - ( ( 652 - n ) / 840 ) ) + ")");
		$(".tree").css("height", ( 100 + ( (652 - n) / 10.7) )+ "vh");
		$(".tree").css("bottom", ( (n - 652) / 20) + "vh");
		$(".tree").css("position", "absolute");
	}
	else {
		$(".tree").removeAttr("style");
		$(".tree").css("position", "initial");
	}

	$(window).resize(function() {
        n = $(window).height();
        // alert(n);
        if( n > 480 ) {
	      	$(".tree").css("transform", "scale(" + ( 1 - ( ( 652 - n ) / 840 ) ) + ")");
	      	$(".tree").css("height", ( 100 + ( (652 - n) / 10.7) )+ "vh");
	      	$(".tree").css("bottom", ( (n - 652) / 20) + "vh");
	      	$(".tree").css("position", "absolute");
	    }
		else {
			$(".tree").removeAttr("style");
			$(".tree").css("position", "initial");
		}
    });

	// fancybox
	// $(".treetop").click(function(){
	// 	$(".chouWindowContent iframe").attr("src", "PicneseEra.html");
	// 	$(".chouWindow").fadeIn();
	// });

	// $(".cooperation").click(function(){
	// 	$(".chouWindowContent iframe").attr("src", "cooperation.html");
	// 	$(".chouWindow").fadeIn();
	// });

	// $(".guess").click(function(){
	// 	$(".chouWindowContent iframe").attr("src", "guess.html");
	// 	$(".chouWindow").fadeIn();
	// });

	// $(".tableGame").click(function(){
	// 	$(".chouWindowContent iframe").attr("src", "tableGame.html");
	// 	$(".chouWindow").fadeIn();
	// });

	// $(".chouWindow").click(function(){
	// 	$(this).css("display", "none");
	// });
});

