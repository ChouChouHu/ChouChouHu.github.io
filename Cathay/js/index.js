

$(document).ready(function(){
	
	for (var i = 0; i <= 100; i++) {
		setTimeout(function(){
			setTimeout(function(){
				$(".greenCir").css("display", "block");
			}, 1500);

			setTimeout(function(){
				$(".dgreenCir").css("display", "block");
			}, 1900);

			setTimeout(function(){
				$(".yellowCir").css("display", "block");
			}, 1700);

			setTimeout(function(){
				$(".aniOne").css("display", "block");
			}, 1900);

			setTimeout(function(){
				$(".aniOne").fadeOut();
			}, 2900);

			setTimeout(function(){
				$(".greenCir").fadeOut();
			}, 3000);

			setTimeout(function(){
				$(".dgreenCir").fadeOut();
			}, 3200);

			setTimeout(function(){
				$(".yellowCir").fadeOut();
			}, 3100);
		}, i * 3000); // fadeOut 時間差
	};




});