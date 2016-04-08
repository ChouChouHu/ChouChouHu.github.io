			/* height adjustment to all device */
			function adjustment() {
				var a = $("#backPng").height();
				
				document.getElementById('backPng').style.width = (a * 0.5625 ) + "px";
				document.getElementById('backPng').style.marginLeft = -(a * 0.5625 / 2) + "px";
				/* iphone6: width / height = 0.5625 */
				/* marginLeft -> make it center */

				/* font-size */
				document.getElementById('backPng').style.fontSize = (a / 582) + "em";
				document.getElementById('backPng').style.lineHeight = 1.4 + "em";
				$(".memberZone").css("font-size", 0.87 + "em");
				$(".memberZone").css("line-height", 1.3 + "em");
				$("#commitment").css("font-size", 0.6 + "em");
				$("#commitment").css("line-height", 1.3 + "em");
				$("#sendCode").css("height", 1.4 + "em");
				$("#sendCode").css("line-height", 1.4 + "em");
				$("#forgot").css("font-size", 0.75 + "em");
				$("#forgetText").css("font-size", 0.74 + "em");
				$("#forgetText").css("line-height", 1.22 + "em");
				$("#yellow").css("font-size", 0.6 + "em");
				$("#walletText").css("font-size", 0.6 + "em");
				$("#walletText").css("line-height", 1.28 + "em");
				$("#offline").css("font-size", 0.8 + "em");
				$("#offline").css("line-height", 1 + "em");
				$("#expenseText").css("font-size", 0.6 + "em");
				$("#consignmentText, #consignmentText2").css("font-size", 0.7 + "em");
				$("#consignmentText, #consignmentText2").css("line-height", 1.2 + "em");
			}

			window.onload = adjustment;
	    	window.onresize = adjustment;