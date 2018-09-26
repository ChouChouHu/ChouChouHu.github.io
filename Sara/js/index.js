

$(document).ready(function(){
	
	

	$(".sound").click(function(){
		// alert("f");
		var boolie = $(".bgsound").prop("muted");
    	$(".bgsound").prop("muted",!boolie);

    	if ($(".bgsound").prop("muted") == true) {
    		alert("ture");
    	}
    	else {
    		alert("false");
    	}
	})


});