

function rightWalk() {
	// walk action
	$(".three").css("display", "none");
	$(".four").css("display", "none");
	if ($(window).scrollTop() % 120 > 60) {
		$(".one").css("display", "none");
		$(".two").css("display", "block");
	}
	else {
		$(".one").css("display", "block");
		$(".two").css("display", "none");
	}
}

function leftWalk() {
	// walk action
	$(".one").css("display", "none");
	$(".two").css("display", "none");
	if ($(window).scrollTop() % 120 > 60) {
		$(".three").css("display", "none");
		$(".four").css("display", "block");
	}
	else {
		$(".three").css("display", "block");
		$(".four").css("display", "none");
	}
}

function walkMotion(i, n) {
	if(i == 1) {
	    setTimeout(function(){
			$(".walk .one").css("display", "none");
			$(".walk .two").css("display", "block");
			$(".walk .three").css("display", "none");
			$(".walk .four").css("display", "none");
	    }, n);
	}
	else {
	    setTimeout(function(){
			$(".walk .one").css("display", "block");
			$(".walk .two").css("display", "none");
			$(".walk .three").css("display", "none");
			$(".walk .four").css("display", "none");
	    }, n);
	}
}


var script_name= document.location.pathname.match(/[^\/]+$/)[0];
if (script_name == "index.html") {

	$(document).ready(function(){
		var adjust = ($(window).width() / 1280);
		var height = 9226 * adjust; // total height (px)
		var scroll_ms = 0; // 3000 scroll pass (ms)
		var stop_ms = 2400; // 2400
		var after = false;
		var goldCount = 0;


		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	    $body.animate({
	        scrollTop: 0
	    }, 1);

	    $(".bar .proposal .pulse").css("display", "block");
	    $(".bar .proposal .pulse").addClass("animated");

		// auto scroll in scroll_ms (var)
		setTimeout(function(){
		    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		    $body.animate({
		        // scrollTop: height - $(window).height()
		    }, scroll_ms, 'easeInOutQuad');
		}, stop_ms);

		$(".brickOne").click(function(){
			$(".walk").css("top", 510 * adjust + "px");
			$(".walk").css("left", 545 * adjust + "px");
			$(".walk").animate({top: 415 * adjust + "px"}, 150);
			$(".sentence").fadeOut();
			$(".LandingPage .indexProposal").fadeOut();
			setTimeout(function(){
				$(".walk").animate({top: 515 * adjust + "px"}, 150);
			}, 200);
			setTimeout(function(){
				$(".brickOne").animate({top: 28 + "vw"}, 100);
				$(".gold").animate({top: 24 + "vw"}, 90);
				goldCount++;
				$(".goldArea .number").text(goldCount);
			}, 150);
			setTimeout(function(){
				$(".brickOne").animate({top: 29 + "vw"}, 100);
				$(".gold").animate({top: 29.5 + "vw"}, 100);
			}, 300);

			$(".goldArea").css("display", "block");
		})
		$(".brickTwo").click(function(){
			$(".walk").css("top", 510 * adjust + "px");
			$(".walk").css("left", 620 * adjust + "px");
			$(".walk").animate({top: 415 * adjust + "px"}, 150);
			$(".sentence").css("display", "none");
			$(".LandingPage .indexProposal").fadeOut();
			setTimeout(function(){	
				$(".sentence").css("display", "block");
			}, 100);
			setTimeout(function(){
				$(".walk").animate({top: 515 * adjust + "px"}, 150);
			}, 200);
			setTimeout(function(){
				$(".brickTwo").animate({top: 28 + "vw"}, 100);
			}, 150);
			setTimeout(function(){
				$(".brickTwo").animate({top: 29 + "vw"}, 100);
			}, 300);
		})
		$(".brickThree").click(function(){
			$(".walk").css("top", 510 * adjust + "px");
			$(".walk").css("left", 695 * adjust + "px");
			$(".walk").animate({top: 415 * adjust + "px"}, 150);
			// $(".LandingPage .indexProposal").css("display", "none");	
			$(".sentence").fadeOut();	
			setTimeout(function(){
				$(".LandingPage .indexProposal").css("display", "block");	
			}, 100);
			setTimeout(function(){
				$(".walk").animate({top: 515 * adjust + "px"}, 150);
			}, 200);
			setTimeout(function(){
				$(".brickThree").animate({top: 28 + "vw"}, 100);
			}, 150);
			setTimeout(function(){
				$(".brickThree").animate({top: 29 + "vw"}, 100);
			}, 300);
		})


	    // people come in animation
	    setTimeout(function(){
	    	$(".walk").css("display", "block");
	    	$(".walk").css("top", 8920 * adjust +"px");
	    	$(".walk").css("left", 250 * adjust +"px");
	    	$(".walk").addClass("walkAnimation");
			walkMotion(2, 50);
			walkMotion(2, 300);
			walkMotion(1, 600);
			walkMotion(2, 800);
			after = true;
			// $(".bar .proposal .pulse").fadeOut();
			$(".bar .proposal .pulse").removeClass("animated");

			$(".black").fadeOut();
			// $(".bgsound").css("display", "block");

			var talkTime = 1300;

			setTimeout(function(){
				$(".talk").css("display", "block");
			}, talkTime)

			// $(".obj14").fadeIn();
			setTimeout(function(){
			$(".obj14").css("display", "block");
			}, talkTime + 1500)


			// small man talk
			setTimeout(function(){
				$(".talk").css("display", "none");
				var say = "登登登等 ~ Yo！<br>歡迎來到行動者大道，<br>這個世界還多的事你不知道。";
				var count = 0;     
				  
				function fir(){   
				    if(count <= say.length){   
				        $(".saying").html(say.substring(0, count));   
				        count++;   
				    } else{   
				        window.clearInterval(say);      
				    }   
				}  

				var typewriter = window.setInterval(fir, 50);
			}, talkTime + 2000); 

			setTimeout(function(){
				say = "就 ~ 順著感覺往上探索啦，<br>旅程的開始不能太平凡吧。<br>罐頭的故事閃一邊，<br>想法到行動他他他才是亮點。";
				count = 0;     
				  
				function sec(){   
				    if(count <= say.length){   
				        $(".saying").html(say.substring(0, count));   
				        count++; 
				    } else{
				        window.clearInterval(say);      
				    }   
				}  

				var typewriter = window.setInterval(sec, 50);
			}, talkTime + 8500);

			setTimeout(function(){
				say = "那驚喜只是附加、有細節不怕找碴，<br>手癢的朋友就滑鼠點一下，<br>看！迴響ㄟ麻吉隆底家！";
				count = 0;     
				  
				function thi(){   
				    if(count <= say.length){   
				        $(".saying").html(say.substring(0, count));   
				        count++;
				    } else{
				        window.clearInterval(say);  
				    }   
				}  

				var typewriter = window.setInterval(thi, 150);
			}, talkTime + 14500);

			setTimeout(function(){
				say = "怎麼樣？你也有Freestyle麼！？";
				count = 0;     
				  
				function fou(){   
				    if(count <= say.length){   
				        $(".saying").html(say.substring(0, count));   
				        count++;
				    } else{
				        window.clearInterval(say);  
				    }   
				}  

				var typewriter = window.setInterval(fou, 50);
			}, talkTime + 20000);


			// 上面是在滑完之後執行的動畫，諸如小人走出來，小丑對話
	    // }, scroll_ms + stop_ms);
		}, 0);

		$(window).scroll(function () {

			// walk path animation
			var scrollBtm = $(document).height() - $(window).height() - $(window).scrollTop() - 140 * adjust;
			// 140 = footer hieght
			// num == scroll interval static
			// num_top, num_left == start position
			var add = 650; // adjust
			var one = 1360;
			var one_top = 8270 + add;
			var one_left = 250;
			var two = 475;
			var two_top = 6750 + add;
			var two_left = 960;
			var three = 1200;
			var three_top = 6520 + add;
			var three_left = 320;
			var four = 400;
			var four_top = 5130 + add;
			var four_left = 910;
			var five = 1200;
			var five_top = 4980 + add;
			var five_left = 280;
			var six = 390;
			var six_top = 3470 + add;
			var six_left = 980;
			var seven = 1100;
			var seven_top = 3470 + add;
			var seven_left = 320;
			var eight = 350;
			var eight_top = 2050 + add;
			var eight_left = 970;
			var nine = 400;
			var nine_top = 1900 + add;
			var nine_left = 330;
			var ten = 1100;
			var ten_top = 1300 + add;
			var ten_left = 632;

			var partner_interval = one + two + three + four + five + six + seven + eight + nine + ten;

			var eleven = 100; // 8070 - 7970
			var eleven_top = add - 100;
			var eleven_left = ten_left;
			var twelve = 800; // 8870 - 8070
			var twelve_top = eleven_top;
			var twelve_left = 780;
			var thirteen = 100; // 8970 - 8870
			var thirteen_top = add - 740;
			var thirteen_left = twelve_left;
			var fourteen = 360;
			var fourteen_top = thirteen_top;
			var fourteen_left = 940;
			var fifteen = 400;
			var fifteen_top = add - 1140;
			var fifteen_left = 940;
			var sixteen = 300;
			var sixteen_top = add - 1540;
			var sixteen_left = 240;
			var seventeen = 350;
			var seventeen_top = add - 1900;
			var seventeen_left = sixteen_left;
			var eighteen = 500;
			var eighteen_top = add - 2250;
			var eighteen_left = 940;
			var nineteen = 500;
			var nineteen_top = add - 2750;
			var nineteen_left = eight_left;
			var twenty = 1200;
			var twenty_top = add - 3300;
			var twenty_left = 260;
			var twentyOne = 600;
			var twentyOne_top = add - 4400;
			var twentyOne_left = 800;
			var twentyTwo = 500;
			var twentyTwo_top = add - 5000;
			var twentyTwo_left = 300;
			var twentyThree = 300
			var twentyThree_top = add - 5400;
			var twentyThree_left = 620;
			var twentyFour_top = add - 5700;
			var twentyFour_left = twentyThree_left;

			if ($(window).scrollTop() < 200) {
				$(".walk").css("opacity", $(window).scrollTop() / 200);
			}
			else {
				$(".walk").css("opacity", "1");
			};

			if (after) {
				if (scrollBtm > ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen + nineteen + twenty + twentyOne + twentyTwo ) * adjust) {
					$(".walk").css("top", twentyThree_top * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen + nineteen + twenty + twentyOne + twentyTwo ) * adjust ) * ( (twentyThree_top - twentyFour_top) / twentyThree ) + "px");
					$(".walk").css("left", twentyThree_left * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen + nineteen + twenty + twentyOne + twentyTwo ) * adjust ) * ( (twentyThree_left - twentyFour_left) / twentyThree ) + "px"); 
					rightWalk();
				}
				else if (scrollBtm > ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen + nineteen + twenty + twentyOne ) * adjust) {
					$(".walk").css("top", twentyTwo_top * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen + nineteen + twenty + twentyOne ) * adjust ) * ( (twentyTwo_top - twentyThree_top) / twentyTwo ) + "px");
					$(".walk").css("left", twentyTwo_left * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen + nineteen + twenty + twentyOne ) * adjust ) * ( (twentyTwo_left - twentyThree_left) / twentyTwo ) + "px"); 
					rightWalk();
				}
				else if (scrollBtm > ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen + nineteen + twenty ) * adjust) {
					$(".walk").css("top", twentyOne_top * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen + nineteen + twenty ) * adjust ) * ( (twentyOne_top - twentyTwo_top) / twentyOne ) + "px");
					$(".walk").css("left", twentyOne_left * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen + nineteen + twenty ) * adjust ) * ( (twentyOne_left - twentyTwo_left) / twentyOne ) + "px"); 
					leftWalk();
				}
				else if (scrollBtm > ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen + nineteen ) * adjust) {
					$(".walk").css("top", twenty_top * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen + nineteen ) * adjust ) * ( (twenty_top - twentyOne_top) / twenty ) + "px");
					$(".walk").css("left", twenty_left * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen + nineteen ) * adjust ) * ( (twenty_left - twentyOne_left) / twenty ) + "px"); 
					rightWalk();
				}
				else if (scrollBtm > ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen ) * adjust) {
					$(".walk").css("top", nineteen_top * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen ) * adjust ) * ( (nineteen_top - twenty_top) / nineteen ) + "px");
					$(".walk").css("left", nineteen_left * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen ) * adjust ) * ( (nineteen_left - twenty_left) / nineteen ) + "px"); 
					leftWalk();
				}
				else if (scrollBtm > ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen ) * adjust) {
					$(".walk").css("top", eighteen_top * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen ) * adjust ) * ( (eighteen_top - nineteen_top) / eighteen ) + "px");
					$(".walk").css("left", eighteen_left * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen ) * adjust ) * ( (eighteen_left - nineteen_left) / eighteen ) + "px"); 
					rightWalk();
				}
				else if (scrollBtm > ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen ) * adjust) {
					$(".walk").css("top", seventeen_top * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen ) * adjust ) * ( (seventeen_top - eighteen_top) / seventeen ) + "px");
					$(".walk").css("left", seventeen_left * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen + sixteen ) * adjust ) * ( (seventeen_left - eighteen_left) / seventeen ) + "px"); 
					rightWalk();
				}
				else if (scrollBtm > ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen ) * adjust) {
					$(".walk").css("top", sixteen_top * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen ) * adjust ) * ( (sixteen_top - seventeen_top) / sixteen ) + "px");
					$(".walk").css("left", sixteen_left * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen + fourteen + fifteen ) * adjust ) * ( (sixteen_left - seventeen_left) / sixteen ) + "px"); 
					leftWalk();
				}
				else if (scrollBtm > ( partner_interval + eleven + twelve + thirteen + fourteen ) * adjust) {
					$(".walk").css("top", fifteen_top * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen + fourteen ) * adjust ) * ( (fifteen_top - sixteen_top) / fifteen ) + "px");
					$(".walk").css("left", fifteen_left * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen + fourteen ) * adjust ) * ( (fifteen_left - sixteen_left) / fifteen ) + "px"); 
					leftWalk();
				}
				else if (scrollBtm > ( partner_interval + eleven + twelve + thirteen ) * adjust) {
					$(".walk").css("top", fourteen_top * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen ) * adjust ) * ( (fourteen_top - fifteen_top) / fourteen ) + "px");
					$(".walk").css("left", fourteen_left * adjust - ( scrollBtm - ( partner_interval + eleven + twelve + thirteen ) * adjust ) * ( (fourteen_left - fifteen_left) / fourteen ) + "px"); 
					rightWalk();
				}
				else if (scrollBtm > ( partner_interval + eleven + twelve ) * adjust) {
					$(".walk").css("top", thirteen_top * adjust - ( scrollBtm - ( partner_interval + eleven + twelve ) * adjust ) * ( (thirteen_top - fourteen_top) / thirteen ) + "px");
					$(".walk").css("left", thirteen_left * adjust - ( scrollBtm - ( partner_interval + eleven + twelve ) * adjust ) * ( (thirteen_left - fourteen_left) / thirteen ) + "px"); 
					rightWalk();
				}
				else if (scrollBtm > ( partner_interval + eleven ) * adjust) {
					$(".walk").css("top", twelve_top * adjust - ( scrollBtm - ( partner_interval + eleven ) * adjust ) * ( (twelve_top - thirteen_top) / twelve ) + "px");
					$(".walk").css("left", twelve_left * adjust - ( scrollBtm - ( partner_interval + eleven ) * adjust ) * ( (twelve_left - thirteen_left) / twelve ) + "px"); 
					rightWalk();
				}
				else if (scrollBtm > partner_interval * adjust) {
					$(".walk").css("top", eleven_top * adjust - ( scrollBtm - partner_interval * adjust ) * ( (eleven_top - twelve_top) / eleven ) + "px");
					$(".walk").css("left", eleven_left * adjust - ( scrollBtm - partner_interval * adjust ) * ( (eleven_left - twelve_left) / eleven ) + "px"); 
					rightWalk();
				} // partner
				else if (scrollBtm > ( one + two + three + four + five + six + seven + eight + nine ) * adjust) {
					// $(".walk").css("left", 630 * adjust + "px");
					$(".walk").css("top", ten_top * adjust - ( scrollBtm - ( one + two + three + four + five + six + seven + eight + nine ) * adjust ) * ( (ten_top - eleven_top) / ten ) + "px");
					$(".walk").css("left", ten_left * adjust - ( scrollBtm - ( one + two + three + four + five + six + seven + eight + nine ) * adjust ) * ( (ten_left - eleven_left) / ten ) + "px"); 
					rightWalk();
					// 強制動畫
					// $(".walk").animate({top: 510 * adjust +"px"}, 3000, "linear");
					// for (var i = 1; i <= 20; i++) {
					// 	walkMotion(i % 2, i * 150);
					// };
					// after = false;
				}	
				else if (scrollBtm > ( one + two + three + four + five + six + seven + eight ) * adjust) {
					$(".walk").css("top", nine_top * adjust - ( scrollBtm - ( one + two + three + four + five + six + seven + eight ) * adjust ) * ( (nine_top - ten_top) / nine ) + "px"); 
					$(".walk").css("left", nine_left * adjust - ( scrollBtm - ( one + two + three + four + five + six + seven + eight ) * adjust ) * ( (nine_left - ten_left) / nine ) + "px");
					rightWalk();
				}		
				else if (scrollBtm > ( one + two + three + four + five + six + seven ) * adjust) {
					$(".walk").css("top", eight_top * adjust - ( scrollBtm - ( one + two + three + four + five + six + seven ) * adjust ) * ( (eight_top - nine_top) / eight ) + "px"); 
					$(".walk").css("left", eight_left * adjust - ( scrollBtm - ( one + two + three + four + five + six + seven ) * adjust ) * ( (eight_left - nine_left) / eight ) + "px");
					leftWalk();
				}
				else if (scrollBtm > ( one + two + three + four + five + six ) * adjust) {
					$(".walk").css("top", seven_top * adjust - ( scrollBtm - ( one + two + three + four + five + six ) * adjust ) * ( (seven_top - eight_top) / seven ) + "px"); 
					$(".walk").css("left", seven_left * adjust - ( scrollBtm - ( one + two + three + four + five + six ) * adjust ) * ( (seven_left - eight_left) / seven ) + "px");
					rightWalk();
				}
				else if (scrollBtm > ( one + two + three + four + five ) * adjust) {
					$(".walk").css("top", six_top * adjust - ( scrollBtm - ( one + two + three + four + five ) * adjust ) * ( (six_top - seven_top) / six ) + "px"); 
					$(".walk").css("left", six_left * adjust - ( scrollBtm - ( one + two + three + four + five ) * adjust ) * ( (six_left - seven_left) / six ) + "px");
					leftWalk();
				}
				else if (scrollBtm > ( one + two + three + four ) * adjust) {
					$(".walk").css("top", five_top * adjust - ( scrollBtm - ( one + two + three + four ) * adjust ) * ( (five_top - six_top) / five ) + "px"); 
					$(".walk").css("left", five_left * adjust - ( scrollBtm - ( one + two + three + four ) * adjust ) * ( (five_left - six_left) / five ) + "px");
					rightWalk();
				}
				else if (scrollBtm > ( one + two + three ) * adjust) {
					$(".walk").css("top", four_top * adjust - ( scrollBtm - ( one + two + three ) * adjust ) * ( (four_top - five_top) / four ) + "px"); 
					$(".walk").css("left", four_left * adjust - ( scrollBtm - ( one + two + three ) * adjust ) * ( (four_left - five_left) / four ) + "px");
					leftWalk();
				}
				else if (scrollBtm > ( one + two ) * adjust) {
					$(".walk").css("top", three_top * adjust - ( scrollBtm - ( one + two ) * adjust ) * ( (three_top - four_top) / three ) + "px"); 
					$(".walk").css("left", three_left * adjust - ( scrollBtm - ( one + two ) * adjust ) * ( (three_left - four_left) / three ) + "px");
					rightWalk();
				}
				else if (scrollBtm > one * adjust) {
					$(".walk").css("top", two_top * adjust - ( scrollBtm - one * adjust ) * ( (two_top - three_top) / two ) + "px"); 
					$(".walk").css("left", two_left * adjust - ( scrollBtm - one * adjust ) * ( (two_left - three_left) / two ) + "px");
					leftWalk();
				}
				else if (scrollBtm > 0 * adjust) {
					$(".walk").css("top", one_top * adjust - scrollBtm * ( (one_top - two_top) / one ) + "px");
					$(".walk").css("left", one_left * adjust - scrollBtm * ( (one_left - two_left) / one ) + "px");
					rightWalk();
				}
				else {
					$(".walk").css("top", one_top * adjust + "px");
					$(".walk").css("left", one_left * adjust + "px");
					rightWalk();
				}
			};
		});

		$(".LandingPage").click(function(){
			// alert($(".bar").css("top"));
			// alert($(document).height() - $(window).height() - $(window).scrollTop() - 140 * adjust);
			// alert((( 7802 - $(window).scrollTop() ) / 23 ) + 23 + "vw");
			// alert($(window).width());
			// alert(scrollBtm);
		});
	});
		
};
