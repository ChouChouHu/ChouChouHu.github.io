


		var imgDivMove = false; /* to record if the img move */
		function magicContent(n){
			$("div.magicBox .content").empty();
			$("div.imgWhite").css("display", "none");
			$(".imgDiv img").removeClass("animated move1 move1Reverse");
			if (n == 1) {		/* page1 */
				$("div.magicBox #content1").append("<div>前銜：本文開頭須聲明作者之官稱職銜，包括正職、兼職、加級、記錄、隨帶軍功、所帶處分等。例如本件為台北府給新竹縣的「札文」，當時台北府知府陳文騄的全銜為「欽加鹽運使銜在任候補道署理臺北府正堂提調全臺善後專辦臺北通商事務加四級」，「署理」凡官職出缺或離任，以其他官員暫行代理其職務。可以知道他是以「欽加鹽運使銜在任候補道」去兼任台北府知府這個官職。「提調」則是清代在臨時設置機構中主要負責的官員。加四級則是清代對稱職官員給予「加級」以資獎勵。在今日公文中，基本上只有發文機關的名稱，有關發文機關首長姓名則列於「後書」部分。</div>");
				$("#imgOne").css("display", "block");
				$("#imgOne").css("animation-delay", "0s");
				if (imgDivMove) {
					$(".imgDiv #moveImg").addClass("animated move1Reverse");
					$("#imgOne").css("animation-delay", "1s");
				};
				imgDivMove = false;
			}
			else if (n == 2){
				$("div.magicBox #content1").append("<div>事由：前銜之後緊接冠以「為……事」等字樣。（也就是後面將要提起的「案由」）。本案則為一個告示：「為禁止對保保長鄉長街正總理業戶董事庄正等擅自設館私收投詞訛索札飭新竹縣貼發告示」。這一部份依舊可以在今日公文看到，現代公文的「主旨」大體上等同於清代公文書中的「事由」，但今日公文在主旨後會加上「期望語」，例如「惠請 辦理」、「謹請 核示」等等。</div>");
				$("#imgTwo").css("display", "block");
				$("#imgTwoSecond").css("display", "block");
				$("#imgTwo").css("animation-delay", "0s");
				if (imgDivMove) {
					$(".imgDiv #moveImg").addClass("animated move1Reverse");
					$("#imgTwo").css("animation-delay", "1s");
				};
				imgDivMove = false;
			}
			else if (n == 3){
				$("div.magicBox #content1").append("<div>正文：是文件的主體部分，用以敘述問題、提出要求、明確行文目的。清代撰擬公文時，經常將有關的來文引用在正文的開頭部分，如果須層層上報或逐級下達的文件時，往往層層套引，難以閱讀。另外亦有用抄單的辦法轉發文件，這種方式可以使行文清悉，便於讀者掌握事由。但是這種方法因較不正式，通常只用於平轉或下行文體。現代公文基本上在正文部分，以條列方式呈現居多。</div>");
				$("#imgThree").css("display", "block");
				$("#imgThree").css("animation-delay", "0s");
				if (imgDivMove) {
					$(".imgDiv #moveImg").addClass("animated move1Reverse");
					$("#imgThree").css("animation-delay", "1s");
				};
				imgDivMove = false;
			}
			else if (n == 4){
				$("div.magicBox #content1").append("<div>結束語：公文結尾的固定套語，由於本件為告示，故長官用「毋違，切切。此札。」現代公文省略了結束語。</div>");
				$(".imgDiv #moveImg").addClass("animated move1");
				$("#imgFour").css("animation-delay", "1s");
				if (imgDivMove) {
					$("#imgFour").css("animation-delay", "0s");
				};
				$("#imgFour").css("display", "block");
				imgDivMove = true;
			}
			else if (n == 5){
				$("div.magicBox #content1").append("<div>受文者：文件發行之對象。由「札新竹縣」可知到是台北府知府給新竹縣知縣的告示，並要他代為轉發告示。現代公文針對受文者會寫在「發文日期」的上方。</div>");
				$("#imgFive").css("display", "block");
				$("#imgFive").css("animation-delay", "0s");
				if (imgDivMove) {
					$(".imgDiv #moveImg").addClass("animated move1Reverse");
					$("#imgFive").css("animation-delay", "1s");
				};
				imgDivMove = false;
			}
			else if (n == 6){
				$("div.magicBox #content1").append("<div>後書：由文件的成文時間、印章組成。例如官員的印信或承辦人員蓋章。現代公文中通常會加上發文機關首長名稱，有關承辦人員，則列於公文右上方聯絡資訊部分。</div>");
				$(".imgDiv #moveImg").addClass("animated move1");
				$("#imgSix").css("animation-delay", "1s");
				if (imgDivMove) {
					$("#imgSix").css("animation-delay", "0s");
				};
				$("#imgSix").css("display", "block");
				imgDivMove = true
			}
			else if (n == 7){		/* page2 */
				$("div.magicBox #content2").append("<div>左圖是將《淡新檔案》中公文封套拆開攤平之後的情況。中間方框部分即為公文封套的正面，註明了字號、發文地點、發文時間、內裝件數與收文衙門。右圖是左圖的兩翼反折成為公文封套的背面，對齊出「福建臺北府正堂封」字樣與兩處吻合的騎縫章。再對照左圖即可得知，這是一份臺北府知府在光緒十一年三月的時後以這個封套裝了五件公文與六道告示給了新竹縣知縣，後來新竹縣衙門的書吏將這個用過的公文封套拆開，利用原本無字空白的內面，翻折出一個長方形的紙面書寫文字，製成了第12514案的案由。</div>");	
				$("#imgDiv2 div").css("opacity", "0");
			}
			else if (n == 8){
				$("div.magicBox #content2").append("<div>從「一件案奉 本府陳⋯⋯.多張發貼由」可視為案由。</div>");
				$("#imgDiv2 div").css("opacity", "1");
			}

			/* $("div.right div.content div").addClass("animated fadeIn"); /* the word fade in */
		}


		$(document).ready(
			function(){
				$("#oneOne").hover(
					function(){
						$("div.chapter").addClass("animated enlarge");
						$("div.magicBox").addClass("animated enlarge");
					},
					function(){
						$("div.chapter").removeClass("animated enlarge");
						$("div.magicBox").removeClass("animated enlarge");
					}
				);
			}
		);

		$(document).ready(
			function(){
				$("#oneTwo").hover(
					function(){
						$("#arrow").addClass("animated infinite wobble");
						$("#arrow").css("opacity", "1");
					},
					function(){
						$("#arrow").removeClass("animated infinite wobble");
						$("#arrow").css("opacity", "0");
					}
				);
			}
		);


