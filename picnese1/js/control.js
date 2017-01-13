
var watchWall = false;
var watchDialog = false;
var vertical;
var horizontal;


$(document).ready(function(){ 

	/* wall hover
	$(".wallImg").hover(function(){
		if (!watchWall) {
			$(this).addClass("enlarge");
			$(this).removeClass("prompt");
			$(this).css("animation-name", "enlarge");
			$(this).css("opacity", "1");
		}
	}, function(){
		$(this).removeClass("enlarge");
		$(this).addClass("prompt");
		$(this).css("animation-name", "prompt");
	});
	*/


	/* mouse control */

	//$(".container").click(function(){ alert(tempX + "," + tempY); });
	setInterval(function(){
		/* total transform by mouse */
		/*
		if (!watchWall & !watchDialog) {
			vertical = Math.abs(tempY - 325) ;
			horizontal = Math.abs(tempY - 325) ;
			//$(".container").css("transform", "scale("+(1 + vertical / 6250)+") perspective(" + vertical / 105 + "em) rotateY(" + (tempX - 600) / 20000 + "deg)");
			$(".container").css("transform", "scale("+(1 + vertical / 6250)+")");
			$(".container").css("margin-top", -tempY / 8 + "px");
			$(".container").css("margin-left", -(tempX-600) / 50 + "px");
		}*/

		/* dialog control by mouse */
		if (tempY > 550 && !watchDialog) {
			/* dialog show */
			$(".dialogImg").fadeIn();
			$(".dialogContent").fadeIn();
			$(".container").addClass("watchDialog");
			$(".container").css("animation-name", "watchDialog");
			watchDialog = true;
		}
		else if (tempY < 360 && watchDialog) {
			$(".dialogImg").fadeOut();
			$(".dialogContent").fadeOut();
			$(".container").removeClass("watchDialog");
			$(".container").css("animation-name", "antiWatchDialog");
			watchDialog = false;
		}
	}, 20);

	/* mouse control end */

	/* wall click */

	$(".wallImg").click(function(){
		$(".container").css("animation-name", "explore");
		$(this).addClass("move");
		$(this).removeClass("prompt");
		$(this).css("animation-name", "move");
		//$(".goBack").css("opacity", "1");
		$(".goBack").fadeIn();

		watchWall = true;
	});

	$(".goBack").click(function(){
		$(this).fadeOut();
		$(".container").css("animation-name", "antiExplore");
		//$(".wallImg").removeClass("move");
		//$(".wallImg").addClass("prompt");
		$(".wallImg").css("animation-name", "antiMove");

		watchWall = false;
	})

	/* wall click end */
});