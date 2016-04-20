			/* height adjustment to all device */
			function adjustment() {
				var a = $("#backPng").width();
				
				document.getElementById('backPng').style.height = (a * 1.78 ) + "px";
				/*document.getElementById('backPng').style.marginLeft = -(a * 0.5625 / 2) + "px";*/
				/* iphone6: width / height = 0.5625 */
				/* marginLeft -> make it center */

				/* font-size */
			}

			window.onload = adjustment;
	    	window.onresize = adjustment;