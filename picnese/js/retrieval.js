


function resettext(id){
	//恢復文字
	if(id.value == "")
	{
		id.value = id.defaultValue;
		id.className ="t1 search";   
	}
}

function cleartext (id){ 
	//清除文字
	id.value ="";
	id.className ="search";   
}


$(document).ready(function(){ 

	$(".secondLayer .topic a").click(function(){
		if ($(this).attr("id") == "unactive") {

			$(".secondLayer .topic a").each(function(){
				if($(this).attr("id") == "unactive") {
					$(this).removeAttr("id");
				}
				else {
					$(this).attr("id", "unactive");
				}
			});

			$(".secondLayer .explanation").each(function(){
				if ($(this).attr("id") == "displayNone") {
					$(this).removeAttr("id");
				}
				else {
					$(this).attr("id", "displayNone");
				}
			})
		};
	});

});


