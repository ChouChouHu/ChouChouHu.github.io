// fixedBar control
$(window).scroll(function () {
    if ($(window).scrollTop() > 540) {
        //$(".fixedBar").css({"position": "fixed", "margin-top": "0"});
        $(".fixedBar > img").css({"opacity": "1"});
    }
    else if ($(window).scrollTop() > 300) {
        //$(".fixedBar").css({"position": "relative", "margin-top": "-60px"});
        $(".fixedBar > img").css({"opacity": ($(window).scrollTop()-300) / 240});
    }
    else {
    	//$(".fixedBar").css({"position": "relative", "margin-top": "-60px"});
    	$(".fixedBar > img").css({"opacity": "0"});
    }
});


// time
$(document).ready(function(){ 
	setInterval(function(){
		var dd = new Date();
		var weekdays = "星期日,星期一,星期二,星期三,星期四,星期五,星期六".split(",");

		$(".timeDiv *").each(function(){
			if ($(this).hasClass("year")) {
				$(this).html(dd.getFullYear());
			}
			else if ($(this).hasClass("month")) {
				$(this).html(dd.getMonth() + 1);
			}
			else if ($(this).hasClass("week")) {
				$(this).html(weekdays[dd.getDay()]);
			}
			else if ($(this).hasClass("day")) {
				$(this).html(dd.getDate());
			}
			else if ($(this).hasClass("hour")) {
				$(this).html(dd.getHours());
			}
			else if ($(this).hasClass("minute")) {
				if (dd.getMinutes() > 9) {
					$(this).html(dd.getMinutes());
				}
				else {
					$(this).html("0" + dd.getMinutes());
				}
			}
			else if ($(this).hasClass("second")) {
				if (dd.getSeconds() > 9) {
					$(this).html(dd.getSeconds());
				}
				else {
					$(this).html("0" + dd.getSeconds());
				}
			}
			else if ($(this).hasClass("ms")) {
				$(this).html("." + dd.getMilliseconds());
			};
		});
	},10);
}); 


window.onload = function(){
	var activityOne = ["2016", "12", "5", "18", "0"];
	var activityTwo = ["2016", "12", "28", "18", "0"];
	var activityThree = ["2017", "1", "5", "18", "0"];
	var activityFour = ["2017", "3", "10", "18", "0"];
	//alert(secMinus(activityOne));
	//alert(activityOne[1]);
	
    showtime(secMinus(activityOne), 1);
    showtime(secMinus(activityTwo), 2);
    showtime(secMinus(activityThree), 3);
    showtime(secMinus(activityFour), 4);
}

function secMinus(a) {
	var standard = ["2016", "1", "1", "0", "0"];
	var month = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

	
	var temp = (a[0] - standard[0]) * 365 * 24 * 60 * 60;	// year
	for (var i = 0; i < a[1] - standard[1] ; i++) {
		temp += month[i] * 24 * 60 * 60;	// month
	};
	temp += (a[2] - standard[2]) * 24 * 60 * 60;	// day
	temp += (a[3] - standard[3]) * 60 * 60;	// hour
	temp += (a[4] - standard[4]) * 60;	// minute
	//alert(temp);

	var dd = new Date();
	var temp2 = (dd.getFullYear() - standard[0]) * 365 * 24 * 60 * 60;
	for (var i = 0; i < (dd.getMonth()+1) - standard[1] ; i++) {
		temp2 += month[i] * 24 * 60 * 60;	// month
	};
	temp2 += (dd.getDate() - standard[2]) * 24 * 60 * 60;	// day
	temp2 += (dd.getHours() - standard[3]) * 60 * 60;	// hour
	temp2 += (dd.getMinutes() - standard[4]) * 60;	// minute
	temp2 += dd.getSeconds();
	//alert(temp2);

	//alert(temp-temp2);
	return temp - temp2;

}


function showtime(ts, a) {
    var timerun = false; //是否启用
    var Temp; //输出字符串
    var tempts = ts - 1; //剩余秒数-1
    var startTime = (new Date()).getTime(); //当前时间
    var dateLeft = 0; //剩余天数
    var hourLeft = 0; //剩余小时
    var minuteLeft = 0; //剩余分钟
    var secondLeft = 0; //剩余秒钟

    var dateLeftStr = '';//剩余天数字符
    var hourLeftStr = '';//剩余小时字符
    var minuteLeftStr = '';//剩余分钟字符
    var secondLeftStr = '';//剩余秒钟字符
    if (ts < 0)//剩余秒数为负则全部清0
    {
        ts = 0;
        dateLeft = 0;
        hourLeft = 0;
        minuteLeft = 0;
        secondLeft = 0;
    } 
    else {
         
        dateLeft = parseInt(ts / 86400); //折合天数
        ts = ts - dateLeft * 86400; //剩余秒数
        hourLeft = parseInt(ts / 3600); //折合小时
        ts = ts - hourLeft * 3600; //剩余秒数
        minuteLeft = parseInt(ts / 60); //折合分钟
        secondLeft = ts - minuteLeft * 60; //剩余秒数

        dateLeftStr = dateLeft;
        hourLeftStr = hourLeft;
        minuteLeftStr = minuteLeft;
        secondLeftStr = secondLeft;
    }
    if (hourLeft < 10)
        hourLeftStr = '0' + hourLeft; //小时左补0
    if (minuteLeft < 10)
        minuteLeftStr = '0' + minuteLeft; //分钟左补0
    if (secondLeft < 10)
        secondLeftStr = '0' + secondLeft; //秒钟左补0
    if (dateLeft > 0)
        //天数> 0，显示天数
        dateLeftStr = dateLeftStr + ' 天 ';
    else
        //否则不显示天数
        dateLeftStr = " ";
    if (hourLeft > 0)
        //小时> 0，显示小时数
        hourLeftStr = hourLeftStr + ' 時 ';
    else {
        //否则判断天数是否也为0
        if (dateLeft != " ")//天数不为0
            hourLeftStr = "00" + ' 時 '; //显示小时数为00
        else
            hourLeftStr = " "; //否则不显示小时数
    }
    if (minuteLeft > 0)//分钟是否为0
        minuteLeftStr = minuteLeftStr + ' 分 '; //显示分钟
    else {
        if (dateLeft != " " || hourLeft != " ")
            minuteLeftStr = "00" + ' 分 '; //天数和小时有一个不为0则显示00分钟
        else
            minuteLeftStr = " "; //否则不显示分钟
    }
    if (secondLeft > 0)
        //秒钟是否为0
        secondLeftStr = secondLeftStr + ' 秒 '; //不为0显示秒
    else {
        if (dateLeftStr != " " || hourLeftStr != " " || minuteLeftStr != " ")
            secondLeftStr = "00" + ' 秒 '; //天数、小时、分钟有一个不为0则显示00秒
        else
            secondLeftStr = " "; //否则不显示秒
    }
    Temp = dateLeftStr + hourLeftStr + minuteLeftStr + secondLeftStr; //合并字符串
    if (Temp == ' ') {
        Temp = " <B>结束</B> "; //时间到停止倒计时
    }
    else {
        Temp = "" + Temp;
        timerun = true;
    }

    if (a == 1) 
    	$("#actOne > .surplus").html("剩餘 " + Temp);
    else if (a == 2)
    	$("#actTwo > .surplus").html("剩餘 " + Temp);
    else if (a == 3)
    	$("#actThree > .surplus").html("剩餘 " + Temp);
    else if (a == 4) 
    	$("#actFour > .surplus").html("剩餘 " + Temp);
    

    if (timerun) {	//继续倒计时 
        setTimeout('showtime( ' + tempts + ', ' + a +  ') ', 1000);
    }
}

