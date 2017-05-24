
function resettext(id){
	//恢復文字
	if(id.value == "")
	{
		id.value = id.defaultValue;
		// id.className ="t1 search";   
	}
}

function cleartext (id){ 
	//清除文字
	id.value ="";
	// id.className ="search";   
}

// $(document).ready(function(){ 
// 	alert($(".stoneArea .text").text().charAt(3));
// });