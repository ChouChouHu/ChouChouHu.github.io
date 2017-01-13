


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
				$("#imgDiv2 #pic4").css("display", "none");
				$("#imgDiv2 #pic567").css("display", "none")
			}
			else if (n == 8){
				$("div.magicBox #content2").append("<div>從「一件案奉 本府陳⋯⋯.多張發貼由」可視為案由。</div>");
				$("#imgDiv2 #pic4").css("display", "block");
				$("#imgDiv2 #pic567").css("display", "none")
			}
			else if (n == 9){
				$("div.magicBox #content2").append("<div>說明：圖七的三件淡新檔案的「案由」，可以從中得知各該案的四種資訊。<br>1.	該案最初的主管官員：從「分府陳」可知為淡水廳同知陳星聚，「正堂沈」可知為新竹知縣沈繼曾。<br>2.	該案的事由：通常寫成「一件……由」，有時則以小字另做補充說明。<br>3. 該案立卷時間，通常只寫出年、月而已。<br>4. 該案的承辦單位或人員：「承溫程」表示為一位名叫溫程的書吏，「工」表示為工房，「承刑總」表示為刑房的總書。</div>");
				$("#imgDiv2 #pic567").css("display", "block")
				$("#imgDiv2 #pic4").css("display", "none");
			}
			else if (n == 10){
				$("div.magicBox #content3").append("<div>14105_009件是由史屠寶泰呈送給新竹知縣方祖蔭的詳文。</div>");
				$("#pic10").css("display", "block");
				$("#pic11").css("display", "none");
			}
			else if (n == 11){
				$("div.magicBox #content3").append("<div>14105_009件詳文相應的簡文。</div>");	
				$("#pic10").css("display", "none");
				$("#pic11").css("display", "block");
			}
			else if (n == 12){
				$("div.magicBox #content6").append("<div>代理新竹縣知縣沈蔭茂分別寫給台北知府雷其達與布政使沈應奎。</div>");	
				$("#pic12").css("display", "block");
				$("#pic13").css("display", "none");
			}
			else if (n == 13){
				$("div.magicBox #content6").append("<div>13218案中的「紅稟」。</div>");	
				$("#pic12").css("display", "none");	
				$("#pic13").css("display", "block");
			}
			else if (n == 20){
				$("div.magicBox #content7").append("<div>摺面的「申文」標明了文種，並蓋有發文者蕭啟元的「臺北府新竹縣<br>典史鈐記」。</div>");	
			}
			else if (n == 21){
				$("div.magicBox #content7").append("<div>事由是「為申請役食銀兩事」，揭示出行文目的。</div>");	
			}
			else if (n == 22){
				$("div.magicBox #content7").append("<div>結束語為「須至申者」。</div>");	
			}
			else if (n == 23){
				$("div.magicBox #content7").append("<div>「計申送  鈐領一紙」，表示隨此申文附帶著一件蓋有鈐記的領狀。</div>");	
			}
			else if (n == 24){
				$("div.magicBox #content7").append("<div>「右申 欽加同知銜署新竹縣正堂張」，表示受文者是新竹知縣張廷檊。</div>");	
			}
			else if (n == 25){
				$("div.magicBox #content7").append("<div>成文時間為「光緒拾伍年拾貳月念伍日」，並蓋有發文作者蕭啟元的「臺北府新竹縣典史鈐記」。</div>");	
			}
			else if (n == 26){
				$("div.magicBox #content7").append("<div>日期下方署有後銜「典史蕭啟元」。</div>");	
			}
			else if (n == 27){
				$("div.magicBox #content7").append("<div>「十五年十二月廿六日到」是受文者新竹縣衙門蓋填的公文收到日期，使用刻著「年月日到」字樣且留有空格的條戳，在空格處以墨筆填上數字。在文到日期旁邊還加蓋「號」字戳記。</div>");	
			}
			else if (n == 28){
				$("div.magicBox #content8").append("<div>摺面的「詳文」標明了文種。</div>");	
			}
			else if (n == 29){
				$("div.magicBox #content8").append("<div>事由是「為詳請示遵事」，是詳文的用語，也說明此件公文需要上級批示。</div>");	
			}
			else if (n == 30){
				$("div.magicBox #content8").append("<div>結束語為「須至詳者」，有時也用「須至申者」。</div>");	
			}
			else if (n == 31){
				$("div.magicBox #content8").append("<div>「右申 欽加五品銜特授埔裏撫民分府攝理新竹縣正堂方」，表示受文者是新竹知縣方祖蔭，有時則以「右詳」指明受文者。</div>");	
			}
			else if (n == 32){
				$("div.magicBox #content8").append("<div>「光緒十四年二月初八日到」是受文者新竹縣衙門蓋填的文到日期。</div>");	
			}
			else if (n == 33){
				$("div.magicBox #content8").append("<div>新竹知縣方祖蔭的批語，同樣的批語也會寫在發還給新竹縣典史屠寶泰的簡文上面。</div>");	
			}
			else if (n == 34){
				$("div.magicBox #content8").append("<div>受文者新竹縣衙門所加蓋、編寫的右半邊「新竹縣印」與字號，左半邊的印文與字號應當在發還給新竹縣典史屠寶泰的簡文上面。</div>");	
			}
			else if (n == 35){
				$("div.magicBox #content6").append("<div>稟文不具前銜而以「敬稟者」開頭，不寫事由而直接進入正文。但是這件比較特別，在「敬稟者」之前又加寫了「謹稟大人閣下」，展現出對上級長官更為恭敬的態度。</div>");	
			}
			else if (n == 36){
				$("div.magicBox #content6").append("<div>稟文以「卑職某敬稟」作為結束語，而在此之前的正文常用「恭請勛安，伏  惟垂鑑」之類的問候、請乞用語做為結尾。</div>");	
			}
			else if (n == 37){
				$("div.magicBox #content6").append("<div>「一紅白稟 藩憲沈 本府憲雷」，表示審閱核可之後的稟文定稿將謄清成二組白稟與紅稟，分別呈送給臺灣布政使沈應奎和臺北知府雷其達二位上級長官「一」字在謄錄成正本時將會改寫成「右」字。</div>");	
			}
			else if (n == 38){
				$("div.magicBox #content6").append("<div>這裡的「稟 卑邑各業戶稟報升除田園，擬即親往勘丈造報，俯賜批示祗遵由」是紅稟（後文補充）上所要寫的簡要事由。</div>");	
			}
			else if (n == 39){
				$("div.magicBox #content6").append("<div>發文者的官銜姓名：「同知銜代理新竹縣知縣沈茂蔭」。</div>");	
			}
			else if (n == 40){
				$("div.magicBox #content6").append("<div>簡要的事由：「稟 卑邑各業戶稟報陞除田園，擬即親往勘丈造報，俯賜批示祗遵由」。</div>");	
			}
			else if (n == 41){
				$("div.magicBox #content6").append("<div>發文者的蓋印：「新竹縣印」。</div>");	
			}
			else if (n == 42){
				$("div.magicBox #content6").append("<div>光緒「六年七月初五日到」是臺灣布政使衙門收到紅稟的日期。</div>");	
			}
			else if (n == 43){
				$("div.magicBox #content6").append("<div>光緒六年「七月十七日奉」是新竹知縣衙門接到臺灣布政使衙門所發還之紅稟的日期。</div>");	
			}
			else if (n == 44){
				$("div.magicBox #content9").append("<div>「具呈人」係提出訴訟狀的當事人。</div>");	
			}
			else if (n == 45){
				$("div.magicBox #content9").append("<div>「干證」係證人或關係人之謂。陳襄『州縣提綱』云：「二競、干證俱至，即須剖決」。</div>");	
			}
			else if (n == 46){
				$("div.magicBox #content9").append("<div>「地保」是駐鄉的差役，處理官治的、訴訟的事務，受縣衙門內的差役所指揮。</div>");	
			}
			else if (n == 47){
				$("div.magicBox #content9").append("<div>「歇家」係城外民人到官府提出訴訟時暫居城內的住所。</div>");	
			}
			else if (n == 48){
				$("div.magicBox #content9").append("<div>「認戳」係負責確核呈狀上的代書戳記是否合法有效的衙門書吏。</div>");	
			}
			else if (n == 49){
				$("div.magicBox #content9").append("<div>「經承」即經辦的胥吏。在清代，此類民、刑案件，往往由知縣交給某位胥吏全權承辦相關的公文書類。</div>");	
			}
			else if (n == 50){
				$("div.magicBox #content9").append("<div>「代書」係官府選擇考驗里民中之誠實識字者，幫人書寫呈狀，並初步過濾呈狀內容者，由官給發戳記，以憑稽查。</div>");	
			}
			else if (n == 51){
				$("div.magicBox #content9").append("<div>「原差」即原來負責此案的差役。</div>");	
			}
			else if (n == 52){
				$("div.magicBox #content9").append("<div>「抱告」，清制以婦女、老人、未成年人並無訴訟能力，必須派遣訴訟代理人至官府打官司；地方紳士亦可派遣訴訟代理人至官府打官司。此類訴訟代理人稱為抱告。</div>");	
			}
			else if (n == 53){
				$("div.magicBox #content9").append("<div>「期」表示係於官府受理呈狀之日，所提出的訴訟狀。清代台灣，官府受理訴訟狀日期為每月逢三、逢八之日。這些日期所提出的訴訟狀稱為「期呈」。若於長官出巡時，所提出的訴訟狀，則稱為「輿呈」；若事關緊要，無法拖延者，所提出的訴訟狀，則稱為「傳呈」。</div>");	
			}
			else if (n == 54){
				$("div.magicBox #content9").append("<div>「具狀人」係提出訴訟狀的當事人。</div>");	
			}
			else if (n == 55){
				$("div.magicBox #content9").append("<div>「雙行疊寫不閱不收」了避免提出呈狀者在呈狀正文中冗長敘述，事先印好的定型化呈狀上往往印上類似的字句。但證諸實例，夾寫雙行者所在多是。</div>");	
			}
			else if (n == 56){
				$("div.magicBox #content9").append("<div>「特授……正堂方批」此為知縣的條戳。</div>");	
			}
			else if (n == 57){
				$("div.magicBox #content9").append("<div>「前據蔡傳二……毋庸再瀆」知縣對此案件的正式的裁示，往往會蓋上私章，以防經辦的胥吏篡改。</div>");	
			}
			else if (n == 58){
				$("div.magicBox #content9").append("<div>「爾並不邀……稟覆核辦」此處係代書填寫前一次該訴訟人來衙門訴訟時，知縣的裁示，功能是便於衙役查找與本案相關的檔件。</div>");	
			}
			else if (n == 59){
				$("div.magicBox #content9").append("<div>「狀尾」係提出訴訟所當遵循的規定，期中多有說明哪些情況下官府不予受理，預印在呈狀之尾，故名之。《淡新檔案》中呈狀的狀尾大都被裁掉了。</div>");	
			}
			else if (n == 60){
				$("div.magicBox #content10").append("<div>前銜：「欽加提舉銜辦理竹塹鹽務兼新屬厘金分局選用按察司經廳史」。</div>");	
			}
			else if (n == 61){
				$("div.magicBox #content10").append("<div>事由：「為移請訊究事」。</div>");	
			}
			else if (n == 62){
				$("div.magicBox #content10").append("<div>正文：「竊敝館之南北廠督率晒鹽向有定章……希為照移施行。望切」。</div>");	
			}
			else if (n == 63){
				$("div.magicBox #content10").append("<div>結束語：「須至移者」。</div>");	
			}
			else if (n == 64){
				$("div.magicBox #content10").append("<div>受文者：「右移 賞戴藍翎欽加五品銜特授埔裏撫民分府署新竹縣正堂方」。</div>");	
			}
			else if (n == 65){
				$("div.magicBox #content10").append("<div>後書：成文時間為「光緒拾四年柒月貳拾日」，蓋有發文者史傳禮的「新竹鹽務委員鈐記」，時間下方寫著「移」字。</div>");	
			}
			else if (n == 66){
				$("div.magicBox #content11").append("<div>摺面的「關文」標明了文種。</div>");	
			}
			else if (n == 67){
				$("#pic17").css("display", "none");
				$("#pic18").css("display", "block");
			}
			else if (n == 68){
				$("#pic17").css("display", "block");
				$("#pic18").css("display", "none");
			}
			else if (n == 69){
				$("div.magicBox #content11").append("<div>結束語為「須至關者」。</div>");	
			}
			else if (n == 70){
				$("div.magicBox #content11").append("<div>「右關 福建臺灣北路淡防總捕分府曹」，表示受文者是淡水同知曹仕桂</div>");	
			}			
			else if (n == 71){
				$("div.magicBox #content11").append("<div>成文日期下方不署後銜，而寫一「移」字。不過通常使用「關」字。</div>");	
			}
			else if (n == 72){
				$("div.magicBox #content12").append("<div>事由是「為牒覆事」，行文動詞使用「牒」字。</div>");	
			}
			else if (n == 73){
				$("div.magicBox #content12").append("<div>結束語為「須至牒者」。</div>");	
			}
			else if (n == 74){
				$("div.magicBox #content12").append("<div>「一牒 基隆海防分府徐」，表示受文者是基隆通判徐廷灝，「一」字在謄錄成正本時會改寫成「右」字。</div>");	
			}
			else if (n == 75){
				$("div.magicBox #content13").append("<div>摺面的「札」字標明了文種，字上有標硃，但此處不蓋印，故無標記。</div>");	
			}
			else if (n == 76){
				$("div.magicBox #content13").append("<div>以條戳印就的發文者前銜與姓：「太子少保頭品頂戴兵部尚書福建巡撫部院一等輕軍都尉岑」。</div>");	
			}
			else if (n == 77){
				$("div.magicBox #content13").append("<div>結束語為「示」</div>");	
			}
			else if (n == 78){
				$("div.magicBox #content13").append("<div>「札新竹縣」，表示受文者是新竹縣衙門</div>");	
			}
			else if (n == 79){
				$("div.magicBox #content13").append("<div>札文僅在成文年月處蓋用發文者的印信，而且日期以硃筆填寫，成文時間下方不署後銜。</div>");	
			}
			else if (n == 80){
				$("div.magicBox #content14").append("<div>文種名稱「告示」寫在左上角。</div>");	
			}
			else if (n == 81){
				$("div.magicBox #content14").append("<div>結束語為「特示」。</div>");	
			}
			else if (n == 82){
				$("div.magicBox #content14").append("<div>此處標硃一「遵」字。</div>");	
			}
			else if (n == 83){
				$("div.magicBox #content14").append("<div>「發新竹縣曉諭」，表示此份告示是發給新竹知縣，讓其在縣境內張貼公布的。</div>");	
			}
			else if (n == 84){
				$("div.magicBox #content15").append("<div>以「為此，票仰……」揭示行文目的、對下級的要求。「票」表示所使用的公文種類，「仰」為命令詞</div>");	
			}
			else if (n == 85){
				$("div.magicBox #content15").append("<div>以「右票仰」指明受文者為陳隆、林淵。「仰」有時也改用「飭」、「差」、「催」等帶有命令意涵的詞彙。若縣官認為此事甚急，也會加上「火速，火速」等字眼。</div>");	
			}
			else if (n == 86){
				$("#content16").css("display","block");
			}
			else if (n == 87){
				$("#content16").css("display","none");
			}
			else if (n == 88){
				$("#pic26").css("display", "none");
				$("#pic27").css("display", "block");
				$("div.magicBox #content17").append("<div>此「單」是由代理新竹知縣沈茂蔭發給差役蔡其、陳旺、黃福、郭查四人，可以看到下行文正本特有的「標硃」。除了用紙和「票」不同，以及省略事由和相關事件經過概要，直接以「單仰……」揭示行文目的、對下級的要求，除了將文種名稱、行文動詞改用「單」字以外，其餘書寫用語、標硃形式和票大致相同。</div>");	
			}
			else if (n == 89){
				$("#pic26").css("display", "block");
				$("#pic27").css("display", "none");
			}
			else if (n == 90){
				$("div.magicBox #content17").append("<div>在發文者前銜之後，直接以「單仰……」揭示行文目的、對下級的要求，「單」表示所使用的公文種類，「仰」為命令詞。</div>");	
			}
			else if (n == 91){
				$("div.magicBox #content17").append("<div>結束語為「須牌」，並在其下有標硃「慎」字。</div>");	
			}
			else if (n == 92){
				$("div.magicBox #content17").append("<div>由於此單是為了解送人犯與物件，所以接收的淡水縣衙門在單上寫了「回照」二字並蓋了「淡水縣印」，再由負責解送的差役蔡其、陳旺、黃福、郭查四人將此單回繳新竹縣衙門。</div>");	
			}
			else if (n == 93){
				$("div.magicBox #content18").append("<div>「樾亭」是方祖蔭的字，在其他文獻上也寫成「樾庭」。</div>");	
			}
			else if (n == 94){
				$("div.magicBox #content18").append("<div>「李幹翁」，指彰化縣知縣李嘉棠，其字「幹臣」，因為尊稱與不直呼名諱的緣故，故缺去最後一個字並加上「翁」字，而成為「幹翁」。</div>");	
			}
			else if (n == 95){
				$("div.magicBox #content18").append("<div>結束語為「荷費神心……不既」是一種常見於信函之中的客套用語。</div>");	
			}
			else if (n == 96){
				$("div.magicBox #content18").append("<div>「汪興禕頓首」，公務用的信函，署名常用全名。</div>");	
			}
			else if (n == 97){
				$("div.magicBox #content19").append("<div>「切結狀」清楚地標明此一狀紙的性質，是用來作為保證的用途。</div>");	
			}
			else if (n == 98){
				$("div.magicBox #content19").append("<div>結束語為「合具切結狀是實」，用以表示具狀人保證以上所言是實，並願意負起責任。</div>");	
			}
			else if (n == 99){
				$("div.magicBox #content19").append("<div></div>");	
			}

			/* $("div.right div.content div").addClass("animated fadeIn"); /* the word fade in */
		}



		$(document).ready(
			function(){
				$("#oneTwo, #twoTwo, #twoThree, #twoFour").hover(
					function(){
						$(".arrow").addClass("animated infinite wobble");
						$(".arrow").css("display", "block");
					},
					function(){
						$(".arrow").removeClass("animated infinite wobble");
						$(".arrow").css("display", "none");
					}
				);
			}
		);


