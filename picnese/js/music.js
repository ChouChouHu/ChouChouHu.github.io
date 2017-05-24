

$(document).ready(function(){ 
	// alert("oh");

	var oddOrEven = 0;

	$(".switch").click(function(){
		if(oddOrEven % 2 == 0) {
			$(".context").removeClass("pinyin");
			$(".context").addClass("pictureWord");
			oddOrEven++;
		}
		else {
			$(".context").addClass("pinyin");
			$(".context").removeClass("pictureWord");
			oddOrEven++;
		}
		// alert(oddOrEven);
	})
});