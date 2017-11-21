function timeCount(ms, s){

	$("#ms").text(ms);
	$("#s").text(s);
	
	if (ms < 100) {
		ms++;
		setTimeout("timeCount(" + ms + ", " + s + ")", 10);
	}
	else {
		ms = 0;
		s++;
		setTimeout(timeCount(ms, s), 10);
	}
}

function getRandom(minNum, maxNum) {	//取得 minNum(最小值) ~ maxNum(最大值) 之間的亂數
	return Math.floor( Math.random() * (maxNum - minNum + 1) ) + minNum;
}

function getRandomArray(minNum, maxNum, n) {	//隨機產生不重覆的n個數字
	var rdmArray = [n];		//儲存產生的陣列
 
	for(var i=0; i<n; i++) {
		var rdm = 0;		//暫存的亂數
 
		do {
			var exist = false;			//此亂數是否已存在
			rdm = getRandom(minNum, maxNum);	//取得亂數
 
			//檢查亂數是否存在於陣列中，若存在則繼續回圈
			if(rdmArray.indexOf(rdm) != -1) exist = true;
 
		} while (exist);	//產生沒出現過的亂數時離開迴圈
 
		rdmArray[i] = rdm;
	}
	return rdmArray;
}


$(document).ready(function(){ 

	setTimeout(function(){
		$(".number").text("3");
	}, 500);

	setTimeout(function(){
		$(".number").text("2");
	}, 1500);

	setTimeout(function(){
		$(".number").text("1");
	}, 2500);

	// setTimeout(function(){
	// 	$(".number").text("go!");
	// }, 3500);

	setTimeout(function(){
		$(".number").css("display", "none");
		$(".game").css("display", "block");
		timeCount(0, 0);
	}, 3500);

	
	var clickNum = getRandomArray(1, 9, 9);
	var i = 0;
	$("#Q"+String(clickNum[i])).addClass("default");
	$(".eachAns").click(function(){
		if ($(this).attr("id") == "A" + String(clickNum[i])) {
			$("#Q"+String(clickNum[i])).removeClass("default");
			$("#A"+String(clickNum[i])).css("opacity", "0");
			if (i == 8) {
				// end
				$(".number").css("display", "block");
				$(".number").text("end");
				$(".game").css("display", "none");
			};
			i++;
			$("#Q"+String(clickNum[i])).addClass("default");
		};
		// alert($(this).attr("id"));
	})


	// $("#one_one").click(function(){
	// 	$(".chooseWord").css("display", "block")
	// })

	// $(".chooseWord #one_one_1").click(function(){
	// 	$(".possibleWord").css("display", "none");
	// 	$("#one_one_one").css("display", "block");
	// 	$(".chooseWord").css("display", "none");
	// 	// $(".chooseWord .eachWord").removeClass("active");
	// 	$(this).addClass("active");
	// })

	// $(".chooseWord #one_one_2").click(function(){
	// 	$(".possibleWord").css("display", "none");
	// 	$("#one_one_two").css("display", "block");
	// 	// $(".chooseWord .eachWord").removeClass("active");
	// 	$(this).addClass("active");
	// })


	// $(".possibleWord .eachWord").click(function(){
	// 	$(".chooseWord").css("display", "none");
	// 	$(".possibleWord").css("display", "none");
	// })

	// $("#answer").click(function(){
	// 	$(".input input").attr("value", "佬");
	// 	$(".chooseWord .eachWord").removeClass("active");
	// 	// alert("d");
	// })

	// $(".input input").click(function(){
	// 	$(".keyBoard").css("display", "block");
	// })


	var active = false;

	$("#Aone").click(function(){
		// $(this).css("opacity", "0");

		if (active) {
			$(".window").css("display", "block");
			$("body").css("cursor", "default");
			active = false;
			// alert("f");
		}
		else {
			$(this).css("border-color", "transparent");
			$(this).css("font-size", "4vw");
			$(this).text("listen");

			$(".Q").css("display", "none");
			$("#one").css("display", "block");
		}

	})

	$("#Atwo").click(function(){
		// $(this).css("opacity", "0");

		$(this).css("border-color", "transparent");
		$(this).css("font-size", "4vw");
		$(this).text("ear");

		$(".Q").css("display", "none");
		$("#two").css("display", "block");
	})

	$("#Athree").click(function(){
		// $(this).css("opacity", "0");

		$(this).css("border-color", "transparent");
		$(this).css("font-size", "4vw");
		$(this).text("mouth");

		$(".Q").css("display", "none");
		$("#three").css("display", "block");
	})

	$(".function").click(function(){
		active = true;
		$("body").css("cursor", "help");
		// alert("f");
	})

	$(".window").click(function(){
		$(this).css("display", "none");
	})

});


