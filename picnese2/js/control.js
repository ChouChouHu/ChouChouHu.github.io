
var watchWall = false;
var watchDialog = false;
var unHover = false;
var vertical;
var horizontal;

/* get mouse XY */
var tempX = 0
var tempY = 0

// Detect if the browser is IE or not.
// If it is not IE, we assume that the browser is NS.
var IE = document.all?true:false

// If NS -- that is, !IE -- then set up for mouse capture
if (!IE) document.captureEvents(Event.MOUSEMOVE)

// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;

// Temporary variables to hold mouse x-y pos.s


// Main function to retrieve mouse x-y pos.s

function getMouseXY(e) {
  if (IE) { // grab the x-y pos.s if browser is IE
    tempX = event.clientX + document.body.scrollLeft
    tempY = event.clientY + document.body.scrollTop
  } else {  // grab the x-y pos.s if browser is NS
    tempX = e.pageX
    tempY = e.pageY
  }  
  // catch possible negative values in NS4
  if (tempX < 0){tempX = 0}
  if (tempY < 0){tempY = 0}  
  // show the position values in the form named Show
  // in the text fields named MouseX and MouseY
  return true
}


$(document).ready(function(){ 

	/* dialogControl */
	if (!watchDialog && !watchWall) {

		$(".dialogControl").click(function(){
			/* dialog show */
			$(".dialogImg").fadeIn();
			$(".dialogContent").fadeIn();
			$(".container").addClass("watchDialog");
			$(".container").css("animation-name", "watchDialog");
			$(".dialogControl").css("height", "40%");
			watchDialog = true;
		});

		$(".dialogControl").hover(function(){
			;
		}, function(){
			/* to prevent click and go back immediately */
			unHover = true;
		});
	}
	//$(".container").click(function(){ alert(tempX + "," + tempY); });
	setInterval(function(){
		/* mouse and scale
		if (!watchWall & !watchDialog) {
			vertical = Math.abs(tempY - 325) ;
			horizontal = Math.abs(tempY - 325) ;
			//$(".container").css("transform", "scale("+(1 + vertical / 6250)+") perspective(" + vertical / 105 + "em) rotateY(" + (tempX - 600) / 20000 + "deg)");
			$(".container").css("transform", "scale("+(1 + vertical / 6250)+")");
			$(".container").css("margin-top", -tempY / 8 + "px");
			$(".container").css("margin-left", -(tempX-600) / 50 + "px");
		}*/

		/* dialog control by mouse */
		if (tempY > 550 && !watchDialog && !watchWall) {
			/* dialog show origilal (move to bottom and show)
			$(".dialogImg").fadeIn();
			$(".dialogContent").fadeIn();
			$(".container").addClass("watchDialog");
			$(".container").css("animation-name", "watchDialog");
			watchDialog = true;*/
		}
		else if (tempY < 250 && watchDialog && unHover) {
			$(".dialogImg").fadeOut();
			$(".dialogContent").fadeOut();
			$(".container").removeClass("watchDialog");
			$(".container").css("animation-name", "antiWatchDialog");
			watchDialog = false;
		}
	}, 20);
	/* dialogControl end */

	/* upLayer word layout */

	var upLayerNum = 0;
	$(".upLayer").each(function(){
		upLayerNum++;
	});

	//alert(upLayerNum);
	if (upLayerNum > 2) {
		upLayerNum = 0;
		$(".upLayer").each(function(){
			upLayerNum++;
			if (upLayerNum == 1) {
				$(this).addClass("one");
				$(this).prepend("<img src=" + "img/one.png" +">");
			}
			else if (upLayerNum == 2) {
				$(this).addClass("two");
				$(this).prepend("<img src=" + "img/two.png" +">");
			}
			else if (upLayerNum == 3) {
				$(this).addClass("three");
				$(this).prepend("<img src=" + "img/three.png" +">");
			}
			else if (upLayerNum == 4) {
				$(this).addClass("four");
				$(this).prepend("<img src=" + "img/four.png" +">");
			}
		});
	}
	else {
		upLayerNum = 0;
		$(".upLayer").each(function(){
			upLayerNum++;
			if (upLayerNum == 1) {
				$(this).addClass("two");
				$(this).prepend("<img src=" + "img/two.png" +">");
			}
			else if (upLayerNum == 2) {
				$(this).addClass("three");
				$(this).prepend("<img src=" + "img/three.png" +">");
			}
		});
	}

	/* Layout end */



	/* wall click */

	$(".wallImg").click(function(){
		if (!watchDialog) {
			$(".container").css("animation-name", "explore");
			$(this).addClass("move");
			$(this).removeClass("prompt");
			$(this).css("animation-name", "move");
			$(".wallAppearWord").css("animation-name", "adjustFontSize");
			//$(".goBack").css("opacity", "1");
			$(".goBack").fadeIn();
		}

		watchWall = true;
	});

	$(".goBack").click(function(){
		$(this).fadeOut();
		$(".container").css("animation-name", "antiExplore");
		//$(".wallImg").addClass("prompt");
		$(".wallImg").css("animation-name", "antiMove");
		$(".wallAppearWord").css("animation-name", "antiAdjustFontSize");
		//$(".wallImg").addClass("prompt");
		//$(".wallImg").css("animation-name", "antiMove");

		watchWall = false;
	})

	/* wall click end */


	/* wall hover */

	$(".wallImg > div > a > div").hover(function(){
		$(".wallAppearWord").text($(this).text());
	}, function(){
		$(".wallAppearWord").text("");
	});

	/* wall hover end */


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
	/* wall hover end */

});


