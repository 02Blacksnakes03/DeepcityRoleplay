//$(".firstpage").hide();
$(".hudsettings").hide();
$(".container-settingsmenu").hide();
$(".container-hudsettings").hide();
$(".mittenotify").hide();
$(".container-speedometer").hide();
$(".progressbar").hide();
$(".chat").hide();
$(".container-layouts").hide();
$(".weaponcontainer").hide();
$(".container-speedometerthirdpage").hide();
$(".container-scroll").hide();
$(".container-thirst").hide();
$(".container-eat").hide();
$(".locationthirdpage").hide();
$(".jobthirdpage").hide();
$(".container-thirstthirdpage").hide();
$(".container-eatthirdpage").hide();
$(".jobsecondpage").hide();
$(".locationsecondpage").hide();
//$(".container-thirstsecondpage").hide();
//$(".container-eatsecondpage").hide();
$(".rechtsobenthirdpage").hide();
$(".leftobenthirdpage").hide();
$(".container-radio").hide();
$(".container-speeking").hide();
$(".container-moneythirdpage").hide();
$(".weaponcontainerthirdpage").hide();
$(".mittenotifythirdpage").hide();
$(".progressbarthirdparty").hide();
$(".container-radiosecondpage").hide();
$(".container-radiothirdradio").hide();
$(".container-speekingthirdpage").hide();
$(".container-speekingsecondpage").hide();

var insettingmenu = false;
// Third Page New
$(".mittenotifysecondpage").hide();
var removecontent;
var removecontent1;
var removecontent2;
$(".progressbarsecondpage").hide();
$(".container-speedometer2").hide();
var open = false;
$("document").ready(function () {
	window.addEventListener("message", function (event) {
		var msg = event.data;
		if (msg.type === "OpenAnnounce") {
			if (msg.Design == "0") {
				return;
			}
			var audio = new Audio("img/BigNotifySound.mp3");
			audio.volume = 0.5;
			audio.play();
			if (msg.HUDDesign == "1") {
				var number = getRandomInt(99999999999999);
				if (msg.category == "1") {
					const content = $(
						`
					<div class="notifycontainer">
					<img src="img/icons/AnnounceNotify1.png" class="topleftimg" alt="">
					<h1 class="textannounce">${msg.resultString}</h1>
					<h1 class="textcategory">SERVER ANNOUNCE</h1>
					<div class="container-moreinformationhugenotify">
					  <h1 class="textinformation2">${msg.name}</h1>
					</div>
					<div class="container-progressbarout">
					  <div class="container-progressinnen" id="serverannounce${number}" ></div>
					</div>
				  </div>
            `
					);

					$(".middlenotify").append(content);
					startLoading(msg.length, `serverannounce${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.length * 1000 + 250);
				} else if (msg.category == "2") {
					const content = $(
						`
					<div class="notifycontainer">
					<img src="img/icons/EventNotify.svg" class="topleftimg" alt="">
					<h1 class="textannounce">${msg.resultString}</h1>
					<h1 class="textcategory green">EVENT ANNOUNCE</h1>
					<div class="container-moreinformationhugenotify green">
					  <h1 class=" textinformation2">${msg.name}</h1>
					</div>
					<div class="container-progressbarout">
					  <div class="container-progressinnen green" id="serverannounce1${number}"></div>
					</div>
				  </div>
		`
					);

					$(".middlenotify").append(content);
					startLoading(msg.length, `serverannounce1${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.length * 1000 + 250);
				} else if (msg.category == "3") {
					const content = $(
						`
					<div class="notifycontainer">
					<img src="img/icons/PoliceNotify.svg" class="topleftimg" alt="">
					<h1 class="textannounce">${msg.resultString}</h1>
					<h1 class="textcategory blau">POLICE ANNOUNCE</h1>
					<div class="container-moreinformationhugenotify blau">
					  <h1 class="textinformation2">${msg.name}</h1>
					</div>
					<div class="container-progressbarout">
					  <div class="container-progressinnen blau" id="serverannounce2${number}"></div>
					</div>
				  </div>
		`
					);

					$(".middlenotify").append(content);
					startLoading(msg.length, `serverannounce2${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.length * 1000 + 250);
				} else if (msg.category == "4") {
					const content = $(
						`
					<div class="notifycontainer">
					<img src="img/icons/MedicNotify.svg" class="topleftimg" alt="">
					<h1 class="textannounce">${msg.resultString}</h1>
					<h1 class="textcategory orange">MEDIC ANNOUNCE</h1>
					<div class="container-moreinformationhugenotify orange">
					  <h1 class="textinformation2">${msg.name}</h1>
					</div>
					<div class="container-progressbarout">
					  <div class="container-progressinnen orange" id="serverannounce3${number}"></div>
					</div>
				  </div>
		`
					);

					$(".middlenotify").append(content);
					startLoading(msg.length, `serverannounce3${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.length * 1000 + 250);
				} else if (msg.category == "5") {
					const content = $(
						`
					<div class="notifycontainer">
					<img src="img/icons/FraktionNotify.svg" class="topleftimg" alt="">
					<h1 class="textannounce">${msg.resultString}</h1>
					<h1 class="textcategory lila">FRAKTION ANNOUNCE</h1>
					<div class="container-moreinformationhugenotify lila">
					  <h1 class="textinformation2">${msg.name}</h1>
					</div>
					<div class="container-progressbarout">
					  <div class="container-progressinnen lila" id="serverannounce4${number}"></div>
					</div>
				  </div>
		`
					);

					$(".middlenotify").append(content);
					startLoading(msg.length, `serverannounce4${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.length * 1000 + 250);
				}
			} else if (msg.HUDDesign == "2") {
				var number = getRandomInt(999999999999999);
				if (msg.category == "1") {
					const content = $(
						`
						<div class="notifycontainer">
						<img src="img/icons/AnnounceNotify1.png" class="topleftimgsecondpage" alt="">
						<h1 class="textannouncesecondpage">${msg.resultString}</h1>
						<h1 class="textcategorysecondpage">SERVER ANNOUNCE</h1>
						<div class="container-moreinformationhugenotifysecondpage">
						  <h1 class="textinformation2">${msg.name}</h1>
						</div>
						<div class="circleprogessbar">
						  <svg class="emptyCircle" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" />
						  </svg>
						  <svg class="filledCircle red" id="filledcircle1${number}" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
						  </svg>
						</div>
					  </div>
            `
					);

					$(".middlenotify").append(content);
					startLoading3(msg.length, `filledcircle1${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.length * 1000 + 250);
				} else if (msg.category == "2") {
					const content = $(
						`
						<div class="notifycontainer">
						<img src="img/icons/EventNotify.svg" class="topleftimgsecondpage" alt="">
						<h1 class="textannouncesecondpage">${msg.resultString}</h1>
						<h1 class="textcategorysecondpage green">EVENT ANNOUNCE</h1>
						<div class="container-moreinformationhugenotifysecondpage green">
						  <h1 class=" textinformation2">${msg.name}</h1>
						</div>
						<div class="circleprogessbar">
						  <svg class="emptyCircle" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" />
						  </svg>
						  <svg class="filledCircle green" id="filledcircle2${number}" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
						  </svg>
						</div>
					  </div>
		`
					);

					$(".middlenotify").append(content);
					startLoading3(msg.length, `filledcircle2${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.length * 1000 + 250);
				} else if (msg.category == "3") {
					const content = $(
						`
						<div class="notifycontainer">
						<img src="img/icons/PoliceNotify.svg" class="topleftimgsecondpage" alt="">
						<h1 class="textannouncesecondpage">${msg.resultString}</h1>
						<h1 class="textcategorysecondpage blau">POLICE ANNOUNCE</h1>
						<div class="container-moreinformationhugenotifysecondpage blau">
						  <h1 class="textinformation2">${msg.name}</h1>
						</div>
						<div class="circleprogessbar">
						  <svg class="emptyCircle" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" />
						  </svg>
						  <svg class="filledCircle blue" id="filledcircle3${number}" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
						  </svg>
						</div>
					  </div>
		`
					);

					$(".middlenotify").append(content);
					startLoading3(msg.length, `filledcircle3${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.length * 1000 + 250);
				} else if (msg.category == "4") {
					const content = $(
						`
						<div class="notifycontainer">
						<img src="img/icons/MedicNotify.svg" class="topleftimgsecondpage" alt="">
						<h1 class="textannouncesecondpage">${msg.resultString}</h1>
						<h1 class="textcategorysecondpage orange">MEDIC ANNOUNCE</h1>
						<div class="container-moreinformationhugenotifysecondpage orange">
						  <h1 class="textinformation2">${msg.name}</h1>
						</div>
						<div class="circleprogessbar">
						  <svg class="emptyCircle" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" />
						  </svg>
						  <svg class="filledCircle brown" id="filledcircle4${number}" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
						  </svg>
						</div>
					  </div>
		`
					);

					$(".middlenotify").append(content);
					startLoading3(msg.length, `filledcircle4${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.length * 1000 + 250);
				} else if (msg.category == "5") {
					const content = $(
						`
						<div class="notifycontainer">
						<img src="img/icons/FraktionNotify.svg" class="topleftimgsecondpage" alt="">
						<h1 class="textannouncesecondpage">${msg.resultString}</h1>
						<h1 class="textcategorysecondpage lila">FRAKTION ANNOUNCE</h1>
						<div class="container-moreinformationhugenotifysecondpage lila">
						  <h1 class="textinformation2">${msg.name}</h1>
						</div>
						<div class="circleprogessbar">
						  <svg class="emptyCircle" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" />
						  </svg>
						  <svg class="filledCircle lila" id="filledcircle5${number}" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
						  </svg>
						</div>
					  </div>
		`
					);

					$(".middlenotify").append(content);
					startLoading3(msg.length, `filledcircle5${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.length * 1000 + 250);
				}
			} else if (msg.HUDDesign == "3") {
				var number = getRandomInt(999999999999999);
				if (msg.category == "1") {
					const content = $(
						`
						<div class="notifycontainer">
						<img src="img/icons/AnnounceNotify1.png" class="topleftimgthirdpage" alt="">
						<h1 class="textannouncethirdpage">${msg.resultString}</h1>
						<h1 class="textcategory">SERVER ANNOUNCE</h1>
						<div class="container-moreinformationhugenotify">
						  <h1 class="textinformation2">${msg.name}</h1>
						</div>
						<div class="container-progressbaroutthirdpage">
						  <div class="container-progressinnenthirdpage" id="serverannounce${number}"></div>
						</div>
					  </div>
            `
					);

					$(".middlenotify").append(content);
					startLoading2(msg.length, `serverannounce${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.length * 1000 + 250);
				} else if (msg.category == "2") {
					const content = $(
						`
						<div class="notifycontainer">
						<img src="img/icons/EventNotify.svg" class="topleftimgthirdpage" alt="">
						<h1 class="textannouncethirdpage">${msg.resultString}</h1>
						<h1 class="textcategory green">EVENT ANNOUNCE</h1>
						<div class="container-moreinformationhugenotify green">
						  <h1 class=" textinformation2">${msg.name}</h1>
						</div>
						<div class="container-progressbaroutthirdpage">
						  <div class="container-progressinnenthirdpage green" id="serverannounce1${number}"></div>
						</div>
					  </div>
		`
					);

					$(".middlenotify").append(content);
					startLoading2(msg.length, `serverannounce1${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.length * 1000 + 250);
				} else if (msg.category == "3") {
					const content = $(
						`
						<div class="notifycontainer">
						<img src="img/icons/PoliceNotify.svg" class="topleftimgthirdpage" alt="">
						<h1 class="textannouncethirdpage">${msg.resultString}</h1>
						<h1 class="textcategory blau">POLICE ANNOUNCE</h1>
						<div class="container-moreinformationhugenotify blau">
						  <h1 class="textinformation2">${msg.name}</h1>
						</div>
						<div class="container-progressbaroutthirdpage">
						  <div class="container-progressinnenthirdpage blau" id="serverannounce2${number}"></div>
						</div>
					  </div>
		`
					);

					$(".middlenotify").append(content);
					startLoading2(msg.length, `serverannounce2${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.length * 1000 + 250);
				} else if (msg.category == "4") {
					const content = $(
						`
						<div class="notifycontainer">
						<img src="img/icons/MedicNotify.svg" class="topleftimgthirdpage" alt="">
						<h1 class="textannouncethirdpage">${msg.resultString}</h1>
						<h1 class="textcategory orange">MEDIC ANNOUNCE</h1>
						<div class="container-moreinformationhugenotify orange">
						  <h1 class="textinformation2">${msg.name}</h1>
						</div>
						<div class="container-progressbaroutthirdpage">
						  <div class="container-progressinnenthirdpage orange" id="serverannounce3${number}"></div>
						</div>
					  </div>
		`
					);

					$(".middlenotify").append(content);
					startLoading2(msg.length, `serverannounce3${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.length * 1000 + 250);
				} else if (msg.category == "5") {
					const content = $(
						`
						<div class="notifycontainer">
						<img src="img/icons/FraktionNotify.svg" class="topleftimgthirdpage" alt="">
						<h1 class="textannouncethirdpage">${msg.resultString}</h1>
						<h1 class="textcategory lila">FRAKTION ANNOUNCE</h1>
						<div class="container-moreinformationhugenotify lila">
						  <h1 class="textinformation2">${msg.name}</h1>
						</div>
						<div class="container-progressbaroutthirdpage">
						  <div class="container-progressinnenthirdpage lila" id="serverannounce4${number}"></div>
						</div>
					  </div>
		`
					);

					$(".middlenotify").append(content);
					startLoading2(msg.length, `serverannounce4${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.length * 1000 + 250);
				}
			}
		} else if (msg.type === "OpenSettingsMenu") {
			$(".container-settingsmenu").fadeIn(500);
			$(".container-hudsettings").fadeIn(1000);
			insettingmenu = true;
			$(".textcategorymenu").eq(0).addClass("active");
			$(".textcategorymenu").eq(1).removeClass("active");
			$(".textcategorymenu").eq(2).removeClass("active");
			$(".container-layouts").hide();
			$(".container-scroll").show();
			$(".container-scroll").html("");
			$.each(msg.list, function (index, item) {
				var data = item.name;
				var value;
				$.each(msg.result, function (index, item) {
					$.each(item, function (index, item) {
						if (data.toLowerCase() == index) {
							value = item;
						}
					});
				});

				var text;

				if (value == 0) {
					text = "OFF";
				} else if (value == 1) {
					text = "MODERN";
				} else if (value == 2) {
					text = "ROUND";
				} else if (value == 3) {
					text = "CLASSIC";
				}
				if (value == 0) {
					$(".container-scroll").append(`
				<div class="container-settings" id="button-${item.name}">
				   <div class="container-inner">
					   <h1 class="nameofsetting">${item.displayedname}</h1>
				   </div>
				   <button type="buttton" class="buttonauswahl off" id="buttonauswahl-${item.name}"  nameselected = "${item.name}" value = "${value}"  >${text}</button>
				 </div>
				`);
				} else {
					$(".container-scroll").append(`
				<div class="container-settings" id="button-${item.name}">
				   <div class="container-inner">
					   <h1 class="nameofsetting">${item.displayedname}</h1>
				   </div>
				   <button type="buttton" class="buttonauswahl" id="buttonauswahl-${item.name}"  nameselected = "${item.name}" value = "${value}"  >${text}</button>
				 </div>
				`);
				}
			});
		} else if (msg.type === "RemoveVehicleHUD") {
			$(".container-speedometerthirdpage").hide();
			$(".container-speedometer").hide();
			$(".container-speedometer2").hide();
		} else if (msg.type === "OpenVehicleHUD") {
			if (msg.speedodesgin == "0") {
				$(".container-speedometerthirdpage").hide();
				$(".container-speedometer").hide();
				$(".container-speedometer2").hide();
			} else if (msg.speedodesgin == "1") {
				$(".container-speedometerthirdpage").hide();
				$(".container-speedometer").show();
				$(".container-speedometer2").hide();
				document.getElementById("fuel-bar").style.width =
					msg.fuelLevel + "%";

				document.getElementById("speedometernumbermodern").innerHTML =
					msg.curspeed;
				MakeBarSpeedo(msg.widthPercent);
			} else if (msg.speedodesgin == "2") {
				$(".container-speedometerthirdpage").hide();
				$(".container-speedometer").hide();

				$(".container-speedometer2").show();
				let speed_percent = Math.min(
					100,
					Math.max(0, msg.widthPercent)
				);

				const maxGear = 6;
				const value = (msg.gear / maxGear) * 100;

				let gearpercent = Math.min(100, Math.max(0, value));

				let dash_max = 360;
				let dash_max2 = 90;

				let dash_min = 0;
				let dash_min2 = 0;

				let adjusted_dash =
					dash_min + (speed_percent / 100) * (dash_max - dash_min);

				let adjustgear =
					dash_min2 + (gearpercent / 100) * (dash_max2 - dash_min2);
				$(".speedo-circle").css(
					"stroke-dasharray",
					`${adjusted_dash}, 600`
				);
				$(".speedo-circle2").css(
					"stroke-dasharray",
					`${adjustgear}, 600`
				);
				document.getElementById("speedometernumbermodern2").innerHTML =
					msg.curspeed;
				document.getElementById("gangzahlsecondpage").innerHTML =
					msg.gear;
			} else if (msg.speedodesgin == "3") {
				$(".container-speedometerthirdpage").show();
				$(".container-speedometer").hide();
				$(".container-speedometer2").hide();
				document.getElementById("fuel-barthirdpage").style.width =
					msg.fuelLevel + "%";
				document.getElementById("innerbarthirdpage").style.width =
					msg.widthPercent + "%";
				document.getElementById("innerbarglowthirdpage").style.width =
					msg.widthPercent + "%";
				document.getElementById(
					"speedometernumberthirdpage"
				).innerHTML = msg.curspeed;
			}
		} else if (msg.type === "UpdateFuel") {
			if (msg.speedodesgin == "0") {
				return;
			} else if (msg.speedodesgin == "1") {
				document.getElementById("fuel-bar").style.width =
					msg.fuelLevel + "%";
			} else if (msg.speedodesgin == "2") {
				let fuelperecnt = Math.min(100, Math.max(0, msg.fuelLevel));
				let dash_max3 = 90;
				let dash_min3 = 0;
				let adjustfuel =
					dash_min3 + (fuelperecnt / 100) * (dash_max3 - dash_min3);
				$(".speedo-circle3").css(
					"stroke-dasharray",
					`${adjustfuel}, 600`
				);
				document.getElementById("anzahlliter").innerHTML =
					customRound(msg.fuelLevel) + "L";
			} else if (msg.speedodesgin == "3") {
				document.getElementById("fuel-barthirdpage").style.width =
					msg.fuelLevel + "%";
			}
		} else if (msg.type === "OpenVehicleHUDHeli") {
			if (msg.speedodesgin == "1") {
				$(".container-speedometer").show();

				document.getElementById("fuel-bar").style.width =
					msg.fuelLevel + "%";

				document.getElementById("speedometernumbermodern").innerHTML =
					msg.curspeed;
				MakeBarSpeedoHeli(msg.widthPercent);
			} else if (msg.speedodesgin == "2") {
				$(".container-speedometerthirdpage").hide();
				$(".container-speedometer").hide();
				$(".container-speedometer2").show();
				let speed_percent = Math.min(
					100,
					Math.max(0, msg.widthPercent)
				);
				document.getElementById("speedometernumbermodern2").innerHTML =
					msg.curspeed;
				let dash_max = 360;
				let dash_min = 0;

				let adjusted_dash =
					dash_min + (speed_percent / 100) * (dash_max - dash_min);

				$(".speedo-circle").css(
					"stroke-dasharray",
					`${adjusted_dash}, 600`
				);
				$(".speedo-circle2").css("stroke-dasharray", `90, 600`);
				document.getElementById("gangzahlsecondpage").innerHTML = "1";
			} else if (msg.speedodesgin == "3") {
				$(".container-speedometerthirdpage").show();
				$(".container-speedometer").hide();
				document.getElementById("innerbarthirdpage").style.width =
					msg.widthPercent + "%";
				document.getElementById("innerbarglowthirdpage").style.width =
					msg.widthPercent + "%";
				document.getElementById(
					"speedometernumberthirdpage"
				).innerHTML = msg.curspeed;
			}
		} else if (msg.type === "OpenKey") {
			if (msg.design == "0") {
				$(".mittenotifythirdpage").hide();
				$(".mittenotify").hide();
				$(".mittenotifysecondpage").hide();
			} else if (msg.design == "1") {
				$(".mittenotify").show();
				$(".mittenotifythirdpage").hide();
				$(".mittenotifysecondpage").hide();
				document.getElementById("drueckee").innerText = msg.Key;
				document.getElementById("infohelp").innerText = msg.text;
			} else if (msg.design == "2") {
				$(".mittenotify").hide();
				$(".mittenotifythirdpage").hide();
				$(".mittenotifysecondpage").show();
				document.getElementById("drueckesecondpage").innerText =
					msg.Key;
				document.getElementById("infohelptsecondpage").innerText =
					msg.text;
			} else if (msg.design == "3") {
				$(".mittenotify").hide();
				$(".mittenotifythirdpage").show();
				$(".mittenotifysecondpage").hide();
				document.getElementById("drueckeethirdpage").innerText =
					msg.Key;
				document.getElementById("infohelpthirdpage").innerText =
					msg.text;
			}
		} else if (msg.type === "hidenotify") {
			$(".mittenotify").hide();

			$(".mittenotifysecondpage").hide();

			$(".mittenotifythirdpage").hide();
		} else if (msg.type === "CloseHUD") {
			$(".firstpage").hide();
			$(".secondpage").hide();
			$(".thirdpage").hide();
		} else if (msg.type === "OpenHUD") {
			$(".firstpage").show();
			$(".secondpage").show();
			$(".thirdpage").show();
			SecureDataResourceStart();
			if (!msg.allowedblackomey) {
				$(".moneytext3").hide();
				$("#image3").hide();
				$(".moneytext3thirdpage").hide();
			} else {
				if (parseInt(msg.black) == 0) {
					$(".moneytext3").hide();
					$("#image3").hide();
					$(".moneytext3thirdpage").hide();
				}
			}

			if (msg.designbank == "1") {
				document.getElementById("cleanmoney").innerHTML =
					msg.moneysymbol + " " + addDots(msg.money);

				document.getElementById("blackmoney").innerHTML =
					msg.moneysymbol + " " + addDots(msg.black);

				document.getElementById("bankmoney").innerHTML =
					msg.moneysymbol + " " + addDots(msg.bank);
			} else if (msg.designbank == "2") {
				document.getElementById("cleanmoney").innerHTML =
					msg.moneysymbol + " " + addDots(msg.money);

				document.getElementById("blackmoney").innerHTML =
					msg.moneysymbol + " " + addDots(msg.black);

				document.getElementById("bankmoney").innerHTML =
					msg.moneysymbol + " " + addDots(msg.bank);
			} else if (msg.designbank == "3") {
				document.getElementById("cleanmoneythirdpage").innerHTML =
					msg.moneysymbol + " " + addDots(msg.money);

				document.getElementById("blackmoneythirdpage").innerHTML =
					msg.moneysymbol + " " + addDots(msg.black);

				document.getElementById("bankmoneythirdpage").innerHTML =
					msg.moneysymbol + " " + addDots(msg.bank);
			}

			document.getElementById("servername").innerHTML = msg.servername;

			document.getElementById("servernamethirdpage").innerHTML =
				msg.servername;
			document.getElementById("detailtext").innerHTML = msg.detailtext;

			document.getElementById("detailtextthirdpage").innerHTML =
				msg.detailtext;

			document.getElementById("idtext").innerText = "#" + msg.id;

			document.getElementById("idtextthirdpage").innerText = "#" + msg.id;

			document.getElementById("textjob").innerText = msg.job;
			document.getElementById("textjob2").innerText = msg.job;
			document.getElementById("detailjob").innerText = msg.jobdetailrank;
			document.getElementById("detailjob2").innerText = msg.jobdetailrank;
			document.getElementById("textjobthirdpage").innerText = msg.job;
			document.getElementById("detailjobthirdpage").innerText =
				msg.jobdetailrank;

			$(".container-stuffen").html("");
			for (let i = 0; i < msg.gruenteile; i++) {
				$(".container-stuffen").append(`
				<div class="container-activespeaking"></div>
				`);
			}

			$(".container-stuffen2").html("");
			for (let i = 0; i < msg.gruenteile; i++) {
				$(".container-stuffen2").append(`
				<div class="container-activespeakingsecondpage"></div>
				`);
			}
			sendTime();

			var amount = $(
				".container-stuffen .container-activespeaking"
			).length;

			for (let i = 0; i <= amount; i++) {
				$(".container-activespeaking").eq(i).removeClass("green");
			}

			for (let i = 0; i < msg.mode; i++) {
				$(".container-activespeaking")
					.eq(amount - i - 1)
					.addClass("green");
			}

			var amount = $(
				".container-stuffen2 .container-activespeakingsecondpage"
			).length;

			for (let i = 0; i <= amount; i++) {
				$(".container-activespeakingsecondpage")
					.eq(i)
					.removeClass("green");
			}

			for (let i = 0; i < msg.mode; i++) {
				$(".container-activespeakingsecondpage")
					.eq(amount - i - 1)
					.addClass("green");
			}
			document.getElementById("container-barinnerthirdpage").style.width =
				(msg.mode / msg.gruenteile) * 100 + "%";
		} else if (msg.type === "UpdateText") {
			if (msg.design == "0") {
				$(".mittenotifythirdpage").hide();
				$(".mittenotifysecondpage").hide();
				$(".mittenotify").hide();
			} else if (msg.design == "1") {
				$(".mittenotify").show();
				$(".mittenotifythirdpage").hide();
				$(".mittenotifysecondpage").hide();
				document.getElementById("drueckee").innerText = msg.Key;
				document.getElementById("infohelp").innerText = msg.text;
			} else if (msg.design == "2") {
				$(".mittenotify").hide();
				$(".mittenotifythirdpage").hide();
				$(".mittenotifysecondpage").show();
				document.getElementById("drueckesecondpage").innerText =
					msg.Key;
				document.getElementById("infohelptsecondpage").innerText =
					msg.text;
			} else if (msg.design == "3") {
				$(".mittenotifythirdpage").show();
				$(".mittenotify").hide();
				$(".mittenotifysecondpage").hide();
				document.getElementById("drueckeethirdpage").innerText =
					msg.Key;
				document.getElementById("infohelpthirdpage").innerText =
					msg.text;
			}
		} else if (msg.type === "UpdateWeapon") {
			if (msg.design == "0") {
				$(".weaponcontainerthirdpage").hide();
				$(".weaponcontainer").hide();
			} else if (msg.design == "1") {
				document.getElementById("ammunition").innerHTML =
					msg.ammoInClip + "/" + msg.ammoInWeapon;
				document.getElementById("weaponimg").src =
					"img/weapons/" + msg.name + ".png";
				$(".weaponcontainerthirdpage").hide();
				$(".weaponcontainer").show();
			} else if (msg.design == "2") {
				document.getElementById("ammunition").innerHTML =
					msg.ammoInClip + "/" + msg.ammoInWeapon;
				document.getElementById("weaponimg").src =
					"img/weapons/" + msg.name + ".png";

				$(".weaponcontainer").show();
				$(".weaponcontainerthirdpage").hide();
			} else if (msg.design == "3") {
				document.getElementById("ammunitionthirdpage").innerHTML =
					msg.ammoInClip + "/" + msg.ammoInWeapon;
				document.getElementById("weaponimgthirdpage").src =
					"img/weapons/" + msg.name + ".png";
				$(".weaponcontainer").hide();
				$(".weaponcontainerthirdpage").show();
			}
		} else if (msg.type === "RemoveWeapon") {
			$(".weaponcontainer").hide();
			$(".weaponcontainerthirdpage").hide();
		} else if (msg.type === "UpdateMoney") {
			if (!msg.allowedblackomey) {
				$(".moneytext3").hide();
				$("#image3").hide();
				$(".moneytext3thirdpage").hide();
			} else {
				if (parseInt(msg.value) == 0) {
					$(".moneytext3").hide();
					$("#image3").hide();
					$(".moneytext3thirdpage").hide();
				} else {
					$(".moneytext3").show();
					$("#image3").show();
					$(".moneytext3thirdpage").show();
				}
			}
			if (msg.design == "1") {
				if (msg.typeofmoney == "money") {
					document.getElementById("cleanmoney").innerHTML =
						msg.moneysymbol + " " + addDots(msg.value);
				} else if (msg.typeofmoney == "black_money") {
					document.getElementById("blackmoney").innerHTML =
						msg.moneysymbol + " " + addDots(msg.value);
				} else if (msg.typeofmoney == "bank") {
					document.getElementById("bankmoney").innerHTML =
						msg.moneysymbol + " " + addDots(msg.value);
				}
			} else if (msg.design == "2") {
				if (msg.typeofmoney == "money") {
					document.getElementById("cleanmoney").innerHTML =
						msg.moneysymbol + " " + addDots(msg.value);
				} else if (msg.typeofmoney == "black_money") {
					document.getElementById("blackmoney").innerHTML =
						msg.moneysymbol + " " + addDots(msg.value);
				} else if (msg.typeofmoney == "bank") {
					document.getElementById("bankmoney").innerHTML =
						msg.moneysymbol + " " + addDots(msg.value);
				}
			} else if (msg.design == "3") {
				if (msg.typeofmoney == "money") {
					document.getElementById("cleanmoneythirdpage").innerHTML =
						msg.moneysymbol + " " + addDots(msg.value);
				} else if (msg.typeofmoney == "black_money") {
					document.getElementById("blackmoneythirdpage").innerHTML =
						msg.moneysymbol + " " + addDots(msg.value);
				} else if (msg.typeofmoney == "bank") {
					document.getElementById("bankmoneythirdpage").innerHTML =
						msg.moneysymbol + " " + addDots(msg.value);
				}
			}
		} else if (msg.type === "UpdateMoney2") {
			if (!msg.allowedblackomey) {
				$(".moneytext3").hide();
				$("#image3").hide();
				$(".moneytext3thirdpage").hide();
			} else {
				if (parseInt(msg.black) == 0) {
					$(".moneytext3").hide();
					$("#image3").hide();
					$(".moneytext3thirdpage").hide();
				} else {
					$(".moneytext3").show();
					$("#image3").show();
					$(".moneytext3thirdpage").show();
				}
			}

			if (msg.design == "1") {
				document.getElementById("cleanmoney").innerHTML =
					msg.moneysymbol + " " + addDots(msg.money);

				document.getElementById("blackmoney").innerHTML =
					msg.moneysymbol + " " + addDots(msg.black);

				document.getElementById("bankmoney").innerHTML =
					msg.moneysymbol + " " + addDots(msg.bank);
			} else if (msg.design == "2") {
				document.getElementById("cleanmoney").innerHTML =
					msg.moneysymbol + " " + addDots(msg.money);

				document.getElementById("blackmoney").innerHTML =
					msg.moneysymbol + " " + addDots(msg.black);

				document.getElementById("bankmoney").innerHTML =
					msg.moneysymbol + " " + addDots(msg.bank);
			} else if (msg.design == "3") {
				document.getElementById("cleanmoneythirdpage").innerHTML =
					msg.moneysymbol + " " + addDots(msg.money);

				document.getElementById("blackmoneythirdpage").innerHTML =
					msg.moneysymbol + " " + addDots(msg.black);

				document.getElementById("bankmoneythirdpage").innerHTML =
					msg.moneysymbol + " " + addDots(msg.bank);
			}
		} else if (msg.type === "UpdateRange") {
			var amount = $(
				".container-stuffen .container-activespeaking"
			).length;

			for (let i = 0; i <= amount; i++) {
				$(".container-activespeaking").eq(i).removeClass("green");
			}

			for (let i = 0; i < msg.mode; i++) {
				$(".container-activespeaking")
					.eq(amount - i - 1)
					.addClass("green");
			}

			var amount = $(
				".container-stuffen2 .container-activespeakingsecondpage"
			).length;

			for (let i = 0; i <= amount; i++) {
				$(".container-activespeakingsecondpage")
					.eq(i)
					.removeClass("green");
			}

			for (let i = 0; i < msg.mode; i++) {
				$(".container-activespeakingsecondpage")
					.eq(amount - i - 1)
					.addClass("green");
			}
			document.getElementById("container-barinnerthirdpage").style.width =
				(msg.mode / msg.maxdesign) * 100 + "%";
		} else if (msg.type === "OpenRadio") {
			if (msg.design == "1") {
				$(".container-activeradio").removeClass("red");
				$(".container-activeradio").addClass("green");
			} else if (msg.design == "2") {
				$(".container-activeradiosecondpage").removeClass("red");
				$(".container-activeradiosecondpage").addClass("green");
			} else if (msg.design == "3") {
				$(".container-activeradiothirdpage").removeClass("red");
				$(".container-activeradiothirdpage").addClass("green");
			}
		} else if (msg.type === "RemoveRadio") {
			if (msg.design == "1") {
				$(".container-activeradio").addClass("red");
				$(".container-activeradio").removeClass("green");
			} else if (msg.design == "2") {
				$(".container-activeradiosecondpage").addClass("red");
				$(".container-activeradiosecondpage").removeClass("green");
			} else if (msg.design == "3") {
				$(".container-activeradiothirdpage").addClass("red");
				$(".container-activeradiothirdpage").removeClass("green");
			}
		} else if (msg.type === "OpenTeamNotify") {
			var audio = new Audio("img/HUD_Notify_Sound_mp3cut.net.mp3");
			audio.volume = 0.2;
			audio.play();
			if (msg.Design == "0") {
				return;
			} else if (msg.Design == "1") {
				if (msg.notifydesgin == "1") {
					var number = getRandomInt(999999999999999);
					const content = $(
						`
					<div class="notifyteam">

					<div class="container-moreinformation">
					  <h1 class="textinformation">${msg.name}</h1>
					</div>
					<h1 class="defaulttext right">${msg.message}</h1>
					<h1 class="notifytoptext team">TEAM</h1>    
					<div class="blur-notify team"></div>
					<div class="container-progressbar">
					  <div class="innerprogress right" id="teamannounce${number}"></div>
					</div>
				  </div>
	`
					);
					$(".container-rightadminnotify").append(content);

					startLoading(msg.time, `teamannounce${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.time * 1000 + 250);
				} else {
					var number = getRandomInt(999999999999999);
					const content = $(
						`
						<div class="notifyteam left">

						<div class="container-moreinformation6">
						  <h1 class="textinformation">${msg.name}</h1>
						</div>
						<h1 class="defaulttext">${msg.message}</h1>
						<h1 class="notifytoptext team2">TEAM</h1>
				
						<div class="blur-notify"></div>
						<div class="container-progressbar">
						  <div class="innerprogress right2" id="teamannounce${number}"></div>
						</div>
					  </div>
	`
					);
					$(".container-rightadminnotify").append(content);

					startLoading(msg.time, `teamannounce${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.time * 1000 + 250);
				}
			} else if (msg.Design == "2") {
				if (msg.notifydesgin == "1") {
					var number = getRandomInt(999999999999999);
					const content = $(
						`
					<div class="notifyteam">

        <div class="container-moreinformationsecondpage">
          <h1 class="textinformation">${msg.name}</h1>
        </div>
        <h1 class="defaulttextsecondpage right">${msg.message}</h1>
        <h1 class="notifytoptextsecondpage team">TEAM</h1>
        <div class="blur-notify team"></div>
        <img src="img/TeamChatNotify1.png" class="imgteamchat" alt="">
        <div class="circleprogessbar smallerone">
          <svg class="emptyCircle" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" />
          </svg>
          <svg class="filledCircle red" id="filledcircleteam${number}" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
          </svg>
        </div>
      </div>
	`
					);
					$(".container-rightadminnotify").append(content);

					startLoading3(msg.time, `filledcircleteam${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.time * 1000 + 250);
				} else {
					var number = getRandomInt(999999999999999);
					const content = $(
						`
					  
						<div class="notifyteam left">

						<div class="container-moreinformationsecondpage3 ">
						  <h1 class="textinformation">${msg.name}</h1>
						</div>
						<h1 class="defaulttextsecondpage left2">${msg.message}</h1>
						<h1 class="notifytoptextsecondpage team3">TEAM</h1>
						<div class="blur-notify team"></div>
						<img src="img/TeamChatNotify1.png" class="imgteamchat left" alt="">
						<div class="circleprogessbar smallerone3">
						  <svg class="emptyCircle" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" />
						  </svg>
						  <svg class="filledCircle red" id="filledcircleteam${number}" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
						  </svg>
						</div>
					  </div>
	`
					);
					$(".container-rightadminnotify").append(content);

					startLoading3(msg.time, `filledcircleteam${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.time * 1000 + 250);
				}
			} else if (msg.Design == "3") {
				if (msg.notifydesgin == "1") {
					var number = getRandomInt(999999999999999);
					const content = $(
						`
					<div class="notifyteam">

        <div class="container-moreinformation">
          <h1 class="textinformation">${msg.name}</h1>
        </div>
        <h1 class="defaulttext right">${msg.message}</h1>
        <h1 class="notifytoptext team">TEAM</h1>
        <div class="blur-notify team"></div>
        <div class="container-progressbarthirdpage2 right">
          <div class="innerprogressthirdpage right" id="teamannounce${number}"></div>
        </div>
      </div>
	`
					);
					$(".container-rightadminnotify").append(content);

					startLoading2(msg.time, `teamannounce${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.time * 1000 + 250);
				} else {
					var number = getRandomInt(999999999999999);
					const content = $(
						`
						<div class="notifyteam left">

						<div class="container-moreinformation6">
						  <h1 class="textinformation">${msg.name}</h1>
						</div>
						<h1 class="defaulttext">${msg.message}</h1>
						<h1 class="notifytoptext team2">TEAM</h1>
						<div class="blur-notify team"></div>
						<div class="container-progressbarthirdpage2">
						  <div class="innerprogressthirdpage right2" id="teamannounce${number}"></div>
						</div>
					  </div>
	`
					);
					$(".container-rightadminnotify").append(content);

					startLoading2(msg.time, `teamannounce${number}`);
					setTimeout(() => {
						content.fadeOut(500);
					}, msg.time * 1000 + 250);
				}
			}
		} else if (msg.type === "OpenInfoNotify") {
			if (msg.Design == "0") {
				return;
			}
			var audio = new Audio("img/HUD_Notify_Sound_mp3cut.net.mp3");
			audio.volume = 0.2;
			audio.play();

			if (msg.Design == "1") {
				var number = getRandomInt(999999999999999);
				if (msg.category == "1") {
					if (msg.notifydesgin == "1") {
						const content = $(
							`
							<div class="container-notify">
							<img src="img/icons/InformationNotify2.svg" class="iconnotify" alt="">
							<h1 class="notifytoptext">${msg.titel}</h1>
							<div class="blur-notify"></div>
							<h1 class="defaulttext">${msg.message}</h1>
							<div class="container-progressbar">
							  <div class="innerprogress" id="informationenbar${number}" ></div>
							</div>
						  </div>
			`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading(msg.time, `informationenbar${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					} else {
						const content = $(
							`
							<div class="container-notify left">
							<img src="img/icons/InformationNotify2.svg" class="iconnotify left" alt="">
							<h1 class="notifytoptext left">${msg.titel}</h1>
							<div class="blur-notify left"></div>
							<h1 class="defaulttext left">${msg.message}</h1>
							<div class="container-progressbar left">
							  <div class="innerprogress left" id="informationenbar${number}"></div>
							</div>
						  </div>
			`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading(msg.time, `informationenbar${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					}
				} else if (msg.category == "2") {
					if (msg.notifydesgin == "1") {
						const content = $(
							`
						<div class="container-notify">
						<img src="img/icons/SuccessNotify.svg" class="iconnotify success" alt="">
						<h1 class="notifytoptext success">${msg.titel}</h1>   
						<div class="blur-notify success"></div>
						<h1 class="defaulttext">${msg.message}</h1>
						<div class="container-progressbar">
						  <div class="innerprogress success" id="successbar${number}"></div>
						</div>
					  </div>
		`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading(msg.time, `successbar${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					} else {
						const content = $(
							`
							<div class="container-notify left">
							<img src="img/icons/SuccessNotify.svg" class="iconnotify left success" alt="">
							<h1 class="notifytoptext left success">${msg.titel}</h1>
							<div class="blur-notify left success"></div>
							<h1 class="defaulttext left">${msg.message}</h1>
							<div class="container-progressbar left">
							  <div class="innerprogress success left" id="successbar${number}"></div>
							</div>
						  </div>
			`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading(msg.time, `successbar${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					}
				} else if (msg.category == "3") {
					if (msg.notifydesgin == "1") {
						const content = $(
							`
						<div class="container-notify">
						<img src="img/icons/ErrorNotify.svg" class="iconnotify error" alt="">
						<h1 class="notifytoptext error">${msg.titel}</h1>   
						<div class="blur-notify error"></div>
						<h1 class="defaulttext">${msg.message}</h1>
						<div class="container-progressbar">
						  <div class="innerprogress error" id="errorbar${number}" ></div>
						</div>
					  </div>
	`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading(msg.time, `errorbar${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					} else {
						const content = $(
							`
							<div class="container-notify left">
        <img src="img/icons/ErrorNotify.svg" class="iconnotify left error" alt="">
        <h1 class="notifytoptext left error">${msg.titel}</h1>
        <div class="blur-notify  left error"></div>
        <h1 class="defaulttext left">${msg.message}</h1>
        <div class="container-progressbar left">
          <div class="innerprogress left error" id="errorbar${number}"></div>
        </div>
      </div>
			`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading(msg.time, `errorbar${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					}
				} else if (msg.category == "4") {
					if (msg.notifydesgin == "1") {
						const content = $(
							`
						<div class="container-notify">
						<h1 class="notifytoptext ooc">${msg.titel}</h1>
						<div class="blur-notify ooc"></div>
						<div class="container-moreinformation3">
						  <h1 class="textinformation left">${msg.name}</h1>
						</div>
						<h1 class="defaulttext">${msg.message}</h1>
						<div class="container-progressbar">
						  <div class="innerprogress ooc" id="oocnachricht${number}"></div>
						</div>
					  </div>
	`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading(msg.time, `oocnachricht${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					} else {
						const content = $(
							`
							<div class="container-notify left">
        <h1 class="notifytoptext left ooc">${msg.titel}</h1>
        <div class="blur-notify left ooc"></div>
        <div class="container-moreinformation3 left2">
          <h1 class="textinformation left">${msg.name}</h1>
        </div>
        <h1 class="defaulttext left">${msg.message}</h1>
        <div class="container-progressbar left">
          <div class="innerprogress left ooc" id="oocnachricht${number}"></div>
        </div>
      </div>
			`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading(msg.time, `oocnachricht${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					}
				}
			} else if (msg.Design == "2") {
				var number = getRandomInt(999999999999999);
				if (msg.category == "1") {
					if (msg.notifydesgin == "1") {
						const content = $(
							`
						<div class="container-notify">
        <img src="img/icons/InformationNotify2.svg" class="iconnotifysecondpage" alt="">
        <h1 class="notifytoptextsecondpage">${msg.titel}</h1>
        <div class="blur-notify"></div>
        <h1 class="defaulttextsecondpage">${msg.message}</h1>
        <div class="circleprogessbar smallerone2">
          <svg class="emptyCircle" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" />
          </svg>
          <svg class="filledCircle yellow" id="filledcircleinfo${number}" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
          </svg>
        </div>
      </div>
		`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading3(msg.time, `filledcircleinfo${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					} else {
						const content = $(
							`
							<div class="container-notify left">
        <img src="img/icons/InformationNotify2.svg" class="iconnotifysecondpage left" alt="">
        <h1 class="notifytoptextsecondpage left">${msg.titel}</h1>
        <div class="blur-notify left"></div>
        <h1 class="defaulttextsecondpage left">${msg.message}</h1>
        <div class="circleprogessbar left smallerone2">
          <svg class="emptyCircle" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" />
          </svg>
          <svg class="filledCircle yellow" id="filledcircleinfo${number}" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
          </svg>
        </div>
      </div>
			`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading3(msg.time, `filledcircleinfo${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					}
				} else if (msg.category == "2") {
					if (msg.notifydesgin == "1") {
						const content = $(
							`
						<div class="container-notify">
						<img src="img/icons/SuccessNotify.svg" class="iconnotifysecondpage success" alt="">
						<h1 class="notifytoptextsecondpage success">${msg.titel}</h1>
						<div class="blur-notify success"></div>
						<h1 class="defaulttextsecondpage">${msg.message}</h1>
						<div class="circleprogessbar smallerone2">
						  <svg class="emptyCircle" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" />
						  </svg>
						  <svg class="filledCircle green" id="filledcirclesuccess${number}" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
						  </svg>
						</div>
					  </div>
		`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading3(msg.time, `filledcirclesuccess${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					} else {
						const content = $(
							`
							<div class="container-notify left">
							<img src="img/icons/SuccessNotify.svg" class="iconnotifysecondpage left success" alt="">
							<h1 class="notifytoptextsecondpage left success">${msg.titel}</h1>
							<div class="blur-notify left success"></div>
							<h1 class="defaulttextsecondpage left">${msg.message}</h1>
							<div class=" circleprogessbar left smallerone2">
							  <svg class="emptyCircle" viewBox="0 0 100 100">
								<circle cx="50" cy="50" r="45" />
							  </svg>
							  <svg class="filledCircle green" id="filledcirclesuccess${number}" viewBox="0 0 100 100">
								<circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
							  </svg>
							</div>
						  </div>
			`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading3(msg.time, `filledcirclesuccess${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					}
				} else if (msg.category == "3") {
					if (msg.notifydesgin == "1") {
						const content = $(
							`
							<div class="container-notify ">
							<img src="img/icons/ErrorNotify.svg" class="iconnotifysecondpage  error" alt="">
							<h1 class="notifytoptextsecondpage  error">${msg.titel}</h1>
							<div class="blur-notify  error"></div>
							<h1 class="defaulttextsecondpage ">${msg.message}</h1>
							<div class="circleprogessbar  smallerone2">
							  <svg class="emptyCircle" viewBox="0 0 100 100">
								<circle cx="50" cy="50" r="45" />
							  </svg>
							  <svg class="filledCircle red" id="filledcircleerror${number}" viewBox="0 0 100 100">
								<circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
							  </svg>
							</div>
						  </div>
	`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading3(msg.time, `filledcircleerror${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					} else {
						const content = $(
							`
							<div class="container-notify left">
							<img src="img/icons/ErrorNotify.svg" class="iconnotifysecondpage left error" alt="">
							<h1 class="notifytoptextsecondpage left error">${msg.titel}</h1>
							<div class="blur-notify left error"></div>
							<h1 class="defaulttextsecondpage left">${msg.message}</h1>
							<div class="circleprogessbar left smallerone2">
							  <svg class="emptyCircle" viewBox="0 0 100 100">
								<circle cx="50" cy="50" r="45" />
							  </svg>
							  <svg class="filledCircle red" id="filledcircleerror${number}" viewBox="0 0 100 100">
								<circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
							  </svg>
							</div>
						  </div>
			`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading3(msg.time, `filledcircleerror${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					}
				} else if (msg.category == "4") {
					if (msg.notifydesgin == "1") {
						const content = $(
							`
							<div class="container-notify ">
        <img src="img/OocNotify1.png" class="iconnotifysecondpage  ooc" alt="">
        <h1 class="notifytoptextsecondpage  ooc">${msg.titel}</h1>
        <div class="blur-notify  ooc"></div>
        <div class="container-moreinformation4 ">
          <h1 class="textinformation ">${msg.name}</h1>
        </div>
        <h1 class="defaulttextsecondpage ">${msg.message}</h1>
        <div class="circleprogessbar  smallerone2">
          <svg class="emptyCircle" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" />
          </svg>
          <svg class="filledCircle blueocc" id="filledcircleooc${number}" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
          </svg>
        </div>
      </div>
	`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading3(msg.time, `filledcircleooc${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					} else {
						const content = $(
							`
							<div class="container-notify left">
        <img src="img/OocNotify1.png" class="iconnotifysecondpage left ooc" alt="">
        <h1 class="notifytoptextsecondpage left ooc">${msg.titel}</h1>
        <div class="blur-notify left ooc"></div>
        <div class="container-moreinformation4 left">
          <h1 class="textinformation left">${msg.name}</h1>
        </div>
        <h1 class="defaulttextsecondpage left">${msg.message}</h1>
        <div class="circleprogessbar left smallerone2">
          <svg class="emptyCircle" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" />
          </svg>
          <svg class="filledCircle blueocc" id="filledcircleooc${number}" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
          </svg>
        </div>
      </div>
			`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading3(msg.time, `filledcircleooc${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					}
				}
			} else if (msg.Design == "3") {
				var number = getRandomInt(999999999999999);
				if (msg.category == "1") {
					if (msg.notifydesgin == "1") {
						const content = $(
							`
							<div class="container-notifythirdpage">
							<img src="img/icons/InformationNotify2.svg" class="iconnotifythirdpage" alt="">
							<h1 class="notifytoptext">${msg.titel}</h1>
							<div class="blur-notify"></div>
							<h1 class="defaulttextthirdpage">${msg.message}</h1>
							<div class="container-progressbarthirdpage2">
							  <div class="innerprogressthirdpage" id="informationenbar${number}"></div>
							</div>
						  </div>
			`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading2(msg.time, `informationenbar${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					} else {
						const content = $(
							`
							<div class="container-notifythirdpage left">
							<img src="img/icons/InformationNotify2.svg" class="iconnotifythirdpage left" alt="">
							<h1 class="notifytoptext left">${msg.titel}</h1>
							<div class="blur-notify"></div>
							<h1 class="defaulttextthirdpage left">${msg.message}</h1>
							<div class="container-progressbarthirdpage25 right2">
							  <div class="innerprogressthirdpage" id="informationenbar${number}"></div>
							</div>
						  </div>
			`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading2(msg.time, `informationenbar${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					}
				} else if (msg.category == "2") {
					if (msg.notifydesgin == "1") {
						const content = $(
							`
						<div class="container-notifythirdpage">
        <img src="img/icons/SuccessNotify.svg" class="iconnotifythirdpage success" alt="">
        <h1 class="notifytoptext success">${msg.titel}</h1>
        <div class="blur-notify success"></div>
        <h1 class="defaulttextthirdpage">${msg.message}</h1>
        <div class="container-progressbarthirdpage2">
          <div class="innerprogressthirdpage success" id="successbar${number}"></div>
        </div>
      </div>
		`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading2(msg.time, `successbar${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					} else {
						const content = $(
							`
							<div class="container-notifythirdpage left">
							<img src="img/icons/SuccessNotify.svg" class="iconnotifythirdpage left success" alt="">
							<h1 class="notifytoptext left success">${msg.titel}</h1>
							<div class="blur-notify success"></div>
							<h1 class="defaulttextthirdpage left">${msg.message}</h1>
							<div class="container-progressbarthirdpage25 right2">
							  <div class="innerprogressthirdpage success" id="successbar${number}"></div>
							</div>
						  </div>
			`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading2(msg.time, `successbar${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					}
				} else if (msg.category == "3") {
					if (msg.notifydesgin == "1") {
						const content = $(
							`
						<div class="container-notifythirdpage">
        <img src="img/icons/ErrorNotify.svg" class="iconnotifythirdpage error" alt="">
        <h1 class="notifytoptext error">${msg.titel}</h1>
        <div class="blur-notify error"></div>
        <h1 class="defaulttextthirdpage">${msg.message}</h1>
        <div class="container-progressbarthirdpage2">
          <div class="innerprogressthirdpage error" id="errorbar${number}"></div>
        </div>
      </div>
	`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading2(msg.time, `errorbar${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					} else {
						const content = $(
							`
							<div class="container-notifythirdpage left">
							<img src="img/icons/ErrorNotify.svg" class="iconnotifythirdpage left error" alt="">
							<h1 class="notifytoptext left error">${msg.titel}</h1>
							<div class="blur-notify error"></div>
							<h1 class="defaulttextthirdpage left">${msg.message}</h1>
							<div class="container-progressbarthirdpage25 right2">
							  <div class="innerprogressthirdpage error" id="errorbar${number}"></div>
							</div>
						  </div>
			`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading2(msg.time, `errorbar${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					}
				} else if (msg.category == "4") {
					if (msg.notifydesgin == "1") {
						const content = $(
							`
						<div class="container-notifythirdpage">
        <h1 class="notifytoptext ooc">${msg.titel}</h1>
        <div class="blur-notify ooc"></div>
        <div class="container-moreinformation3">
          <h1 class="textinformation left">${msg.name}</h1>
        </div>
        <h1 class="defaulttextthirdpage ooc">${msg.message}</h1>
        <div class="container-progressbarthirdpage2">
          <div class="innerprogressthirdpage ooc" id="oocnachricht${number}"></div>
        </div>
      </div>
	`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading2(msg.time, `oocnachricht${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					} else {
						const content = $(
							`
							<div class="container-notifythirdpage left">
        <h1 class="notifytoptext left2 ooc">${msg.titel}</h1>
        <div class="blur-notify left ooc"></div>
        <div class="container-moreinformation3 left2">
          <h1 class="textinformation ">${msg.name}</h1>
        </div>
        <h1 class="defaulttextthirdpage left2 ooc">${msg.message}</h1>
        <div class="container-progressbarthirdpage25 right2">
          <div class="innerprogressthirdpage ooc" id="oocnachricht${number}"></div>
        </div>
      </div>
			`
						);
						$(".leftnotifyscontainer").prepend(content);

						startLoading2(msg.time, `oocnachricht${number}`);
						setTimeout(() => {
							content.fadeOut(500);
						}, msg.time * 1000 + 250);
					}
				}
			}
		} else if (msg.type === "UpdatePlayerCount") {
			document.getElementById("playersonlinetext").innerHTML =
				msg.onlineplayer + "/" + msg.maxclients;
			document.getElementById("playerthirdpage").innerHTML =
				msg.onlineplayer;
		} else if (msg.type === "UpdateJob") {
			if (msg.designjob == "1") {
				document.getElementById("textjob").innerText = msg.job;
				document.getElementById("detailjob").innerText =
					msg.jobdetailrank;
			} else if (msg.designjob == "2") {
				document.getElementById("textjob").innerText = msg.job;
				document.getElementById("detailjob").innerText =
					msg.jobdetailrank;
			} else if (msg.designjob == "3") {
				document.getElementById("textjobthirdpage").innerText = msg.job;
				document.getElementById("detailjobthirdpage").innerText =
					msg.jobdetailrank;
			}
		} else if (msg.type === "OpenLoadingBar") {
			if (msg.design == "1") {
				counter2 = 0;
				resetbar();
				document.getElementById("infotext").innerHTML = msg.helptext;
				$(".progressbar").show();
				progress2 = setInterval(() => {
					// Counter
					counter2 += 1;
					MakeBarone(counter2);
					document.getElementById("prozentzahl").innerHTML =
						counter2 + "%";
					if (counter2)
						if (counter2 === 100) {
							counter2 = 0;
							$(".progressbar").hide();
							clearInterval(progress2);
						}
				}, msg.time / 100);
			} else if (msg.design == "2") {
				counter2 = 0;
				resetbar();
				document.getElementById("infotextsecondpage").innerHTML =
					msg.helptext;
				$(".progressbarsecondpage").show();
				progress2 = setInterval(() => {
					// Counter
					counter2 += 1;
					MakeBaroneSecondPage(counter2);
					document.getElementById("prozentzahlsecondpage").innerHTML =
						counter2 + "%";
					if (counter2)
						if (counter2 === 100) {
							counter2 = 0;
							$(".progressbarsecondpage").hide();
							clearInterval(progress2);
						}
				}, msg.time / 100);
			} else if (msg.design == "3") {
				counter2 = 0;
				resetbar();
				document.getElementById("infotextthirdpage").innerHTML =
					msg.helptext;
				$(".progressbarthirdparty").show();
				progress2 = setInterval(() => {
					// Counter
					counter2 += 1;
					document.getElementById("progressbarinnerit").style.width =
						counter2 + "%";
					document.getElementById("prozentzahlthirdpage").innerHTML =
						counter2 + "%";
					if (counter2)
						if (counter2 === 100) {
							counter2 = 0;
							$(".progressbarthirdparty").hide();
							clearInterval(progress2);
						}
				}, msg.time / 100);
			}
		} else if (msg.type === "UpdateStreet") {
			document.getElementById("streetname").innerHTML = msg.street;
			document.getElementById("zonename").innerHTML = msg.zonename;
			document.getElementById("streetnamethirdpage").innerHTML =
				msg.street;
			document.getElementById("zonenamethirdpage").innerHTML =
				msg.zonename;
		} else if (msg.type === "UpdateMotor") {
			if (msg.value == true) {
				document.getElementById("motorstatus").src =
					"img/icons/motor.png";
				document.getElementById("motorstatusthirdpage").src =
					"img/icons/motor.png";
				document.getElementById("motorstatussecondpage").src =
					"img/icons/motor.png";
			} else {
				document.getElementById("motorstatus").src =
					"img/icons/Vectoroff.png";
				document.getElementById("motorstatusthirdpage").src =
					"img/icons/Vectoroff.png";
				document.getElementById("motorstatussecondpage").src =
					"img/icons/Vectoroff.png";
			}
		} else if (msg.type === "Updatelight") {
			if (msg.value == 3) {
				document.getElementById("lightstatus").src =
					"img/icons/normallicht.png";
				document.getElementById("lightstatussecondpage").src =
					"img/icons/normallicht.png";
				document.getElementById("lightstatusthirdpage").src =
					"img/icons/normallicht.png";
			} else if (msg.value == 2) {
				document.getElementById("lightstatus").src =
					"img/icons/lichhigbeams.png";
				document.getElementById("lightstatussecondpage").src =
					"img/icons/lichhigbeams.png";
				document.getElementById("lightstatusthirdpage").src =
					"img/icons/lichhigbeams.png";
			} else if (msg.value == 1) {
				document.getElementById("lightstatus").src =
					"img/icons/light.png";
				document.getElementById("lightstatussecondpage").src =
					"img/icons/light.png";
				document.getElementById("lightstatusthirdpage").src =
					"img/icons/light.png";
			}
		} else if (msg.type === "Updatelkock") {
			if (msg.value == true) {
				document.getElementById("lockstatus").src =
					"img/icons/locked.png";
				document.getElementById("lockstatussecondpage").src =
					"img/icons/locked.png";
				document.getElementById("lockstatusthirdpage").src =
					"img/icons/locked.png";
			} else {
				document.getElementById("lockstatus").src =
					"img/icons/lock.png";
				document.getElementById("lockstatussecondpage").src =
					"img/icons/lock.png";
				document.getElementById("lockstatusthirdpage").src =
					"img/icons/lock.png";
			}
		} else if (msg.type === "tickvalues") {
			if (msg.fooddesign == "0") {
				$(".container-thirst").hide();
				$(".container-eat").hide();
				$(".container-thirstthirdpage").hide();
				$(".container-eatthirdpage").hide();
				$(".container-thirstsecondpage").hide();
				$(".container-eatsecondpage").hide();
			} else if (msg.fooddesign == "1") {
				$(".container-thirst").show();
				$(".container-eat").show();
				$(".container-thirstthirdpage").hide();
				$(".container-eatthirdpage").hide();
				$(".container-thirstsecondpage").hide();
				$(".container-eatsecondpage").hide();
				if (msg.thirst == undefined || msg.hunger == undefined) return;
				makethirst(parseInt(msg.thirst));
				makehunger(parseInt(msg.hunger));
			} else if (msg.fooddesign == "2") {
				$(".container-thirst").hide();
				$(".container-eat").hide();
				$(".container-thirstthirdpage").hide();
				$(".container-eatthirdpage").hide();
				$(".container-thirstsecondpage").show();
				$(".container-eatsecondpage").show();
				if (msg.thirst == undefined || msg.hunger == undefined) return;
				makethirst2(parseInt(msg.thirst));
				makehunger2(parseInt(msg.hunger));
			} else if (msg.fooddesign == "3") {
				$(".container-thirst").hide();
				$(".container-eat").hide();
				$(".container-thirstthirdpage").show();
				$(".container-eatthirdpage").show();
				$(".container-thirstsecondpage").hide();
				$(".container-eatsecondpage").hide();
				if (msg.thirst == undefined || msg.hunger == undefined) return;
				document.getElementById("thirstthirdpage").style.width =
					parseInt(msg.thirst) + "%";
				document.getElementById("foodthirdpage").style.width =
					parseInt(msg.hunger) + "%";
				document.getElementById("thirstprozent").innerHTML =
					msg.thirst + "%";
				document.getElementById("eatprozent").innerHTML =
					msg.hunger + "%";
			}
		} else if (msg.type === "UpdateTalking") {
			if (msg.value == true) {
				document.getElementById("mikrosvg").src =
					"img/icons/activemic.png";
				document.getElementById("mikrosvgsecondpage").src =
					"img/icons/activemic.png";
				document.getElementById("mikrosvgthirdpage").src =
					"img/icons/activemic.png";
			} else {
				document.getElementById("mikrosvg").src = "img/icons/Mikro.svg";
				document.getElementById("mikrosvgsecondpage").src =
					"img/icons/Mikro.svg";
				document.getElementById("mikrosvgthirdpage").src =
					"img/icons/Mikro.svg";
			}
		} else if (msg.type === "OnMute") {
			if (msg.value == true) {
				document.getElementById("mikrosvg").src =
					"img/icons/OnMute.png";
				document.getElementById("mikrosvgsecondpage").src =
					"img/icons/OnMute.png";
				document.getElementById("mikrosvgthirdpage").src =
					"img/icons/OnMute.png";
			} else {
				document.getElementById("mikrosvg").src = "img/icons/Mikro.svg";
				document.getElementById("mikrosvgsecondpage").src =
					"img/icons/Mikro.svg";
				document.getElementById("mikrosvgthirdpage").src =
					"img/icons/Mikro.svg";
			}
		} else if (msg.type === "OpenChat") {
			$(".chat").show();
			document.getElementById("inputttext").value = "";
			document.getElementById("inputttext").focus();
			setTimeout(function () {
				open = true;
			}, 100);
		} else if (msg.type === "Inserttext") {
			document.getElementById("inputttext").value = addSlashBeforeCommand(
				msg.value
			);
		} else if (msg.type === "InsertSuggestions") {
			$(".container-options").html("");
			$.each(msg.suggestions, function (index, item) {
				$(".container-options").append(`
				<div class="container-select" name = "${item.name}">
				<h1 class="textinselect">/${item.name}</h1>
			  </div>
				`);
			});
		} else if (msg.type === "UpdateVehicleHUD") {
			if (msg.value == "0") {
				$(".container-speedometerthirdpage").hide();
				$(".container-speedometer").hide();
				$(".container-speedometer2").hide();
			} else if (msg.value == "1") {
				$(".container-speedometerthirdpage").hide();
				$(".container-speedometer").show();
				$(".container-speedometer2").hide();
			} else if (msg.value == "2") {
				$(".container-speedometerthirdpage").hide();
				$(".container-speedometer").hide();
				$(".container-speedometer2").show();
			} else if (msg.value == "3") {
				$(".container-speedometerthirdpage").show();
				$(".container-speedometer").hide();
				$(".container-speedometer2").hide();
			}
		} else if (msg.type === "UpdatePlayerCounter") {
			if (msg.value == "0") {
				$(".leftoben").hide();
				$(".leftobenthirdpage").hide();
				$(".location").hide();
				$(".job").hide();
				$(".locationthirdpage").hide();
				$(".jobthirdpage").hide();
			} else if (msg.value == "1") {
				$(".leftobenthirdpage").hide();
				$(".leftoben").show();
				$(".location").show();
				$(".job").show();
				$(".locationthirdpage").hide();
				$(".jobthirdpage").hide();
			} else if (msg.value == "2") {
				$(".leftobenthirdpage").hide();
				$(".leftoben").show();
				$(".location").show();
				$(".job").show();
				$(".locationthirdpage").hide();
				$(".jobthirdpage").hide();
			} else if (msg.value == "3") {
				$(".leftobenthirdpage").show();
				console.log("hey");
				$(".leftoben").hide();
				$(".locationthirdpage").show();
				$(".jobthirdpage").show();
				$(".location").hide();
				$(".job").hide();
			}
		} else if (msg.type === "UpdateTopRightHUD") {
			if (msg.value == "0") {
				$(".rechtsobenthirdpage").hide();
				$(".rechtsoben").hide();
			} else if (msg.value == "1") {
				$(".rechtsobenthirdpage").hide();
				$(".rechtsoben").show();
			} else if (msg.value == "2") {
				$(".rechtsobenthirdpage").hide();
				$(".rechtsoben").show();
			} else if (msg.value == "3") {
				$(".rechtsobenthirdpage").show();
				$(".rechtsoben").hide();
			}
		} else if (msg.type === "UpdateBankInfo") {
			if (msg.value == "0") {
				$(".container-money").hide();
				$(".container-moneythirdpage").hide();
			} else if (msg.value == "1") {
				$(".container-money").show();
				$(".container-moneythirdpage").hide();
			} else if (msg.value == "2") {
				$(".container-money").show();
				$(".container-moneythirdpage").hide();
			} else if (msg.value == "3") {
				$(".container-moneythirdpage").show();
				$(".container-money").hide();
			}
		} else if (msg.type === "UpdateVoiceInfo") {
			if (msg.value == "0") {
				$(".container-speeking").hide();
				$(".container-radio").hide();
				$(".container-radiothirdradio").hide();
				$(".container-speekingthirdpage").hide();
				$(".container-speekingsecondpage").hide();
				$(".container-radiosecondpage").hide();
			} else if (msg.value == "1") {
				$(".container-speeking").show();
				$(".container-radio").show();
				$(".container-radiothirdradio").hide();
				$(".container-speekingthirdpage").hide();
				$(".container-speekingsecondpage").hide();
				$(".container-radiosecondpage").hide();
			} else if (msg.value == "2") {
				$(".container-speeking").hide();
				$(".container-radio").hide();
				$(".container-radiothirdradio").hide();
				$(".container-speekingthirdpage").hide();
				$(".container-speekingsecondpage").show();
				$(".container-radiosecondpage").show();
			} else if (msg.value == "3") {
				$(".container-speeking").hide();
				$(".container-radio").hide();
				$(".container-radiothirdradio").show();
				$(".container-speekingthirdpage").show();
				$(".container-speekingsecondpage").hide();
				$(".container-radiosecondpage").hide();
			}
		} else if (msg.type == "OpenLayout") {
			$(".container-layout").html("");
			$.each(msg.list, function (index, item) {
				var data = item.name;
				var value;
				$.each(msg.result, function (index, item) {
					$.each(item, function (index, item) {
						if (data.toLowerCase() == index) {
							value = item;
						}
					});
				});

				var text;
				if (value == 0) {
					text = "OFF";
				} else if (value == 1) {
					text = "LEFT";
				} else if (value == 2) {
					text = "RIGHT";
				}

				if (value == 0) {
					$(".container-layout").append(`
				<div class="container-settings2" id="button-${item.name}">
                   <div class="container-inner">
                       <h1 class="nameofsetting">${item.displayedname}</h1>
                   </div>
                   <button type="buttton" class="buttonauswahl2 off" id="buttonauswahl-${item.name}"  nameselected = "${item.name}" value = "${value}"  >${text}</button>
                 </div>
				`);
				} else {
					$(".container-layout").append(`
				<div class="container-settings2" id="button-${item.name}">
                   <div class="container-inner">
                       <h1 class="nameofsetting">${item.displayedname}</h1>
                   </div>
                   <button type="buttton" class="buttonauswahl2" id="buttonauswahl-${item.name}"  nameselected = "${item.name}" value = "${value}"  >${text}</button>
                 </div>
				`);
				}
			});
		} else if (msg.type == "PosHandler") {
			if (msg.name == "iddesignleftright") {
				if (msg.design == "1") {
					if (msg.value == "1") {
						$(".clocktime").removeClass("left");
						$(".datetime").removeClass("left");
						$(".clockimg").removeClass("left");
						$(".idtext").removeClass("left");
						$(".personimg").removeClass("left");
						$(".playersonlinetext").removeClass("left");
						$(".peopleimg").removeClass("left");
						$("#streetname").removeClass("left");
						$("#textjob").removeClass("left");
						$("#detailjob").removeClass("left");
						$("#zonename").removeClass("left");
						$(".briefcase").removeClass("left");
						$(".locationimg").removeClass("left");
					} else if (msg.value == "2") {
						$(".clocktime").addClass("left");
						$(".datetime").addClass("left");
						$(".clockimg").addClass("left");
						$(".idtext").addClass("left");
						$(".personimg").addClass("left");
						$(".playersonlinetext").addClass("left");
						$(".peopleimg").addClass("left");
						$("#streetname").addClass("left");
						$("#textjob").addClass("left");
						$("#detailjob").addClass("left");
						$("#zonename").addClass("left");
						$(".briefcase").addClass("left");
						$(".locationimg").addClass("left");
					}
				} else if (msg.design == "2") {
					if (msg.value == "1") {
						$(".clocktime").removeClass("left");
						$(".datetime").removeClass("left");
						$(".clockimg").removeClass("left");
						$(".idtext").removeClass("left");
						$(".personimg").removeClass("left");
						$(".playersonlinetext").removeClass("left");
						$(".peopleimg").removeClass("left");
						$("#streetname").removeClass("left");
						$("#textjob").removeClass("left");
						$("#detailjob").removeClass("left");
						$("#zonename").removeClass("left");
						$(".briefcase").removeClass("left");
						$(".locationimg").removeClass("left");
					} else if (msg.value == "2") {
						$(".clocktime").addClass("left");
						$(".datetime").addClass("left");
						$(".clockimg").addClass("left");
						$(".idtext").addClass("left");
						$(".personimg").addClass("left");
						$(".playersonlinetext").addClass("left");
						$(".peopleimg").addClass("left");
						$("#streetname").addClass("left");
						$("#textjob").addClass("left");
						$("#detailjob").addClass("left");
						$("#zonename").addClass("left");
						$(".briefcase").addClass("left");
						$(".locationimg").addClass("left");
					}
				} else if (msg.design == "3") {
					if (msg.value == "1") {
						$(".roterbalken3").removeClass("left");
						$("#textjobthirdpage").removeClass("left");
						$("#detailjobthirdpage").removeClass("left");
						$(".roterbalken4").removeClass("left");
						$("#zonenamethirdpage").removeClass("left");
						$("#streetnamethirdpage").removeClass("left");
						$("#clocktimethirdpage").removeClass("left");
						$("#datetimethirdpage").removeClass("left");
						$("#clockthirdpagepng").removeClass("left");
						$(".roterbalken").removeClass("left");
						$("#idinformation").removeClass("left");
						$("#idtextthirdpage").removeClass("left");
						$(".roterbalken2").removeClass("left");
						$("#spielername").removeClass("left");
						$("#playerthirdpage").removeClass("left");
					} else if (msg.value == "2") {
						$(".roterbalken3").addClass("left");
						$("#textjobthirdpage").addClass("left");
						$("#detailjobthirdpage").addClass("left");
						$(".roterbalken4").addClass("left");
						$("#zonenamethirdpage").addClass("left");
						$("#streetnamethirdpage").addClass("left");
						$("#clocktimethirdpage").addClass("left");
						$("#datetimethirdpage").addClass("left");
						$("#clockthirdpagepng").addClass("left");
						$(".roterbalken").addClass("left");
						$("#idinformation").addClass("left");
						$("#idtextthirdpage").addClass("left");
						$(".roterbalken2").addClass("left");
						$("#spielername").addClass("left");
						$("#playerthirdpage").addClass("left");
					}
				}
			} else if (msg.name == "bankinfoleftright") {
				if (msg.design == "1") {
					if (msg.value == "1") {
						$("#cleanmoney").addClass("left");
						$("#bankmoney").addClass("left");
						$("#blackmoney").addClass("left");
						$("#image1").addClass("left");
						$("#image2").addClass("left");
						$("#image3").addClass("left");
					} else if (msg.value == "2") {
						$("#cleanmoney").removeClass("left");
						$("#bankmoney").removeClass("left");
						$("#blackmoney").removeClass("left");
						$("#image1").removeClass("left");
						$("#image2").removeClass("left");
						$("#image3").removeClass("left");
					}
				} else if (msg.design == "2") {
					if (msg.value == "1") {
						$("#cleanmoney").addClass("left");
						$("#bankmoney").addClass("left");
						$("#blackmoney").addClass("left");
						$("#image1").addClass("left");
						$("#image2").addClass("left");
						$("#image3").addClass("left");
					} else if (msg.value == "2") {
						$("#cleanmoney").removeClass("left");
						$("#bankmoney").removeClass("left");
						$("#blackmoney").removeClass("left");
						$("#image1").removeClass("left");
						$("#image2").removeClass("left");
						$("#image3").removeClass("left");
					}
				} else if (msg.design == "3") {
					if (msg.value == "1") {
						$(".moneytextthirdpage").addClass("left");
						$(".moneytext2thirdpage").addClass("left");
						$(".moneytext3thirdpage").addClass("left");
					} else if (msg.value == "2") {
						$(".moneytextthirdpage").removeClass("left");
						$(".moneytext2thirdpage").removeClass("left");
						$(".moneytext3thirdpage").removeClass("left");
					}
				}
			} else if (msg.name == "voicedesignleftright") {
				if (msg.design == "1") {
					if (msg.value == "1") {
						$(".container-radio").addClass("left");
						$("#funksvgfirstpage").addClass("left");
						$(".container-activeradio").addClass("left");
						$(".container-speeking ").addClass("left");
						$("#mikrosvg").addClass("left");
						$(".container-stuffen").addClass("left");
					} else if (msg.value == "2") {
						$(".container-radio").removeClass("left");
						$("#funksvgfirstpage").removeClass("left");
						$(".container-activeradio").removeClass("left");
						$(".container-speeking ").removeClass("left");
						$("#mikrosvg").removeClass("left");
						$(".container-stuffen").removeClass("left");
					}
				} else if (msg.design == "2") {
					if (msg.value == "1") {
						$(".container-radiosecondpage").addClass("left");
						$("#funksvgsecondpage").addClass("left");
						$(".container-activeradiosecondpage").addClass("left");
						$(".container-speekingsecondpage").addClass("left");
						$("#mikrosvgsecondpage").addClass("left");
						$(".container-stuffen2").addClass("left");
					} else if (msg.value == "2") {
						$(".container-radiosecondpage").removeClass("left");
						$("#funksvgsecondpage").removeClass("left");
						$(".container-activeradiosecondpage").removeClass(
							"left"
						);
						$(".container-speekingsecondpage").removeClass("left");
						$("#mikrosvgsecondpage").removeClass("left");
						$(".container-stuffen2").removeClass("left");
					}
				} else if (msg.design == "3") {
					if (msg.value == "1") {
						$(".container-radiothirdradio").addClass("left");
						$("#funkthirdpage").addClass("left");
						$(".container-activeradiothirdpage").addClass("left");
						$(".container-speekingthirdpage").addClass("left");
						$("#mikrosvgthirdpage").addClass("left");
						$(".container-radiothirdradio").addClass("left");
					} else if (msg.value == "2") {
						$(".container-radiothirdradio").removeClass("left");
						$("#funkthirdpage").removeClass("left");
						$(".container-activeradiothirdpage").removeClass(
							"left"
						);
						$(".container-speekingthirdpage").removeClass("left");
						$("#mikrosvgthirdpage").removeClass("left");
						$(".container-radiothirdradio").removeClass("left");
					}
				}
			} else if (msg.name == "weaponinfoleftright") {
				if (msg.design == "1") {
					if (msg.value == "1") {
						$("#weaponimg").addClass("left");
						$("#ammunition").addClass("left");
						$("#bulletsvge").addClass("left");
					} else if (msg.value == "2") {
						$("#weaponimg").removeClass("left");
						$("#ammunition").removeClass("left");
						$("#bulletsvge").removeClass("left");
					}
				} else if (msg.design == "2") {
					if (msg.value == "1") {
						$("#weaponimg").addClass("left");
						$("#ammunition").addClass("left");
						$("#bulletsvge").addClass("left");
					} else if (msg.value == "2") {
						$("#weaponimg").removeClass("left");
						$("#ammunition").removeClass("left");
						$("#bulletsvge").removeClass("left");
					}
				} else if (msg.design == "3") {
					if (msg.value == "1") {
						$(".container-aussen").addClass("left");
						$(".rightbar").addClass("left");
						$(".ammunitionthirdpage").addClass("left");
					} else if (msg.value == "2") {
						$(".container-aussen").removeClass("left");
						$(".rightbar").removeClass("left");
						$(".ammunitionthirdpage").removeClass("left");
					}
				}
			} else if (msg.name == "hudleftright") {
				if (msg.design == "1") {
					if (msg.value == "1") {
						$("#servername").addClass("left");
						$("#detailtext").addClass("left");
						$("#serverlogo2").addClass("left");
					} else if (msg.value == "2") {
						$("#servername").removeClass("left");
						$("#detailtext").removeClass("left");
						$("#serverlogo2").removeClass("left");
					}
				} else if (msg.design == "2") {
					if (msg.value == "1") {
						$("#servername").addClass("left");
						$("#detailtext").addClass("left");
						$("#serverlogo2").addClass("left");
					} else if (msg.value == "2") {
						$("#servername").removeClass("left");
						$("#detailtext").removeClass("left");
						$("#serverlogo2").removeClass("left");
					}
				} else if (msg.design == "3") {
					if (msg.value == "1") {
						$("#servernamethirdpage").addClass("left");
						$("#detailtextthirdpage").addClass("left");
						$("#serverlogo4").addClass("left");
					} else if (msg.value == "2") {
						$("#servernamethirdpage").removeClass("left");
						$("#detailtextthirdpage").removeClass("left");
						$("#serverlogo4").removeClass("left");
					}
				}
			}
		} else if (msg.type == "SaveHandler") {
			var huddesigncoords;
			var texthelpdefaultcoords;
			var defaulttextcoords;
			var defaultspeedo;
			var defaultweapondesign;
			var defaultmoneycoords;
			var defaultvoicecoords;
			var defaultadmincoords;
			var defaultplayercounting;
			var defaultjobcoords;
			var defaultfoodcoords;
			var defaultprogressbarcoords;
			var chatcoords;
			var defaultnotifycoords;

			huddesigncoords =
				$(".middlenotify").css("left") +
				" " +
				$(".middlenotify").css("top");
			defaultadmincoords =
				$(".container-rightadminnotify").css("left") +
				" " +
				$(".container-rightadminnotify").css("top");
			defaultnotifycoords =
				$(".leftnotifyscontainer").css("left") +
				" " +
				$(".leftnotifyscontainer").css("top");
			thirdplayerinfo =
				$(".container-idplayerthirdpage").css("left") +
				" " +
				$(".container-idplayerthirdpage").css("top");
			if (msg.HelpTextDefault == "1") {
				texthelpdefaultcoords =
					$(".mittenotify").css("left") +
					" " +
					$(".mittenotify").css("top");
			} else if (msg.HelpTextDefault == "2") {
				texthelpdefaultcoords =
					$(".mittenotifysecondpage").css("left") +
					" " +
					$(".mittenotifysecondpage").css("top");
			} else if (msg.HelpTextDefault == "3") {
				texthelpdefaultcoords =
					$(".mittenotifythirdpage").css("left") +
					" " +
					$(".mittenotifythirdpage").css("top");
			}

			if (msg.DefaultTextDesign == "1") {
				defaulttextcoords =
					$(".container-logo").css("left") +
					" " +
					$(".container-logo").css("top");
			} else if (msg.DefaultTextDesign == "2") {
				defaulttextcoords =
					$(".container-logo").css("left") +
					" " +
					$(".container-logo").css("top");
			} else if (msg.DefaultTextDesign == "3") {
				defaulttextcoords =
					$(".container-logo2").css("left") +
					" " +
					$(".container-logo2").css("top");
			}

			if (msg.DefaultSpeedo == "1") {
				defaultspeedo =
					$(".container-speedometer").css("left") +
					" " +
					$(".container-speedometer").css("top");
			} else if (msg.DefaultSpeedo == "2") {
				defaultspeedo =
					$(".container-speedometer2").css("left") +
					" " +
					$(".container-speedometer2").css("top");
			} else if (msg.DefaultSpeedo == "3") {
				defaultspeedo =
					$(".container-speedometerthirdpage").css("left") +
					" " +
					$(".container-speedometerthirdpage").css("top");
			}
			if (msg.DefaultWeaponDesign == "1") {
				defaultweapondesign =
					$(".weaponcontainer").css("left") +
					" " +
					$(".weaponcontainer").css("top");
			} else if (msg.DefaultWeaponDesign == "2") {
				defaultweapondesign =
					$(".weaponcontainer").css("left") +
					" " +
					$(".weaponcontainer").css("top");
			} else if (msg.DefaultWeaponDesign == "3") {
				defaultweapondesign =
					$(".weaponcontainerthirdpage").css("left") +
					" " +
					$(".weaponcontainerthirdpage").css("top");
			}

			if (msg.DefaultMoneyDesign == "1") {
				defaultmoneycoords =
					$(".container-money").css("left") +
					" " +
					$(".container-money").css("top");
			} else if (msg.DefaultMoneyDesign == "2") {
				defaultmoneycoords =
					$(".container-money").css("left") +
					" " +
					$(".container-money").css("top");
			} else if (msg.DefaultMoneyDesign == "3") {
				defaultmoneycoords =
					$(".container-moneythirdpage").css("left") +
					" " +
					$(".container-moneythirdpage").css("top");
			}

			if (msg.DefaultVoiceDesign == "1") {
				defaultvoicecoords =
					$(".radios").css("left") + " " + $(".radios").css("top");
			} else if (msg.DefaultVoiceDesign == "2") {
				defaultvoicecoords =
					$(".rechterstauts").css("left") +
					" " +
					$(".rechterstauts").css("top");
			} else if (msg.DefaultVoiceDesign == "3") {
				defaultvoicecoords =
					$(".thirdpageradio").css("left") +
					" " +
					$(".thirdpageradio").css("top");
			}

			if (msg.DefaultPlayerCountDesign == "1") {
				defaultplayercounting =
					$("#leftoben").css("left") +
					" " +
					$("#leftoben").css("top");
			} else if (msg.DefaultPlayerCountDesign == "2") {
				defaultplayercounting =
					$("#leftoben").css("left") +
					" " +
					$("#leftoben").css("top");
			} else if (msg.DefaultPlayerCountDesign == "3") {
				defaultplayercounting =
					$("#secondzeitcontainer").css("left") +
					" " +
					$("#secondzeitcontainer").css("top");
			}

			if (msg.DefaultJobDesign == "1") {
				defaultjobcoords =
					$(".jobinformation").css("left") +
					" " +
					$(".jobinformation").css("top");
			} else if (msg.DefaultJobDesign == "2") {
				defaultjobcoords =
					$(".jobinformation").css("left") +
					" " +
					$(".jobinformation").css("top");
			} else if (msg.DefaultJobDesign == "3") {
				defaultjobcoords =
					$(".jobinformation").css("left") +
					" " +
					$(".jobinformation").css("top");
			}

			if (msg.DefaultFoodDesign == "1") {
				defaultfoodcoords =
					$(".foodutils").css("left") +
					" " +
					$(".foodutils").css("top");
			} else if (msg.DefaultFoodDesign == "2") {
				defaultfoodcoords =
					$(".foodutils2").css("left") +
					" " +
					$(".foodutils2").css("top");
			} else if (msg.DefaultFoodDesign == "3") {
				defaultfoodcoords =
					$(".thirdpagefood").css("left") +
					" " +
					$(".thirdpagefood").css("top");
			}

			if (msg.DefaultProgressbar == "1") {
				defaultprogressbarcoords =
					$(".progressbar").css("left") +
					" " +
					$(".progressbar").css("top");
			} else if (msg.DefaultProgressbar == "2") {
				defaultprogressbarcoords =
					$(".progressbarsecondpage").css("left") +
					" " +
					$(".progressbarsecondpage").css("top");
			} else if (msg.DefaultProgressbar == "3") {
				defaultprogressbarcoords =
					$(".progressbarthirdparty").css("left") +
					" " +
					$(".progressbarthirdparty").css("top");
			}

			chatcoords = $(".chat").css("left") + " " + $(".chat").css("top");
			$.post(
				"https://" + GetParentResourceName() + "/SaveCoords",
				JSON.stringify({
					huddesigncoords: huddesigncoords,
					texthelpdefaultcoords: texthelpdefaultcoords,
					defaulttextcoords: defaulttextcoords,
					defaultspeedo: defaultspeedo,
					defaultweapondesign: defaultweapondesign,
					defaultmoneycoords: defaultmoneycoords,
					defaultvoicecoords: defaultvoicecoords,
					defaultadmincoords: defaultadmincoords,
					defaultplayercounting: defaultplayercounting,
					defaultjobcoords: defaultjobcoords,
					defaultfoodcoords: defaultfoodcoords,
					defaultprogressbarcoords: defaultprogressbarcoords,
					chatcoords: chatcoords,
					defaultnotifycoords: defaultnotifycoords,
					thirdplayerinfo: thirdplayerinfo,
				})
			);
			DisableDrag();
		} else if (msg.type == "InsertEverything") {
			var number = getRandomInt(999999999);
			if (msg.HUDDesign == "1") {
				const content = $(
					`
					<div class="notifycontainer" id="notifycontainer-${number}">
					<img src="img/icons/AnnounceNotify1.png" class="topleftimg" alt="">
					<h1 class="textannounce">Server Announce from S-Service on top! Discord.gg/s-service best scripts and cool designs!</h1>
					<h1 class="textcategory">SERVER ANNOUNCE</h1>
					<div class="container-moreinformationhugenotify">
					  <h1 class="textinformation2">Team Name</h1>
					</div>
					<div class="container-progressbarout">
					  <div class="container-progressinnen" id="serverannounce" ></div>
					</div>
				  </div>
            `
				);
				removecontent = number;
				$(".middlenotify").append(content);
			} else if (msg.HUDDesign == "2") {
				const content = $(
					`
						<div class="notifycontainer"  id="notifycontainer-${number}">
						<img src="img/icons/AnnounceNotify1.png" class="topleftimgsecondpage" alt="">
						<h1 class="textannouncesecondpage">Server Announce from S-Service on top! Discord.gg/s-service best scripts and cool designs!</h1>
						<h1 class="textcategorysecondpage">SERVER ANNOUNCE</h1>
						<div class="container-moreinformationhugenotifysecondpage">
						  <h1 class="textinformation2">Team Name</h1>
						</div>
						<div class="circleprogessbar">
						  <svg class="emptyCircle" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" />
						  </svg>
						  <svg class="filledCircle red" id="filledcircle1" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
						  </svg>
						</div>
					  </div>
            `
				);
				removecontent = number;
				$(".middlenotify").append(content);
			} else if (msg.HUDDesign == "3") {
				const content = $(
					`
						<div class="notifycontainer"  id="notifycontainer-${number}">
						<img src="img/icons/AnnounceNotify1.png" class="topleftimgthirdpage" alt="">
						<h1 class="textannouncethirdpage">Server Announce from S-Service on top! Discord.gg/s-service best scripts and cool designs!</h1>
						<h1 class="textcategory">SERVER ANNOUNCE</h1>
						<div class="container-moreinformationhugenotify">
						  <h1 class="textinformation2">Team Name</h1>
						</div>
						<div class="container-progressbaroutthirdpage">
						  <div class="container-progressinnenthirdpage" id="serverannounce"></div>
						</div>
					  </div>
            `
				);
				removecontent = number;
				$(".middlenotify").append(content);
			}
			if (msg.DefaultAdminNotifyDesign == "1") {
				const content = $(
					`
				<div class="notifyteam"  id="notifyteam-${number}">

				<div class="container-moreinformation">
				  <h1 class="textinformation">Ingame Name</h1>
				</div>
				<h1 class="defaulttext right">S-Service on top!</h1>
				<h1 class="notifytoptext team">TEAM</h1>    
				<div class="blur-notify team"></div>
				<div class="container-progressbar">
				  <div class="innerprogress right" id="teamannounce"></div>
				</div>
			  </div>
`
				);
				removecontent1 = number;
				$(".container-rightadminnotify").append(content);
			} else if (msg.DefaultAdminNotifyDesign == "2") {
				const content = $(
					`
				<div class="notifyteam" id="notifyteam-${number}">

	<div class="container-moreinformationsecondpage">
	  <h1 class="textinformation">Ingame Name</h1>
	</div>
	<h1 class="defaulttextsecondpage right">S-Service on top!</h1>
	<h1 class="notifytoptextsecondpage team">TEAM</h1>
	<div class="blur-notify team"></div>
	<img src="img/TeamChatNotify1.png" class="imgteamchat" alt="">
	<div class="circleprogessbar smallerone">
	  <svg class="emptyCircle" viewBox="0 0 100 100">
		<circle cx="50" cy="50" r="45" />
	  </svg>
	  <svg class="filledCircle red" id="filledcircleteam" viewBox="0 0 100 100">
		<circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
	  </svg>
	</div>
  </div>
`
				);
				removecontent1 = number;
				$(".container-rightadminnotify").append(content);
			} else if (msg.DefaultAdminNotifyDesign == "3") {
				const content = $(
					`
				<div class="notifyteam" id="notifyteam-${number}">

	<div class="container-moreinformation">
	  <h1 class="textinformation">Ingame Name</h1>
	</div>
	<h1 class="defaulttext right">S-Service on top!</h1>
	<h1 class="notifytoptext team">TEAM</h1>
	<div class="blur-notify team"></div>
	<div class="container-progressbarthirdpage2 right">
	  <div class="innerprogressthirdpage right" id="teamannounce"></div>
	</div>
  </div>
`
				);
				removecontent1 = number;
				$(".container-rightadminnotify").append(content);
			}
			if (msg.DefaultProgressbar == "1") {
				counter2 = 0;
				resetbar();
				document.getElementById("infotext").innerHTML = "USING MEDKIT";
				$(".progressbar").show();
			} else if (msg.DefaultProgressbar == "2") {
				counter2 = 0;
				resetbar();
				document.getElementById("infotextsecondpage").innerHTML =
					"USING MEDKIT";
				$(".progressbarsecondpage").show();
			} else if (msg.DefaultProgressbar == "3") {
				counter2 = 0;
				resetbar();
				document.getElementById("infotextthirdpage").innerHTML =
					"USING MEDKIT";
				$(".progressbarthirdparty").show();
			}
			$(".chat").show();
			document.getElementById("inputttext").value = "";
			document.getElementById("inputttext").disabled = true;
			if (msg.DefaultWeaponDesign == "1") {
				document.getElementById("ammunition").innerHTML = "10 / 10";
				document.getElementById("weaponimg").src =
					"img/weapons/WEAPON_PISTOL.png";
				$(".weaponcontainerthirdpage").hide();
				$(".weaponcontainer").show();
			} else if (msg.DefaultWeaponDesign == "2") {
				document.getElementById("ammunition").innerHTML = "10 / 10";
				document.getElementById("weaponimg").src =
					"img/weapons/WEAPON_PISTOL.png";

				$(".weaponcontainer").show();
				$(".weaponcontainerthirdpage").hide();
			} else if (msg.DefaultWeaponDesign == "3") {
				document.getElementById("ammunitionthirdpage").innerHTML =
					"10 / 10";
				document.getElementById("weaponimg").src =
					"img/weapons/WEAPON_PISTOL.png";
				$(".weaponcontainer").hide();
				$(".weaponcontainerthirdpage").show();
			}

			if (msg.DefaultSpeedo == "1") {
				$(".container-speedometerthirdpage").hide();
				$(".container-speedometer").show();
				$(".container-speedometer2").hide();
				document.getElementById("fuel-bar").style.width = "50" + "%";

				document.getElementById("speedometernumbermodern").innerHTML =
					"100";
				MakeBarSpeedo(msg.widthPercent);
			} else if (msg.DefaultSpeedo == "2") {
				$(".container-speedometerthirdpage").hide();
				$(".container-speedometer").hide();

				$(".container-speedometer2").show();

				$(".speedo-circle").css("stroke-dasharray", `200, 600`);
				$(".speedo-circle2").css("stroke-dasharray", `60, 600`);
				document.getElementById("speedometernumbermodern2").innerHTML =
					"100";
				document.getElementById("gangzahlsecondpage").innerHTML = "1";
			} else if (msg.DefaultSpeedo == "3") {
				$(".container-speedometerthirdpage").show();
				$(".container-speedometer").hide();
				$(".container-speedometer2").hide();
				document.getElementById("fuel-barthirdpage").style.width =
					"50" + "%";
				document.getElementById("innerbarthirdpage").style.width =
					"50" + "%";
				document.getElementById("innerbarglowthirdpage").style.width =
					"50" + "%";
				document.getElementById(
					"speedometernumberthirdpage"
				).innerHTML = "100";
			}
			if (msg.DefaultInfoNotifyDesign == "1") {
				const content = $(
					`
							<div class="container-notify" id="container-notify-${number}">
							<img src="img/icons/InformationNotify2.svg" class="iconnotify" alt="">
							<h1 class="notifytoptext">INFORMATION</h1>
							<div class="blur-notify"></div>
							<h1 class="defaulttext">S-Service on top!</h1>
							<div class="container-progressbar">
							  <div class="innerprogress" id="informationenbar" ></div>
							</div>
						  </div>
			`
				);
				removecontent2 = number;
				$(".leftnotifyscontainer").prepend(content);
			} else if (msg.DefaultInfoNotifyDesign == "2") {
				const content = $(
					`
						<div class="container-notify" id="container-notify-${number}">
        <img src="img/icons/InformationNotify2.svg" class="iconnotifysecondpage" alt="">
        <h1 class="notifytoptextsecondpage">INFORMATION</h1>
        <div class="blur-notify"></div>
        <h1 class="defaulttextsecondpage">S-Service on top!</h1>
        <div class="circleprogessbar smallerone2">
          <svg class="emptyCircle" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" />
          </svg>
          <svg class="filledCircle yellow" id="filledcircleinfo" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
          </svg>
        </div>
      </div>
		`
				);
				removecontent2 = number;
				$(".leftnotifyscontainer").prepend(content);
			} else if (msg.DefaultInfoNotifyDesign == "3") {
				const content = $(
					`
							<div class="container-notifythirdpage" id="container-notifythirdpage-${number}">
							<img src="img/icons/InformationNotify2.svg" class="iconnotifythirdpage" alt="">
							<h1 class="notifytoptext">INFORMATION</h1>
							<div class="blur-notify"></div>
							<h1 class="defaulttextthirdpage">S-Service on top!</h1>
							<div class="container-progressbarthirdpage2">
							  <div class="innerprogressthirdpage" id="informationenbar"></div>
							</div>
						  </div>
			`
				);
				removecontent2 = number;
				$(".leftnotifyscontainer").prepend(content);
			}

			if (msg.HelpTextDefault == "1") {
				$(".mittenotify").show();
				$(".mittenotifythirdpage").hide();
				$(".mittenotifysecondpage").hide();
				document.getElementById("drueckee").innerText = "E";
				document.getElementById("infohelp").innerText =
					"Press E to open the Carshop";
			} else if (msg.HelpTextDefault == "2") {
				$(".mittenotify").hide();
				$(".mittenotifythirdpage").hide();
				$(".mittenotifysecondpage").show();
				document.getElementById("drueckesecondpage").innerText = "E";
				document.getElementById("infohelptsecondpage").innerText =
					"Press E to open the Carshop";
			} else if (msg.HelpTextDefault == "3") {
				$(".mittenotify").hide();
				$(".mittenotifythirdpage").show();
				$(".mittenotifysecondpage").hide();
				document.getElementById("drueckeethirdpage").innerText = "E";
				document.getElementById("infohelpthirdpage").innerText =
					"Press E to open the Carshop";
			}
		} else if (msg.type == "Updatecoords") {
			var coordchat = extractCoordinates(msg.chatcoords);
			var notifycoords = extractCoordinates(msg.notifyscoords);
			var speedocoords = extractCoordinates(msg.speedometercoords);
			var eatdrinkcoords = extractCoordinates(msg.eatdrinkcoords);
			var hud2coords = extractCoordinates(msg.hud2coords);
			var bankinfocoords = extractCoordinates(msg.bankinfocoords);
			var voicedesigncoords = extractCoordinates(msg.voicedesigncoords);
			var weaponinfocoords = extractCoordinates(msg.weaponinfocoords);
			var progressbarcoords = extractCoordinates(msg.progressbarcoords);
			var jobcoords = extractCoordinates(msg.jobcoords);
			var adminotifycoords = extractCoordinates(msg.adminotifycoords);
			var iddesigncoords = extractCoordinates(msg.iddesigncoords);
			var interactioncoords = extractCoordinates(msg.interactioncoords);
			var hudcoords = extractCoordinates(msg.hudcoords);
			var thirdplayerinfo = extractCoordinates(msg.thirdplayerinfo);
			if (iddesigncoords != false) {
				$("#leftoben").css({
					left: iddesigncoords.left,
					top: iddesigncoords.top,
				});
			}
			if (coordchat != false) {
				$(".chat").css({
					left: coordchat.left,
					top: coordchat.top,
				});
			}
			if (hud2coords != false) {
				$(".container-logo").css({
					left: hud2coords.left,
					top: hud2coords.top,
				});
			}
			if (notifycoords != false) {
				$(".leftnotifyscontainer").css({
					left: notifycoords.left,
					top: notifycoords.top,
				});
			}
			if (voicedesigncoords != false) {
				$(".radios").css({
					left: voicedesigncoords.left,
					top: voicedesigncoords.top,
				});
			}
			if (bankinfocoords != false) {
				$(".container-money").css({
					left: bankinfocoords.left,
					top: bankinfocoords.top,
				});
			}
			if (weaponinfocoords != false) {
				$(".weaponcontainer").css({
					left: weaponinfocoords.left,
					top: weaponinfocoords.top,
				});
			}

			if (interactioncoords != false) {
				$(".mittenotify").css({
					left: interactioncoords.left,
					top: interactioncoords.top,
				});
			}
			if (adminotifycoords != false) {
				$(".container-rightadminnotify").css({
					left: adminotifycoords.left,
					top: adminotifycoords.top,
				});
			}
			if (speedocoords != false) {
				$(".container-speedometer").css({
					left: speedocoords.left,
					top: speedocoords.top,
				});
			}
			if (hudcoords != false) {
				$(".middlenotify").css({
					left: hudcoords.left,
					top: hudcoords.top,
				});
			}
			if (jobcoords != false) {
				$(".jobinforamation").css({
					left: jobcoords.left,
					top: jobcoords.top,
				});
			}
			if (eatdrinkcoords != false) {
				$(".foodutils").css({
					left: eatdrinkcoords.left,
					top: eatdrinkcoords.top,
				});
			}
			if (progressbarcoords != false) {
				$(".progressbar").css({
					left: progressbarcoords.left,
					top: progressbarcoords.top,
				});
			}
			if (jobcoords != false) {
				$(".jobutisl2").css({
					left: jobcoords.left,
					top: jobcoords.top,
				});
			}
			if (eatdrinkcoords != false) {
				$(".foodutils2").css({
					left: eatdrinkcoords.left,
					top: eatdrinkcoords.top,
				});
			}
			if (interactioncoords != false) {
				$(".mittenotifysecondpage").css({
					left: interactioncoords.left,
					top: interactioncoords.top,
				});
			}
			if (voicedesigncoords != false) {
				$(".rechterstauts").css({
					left: voicedesigncoords.left,
					top: voicedesigncoords.top,
				});
			}
			if (speedocoords != false) {
				$(".container-speedometer2").css({
					left: speedocoords.left,
					top: speedocoords.top,
				});
			}
			if (progressbarcoords != false) {
				$(".progressbarsecondpage").css({
					left: progressbarcoords.left,
					top: progressbarcoords.top,
				});
			}
			if (speedocoords != false) {
				$(".container-speedometerthirdpage").css({
					left: speedocoords.left,
					top: speedocoords.top,
				});
			}
			if (jobcoords != false) {
				$(".jobinformation").css({
					left: jobcoords.left,
					top: jobcoords.top,
				});
			}
			if (eatdrinkcoords != false) {
				$(".thirdpagefood").css({
					left: eatdrinkcoords.left,
					top: eatdrinkcoords.top,
				});
			}
			if (iddesigncoords != false) {
				$("#secondzeitcontainer").css({
					left: iddesigncoords.left,
					top: iddesigncoords.top,
				});
			}
			if (thirdplayerinfo != false) {
				$(".container-idplayerthirdpage").css({
					left: thirdplayerinfo.left,
					top: thirdplayerinfo.top,
				});
			}
			if (hud2coords != false) {
				$(".container-logo2").css({
					left: hud2coords.left,
					top: hud2coords.top,
				});
			}
			if (voicedesigncoords != false) {
				$(".thirdpageradio").css({
					left: voicedesigncoords.left,
					top: voicedesigncoords.top,
				});
			}
			if (bankinfocoords != false) {
				$(".container-moneythirdpage").css({
					left: bankinfocoords.left,
					top: bankinfocoords.top,
				});
			}
			if (interactioncoords != false) {
				$(".mittenotifythirdpage").css({
					left: interactioncoords.left,
					top: interactioncoords.top,
				});
			}
			if (progressbarcoords != false) {
				$(".progressbarthirdparty").css({
					left: progressbarcoords.left,
					top: progressbarcoords.top,
				});
			}
			if (weaponinfocoords != false) {
				$(".weaponcontainerthirdpage").css({
					left: weaponinfocoords.left,
					top: weaponinfocoords.top,
				});
			}
			// ThirdPage
		} else if (msg.type === "MakeCustomCommand") {
			if (msg.Design == "0") {
				return;
			}
			var audio = new Audio("img/BigNotifySound.mp3");
			audio.volume = 0.5;
			audio.play();
			if (msg.HUDDesign == "1") {
				var number = getRandomInt(9999999);

				const content = $(
					`
					<div class="notifycontainer">
					<img src="${msg.iconurl}" class="topleftimg" alt="">
					<h1 class="textannounce">${msg.resultString}</h1>
					<h1 class="textcategory blau"  style="color: ${msg.color};">${msg.faction} ANNOUNCE</h1>
					<div class="container-moreinformationhugenotify blau">
					  <h1 class="textinformation2">${msg.name}</h1>
					</div>
					<div class="container-progressbarout">
					  <div class="container-progressinnen blau" style="background: ${msg.color}; box-shadow: 0vw 0vw 0.7vw 0vw ${msg.color};" id="serverannounce2${number}"></div>
					</div>
				  </div>
		`
				);

				$(".middlenotify").append(content);
				startLoading(msg.length, `serverannounce2${number}`);
				setTimeout(() => {
					content.fadeOut(500);
				}, msg.length * 1000 + 250);
			} else if (msg.HUDDesign == "2") {
				var number = getRandomInt(9999999);

				const content = $(
					`
					<div class="notifycontainer">
					<img src="${msg.iconurl}" class="topleftimgsecondpage" alt="">
					<h1 class="textannouncesecondpage">${msg.resultString}</h1>
					<h1 class="textcategorysecondpage blau"  style="color: ${msg.color};">${msg.faction} ANNOUNCE</h1>
					<div class="container-moreinformationhugenotifysecondpage blau">
					  <h1 class="textinformation2">${msg.name}</h1>
					</div>
					<div class="circleprogessbar">
					  <svg class="emptyCircle" viewBox="0 0 100 100">
						<circle cx="50" cy="50" r="45" />
					  </svg>
					  <svg class="filledCircle blue" style="stroke: ${msg.color}; filter: drop-shadow(0px 0px 11px ${msg.color});" id="filledcircle3${number}" viewBox="0 0 100 100">
						<circle cx="50" cy="50" r="45" stroke-dasharray="0 283" />
					  </svg>
					</div>
				  </div>
		`
				);

				$(".middlenotify").append(content);
				startLoading3(msg.length, `filledcircle3${number}`);
				setTimeout(() => {
					content.fadeOut(500);
				}, msg.length * 1000 + 250);
			} else if (msg.HUDDesign == "3") {
				var number = getRandomInt(9999999);

				const content = $(
					`
						<div class="notifycontainer">
						<img src="${msg.iconurl}" class="topleftimgthirdpage" alt="">
						<h1 class="textannouncethirdpage">${msg.resultString}</h1>
						<h1 class="textcategory blau"  style="color: ${msg.color};">${msg.faction} ANNOUNCE</h1>
						<div class="container-moreinformationhugenotify blau">
						  <h1 class="textinformation2">${msg.name}</h1>
						</div>
						<div class="container-progressbaroutthirdpage">
						  <div class="container-progressinnenthirdpage blau" style="background: ${msg.color}; box-shadow: 0vw 0vw 0.7vw 0vw ${msg.color};" id="serverannounce2${number}"></div>
						</div>
					  </div>
		`
				);

				$(".middlenotify").append(content);
				startLoading2(msg.length, `serverannounce2${number}`);
				setTimeout(() => {
					content.fadeOut(500);
				}, msg.length * 1000 + 250);
			}
		} else if (msg.type === "DestroyProgressBar") {
			if (msg.design == "1") {
				counter2 = 0;
				resetbar();
				$(".progressbar").hide();
				clearInterval(progress2);
				MakeBarone(0);
			} else if (msg.design == "2") {
				counter2 = 0;
				resetbar();
				$(".progressbarsecondpage").hide();
				clearInterval(progress2);
				MakeBaroneSecondPage(0);
			} else if (msg.design == "3") {
				counter2 = 0;
				resetbar();
				$(".progressbarthirdparty").hide();
				document.getElementById("progressbarinnerit").style.width =
					0 + "%";
				clearInterval(progress2);
			}
		}
	});
});
function isCoordStringNil(coordString) {
	// Überprüfe, ob der coordString null, undefined oder leer ist
	if (
		coordString === null ||
		coordString === undefined ||
		coordString.trim() === ""
	) {
		return true; // coordString ist nil
	} else {
		return false; // coordString ist nicht nil
	}
}
function extractCoordinates(coordsString) {
	if (!isCoordStringNil(coordsString)) {
		// Trenne die Koordinaten anhand des Leerzeichens
		const coordsArray = coordsString.split(" ");

		// Extrahiere left und top Koordinaten
		const leftCoord = parseFloat(coordsArray[0]);
		const topCoord = parseFloat(coordsArray[1]);

		// Rückgabe der extrahierten Koordinaten als Objekt
		return { left: leftCoord, top: topCoord };
	} else {
		return false;
	}
}

function addDots(nStr) {
	nStr += "";
	x = nStr.split(".");
	x1 = x[0];
	x2 = x.length > 1 ? "." + x[1] : "";
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, "$1" + "." + "$2"); // changed comma to dot here
	}
	return x1 + x2;
}
$("#styles").click(function () {
	$(".textcategorymenu").eq(0).addClass("active");
	$(".textcategorymenu").eq(1).removeClass("active");
	$(".textcategorymenu").eq(2).removeClass("active");
	$(".container-layouts").hide();
	$(".container-scroll").show();
});

$("#keybinds").click(function () {
	$(".textcategorymenu").eq(0).removeClass("active");
	$(".textcategorymenu").eq(1).addClass("active");
	$(".textcategorymenu").eq(2).removeClass("active");
	$(".container-settingsmenu").hide();
	insettingmenu = false;
	$(".container-hudsettings").hide();
	$.post(
		"https://" + GetParentResourceName() + "/OpenKeybindsMenu",
		JSON.stringify({})
	);
});
$("#layout").click(function () {
	$(".textcategorymenu").eq(0).removeClass("active");
	$(".textcategorymenu").eq(1).removeClass("active");
	$(".textcategorymenu").eq(2).addClass("active");
	$(".container-layouts").show();
	$(".container-scroll").hide();
	$.post(
		"https://" + GetParentResourceName() + "/OpenLayoutMenu",
		JSON.stringify({})
	);
});

$(".closerectangle").click(function () {
	CloseSettingsMenu();
});
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
$(document).on("keydown", function (event) {
	switch (event.keyCode) {
		case 27:
			if (insettingmenu == false) {
				CloseMenu();
			}
			CloseSettingsMenu();

			break;
	}
});

function CloseSettingsMenu() {
	$(".container-settingsmenu").hide();
	insettingmenu = false;
	$(".hudsettings").hide();
	$(".chat").hide();
	$.post(
		"https://" + GetParentResourceName() + "/RemoveChat",
		JSON.stringify({})
	);
	$.post(
		"https://" + GetParentResourceName() + "/RemoveUtils",
		JSON.stringify({})
	);
}
var intervals = {};
function startLoading(duration, item) {
	var width = 0;
	var increment = 100 / (duration * 10);
	if (intervals[item]) {
		clearInterval(intervals[item]);
	}

	intervals[item] = setInterval(frame, 100);

	function frame() {
		if (width >= 100) {
			clearInterval(intervals[item]);
			width = 0;
			$(".progress-bar").fadeOut(100);
		} else {
			width += increment;
			document.getElementById(item).style.width = width + "%";
		}
	}
}

function startLoading3(duration, item) {
	var width = 0;
	var increment = 40 / (duration * 10);
	if (intervals[item]) {
		clearInterval(intervals[item]);
	}

	intervals[item] = setInterval(frame, 40);

	function frame() {
		if (width >= 100) {
			clearInterval(intervals[item]);
			width = 0;
			$(".progress-bar").fadeOut(100);
		} else {
			width += increment;
			setProgress(width, "#" + item + " circle");
		}
	}
}

function startLoading2(duration, item) {
	var height = 0;
	var increment = 100 / (duration * 10);
	if (intervals[item]) {
		clearInterval(intervals[item]);
	}

	intervals[item] = setInterval(frame, 100);

	function frame() {
		if (height >= 100) {
			clearInterval(intervals[item]);
			height = 0;
			$(".progress-bar").fadeOut(100);
		} else {
			height += increment;

			document.getElementById(item).style.height = height + "%";
		}
	}
}

function resetbar() {
	$(".container-innerprogressbar").eq(0).removeClass("active");
	$(".container-innerprogressbar").eq(1).removeClass("active");
	$(".container-innerprogressbar").eq(2).removeClass("active");
	$(".container-innerprogressbar").eq(3).removeClass("active");
	$(".container-innerprogressbar").eq(4).removeClass("active");
	$(".container-innerprogressbar").eq(5).removeClass("active");
	$(".container-innerprogressbar").eq(6).removeClass("active");
	$(".container-innerprogressbar").eq(7).removeClass("active");
	$(".container-innerprogressbar").eq(8).removeClass("active");
	$(".container-innerprogressbar").eq(9).removeClass("active");
	$(".container-innerprogressbar").eq(10).removeClass("active");
	$(".container-innerprogressbar").eq(11).removeClass("active");
	$(".container-innerprogressbar").eq(12).removeClass("active");
	$(".container-innerprogressbar").eq(13).removeClass("active");
	$(".container-innerprogressbar").eq(14).removeClass("active");
	$(".container-innerprogressbar").eq(15).removeClass("active");
	$(".container-innerprogressbar").eq(16).removeClass("active");
	$(".container-innerprogressbar").eq(17).removeClass("active");
	$(".container-innerprogressbar").eq(18).removeClass("active");
	$(".container-innerprogressbar").eq(19).removeClass("active");
	$(".container-innerprogressbarsecondpage").eq(0).removeClass("active");
	$(".container-innerprogressbarsecondpage").eq(1).removeClass("active");
	$(".container-innerprogressbarsecondpage").eq(2).removeClass("active");
	$(".container-innerprogressbarsecondpage").eq(3).removeClass("active");
	$(".container-innerprogressbarsecondpage").eq(4).removeClass("active");
	$(".container-innerprogressbarsecondpage").eq(5).removeClass("active");
	$(".container-innerprogressbarsecondpage").eq(6).removeClass("active");
	$(".container-innerprogressbarsecondpage").eq(7).removeClass("active");
	$(".container-innerprogressbarsecondpage").eq(8).removeClass("active");
	$(".container-innerprogressbarsecondpage").eq(9).removeClass("active");
}

$(".inputttext").on("keyup", function (e) {
	if (e.key === "Enter" || e.keyCode === 13) {
		var input = document.getElementById("inputttext").value;

		if (onlyLetters(input)) {
			if (startsWithSlash(input)) {
				$(".chat").hide();
				$.post(
					"https://" + GetParentResourceName() + "/RemoveChat",
					JSON.stringify({})
				);
				var inputs = removeSlash(input);

				$.post(
					"https://" +
						GetParentResourceName() +
						"/SendCommandToCLient",
					JSON.stringify({ input: inputs })
				);
				document.getElementById("inputttext").value = "";
			} else {
				$(".chat").hide();
				$.post(
					"https://" + GetParentResourceName() + "/RemoveChat",
					JSON.stringify({})
				);
				document.getElementById("inputttext").value = "";
				$.post(
					"https://" + GetParentResourceName() + "/Fehler",
					JSON.stringify({
						value: "Commands beginnen mit einem Slash!",
					})
				);
			}
		} else {
			$(".chat").hide();
			$.post(
				"https://" + GetParentResourceName() + "/RemoveChat",
				JSON.stringify({})
			);
			document.getElementById("inputttext").value = "";
			$.post(
				"https://" + GetParentResourceName() + "/Fehler",
				JSON.stringify({ value: "Sonderzeichen sind nicht erlaubt!" })
			);
		}
	}
	if (e.key === "ArrowUp" || e.keyCode === 38) {
		$.post(
			"https://" + GetParentResourceName() + "/GetLast",
			JSON.stringify({})
		);
	}
	if (e.key === "ArrowDown" || e.keyCode === 40) {
		$.post(
			"https://" + GetParentResourceName() + "/GetNew",
			JSON.stringify({})
		);
	}
});
$(".inputttext").on("change keyup paste", function () {
	var input = document.getElementById("inputttext").value;
	var inputs = removeSlash(input);
	$.post(
		"https://" + GetParentResourceName() + "/GetSuggestions",
		JSON.stringify({ inputs: inputs })
	);
});

function addSlashBeforeCommand(command) {
	if (!command.startsWith("/")) {
		return "/" + command;
	}
	return command;
}

function removeSlash(str) {
	return str.replace("/", "");
}
function startsWithSlash(str) {
	return str.startsWith("/");
}

function onlyLetters(str) {
	return /^[.a-zA-Z/ ",0-123456789_-äöü?!$ß-]+$/.test(str);
}

function MakeBarone(percent) {
	if (percent >= 5) {
		$(".container-innerprogressbar").eq(0).addClass("active");
	}
	if (percent >= 10) {
		$(".container-innerprogressbar").eq(1).addClass("active");
	}
	if (percent >= 15) {
		$(".container-innerprogressbar").eq(2).addClass("active");
	}
	if (percent >= 20) {
		$(".container-innerprogressbar").eq(3).addClass("active");
	}
	if (percent >= 25) {
		$(".container-innerprogressbar").eq(4).addClass("active");
	}
	if (percent >= 30) {
		$(".container-innerprogressbar").eq(5).addClass("active");
	}
	if (percent >= 35) {
		$(".container-innerprogressbar").eq(6).addClass("active");
	}
	if (percent >= 40) {
		$(".container-innerprogressbar").eq(7).addClass("active");
	}
	if (percent >= 45) {
		$(".container-innerprogressbar").eq(8).addClass("active");
	}
	if (percent >= 50) {
		$(".container-innerprogressbar").eq(9).addClass("active");
	}
	if (percent >= 55) {
		$(".container-innerprogressbar").eq(10).addClass("active");
	}
	if (percent >= 60) {
		$(".container-innerprogressbar").eq(11).addClass("active");
	}
	if (percent >= 65) {
		$(".container-innerprogressbar").eq(12).addClass("active");
	}
	if (percent >= 70) {
		$(".container-innerprogressbar").eq(13).addClass("active");
	}

	if (percent >= 75) {
		$(".container-innerprogressbar").eq(14).addClass("active");
	}
	if (percent >= 80) {
		$(".container-innerprogressbar").eq(15).addClass("active");
	}
	if (percent >= 85) {
		$(".container-innerprogressbar").eq(16).addClass("active");
	}
	if (percent >= 90) {
		$(".container-innerprogressbar").eq(17).addClass("active");
	}
	if (percent >= 95) {
		$(".container-innerprogressbar").eq(18).addClass("active");
	}
	if (percent >= 100) {
		$(".container-innerprogressbar").eq(19).addClass("active");
	}
}

function MakeBarSpeedo(percent) {
	if (percent >= 25) {
		$(".barcontainer").eq(0).addClass("active");
	}
	if (percent >= 30) {
		$(".barcontainer").eq(1).addClass("active");
	}
	if (percent >= 35) {
		$(".barcontainer").eq(2).addClass("active");
	}
	if (percent >= 41) {
		$(".barcontainer").eq(3).addClass("active");
	}
	if (percent >= 45) {
		$(".barcontainer").eq(4).addClass("active");
	}
	if (percent >= 54) {
		$(".barcontainer").eq(5).addClass("active");
	}
	if (percent >= 63) {
		$(".barcontainer").eq(6).addClass("active");
	}
	if (percent >= 72) {
		$(".barcontainer").eq(7).addClass("active");
	}
	if (percent >= 81) {
		$(".barcontainer").eq(8).addClass("active");
	}
	if (percent >= 86) {
		$(".barcontainer").eq(9).addClass("active");
	}
	if (percent >= 90) {
		$(".barcontainer").eq(10).addClass("active");
	}
	if (percent >= 94) {
		$(".barcontainer").eq(11).addClass("active");
	}
	// Minus
	if (percent <= 25) {
		$(".barcontainer").eq(0).removeClass("active");
	}
	if (percent <= 30) {
		$(".barcontainer").eq(1).removeClass("active");
	}
	if (percent <= 35) {
		$(".barcontainer").eq(2).removeClass("active");
	}
	if (percent <= 41) {
		$(".barcontainer").eq(3).removeClass("active");
	}
	if (percent <= 45) {
		$(".barcontainer").eq(4).removeClass("active");
	}
	if (percent <= 54) {
		$(".barcontainer").eq(5).removeClass("active");
	}
	if (percent <= 63) {
		$(".barcontainer").eq(6).removeClass("active");
	}
	if (percent <= 72) {
		$(".barcontainer").eq(7).removeClass("active");
	}
	if (percent <= 81) {
		$(".barcontainer").eq(8).removeClass("active");
	}
	if (percent <= 86) {
		$(".barcontainer").eq(9).removeClass("active");
	}
	if (percent <= 90) {
		$(".barcontainer").eq(10).removeClass("active");
	}
	if (percent <= 94) {
		$(".barcontainer").eq(11).removeClass("active");
	}
}

function makethirst(percent) {
	if (percent == 0) {
		$(".container-bar").eq(0).removeClass("thirst");
		$(".container-bar").eq(1).removeClass("thirst");
		$(".container-bar").eq(2).removeClass("thirst");
		$(".container-bar").eq(3).removeClass("thirst");
		$(".container-bar").eq(4).removeClass("thirst");
	}
	if (percent <= 20 && percent > 0) {
		$(".container-bar").eq(0).addClass("thirst");
		$(".container-bar").eq(1).removeClass("thirst");
		$(".container-bar").eq(2).removeClass("thirst");
		$(".container-bar").eq(3).removeClass("thirst");
		$(".container-bar").eq(4).removeClass("thirst");
	}
	if (percent <= 40 && percent > 20) {
		$(".container-bar").eq(0).addClass("thirst");
		$(".container-bar").eq(1).addClass("thirst");
		$(".container-bar").eq(2).removeClass("thirst");
		$(".container-bar").eq(3).removeClass("thirst");
		$(".container-bar").eq(4).removeClass("thirst");
	}
	if (percent <= 60 && percent > 40) {
		$(".container-bar").eq(0).addClass("thirst");
		$(".container-bar").eq(1).addClass("thirst");
		$(".container-bar").eq(2).addClass("thirst");
		$(".container-bar").eq(3).removeClass("thirst");
		$(".container-bar").eq(4).removeClass("thirst");
	}
	if (percent <= 80 && percent > 60) {
		$(".container-bar").eq(0).addClass("thirst");
		$(".container-bar").eq(1).addClass("thirst");
		$(".container-bar").eq(2).addClass("thirst");
		$(".container-bar").eq(3).addClass("thirst");
		$(".container-bar").eq(4).removeClass("thirst");
	}
	if (percent <= 100 && percent > 80) {
		$(".container-bar").eq(0).addClass("thirst");
		$(".container-bar").eq(1).addClass("thirst");
		$(".container-bar").eq(2).addClass("thirst");
		$(".container-bar").eq(3).addClass("thirst");
		$(".container-bar").eq(4).addClass("thirst");
	}
}
function makehunger(percent) {
	if (percent == 0) {
		$(".container-bar1").eq(0).removeClass("hungry");
		$(".container-bar1").eq(1).removeClass("hungry");
		$(".container-bar1").eq(2).removeClass("hungry");
		$(".container-bar1").eq(3).removeClass("hungry");
		$(".container-bar1").eq(4).removeClass("hungry");
	}
	if (percent <= 20 && percent > 0) {
		$(".container-bar1").eq(0).addClass("hungry");
		$(".container-bar1").eq(1).removeClass("hungry");
		$(".container-bar1").eq(2).removeClass("hungry");
		$(".container-bar1").eq(3).removeClass("hungry");
		$(".container-bar1").eq(4).removeClass("hungry");
	}
	if (percent <= 40 && percent > 20) {
		$(".container-bar1").eq(0).addClass("hungry");
		$(".container-bar1").eq(1).addClass("hungry");
		$(".container-bar1").eq(2).removeClass("hungry");
		$(".container-bar1").eq(3).removeClass("hungry");
		$(".container-bar1").eq(4).removeClass("hungry");
	}
	if (percent <= 60 && percent > 40) {
		$(".container-bar1").eq(0).addClass("hungry");
		$(".container-bar1").eq(1).addClass("hungry");
		$(".container-bar1").eq(2).addClass("hungry");
		$(".container-bar1").eq(3).removeClass("hungry");
		$(".container-bar1").eq(4).removeClass("hungry");
	}
	if (percent <= 80 && percent > 60) {
		$(".container-bar1").eq(0).addClass("hungry");
		$(".container-bar1").eq(1).addClass("hungry");
		$(".container-bar1").eq(2).addClass("hungry");
		$(".container-bar1").eq(3).addClass("hungry");
		$(".container-bar1").eq(4).removeClass("hungry");
	}
	if (percent <= 100 && percent > 80) {
		$(".container-bar1").eq(0).addClass("hungry");
		$(".container-bar1").eq(1).addClass("hungry");
		$(".container-bar1").eq(2).addClass("hungry");
		$(".container-bar1").eq(3).addClass("hungry");
		$(".container-bar1").eq(4).addClass("hungry");
	}
}
function MakeBarSpeedoHeli(percent) {
	if (percent >= 0) {
		$(".barcontainer").eq(0).addClass("active");
	}
	if (percent >= 15) {
		$(".barcontainer").eq(1).addClass("active");
	}
	if (percent >= 30) {
		$(".barcontainer").eq(2).addClass("active");
	}
	if (percent >= 41) {
		$(".barcontainer").eq(3).addClass("active");
	}
	if (percent >= 45) {
		$(".barcontainer").eq(4).addClass("active");
	}
	if (percent >= 54) {
		$(".barcontainer").eq(5).addClass("active");
	}
	if (percent >= 63) {
		$(".barcontainer").eq(6).addClass("active");
	}
	if (percent >= 72) {
		$(".barcontainer").eq(7).addClass("active");
	}
	if (percent >= 81) {
		$(".barcontainer").eq(8).addClass("active");
	}
	if (percent >= 86) {
		$(".barcontainer").eq(9).addClass("active");
	}
	if (percent >= 90) {
		$(".barcontainer").eq(10).addClass("active");
	}
	if (percent >= 94) {
		$(".barcontainer").eq(11).addClass("active");
	}
	// Minus
	if (percent <= 0) {
		$(".barcontainer").eq(0).removeClass("active");
	}
	if (percent <= 15) {
		$(".barcontainer").eq(1).removeClass("active");
	}
	if (percent <= 30) {
		$(".barcontainer").eq(2).removeClass("active");
	}
	if (percent <= 41) {
		$(".barcontainer").eq(3).removeClass("active");
	}
	if (percent <= 45) {
		$(".barcontainer").eq(4).removeClass("active");
	}
	if (percent <= 54) {
		$(".barcontainer").eq(5).removeClass("active");
	}
	if (percent <= 63) {
		$(".barcontainer").eq(6).removeClass("active");
	}
	if (percent <= 72) {
		$(".barcontainer").eq(7).removeClass("active");
	}
	if (percent <= 81) {
		$(".barcontainer").eq(8).removeClass("active");
	}
	if (percent <= 86) {
		$(".barcontainer").eq(9).removeClass("active");
	}
	if (percent <= 90) {
		$(".barcontainer").eq(10).removeClass("active");
	}
	if (percent <= 94) {
		$(".barcontainer").eq(11).removeClass("active");
	}
}

$(".container-options").on("click", ".container-select", function () {
	var button = $(this);
	var itemname = button.attr("name");
	document.getElementById("inputttext").value = "/" + itemname;

	$.post(
		"https://" + GetParentResourceName() + "/GetSuggestions",
		JSON.stringify({ inputs: itemname })
	);
});

$(".container-scroll").on("click", ".buttonauswahl", function () {
	var button = $(this);
	var selectedname = button.attr("nameselected");
	var value = button.attr("value");
	var parent = document.getElementById(`button-${selectedname}`);

	var elementsToRemove = document.querySelectorAll(".infocontainer");

	if (!$(parent).hasClass("erweiterung")) {
		var selectables = [
			{ name: "OFF" },
			{ name: "MODERN" },
			{ name: "ROUND" },
			{ name: "CLASSIC" },
		];

		elementsToRemove.forEach(function (element) {
			$(element).remove();
		});

		$(".container-settings").each(function () {
			$(this).removeClass("erweiterung");
		});
		$(".buttonauswahl").each(function () {
			$(this).removeClass("active");
		});

		$(parent).addClass("erweiterung");
		button.addClass("active");
		for (var i = 0; i < 4; i++) {
			if (value == i) {
				$(parent)
					.append(`<div class="infocontainer active " parent = "buttonauswahl-${selectedname}" selectedname = "${selectedname}" value = "${i}">
				<h1 class="textinner">${selectables[i].name}</h1>
			</div>
			`);
			} else {
				$(parent)
					.append(`<div class="infocontainer"  parent = "buttonauswahl-${selectedname}"   selectedname = "${selectedname}" value = "${i}">
		<h1 class="textinner">${selectables[i].name}</h1>
	</div>
	`);
			}
		}
	}
});
$(".container-layout").on("click", ".buttonauswahl2", function () {
	var button = $(this);
	var selectedname = button.attr("nameselected");
	var value = button.attr("value");
	if (value == "1" || value == "2") {
		var parent = document.getElementById(`button-${selectedname}`);

		var elementsToRemove = document.querySelectorAll(".infocontainer2");

		if (!$(parent).hasClass("erweiterung")) {
			var selectables = [
				{ name: "OFF" },
				{ name: "LEFT" },
				{ name: "RIGHT" },
			];

			elementsToRemove.forEach(function (element) {
				$(element).remove();
			});

			$(".container-settings2").each(function () {
				$(this).removeClass("erweiterung");
			});
			$(".buttonauswahl2").each(function () {
				$(this).removeClass("active");
			});

			$(parent).addClass("erweiterung");
			button.addClass("active");
			for (var i = 1; i < 3; i++) {
				if (value == i) {
					$(parent)
						.append(`<div class="infocontainer2 active " parent = "buttonauswahl-${selectedname}" selectedname = "${selectedname}" value = "${i}">
				<h1 class="textinner">${selectables[i].name}</h1>
			</div>
			`);
				} else {
					$(parent)
						.append(`<div class="infocontainer2"  parent = "buttonauswahl-${selectedname}"   selectedname = "${selectedname}" value = "${i}">
		<h1 class="textinner">${selectables[i].name}</h1>
	</div>
	`);
				}
			}
		}
	}
});
$(".container-layout").on("click", ".infocontainer2", function () {
	var button = $(this);
	var selectedname = button.attr("selectedname");
	var parent = button.attr("parent");
	$(".infocontainer2").each(function () {
		$(this).removeClass("active");
	});

	var value = $(this).attr("value");

	$(this).addClass("active");
	var text;
	if (value == 0) {
		text = "OFF";
		$("#" + parent).addClass("off");
	} else if (value == 1) {
		text = "LEFT";
		$("#" + parent).removeClass("off");
	} else if (value == 2) {
		text = "RIGHT";
		$("#" + parent).removeClass("off");
	}

	if (selectedname == "HUD2") {
		$(".buttonauswahl2").each(function () {
			$(this).text(text);
		});
		$(".buttonauswahl2").each(function () {
			$(this).attr("value", value);
		});
		$(".infocontainer2").each(function () {
			$(this).attr("value", value);
		});
	}

	document.getElementById(parent).innerHTML = text;
	document.getElementById(parent).setAttribute("value", value);

	$.post(
		"https://" + GetParentResourceName() + "/UpdatePos",
		JSON.stringify({ value: value, selectedname: selectedname })
	);
});
$(".container-scroll").on("click", ".infocontainer", function () {
	var button = $(this);
	var selectedname = button.attr("selectedname");
	var parent = button.attr("parent");
	$(".infocontainer").each(function () {
		$(this).removeClass("active");
	});

	var value = $(this).attr("value");

	$(this).addClass("active");
	var text;

	if (value == 0) {
		text = "OFF";
		$("#" + parent).addClass("off");
	} else if (value == 1) {
		text = "MODERN";
		$("#" + parent).removeClass("off");
	} else if (value == 2) {
		text = "ROUND";
		$("#" + parent).removeClass("off");
	} else if (value == 3) {
		text = "CLASSIC";
		$("#" + parent).removeClass("off");
	}

	if (selectedname == "HUD2") {
		$(".buttonauswahl").each(function () {
			$(this).text(text);
		});
		$(".buttonauswahl").each(function () {
			$(this).attr("value", value);
		});
		if (value == 0) {
			$(".buttonauswahl").each(function () {
				$(this).addClass("off");
			});
		} else {
			$(".buttonauswahl").each(function () {
				$(this).removeClass("off");
			});
		}

		$(this).attr("value", value);
	}

	document.getElementById(parent).innerHTML = text;
	document.getElementById(parent).setAttribute("value", value);

	$.post(
		"https://" + GetParentResourceName() + "/UpdateValue",
		JSON.stringify({ value: value, selectedname: selectedname })
	);
});
function makethirst2(percent) {
	if (percent == 0) {
		$(".container-barsecondpage").eq(0).removeClass("thirst");
		$(".container-barsecondpage").eq(1).removeClass("thirst");
		$(".container-barsecondpage").eq(2).removeClass("thirst");
		$(".container-barsecondpage").eq(3).removeClass("thirst");
		$(".container-barsecondpage").eq(4).removeClass("thirst");
	}
	if (percent <= 20 && percent > 0) {
		$(".container-barsecondpage").eq(0).addClass("thirst");
		$(".container-barsecondpage").eq(1).removeClass("thirst");
		$(".container-barsecondpage").eq(2).removeClass("thirst");
		$(".container-barsecondpage").eq(3).removeClass("thirst");
		$(".container-barsecondpage").eq(4).removeClass("thirst");
	}
	if (percent <= 40 && percent > 20) {
		$(".container-barsecondpage").eq(0).addClass("thirst");
		$(".container-barsecondpage").eq(1).addClass("thirst");
		$(".container-barsecondpage").eq(2).removeClass("thirst");
		$(".container-barsecondpage").eq(3).removeClass("thirst");
		$(".container-barsecondpage").eq(4).removeClass("thirst");
	}
	if (percent <= 60 && percent > 40) {
		$(".container-barsecondpage").eq(0).addClass("thirst");
		$(".container-barsecondpage").eq(1).addClass("thirst");
		$(".container-barsecondpage").eq(2).addClass("thirst");
		$(".container-barsecondpage").eq(3).removeClass("thirst");
		$(".container-barsecondpage").eq(4).removeClass("thirst");
	}
	if (percent <= 80 && percent > 60) {
		$(".container-barsecondpage").eq(0).addClass("thirst");
		$(".container-barsecondpage").eq(1).addClass("thirst");
		$(".container-barsecondpage").eq(2).addClass("thirst");
		$(".container-barsecondpage").eq(3).addClass("thirst");
		$(".container-barsecondpage").eq(4).removeClass("thirst");
	}
	if (percent <= 100 && percent > 80) {
		$(".container-barsecondpage").eq(0).addClass("thirst");
		$(".container-barsecondpage").eq(1).addClass("thirst");
		$(".container-barsecondpage").eq(2).addClass("thirst");
		$(".container-barsecondpage").eq(3).addClass("thirst");
		$(".container-barsecondpage").eq(4).addClass("thirst");
	}
}
function makehunger2(percent) {
	if (percent == 0) {
		$(".container-bar1secondpage").eq(0).removeClass("hungry");
		$(".container-bar1secondpage").eq(1).removeClass("hungry");
		$(".container-bar1secondpage").eq(2).removeClass("hungry");
		$(".container-bar1secondpage").eq(3).removeClass("hungry");
		$(".container-bar1secondpage").eq(4).removeClass("hungry");
	}
	if (percent <= 20 && percent > 0) {
		$(".container-bar1secondpage").eq(0).addClass("hungry");
		$(".container-bar1secondpage").eq(1).removeClass("hungry");
		$(".container-bar1secondpage").eq(2).removeClass("hungry");
		$(".container-bar1secondpage").eq(3).removeClass("hungry");
		$(".container-bar1secondpage").eq(4).removeClass("hungry");
	}
	if (percent <= 40 && percent > 20) {
		$(".container-bar1secondpage").eq(0).addClass("hungry");
		$(".container-bar1secondpage").eq(1).addClass("hungry");
		$(".container-bar1secondpage").eq(2).removeClass("hungry");
		$(".container-bar1secondpage").eq(3).removeClass("hungry");
		$(".container-bar1secondpage").eq(4).removeClass("hungry");
	}
	if (percent <= 60 && percent > 40) {
		$(".container-bar1secondpage").eq(0).addClass("hungry");
		$(".container-bar1secondpage").eq(1).addClass("hungry");
		$(".container-bar1secondpage").eq(2).addClass("hungry");
		$(".container-bar1secondpage").eq(3).removeClass("hungry");
		$(".container-bar1secondpage").eq(4).removeClass("hungry");
	}
	if (percent <= 80 && percent > 60) {
		$(".container-bar1secondpage").eq(0).addClass("hungry");
		$(".container-bar1secondpage").eq(1).addClass("hungry");
		$(".container-bar1secondpage").eq(2).addClass("hungry");
		$(".container-bar1secondpage").eq(3).addClass("hungry");
		$(".container-bar1secondpage").eq(4).removeClass("hungry");
	}
	if (percent <= 100 && percent > 80) {
		$(".container-bar1secondpage").eq(0).addClass("hungry");
		$(".container-bar1secondpage").eq(1).addClass("hungry");
		$(".container-bar1secondpage").eq(2).addClass("hungry");
		$(".container-bar1secondpage").eq(3).addClass("hungry");
		$(".container-bar1secondpage").eq(4).addClass("hungry");
	}
}
function MakeBaroneSecondPage(percent) {
	if (percent >= 10) {
		$(".container-innerprogressbarsecondpage").eq(0).addClass("active");
	}
	if (percent >= 20) {
		$(".container-innerprogressbarsecondpage").eq(1).addClass("active");
	}
	if (percent >= 30) {
		$(".container-innerprogressbarsecondpage").eq(2).addClass("active");
	}
	if (percent >= 40) {
		$(".container-innerprogressbarsecondpage").eq(3).addClass("active");
	}
	if (percent >= 50) {
		$(".container-innerprogressbarsecondpage").eq(4).addClass("active");
	}
	if (percent >= 60) {
		$(".container-innerprogressbarsecondpage").eq(5).addClass("active");
	}
	if (percent >= 70) {
		$(".container-innerprogressbarsecondpage").eq(6).addClass("active");
	}
	if (percent >= 80) {
		$(".container-innerprogressbarsecondpage").eq(7).addClass("active");
	}
	if (percent >= 90) {
		$(".container-innerprogressbarsecondpage").eq(8).addClass("active");
	}
	if (percent >= 100) {
		$(".container-innerprogressbarsecondpage").eq(9).addClass("active");
	}
}

function setProgress(progress, id) {
	var circle = document.querySelector(id);
	var radius = circle.getAttribute("r");
	var circumference = 2 * Math.PI * radius;
	var offset = circumference * (1 - progress / 100);
	circle.style.strokeDasharray = circumference;
	circle.style.strokeDashoffset = offset;
}

function customRound(number, precision) {
	if (precision === undefined) {
		return Math.round(number);
	} else {
		var factor = Math.pow(10, precision);
		return Math.round(number * factor) / factor;
	}
}

$(".buttonauswahllayout2").click(function () {
	ResetDataResourcestart();
	$.post(
		"https://" + GetParentResourceName() + "/ResetLeftRightValues",
		JSON.stringify({})
	);
});

$(".buttonauswahllayout1").click(function () {
	$(".container-settingsmenu").hide();
	insettingmenu = false;
	$(".hudsettings").show();
	MakeDrag();

	$.post(
		"https://" + GetParentResourceName() + "/Displayeverything",
		JSON.stringify({})
	);
});

$(".save").click(function () {
	$(".container-settingsmenu").show();
	insettingmenu = true;
	$(".hudsettings").hide();
	$("#container-notifythirdpage-" + removecontent).hide();
	$("#container-notify-" + removecontent).hide();
	$("#notifyteam-" + removecontent1).hide();
	$("#notifycontainer-" + removecontent2).hide();
	CloseMenu();
	$.post(
		"https://" + GetParentResourceName() + "/HandlerPosing",
		JSON.stringify({})
	);
});

$(".closebtn").click(function () {
	DisableDrag();
	ResetData();
	CloseMenu();
	$(".hudsettings").hide();
	$("#container-notifythirdpage-" + removecontent).hide();
	$("#container-notify-" + removecontent).hide();
	$("#notifyteam-" + removecontent1).hide();
	$("#notifycontainer-" + removecontent2).hide();
	$(".container-settingsmenu").show();
	insettingmenu = true;
});

const maskRect = document.getElementById("maskRect");
const animationDuration = 2000; // Dauer der Animation in Millisekunden
const steps = 100; // Anzahl der Schritte für die Animation

let currentStep = 0;

function MakeDrag() {
	SecureData();
	// First Site
	$("#leftoben").draggable({ scroll: false });
	$(".chat").draggable({ scroll: false });
	$(".container-logo").draggable({ scroll: false });
	$(".leftnotifyscontainer").draggable({ scroll: false });
	$(".radios").draggable({ scroll: false });
	$(".container-money").draggable({ scroll: false });
	$(".weaponcontainer").draggable({ scroll: false });
	$(".mittenotify").draggable({ scroll: false });
	$(".container-rightadminnotify").draggable({ scroll: false });
	$(".container-speedometer").draggable({ scroll: false });
	$(".middlenotify").draggable({ scroll: false });
	$(".jobinforamation").draggable({ scroll: false });
	$(".foodutils").draggable({ scroll: false });
	$(".progressbar").draggable({ scroll: false });
	// Second Site
	$(".jobutisl2").draggable({ scroll: false });
	$(".foodutils2").draggable({ scroll: false });
	$(".mittenotifysecondpage").draggable({ scroll: false });
	$(".rechterstauts").draggable({ scroll: false });
	$(".container-speedometer2").draggable({ scroll: false });
	$(".progressbarsecondpage").draggable({ scroll: false });
	// ThirdPage
	$(".container-speedometerthirdpage").draggable({ scroll: false });
	$(".jobinformation").draggable({ scroll: false });
	$(".thirdpagefood").draggable({ scroll: false });
	$("#secondzeitcontainer").draggable({ scroll: false });
	$(".container-idplayerthirdpage").draggable({ scroll: false });
	$(".rechtsobenthirdpage").draggable({ scroll: false });
	$(".thirdpageradio").draggable({ scroll: false });
	$(".container-moneythirdpage").draggable({ scroll: false });
	$(".mittenotifythirdpage").draggable({ scroll: false });
	$(".progressbarthirdparty").draggable({ scroll: false });
	$(".weaponcontainerthirdpage").draggable({ scroll: false });

	$("#leftoben").draggable("enable");
	$(".chat").draggable("enable");
	$(".container-logo").draggable("enable");
	$(".leftnotifyscontainer").draggable("enable");
	$(".radios").draggable("enable");
	$(".container-money").draggable("enable");
	$(".weaponcontainer").draggable("enable");
	$(".mittenotify").draggable("enable");
	$(".container-rightadminnotify").draggable("enable");
	$(".container-speedometer").draggable("enable");
	$(".middlenotify").draggable("enable");
	$(".jobinforamation").draggable("enable");
	$(".foodutils").draggable("enable");
	$(".progressbar").draggable("enable");
	// Second Site
	$(".jobutisl2").draggable("enable");
	$(".foodutils2").draggable("enable");
	$(".mittenotifysecondpage").draggable("enable");
	$(".rechterstauts").draggable("enable");
	$(".container-speedometer2").draggable("enable");
	$(".progressbarsecondpage").draggable("enable");
	// ThirdPage
	$(".container-speedometerthirdpage").draggable("enable");
	$(".jobinformation").draggable("enable");
	$(".thirdpagefood").draggable("enable");
	$("#secondzeitcontainer").draggable("enable");
	$(".container-idplayerthirdpage").draggable("enable");
	$(".rechtsobenthirdpage").draggable("enable");
	$(".thirdpageradio").draggable("enable");
	$(".container-moneythirdpage").draggable("enable");
	$(".mittenotifythirdpage").draggable("enable");
	$(".progressbarthirdparty").draggable("enable");
	$(".weaponcontainerthirdpage").draggable("enable");
}

function SecureData() {
	$("#leftoben").data({
		originalLeft: $("#leftoben").css("left"),
		origionalTop: $("#leftoben").css("top"),
	});
	$(".chat").data({
		originalLeft: $(".chat").css("left"),
		origionalTop: $(".chat").css("top"),
	});
	$(".container-logo").data({
		originalLeft: $(".container-logo").css("left"),
		origionalTop: $(".container-logo").css("top"),
	});
	$(".leftnotifyscontainer").data({
		originalLeft: $(".leftnotifyscontainer").css("left"),
		origionalTop: $(".leftnotifyscontainer").css("top"),
	});
	$(".radios").data({
		originalLeft: $(".radios").css("left"),
		origionalTop: $(".radios").css("top"),
	});
	$(".container-money").data({
		originalLeft: $(".container-money").css("left"),
		origionalTop: $(".container-money").css("top"),
	});
	$(".weaponcontainer").data({
		originalLeft: $(".weaponcontainer").css("left"),
		origionalTop: $(".weaponcontainer").css("top"),
	});
	$(".mittenotify").data({
		originalLeft: $(".mittenotify").css("left"),
		origionalTop: $(".mittenotify").css("top"),
	});
	$(".container-rightadminnotify").data({
		originalLeft: $(".container-rightadminnotify").css("left"),
		origionalTop: $(".container-rightadminnotify").css("top"),
	});
	$(".container-speedometer").data({
		originalLeft: $(".container-speedometer").css("left"),
		origionalTop: $(".container-speedometer").css("top"),
	});
	$(".middlenotify").data({
		originalLeft: $(".middlenotify").css("left"),
		origionalTop: $(".middlenotify").css("top"),
	});
	$(".jobinforamation").data({
		originalLeft: $(".jobinforamation").css("left"),
		origionalTop: $(".jobinforamation").css("top"),
	});
	$(".foodutils").data({
		originalLeft: $(".foodutils").css("left"),
		origionalTop: $(".foodutils").css("top"),
	});
	$(".progressbar").data({
		originalLeft: $(".progressbar").css("left"),
		origionalTop: $(".progressbar").css("top"),
	});
	// Second Site
	$(".jobutisl2").data({
		originalLeft: $(".jobutisl2").css("left"),
		origionalTop: $(".jobutisl2").css("top"),
	});
	$(".foodutils2").data({
		originalLeft: $(".foodutils2").css("left"),
		origionalTop: $(".foodutils2").css("top"),
	});
	$(".mittenotifysecondpage").data({
		originalLeft: $(".mittenotifysecondpage").css("left"),
		origionalTop: $(".mittenotifysecondpage").css("top"),
	});
	$(".rechterstauts").data({
		originalLeft: $(".rechterstauts").css("left"),
		origionalTop: $(".rechterstauts").css("top"),
	});
	$(".container-speedometer2").data({
		originalLeft: $(".container-speedometer2").css("left"),
		origionalTop: $(".container-speedometer2").css("top"),
	});
	$(".progressbarsecondpage").data({
		originalLeft: $(".progressbarsecondpage").css("left"),
		origionalTop: $(".progressbarsecondpage").css("top"),
	});
	// ThirdPage
	$(".container-speedometerthirdpage").data({
		originalLeft: $(".container-speedometerthirdpage").css("left"),
		origionalTop: $(".container-speedometerthirdpage").css("top"),
	});
	$(".jobinformation").data({
		originalLeft: $(".jobinformation").css("left"),
		origionalTop: $(".jobinformation").css("top"),
	});
	$(".thirdpagefood").data({
		originalLeft: $(".thirdpagefood").css("left"),
		origionalTop: $(".thirdpagefood").css("top"),
	});
	$("#secondzeitcontainer").data({
		originalLeft: $("#secondzeitcontainer").css("left"),
		origionalTop: $("#secondzeitcontainer").css("top"),
	});
	$(".container-idplayerthirdpage").data({
		originalLeft: $(".container-idplayerthirdpage").css("left"),
		origionalTop: $(".container-idplayerthirdpage").css("top"),
	});
	$(".container-logo2").data({
		originalLeft: $(".container-logo2").css("left"),
		origionalTop: $(".container-logo2").css("top"),
	});
	$(".thirdpageradio").data({
		originalLeft: $(".thirdpageradio").css("left"),
		origionalTop: $(".thirdpageradio").css("top"),
	});
	$(".container-moneythirdpage").data({
		originalLeft: $(".container-moneythirdpage").css("left"),
		origionalTop: $(".container-moneythirdpage").css("top"),
	});
	$(".mittenotifythirdpage").data({
		originalLeft: $(".mittenotifythirdpage").css("left"),
		origionalTop: $(".mittenotifythirdpage").css("top"),
	});
	$(".progressbarthirdparty").data({
		originalLeft: $(".progressbarthirdparty").css("left"),
		origionalTop: $(".progressbarthirdparty").css("top"),
	});
	$(".weaponcontainerthirdpage").data({
		originalLeft: $(".weaponcontainerthirdpage").css("left"),
		origionalTop: $(".weaponcontainerthirdpage").css("top"),
	});
}

function SecureDataResourceStart() {
	$("#leftoben").data({
		resourcestartleft: $("#leftoben").css("left"),
		resourcestarttop: $("#leftoben").css("top"),
	});
	$(".chat").data({
		resourcestartleft: $(".chat").css("left"),
		resourcestarttop: $(".chat").css("top"),
	});
	$(".container-logo").data({
		resourcestartleft: $(".container-logo").css("left"),
		resourcestarttop: $(".container-logo").css("top"),
	});
	$(".leftnotifyscontainer").data({
		resourcestartleft: $(".leftnotifyscontainer").css("left"),
		resourcestarttop: $(".leftnotifyscontainer").css("top"),
	});
	$(".radios").data({
		resourcestartleft: $(".radios").css("left"),
		resourcestarttop: $(".radios").css("top"),
	});
	$(".container-money").data({
		resourcestartleft: $(".container-money").css("left"),
		resourcestarttop: $(".container-money").css("top"),
	});
	$(".weaponcontainer").data({
		resourcestartleft: $(".weaponcontainer").css("left"),
		resourcestarttop: $(".weaponcontainer").css("top"),
	});
	$(".mittenotify").data({
		resourcestartleft: $(".mittenotify").css("left"),
		resourcestarttop: $(".mittenotify").css("top"),
	});
	$(".container-rightadminnotify").data({
		resourcestartleft: $(".container-rightadminnotify").css("left"),
		resourcestarttop: $(".container-rightadminnotify").css("top"),
	});
	$(".container-speedometer").data({
		resourcestartleft: $(".container-speedometer").css("left"),
		resourcestarttop: $(".container-speedometer").css("top"),
	});
	$(".middlenotify").data({
		resourcestartleft: $(".middlenotify").css("left"),
		resourcestarttop: $(".middlenotify").css("top"),
	});
	$(".jobinforamation").data({
		resourcestartleft: $(".jobinforamation").css("left"),
		resourcestarttop: $(".jobinforamation").css("top"),
	});
	$(".foodutils").data({
		resourcestartleft: $(".foodutils").css("left"),
		resourcestarttop: $(".foodutils").css("top"),
	});
	$(".progressbar").data({
		resourcestartleft: $(".progressbar").css("left"),
		resourcestarttop: $(".progressbar").css("top"),
	});
	$(".jobutisl2").data({
		resourcestartleft: $(".jobutisl2").css("left"),
		resourcestarttop: $(".jobutisl2").css("top"),
	});
	$(".foodutils2").data({
		resourcestartleft: $(".foodutils2").css("left"),
		resourcestarttop: $(".foodutils2").css("top"),
	});
	$(".mittenotifysecondpage").data({
		resourcestartleft: $(".mittenotifysecondpage").css("left"),
		resourcestarttop: $(".mittenotifysecondpage").css("top"),
	});
	$(".rechterstauts").data({
		resourcestartleft: $(".rechterstauts").css("left"),
		resourcestarttop: $(".rechterstauts").css("top"),
	});
	$(".container-speedometer2").data({
		resourcestartleft: $(".container-speedometer2").css("left"),
		resourcestarttop: $(".container-speedometer2").css("top"),
	});
	$(".progressbarsecondpage").data({
		resourcestartleft: $(".progressbarsecondpage").css("left"),
		resourcestarttop: $(".progressbarsecondpage").css("top"),
	});
	// ThirdPage
	$(".container-speedometerthirdpage").data({
		resourcestartleft: $(".container-speedometerthirdpage").css("left"),
		resourcestarttop: $(".container-speedometerthirdpage").css("top"),
	});
	$(".jobinformation").data({
		resourcestartleft: $(".jobinformation").css("left"),
		resourcestarttop: $(".jobinformation").css("top"),
	});
	$(".thirdpagefood").data({
		resourcestartleft: $(".thirdpagefood").css("left"),
		resourcestarttop: $(".thirdpagefood").css("top"),
	});
	$("#secondzeitcontainer").data({
		resourcestartleft: $("#secondzeitcontainer").css("left"),
		resourcestarttop: $("#secondzeitcontainer").css("top"),
	});
	$(".container-idplayerthirdpage").data({
		resourcestartleft: $(".container-idplayerthirdpage").css("left"),
		resourcestarttop: $(".container-idplayerthirdpage").css("top"),
	});
	$(".container-logo2").data({
		resourcestartleft: $(".container-logo2").css("left"),
		resourcestarttop: $(".container-logo2").css("top"),
	});
	$(".thirdpageradio").data({
		resourcestartleft: $(".thirdpageradio").css("left"),
		resourcestarttop: $(".thirdpageradio").css("top"),
	});
	$(".container-moneythirdpage").data({
		resourcestartleft: $(".container-moneythirdpage").css("left"),
		resourcestarttop: $(".container-moneythirdpage").css("top"),
	});
	$(".mittenotifythirdpage").data({
		resourcestartleft: $(".mittenotifythirdpage").css("left"),
		resourcestarttop: $(".mittenotifythirdpage").css("top"),
	});
	$(".progressbarthirdparty").data({
		resourcestartleft: $(".progressbarthirdparty").css("left"),
		resourcestarttop: $(".progressbarthirdparty").css("top"),
	});
	$(".weaponcontainerthirdpage").data({
		resourcestartleft: $(".weaponcontainerthirdpage").css("left"),
		resourcestarttop: $(".weaponcontainerthirdpage").css("top"),
	});
}

function ResetDataResourcestart() {
	$("#leftoben").css({
		left: $("#leftoben").data("resourcestartleft"),
		top: $("#leftoben").data("resourcestarttop"),
	});
	$(".chat").css({
		left: $(".chat").data("resourcestartleft"),
		top: $(".chat").data("resourcestarttop"),
	});
	$(".container-logo").css({
		left: $(".container-logo").data("resourcestartleft"),
		top: $(".container-logo").data("resourcestarttop"),
	});
	$(".leftnotifyscontainer").css({
		left: $(".leftnotifyscontainer").data("resourcestartleft"),
		top: $(".leftnotifyscontainer").data("resourcestarttop"),
	});
	$(".radios").css({
		left: $(".radios").data("resourcestartleft"),
		top: $(".radios").data("resourcestarttop"),
	});
	$(".container-money").css({
		left: $(".container-money").data("resourcestartleft"),
		top: $(".container-money").data("resourcestarttop"),
	});
	$(".weaponcontainer").css({
		left: $(".weaponcontainer").data("resourcestartleft"),
		top: $(".weaponcontainer").data("resourcestarttop"),
	});
	$(".mittenotify").css({
		left: $(".mittenotify").data("resourcestartleft"),
		top: $(".mittenotify").data("resourcestarttop"),
	});
	$(".container-rightadminnotify").css({
		left: $(".container-rightadminnotify").data("resourcestartleft"),
		top: $(".container-rightadminnotify").data("resourcestarttop"),
	});
	$(".container-speedometer").css({
		left: $(".container-speedometer").data("resourcestartleft"),
		top: $(".container-speedometer").data("resourcestarttop"),
	});
	$(".middlenotify").css({
		left: $(".middlenotify").data("resourcestartleft"),
		top: $(".middlenotify").data("resourcestarttop"),
	});
	$(".jobinforamation").css({
		left: $(".jobinforamation").data("resourcestartleft"),
		top: $(".jobinforamation").data("resourcestarttop"),
	});
	$(".foodutils").css({
		left: $(".foodutils").data("resourcestartleft"),
		top: $(".foodutils").data("resourcestarttop"),
	});
	$(".progressbar").css({
		left: $(".progressbar").data("resourcestartleft"),
		top: $(".progressbar").data("resourcestarttop"),
	});
	$(".jobutisl2").css({
		left: $(".jobutisl2").data("resourcestartleft"),
		top: $(".jobutisl2").data("resourcestarttop"),
	});
	$(".foodutils2").css({
		left: $(".foodutils2").data("resourcestartleft"),
		top: $(".foodutils2").data("resourcestarttop"),
	});
	$(".mittenotifysecondpage").css({
		left: $(".mittenotifysecondpage").data("resourcestartleft"),
		top: $(".mittenotifysecondpage").data("resourcestarttop"),
	});
	$(".rechterstauts").css({
		left: $(".rechterstauts").data("resourcestartleft"),
		top: $(".rechterstauts").data("resourcestarttop"),
	});
	$(".container-speedometer2").css({
		left: $(".container-speedometer2").data("resourcestartleft"),
		top: $(".container-speedometer2").data("resourcestarttop"),
	});
	$(".progressbarsecondpage").css({
		left: $(".progressbarsecondpage").data("resourcestartleft"),
		top: $(".progressbarsecondpage").data("resourcestarttop"),
	});
	// ThirdPage
	$(".container-speedometerthirdpage").css({
		left: $(".container-speedometerthirdpage").data("resourcestartleft"),
		top: $(".container-speedometerthirdpage").data("resourcestarttop"),
	});
	$(".jobinformation").css({
		left: $(".jobinformation").data("resourcestartleft"),
		top: $(".jobinformation").data("resourcestarttop"),
	});
	$(".thirdpagefood").css({
		left: $(".thirdpagefood").data("resourcestartleft"),
		top: $(".thirdpagefood").data("resourcestarttop"),
	});
	$("#secondzeitcontainer").css({
		left: $("#secondzeitcontainer").data("resourcestartleft"),
		top: $("#secondzeitcontainer").data("resourcestarttop"),
	});
	$(".container-idplayerthirdpage").css({
		left: $(".container-idplayerthirdpage").data("resourcestartleft"),
		top: $(".container-idplayerthirdpage").data("resourcestarttop"),
	});
	$(".container-logo2").css({
		left: $(".container-logo2").data("resourcestartleft"),
		top: $(".container-logo2").data("resourcestarttop"),
	});
	$(".thirdpageradio").css({
		left: $(".thirdpageradio").data("resourcestartleft"),
		top: $(".thirdpageradio").data("resourcestarttop"),
	});
	$(".container-moneythirdpage").css({
		left: $(".container-moneythirdpage").data("resourcestartleft"),
		top: $(".container-moneythirdpage").data("resourcestarttop"),
	});
	$(".mittenotifythirdpage").css({
		left: $(".mittenotifythirdpage").data("resourcestartleft"),
		top: $(".mittenotifythirdpage").data("resourcestarttop"),
	});
	$(".progressbarthirdparty").css({
		left: $(".progressbarthirdparty").data("resourcestartleft"),
		top: $(".progressbarthirdparty").data("resourcestarttop"),
	});
	$(".weaponcontainerthirdpage").css({
		left: $(".weaponcontainerthirdpage").data("resourcestartleft"),
		top: $(".weaponcontainerthirdpage").data("resourcestarttop"),
	});
}

function ResetData() {
	$("#leftoben").css({
		left: $("#leftoben").data("originalLeft"),
		top: $("#leftoben").data("origionalTop"),
	});
	$(".chat").css({
		left: $(".chat").data("originalLeft"),
		top: $(".chat").data("origionalTop"),
	});
	$(".container-logo").css({
		left: $(".container-logo").data("originalLeft"),
		top: $(".container-logo").data("origionalTop"),
	});
	$(".leftnotifyscontainer").css({
		left: $(".leftnotifyscontainer").data("originalLeft"),
		top: $(".leftnotifyscontainer").data("origionalTop"),
	});
	$(".radios").css({
		left: $(".radios").data("originalLeft"),
		top: $(".radios").data("origionalTop"),
	});
	$(".container-money").css({
		left: $(".container-money").data("originalLeft"),
		top: $(".container-money").data("origionalTop"),
	});
	$(".weaponcontainer").css({
		left: $(".weaponcontainer").data("originalLeft"),
		top: $(".weaponcontainer").data("origionalTop"),
	});
	$(".mittenotify").css({
		left: $(".mittenotify").data("originalLeft"),
		top: $(".mittenotify").data("origionalTop"),
	});
	$(".container-rightadminnotify").css({
		left: $(".container-rightadminnotify").data("originalLeft"),
		top: $(".container-rightadminnotify").data("origionalTop"),
	});
	$(".container-speedometer").css({
		left: $(".container-speedometer").data("originalLeft"),
		top: $(".container-speedometer").data("origionalTop"),
	});
	$(".middlenotify").css({
		left: $(".middlenotify").data("originalLeft"),
		top: $(".middlenotify").data("origionalTop"),
	});
	$(".jobinforamation").css({
		left: $(".jobinforamation").data("originalLeft"),
		top: $(".jobinforamation").data("origionalTop"),
	});
	$(".foodutils").css({
		left: $(".foodutils").data("originalLeft"),
		top: $(".foodutils").data("origionalTop"),
	});
	$(".progressbar").css({
		left: $(".progressbar").data("originalLeft"),
		top: $(".progressbar").data("origionalTop"),
	});
	// Second Site
	$(".jobutisl2").css({
		left: $(".jobutisl2").data("originalLeft"),
		top: $(".jobutisl2").data("origionalTop"),
	});
	$(".foodutils2").css({
		left: $(".foodutils2").data("originalLeft"),
		top: $(".foodutils2").data("origionalTop"),
	});
	$(".mittenotifysecondpage").css({
		left: $(".mittenotifysecondpage").data("originalLeft"),
		top: $(".mittenotifysecondpage").data("origionalTop"),
	});
	$(".rechterstauts").css({
		left: $(".rechterstauts").data("originalLeft"),
		top: $(".rechterstauts").data("origionalTop"),
	});
	$(".container-speedometer2").css({
		left: $(".container-speedometer2").data("originalLeft"),
		top: $(".container-speedometer2").data("origionalTop"),
	});
	$(".progressbarsecondpage").css({
		left: $(".progressbarsecondpage").data("originalLeft"),
		top: $(".progressbarsecondpage").data("origionalTop"),
	});
	// ThirdPage
	$(".container-speedometerthirdpage").css({
		left: $(".container-speedometerthirdpage").data("originalLeft"),
		top: $(".container-speedometerthirdpage").data("origionalTop"),
	});
	$(".jobinformation").css({
		left: $(".jobinformation").data("originalLeft"),
		top: $(".jobinformation").data("origionalTop"),
	});
	$(".thirdpagefood").css({
		left: $(".thirdpagefood").data("originalLeft"),
		top: $(".thirdpagefood").data("origionalTop"),
	});
	$("#secondzeitcontainer").css({
		left: $("#secondzeitcontainer").data("originalLeft"),
		top: $("#secondzeitcontainer").data("origionalTop"),
	});
	$(".container-idplayerthirdpage").css({
		left: $(".container-idplayerthirdpage").data("originalLeft"),
		top: $(".container-idplayerthirdpage").data("origionalTop"),
	});
	$(".container-logo2").css({
		left: $(".container-logo2").data("originalLeft"),
		top: $(".container-logo2").data("origionalTop"),
	});
	$(".thirdpageradio").css({
		left: $(".thirdpageradio").data("originalLeft"),
		top: $(".thirdpageradio").data("origionalTop"),
	});
	$(".container-moneythirdpage").css({
		left: $(".container-moneythirdpage").data("originalLeft"),
		top: $(".container-moneythirdpage").data("origionalTop"),
	});
	$(".mittenotifythirdpage").css({
		left: $(".mittenotifythirdpage").data("originalLeft"),
		top: $(".mittenotifythirdpage").data("origionalTop"),
	});
	$(".progressbarthirdparty").css({
		left: $(".progressbarthirdparty").data("originalLeft"),
		top: $(".progressbarthirdparty").data("origionalTop"),
	});
	$(".weaponcontainerthirdpage").css({
		left: $(".weaponcontainerthirdpage").data("originalLeft"),
		top: $(".weaponcontainerthirdpage").data("origionalTop"),
	});
}

function DisableDrag() {
	$("#leftoben").draggable("disable");
	$(".chat").draggable("disable");
	$(".container-logo").draggable("disable");
	$(".leftnotifyscontainer").draggable("disable");
	$(".radios").draggable("disable");
	$(".container-money").draggable("disable");
	$(".weaponcontainer").draggable("disable");
	$(".mittenotify").draggable("disable");
	$(".container-rightadminnotify").draggable("disable");
	$(".container-speedometer").draggable("disable");
	$(".middlenotify").draggable("disable");
	$(".jobinforamation").draggable("disable");
	$(".foodutils").draggable("disable");
	$(".progressbar").draggable("disable");
	// Second Site
	$(".jobutisl2").draggable("disable");
	$(".foodutils2").draggable("disable");
	$(".mittenotifysecondpage").draggable("disable");
	$(".rechterstauts").draggable("disable");
	$(".container-speedometer2").draggable("disable");
	$(".progressbarsecondpage").draggable("disable");
	// ThirdPage
	$(".container-speedometerthirdpage").draggable("disable");
	$(".jobinformation").draggable("disable");
	$(".thirdpagefood").draggable("disable");
	$("#secondzeitcontainer").draggable("disable");
	$(".container-idplayerthirdpage").draggable("disable");
	$(".rechtsobenthirdpage").draggable("disable");
	$(".thirdpageradio").draggable("disable");
	$(".container-moneythirdpage").draggable("disable");
	$(".mittenotifythirdpage").draggable("disable");
	$(".progressbarthirdparty").draggable("disable");

	$("#leftoben").removeClass("active");
	$(".chat").removeClass("active");
	$(".container-logo").removeClass("active");
	$(".leftnotifyscontainer").removeClass("active");
	$(".radios").removeClass("active");
	$(".container-money").removeClass("active");
	$(".weaponcontainer").removeClass("active");
	$(".mittenotify").removeClass("active");
	$(".container-rightadminnotify").removeClass("active");
	$(".container-speedometer").removeClass("active");
	$(".middlenotify").removeClass("active");
	$(".jobinforamation").removeClass("active");
	$(".foodutils").removeClass("active");
	$(".progressbar").removeClass("active");
	// Second Site
	$(".jobutisl2").removeClass("active");
	$(".foodutils2").removeClass("active");
	$(".mittenotifysecondpage").removeClass("active");
	$(".rechterstauts").removeClass("active");
	$(".container-speedometer2").removeClass("active");
	$(".progressbarsecondpage").removeClass("active");
	// ThirdPage
	$(".container-speedometerthirdpage").removeClass("active");
	$(".jobinformation").removeClass("active");
	$(".thirdpagefood").removeClass("active");
	$("#secondzeitcontainer").removeClass("active");
	$(".container-idplayerthirdpage").removeClass("active");
	$(".rechtsobenthirdpage").removeClass("active");
	$(".thirdpageradio").removeClass("active");
	$(".container-moneythirdpage").removeClass("active");
	$(".mittenotifythirdpage").removeClass("active");
	$(".progressbarthirdparty").removeClass("active");
	$(".weaponcontainerthirdpage").removeClass("active");
}
function setPercentage(value) {
	const percentage = value;
	document.documentElement.style.setProperty("--percentage", percentage);
}

function CloseMenu() {
	$(".progressbar").hide();
	$(".chat").hide();
	$(".weaponcontainerthirdpage").hide();
	$(".weaponcontainer").hide();
	$(".container-speedometerthirdpage").hide();
	$(".container-speedometer").hide();
	$(".container-speedometer2").hide();
	$(".mittenotify").hide();
	$(".mittenotifythirdpage").hide();
	$(".mittenotifysecondpage").hide();
	$(".progressbar").hide();
	$(".progressbarthirdparty").hide();
	$(".progressbarsecondpage").hide();
	document.getElementById("inputttext").disabled = false;
}

function sendTime() {
	let day = new Date();
	let cuDay = day.getDate();
	let h = day.getHours();
	let m = day.getMinutes();
	let monat = day.getMonth() + 1;
	let md = day.getDate();
	let year = day.getFullYear();

	h = checkTime(h);
	m = checkTime(m);
	monat = checkTime(monat);
	md = checkTime(md);
	year = checkTime(year);
	cuDay = checkTime(cuDay);

	$("#clocktime").text(h + ":" + m);
	$("#clocktimethirdpage").text(h + ":" + m);
	$("#datetime").text(`${cuDay}.${monat}.${year}`);
	$("#datetimethirdpage").text(`${cuDay}.${monat}.${year}`);
	setTimeout(sendTime, 1000);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
