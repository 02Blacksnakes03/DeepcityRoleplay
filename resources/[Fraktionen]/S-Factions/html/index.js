var priceofbasket = 0;
const basket = [];
var lagercategory = "Item";
var prozente = 0;

$("document").ready(function () {
	$(".bankmenu").hide();
	$(".container-buycar").hide();
	$(".rankedit").hide();
	$(".franktionränge").hide();
	$(".fraktionübersicht").hide();
	$(".Upgrades").hide();
	$(".playeredit").hide();
	$(".rankedit").hide();
	$(".statsedit").hide();
	$(".gehaltsubmenu").hide();
	$(".locking").hide();
	$(".locking2").hide();
	$(".locking3").hide();
	window.addEventListener("message", function (event) {
		var msg = event.data;
		if (msg.type === "OpenInvite") {
			$(".FraktionEinladung").fadeIn(400);
			document
				.getElementById("ablehnen")
				.setAttribute("job", msg.job.name);
			document.getElementById("detailsfraktionenname").innerHTML =
				msg.job.label;
			document
				.getElementById("ablehnen")
				.setAttribute("source", msg.source);
			document
				.getElementById("annehmen")
				.setAttribute("job", msg.job.name);
			document
				.getElementById("annehmen")
				.setAttribute("source", msg.source);
		} else if (msg.type === "OpenGarageMenu") {
			$(".container-cars").show();
			$(".container-buycar").hide();
			$(".GarageMenu").fadeIn(200);
			document.getElementById("textfraktionengarage").innerHTML =
				msg.language["TextTopFRAKTION"];
			document.getElementById("textmenugarage").innerHTML =
				msg.language["TextTopGarage"];
			document.getElementById("ausparkenbutton").innerHTML =
				msg.language["TextInGarageParkOut"];
			document.getElementById("einparkenbutton").innerHTML =
				msg.language["TextInGarageParkIn"];
			document.getElementById("garagebutton").innerHTML =
				msg.language["TextInGarageGarage"];
			document.getElementById("shopbutton").innerHTML =
				msg.language["TextInGarageShop"];

			$(".buttonausparken").addClass("active");
			$(".buttonShop").removeClass("active");
			$(".buttoneinparken").removeClass("active");
			$(".buttongarage").addClass("active");

			$(".container-cars").html("");
			$.each(msg.cars, function (index, item) {
				var filePath = `carpictures/${item.label.replace(
					/\s/g,
					"_"
				)}.png`;
				var path = "carpictures/car1.png";
				if (checkFilePathExists(filePath)) {
					path = filePath;
				}
				if (item.star == false) {
					$(".container-cars").append(`
					<div class="container-carsinnen">
					<h1 class="nameofcar">${item.label}</h1>
					<h1 class="numberplate">${item.plate}</h1>
					<img src="src/starempty.png" class="starimage" id="starimage" star = "${item.star}" alt="">
					<div class="container-carimg">
						<img src="${path}" class="carimg" alt="">
					</div>
					<button class="container-button" plate = "${item.plate}">
						   <h1 class="AusparkenText" vehicle = "${item.vehicle}" plate = "${item.plate}" >${msg.language["TextInGarageParkOut"]}</h1>
					   </button>
					</div>
				`);
				} else {
					$(".container-cars").prepend(`
					<div class="container-carsinnen">
					<h1 class="nameofcar">${item.label}</h1>
					<h1 class="numberplate">${item.plate}</h1>
					<img src="src/starfull.png" class="starimage" id="starimage" star = "${item.star}" alt="">
					<div class="container-carimg">
						<img src="${path}" class="carimg" star = "${item.star}" alt="">
					</div>
					<button class="container-button" plate = "${item.plate}">
						   <h1 class="AusparkenText" >${msg.language["TextInGarageParkOut"]}</h1>
					   </button>
					</div>
				`);
				}
			});
		} else if (msg.type === "UpdateGarageMenu") {
			$(".container-cars").html("");
			$.each(msg.cars, function (index, item) {
				var filePath = `carpictures/${item.label.replace(
					/\s/g,
					"_"
				)}.png`;
				var path = "carpictures/car1.png";
				if (checkFilePathExists(filePath)) {
					path = filePath;
				}
				if (item.star == false) {
					$(".container-cars").append(`
					<div class="container-carsinnen">
					<h1 class="nameofcar">${item.label}</h1>
					<h1 class="numberplate">${item.plate}</h1>
					<img src="src/starempty.png" class="starimage" id="starimage" star = "${item.star}" plate = "${item.plate}" alt="">
					<div class="container-carimg">
						<img src="${path}" class="carimg" alt="">
					</div>
					<button class="container-button" plate = "${item.plate}">
						   <h1 class="AusparkenText" vehicle = "${item.vehicle}" plate = "${item.plate}" >${msg.language["TextInGarageParkOut"]}</h1>
					   </button>
					</div>
				`);
				} else {
					$(".container-cars").prepend(`
					<div class="container-carsinnen">
					<h1 class="nameofcar">${item.label}</h1>
					<h1 class="numberplate">${item.plate}</h1>
					<img src="src/starfull.png" class="starimage" id="starimage" star = "${item.star}" plate = "${item.plate}" alt="">
					<div class="container-carimg">
						<img src="${path}" class="carimg" star = "${item.star}" alt="">
					</div>
					<button class="container-button" plate = "${item.plate}">
						   <h1 class="AusparkenText" vehicle = "${item.vehicle}" plate = "${item.plate}" >${msg.language["TextInGarageParkOut"]}</h1>
					   </button>
					</div>
				`);
				}
			});
		} else if (msg.type === "GarageUpdateEinparken") {
			var filePath = `carpictures/${msg.label.replace(/\s/g, "_")}.png`;
			var path = "carpictures/car1.png";
			if (checkFilePathExists(filePath)) {
				path = filePath;
			}
			$(".container-cars").append(`
				<div class="container-carsinnen">
				<h1 class="nameofcar">${msg.label}</h1>
				<h1 class="numberplate">${msg.plate}</h1>
				<div class="container-carimg">
					<img src="${path}" class="carimg" alt="">
				</div>
				<button class="container-button1" vehicle = "${msg.vehicle}" plate = "${msg.plate}">
					   <h1 class="AusparkenText" vehicle = "${msg.vehicle}" plate = "${msg.plate}">${msg.language["TextInGarageParkIn"]}</h1>
				   </button>
				</div>
			`);
		} else if (msg.type === "OpenShopCar") {
			var availible = msg.availiblecars;
			$(".container-cars").html("");

			$.each(msg.cars, function (index, item) {
				if (Number(index) < availible) {
					var filePath = `carpictures/${item.label.replace(
						/\s/g,
						"_"
					)}.png`;
					var path = "carpictures/car1.png";
					if (checkFilePathExists(filePath)) {
						path = filePath;
					}
					$(".container-cars").append(`
					<div class="container-carsinnen">
					<h1 class="nameofcar">${item.label}</h1>
					<h1 class="numberplate">${item.price}$</h1>
					<div class="container-carimg">
						<img src="${path}" class="carimg" alt="">
					</div>
					<button class="container-button2" vehicle = "${item.name}" price ="${item.price}"  color = "${index}" >
						   <h1 class="AusparkenText" vehicle = "${item.name}" >${msg.language["TextInGarageShopBuy"]}</h1>
					   </button>
					</div>
				`);
				}
			});
		} else if (msg.type === "OpenMainAnnounce") {
			var audio = new Audio("src/mixkit-tile-game-reveal-960.mp3");
			audio.volume = 0.2;
			audio.play();

			const content = $(`
			<div class="containermiddlenotify">

                <h1 class="fraktiontextmiddlenotify">FRAKTION</h1>
                <h1 class="fraktionannouncetext">Announce</h1>

                <div class="fraktionsannouncedesc">${msg.content} 
                </div>

            </div>
				
		`);
			$(".middlenotify").prepend(content);
			$(content)
				.css("opacity", 0)
				.slideDown("slow")
				.animate({ opacity: 1 }, { queue: false, duration: "slow" });
			setTimeout(() => {
				content.fadeOut(200);
			}, msg.duration);
		} else if (msg.type === "OpenSmallAnnounce") {
			const content = $(
				`
		
				<div class="notify-container">
                <img src="src/notify.png" class="imgbackgroundnotify" alt="">
                <div class="containerofnotifyimage">
                    <img src="src/shield1.png" class="shieldimagenotify" alt="">
                </div>
                <h1 class="notifytop">FRAKTION</h1>
                <h1 class="notifydesc">${msg.content}</h1>
                <div class="lineofnotify"></div>
            </div>
		`
			);

			$(".lefthuddisplay").prepend(content);

			setTimeout(() => {
				content.fadeOut(200);
			}, 3000);
		} else if (msg.type === "OpenShopMenu") {
			priceofbasket = 0;
			prozente = msg.prozente;
			$(".Fraktionsshop").show();
			document.getElementById("fraktionwarnekorb").innerHTML =
				msg.language["TextTopFraktionWarenkorb"];
			document.getElementById("shopwarenkorptext").innerHTML =
				msg.language["TextTopFraktionWarenkorbdesc"];
			document.getElementById("produkttext").innerHTML =
				msg.language["TextWarenkorbProduct"];
			document.getElementById("aktionentext").innerHTML =
				msg.language["TextActionsWarenkorb"];
			document.getElementById("buttonkaufen").innerHTML =
				msg.language["TextButtonBuy"];
			document.getElementById("inputts").innerHTML =
				msg.language["TextInputtFraktion"];
			document.getElementById("fraktiontextshop").innerHTML =
				msg.language["TextTopFRAKTION"];
			document.getElementById("shoptext").innerHTML =
				msg.language["TextTopShop"];
			document.getElementById("shoptext").innerHTML =
				msg.language["TextTopShop"];
			document.getElementById("totalpreis").innerHTML =
				"$" + priceofbasket;

			$(".warenkorb-container").html("");
			$(".container-fraktionshop").html("");
			document.getElementById("inputts").value = 1;

			$.each(msg.items, function (index, item) {
				var filePath = `items/${item.name.replace(/\s/g, "_")}.png`;
				var path = "src/QuestionMark1.png";
				if (checkFilePathExists(filePath)) {
					path = filePath;
				}
				var itempercent = item.price * (prozente / 100);

				$(".container-fraktionshop").append(`
				<div class="item-container" nameofitem = "${
					item.name
				}" typeofitem = "${item.type}" imgsrc = "${item.imgsrc}" nameoflabel = "${item.label}" priceofitem = "${item.price - itempercent}">
				<img src="src/Group.png" class="groupimg" alt="">
				<h1 class="itemlabel">${item.label}</h1>
				<h1 class="preislabel">$${item.price - itempercent}</h1>
				<div class="imgcontainer-shop2">
				    <img src="${path}" class="imagequestion" alt="">
                 </div>
	
			</div>
				`);
			});
		} else if (msg.type === "OpenMainFrakMenu") {
			$(".FrakMenuMain").show();
			$(".frontmenu").show();
			$(".rankedit").hide();
			$(".fraktionübersicht").hide();
			$(".playeredit").hide();
			$(".franktionränge").hide();
			$(".Upgrades").hide();
			$(".gehaltsubmenu").hide();
			$(".bankmenu").hide();
			$(".statsedit").hide();
			document.getElementById("textfraktionenfrontmenu").innerHTML =
				msg.language["TextTopFRAKTION"];
			document.getElementById("textmenufrontmenu").innerHTML =
				msg.language["TextTopShop"];

			document.getElementById("members").innerHTML = msg.membercount;
			document.getElementById("onlinepeople").innerHTML = msg.online;
			document.getElementById("factionsname").innerHTML = msg.faction;
			$(".menufrontübersicht").html("");
			if (msg.uebersichtpermission) {
				$(".menufrontübersicht").append(`
			<div class="container-übersicht"  >
			<h1 class="textmainfeature" id="category1">${msg.language["Categorys1"]}</h1>
			<img src="src/Uebersicht1.png" class="imageinmiddle" alt="">
			<button class="button-mainmenu " id="uebersichtbutton">
				<h1 class="textinmainmenubutton">
					Anzeigen
				</h1>
			</button>
		</div>
		  `);
			} else {
				$(".menufrontübersicht").append(`
				<div class="container-übersicht"  >
				<h1 class="textmainfeature" id="category1">${msg.language["Categorys1"]}</h1>
				<img src="src/Uebersicht1.png" class="imageinmiddle" alt="">
				
				<button class="button-mainmenuclosed ">
				<h1 class="textinmainmenubuttonclosed">
					Anzeigen
				</h1>
				<img src="src/lock-closed.png" class="closedimage" alt="">
			</button>
			</div>
			`);
			}
			if (msg.bankpermission) {
				$(".menufrontübersicht").append(`
				<div class="container-übersicht"  >
				<h1 class="textmainfeature" id="category2">${msg.language["Categorys2"]}</h1>
				<img src="src/Konto1.png" class="imageinmiddle2" alt="">
				<button class="button-mainmenu " id="bankbutton">
					<h1 class="textinmainmenubutton">
						Anzeigen
					</h1>
				</button>
			</div>
			  `);
			} else {
				$(".menufrontübersicht").append(`
				<div class="container-übersicht"  >
				<h1 class="textmainfeature" id="category2">${msg.language["Categorys2"]}</h1>
				<img src="src/Konto1.png" class="imageinmiddle2" alt="">
				
				<button class="button-mainmenuclosed ">
				<h1 class="textinmainmenubuttonclosed">
					Anzeigen
				</h1>
				<img src="src/lock-closed.png" class="closedimage" alt="">
			</button>
			</div>
			`);
			}

			if (msg.reangepermission) {
				$(".menufrontübersicht").append(`
				<div class="container-übersicht" >
				<h1 class="textmainfeature" id="category3">${msg.language["Categorys3"]}</h1> <img src="src/UserIconRevive2.png"
					class="imageinmiddle3" alt=""> <button class="button-mainmenu" id="reangebutton">
					<h1 class="textinmainmenubutton">
						Anzeigen
					</h1>
				</button>
			</div>
			  `);
			} else {
				$(".menufrontübersicht")
					.append(` <div class="container-übersicht">
				<h1 class="textmainfeature" id="category3">${msg.language["Categorys3"]}</h1> <img src="src/UserIconRevive2.png"
					class="imageinmiddle3" alt=""> <button class="button-mainmenuclosed ">
					<h1 class="textinmainmenubuttonclosed">
						Anzeigen
					</h1>
					<img src="src/lock-closed.png" class="closedimage" alt="">
				</button>
			</div>
				
			`);
			}

			if (msg.upgradepermission) {
				$(".menufrontübersicht").append(`
				<div class="container-übersicht">
				<h1 class="textmainfeature" id="category4">${msg.language["Categorys4"]}</h1> <img src="src/Upgrade1.png"
					class="imageinmiddle4" alt="">
				<button class="button-mainmenu " id="buttonupgrades" >
					<h1 class="textinmainmenubutton">
						Anzeigen
					</h1>
				</button>
			  `);
			} else {
				$(".menufrontübersicht")
					.append(` <div class="container-übersicht">
				<h1 class="textmainfeature" id="category4">${msg.language["Categorys4"]}</h1> <img src="src/Upgrade1.png"
					class="imageinmiddle4" alt=""> <button class="button-mainmenuclosed ">
					<h1 class="textinmainmenubuttonclosed">
						Anzeigen
					</h1>
					<img src="src/lock-closed.png" class="closedimage" alt="">
				</button>
			</div>
				
			`);
			}
		} else if (msg.type === "OpenLagerMenu") {
			$(".lager").show();
			document.getElementById("itemsbutton").innerHTML =
				msg.language["Items"];
			document.getElementById("waffenbutton").innerHTML =
				msg.language["Weapons"];
			document.getElementById("itemsbutton2").innerHTML =
				msg.language["Items"];
			document.getElementById("waffenbutton2").innerHTML =
				msg.language["Weapons"];
			document.getElementById("toptextlagerleft").innerHTML =
				msg.language["TextTopFRAKTION"];
			document.getElementById("toptextlagerright").innerHTML =
				msg.language["TextTopFRAKTION2"];
			document.getElementById("inventarwarenkorb").innerHTML =
				msg.language["TextTopShop2"];
			document.getElementById("lagerwarenkorb").innerHTML =
				msg.language["TextTopShop"];
			document.getElementById("lagerplatztext").innerHTML =
				msg.language["StoragePlace"];

			document.getElementById("inputtsinventory").value = 1;
			document.getElementById("inputtslager").value = 1;
			$("#iteminventorylager").html("");
			$("#itemlager").html("");
			var weight = 0;
			$("#buttonIteminventory").addClass("active");
			$("#buttonItemlager").addClass("active");
			$("#buttonWaffeninventory").removeClass("active");
			$("#buttonWaffenlager").removeClass("active");
			$.each(msg.inventory, function (index, item) {
				var path = "src/QuestionMark1.png";
				var filePath = `items/${item.name.replace(/\s/g, "_")}.png`;
				if (checkFilePathExists(filePath)) {
					path = filePath;
				}
				$("#iteminventorylager").append(`
				<div class="item-containerlager" data-inventory = "lager" data-name = "${item.name}" data-label = "${item.label}" name = "${item.name}" count = "${item.count}">
				<img src="src/Group.png" class="groupimglager" alt="">
				<h1 class="itemlabellager">${item.label}</h1>
				<h1 class="preislabellager">${item.count}</h1>
				<img src="${path}" class="imagequestionlager" alt="">
			</div>
			`);
			});
			$.each(msg.weapons, function (index, item) {
				weight = weight + Number(item.count);
			});
			$.each(msg.lageritems, function (index, item) {
				weight = weight + Number(item.count);
				var path = "src/QuestionMark1.png";
				var filePath = `items/${item.item.replace(/\s/g, "_")}.png`;
				if (checkFilePathExists(filePath)) {
					path = filePath;
				}
				$("#itemlager").append(`
				<div class="item-containerlager1" data-inventory = "inventory" data-name = "${item.item}" data-label = "${item.label}"  name = "${item.item}" count = "${item.count}">
				<img src="src/Group.png" class="groupimglager" alt="">
				<h1 class="itemlabellager">${item.label}</h1>
				<h1 class="preislabellager">${item.count}</h1>
				<img src="${path}" class="imagequestionlager" alt="">
			</div>
			`);
			});
			document.getElementById("placeplatztext").innerHTML =
				weight + "/" + msg.storageroom;
			SetUpLager();
		} else if (msg.type === "UpdateLagerMenu") {
			$("#iteminventorylager").html("");
			$("#itemlager").html("");
			var weight = 0;

			$.each(msg.inventory, function (index, item) {
				if (item.count == undefined) {
					item.count = 1;
				}
				var path = "src/QuestionMark1.png";
				var filePath = `items/${item.name.replace(/\s/g, "_")}.png`;
				if (checkFilePathExists(filePath)) {
					path = filePath;
				}
				$("#iteminventorylager").append(`
			<div class="item-containerlager" data-inventory = "lager" data-name = "${item.name}" data-label = "${item.label}"  name = "${item.name}" count = "${item.count}">
			<img src="src/Group.png" class="groupimglager" alt="">
			<h1 class="itemlabellager">${item.label}</h1>
			<h1 class="preislabellager">${item.count}</h1>
			<img src="${path}" class="imagequestionlager" alt="">
		</div> 
		`);
			});
			$.each(msg.weapons, function (index, item) {
				weight = weight + Number(item.count);
			});
			$.each(msg.lageritems, function (index, item) {
				weight = weight + Number(item.count);
				var path = "src/QuestionMark1.png";
				var filePath = `items/${item.item.replace(/\s/g, "_")}.png`;
				console.log(item.item);
				if (checkFilePathExists(filePath)) {
					path = filePath;
				}
				$("#itemlager").append(`
			<div class="item-containerlager1" data-inventory = "inventory" data-name = "${item.item}" data-label = "${item.label}" name = "${item.item}" count = "${item.count}">
			<img src="src/Group.png" class="groupimglager" alt="">
			<h1 class="itemlabellager">${item.label}</h1>
			<h1 class="preislabellager">${item.count}</h1>
			<img src="${path}" class="imagequestionlager" alt="">
		</div>
		`);
			});
			document.getElementById("placeplatztext").innerHTML =
				weight + "/" + msg.storageroom;
			SetUpLager();
		} else if (msg.type === "OpenMembersPage") {
			$(".fraktionübersicht").show();
			$(".container-player").html("");
			document.getElementById("textfraktionenuebersicht").innerHTML =
				msg.language["TextTopFRAKTION"];
			document.getElementById("textmenuuebersicht").innerHTML =
				msg.language["Categorys1"];
			document.getElementById("statustext").innerHTML =
				msg.language["statustext"];
			document.getElementById("nametext").innerHTML =
				msg.language["nametext"];
			document.getElementById("namegrade").innerHTML =
				msg.language["gradetext"];
			document.getElementById("namestats").innerHTML =
				msg.language["statstext"];
			document.getElementById("nameedit").innerHTML =
				msg.language["edittext"];

			$.each(msg.players, function (index, item) {
				if (item.online) {
					$(".container-player").append(`
				<div class="container-player-innen" name = "" >
				<img src="src/playerractangle.png" class="playerrectangle" alt="">
				<div class="onlineorinactive active"></div>
				<h1 class="nameofplayer">${item.firstname} ${item.lastname}</h1>
				<h1 class="gradeofplayer">${item.job_grade}</h1>
				<img src="src/stats.png" class="statsimage"  online = "${item.online}" firstname = "${item.firstname}" lastname = "${item.lastname}" jobgrade = "${item.job_grade}" identifier = "${item.identifier}" hasplayerpermission = ${msg.haspermissions} language1 = "${msg.language["TextTopFRAKTION"]}" language2 = "${msg.language["spieleredit"]}" language3 = "${msg.language["statustext"]}" language4 = "${msg.language["nametext"]}"  language5 = "${msg.language["gradetext"]}" lowidentifier = "${msg.identifier}" ownjobgrade = "${msg.jobgrade}" alt="">
				<img src="src/cog.png" class="editimage" online = "${item.online}" firstname = "${item.firstname}" lastname = "${item.lastname}" jobgrade = "${item.job_grade}" identifier = "${item.identifier}" hasplayerpermission = ${msg.haspermissions}  language1 = "${msg.language["TextTopFRAKTION"]}" language2 = "${msg.language["spieleredit"]}" language3 = "${msg.language["statustext"]}" language4 = "${msg.language["nametext"]}"  language5 = "${msg.language["gradetext"]}"  lowidentifier = "${msg.identifier}" ownjobgrade = "${msg.jobgrade}" alt="">
			</div>
		`);
				} else {
					$(".container-player").append(`
				<div class="container-player-innen" name = "" >
				<img src="src/playerractangle.png" class="playerrectangle" alt="">
				<div class="onlineorinactive"></div>
				<h1 class="nameofplayer">${item.firstname} ${item.lastname}</h1>
				<h1 class="gradeofplayer">${item.job_grade}</h1>
				<img src="src/stats.png" class="statsimage"  online = "${item.online}" firstname = "${item.firstname}" lastname = "${item.lastname}" jobgrade = "${item.job_grade}" identifier = "${item.identifier}" hasplayerpermission = ${msg.haspermissions} language1 = "${msg.language["TextTopFRAKTION"]}" language2 = "${msg.language["spieleredit"]}" language3 = "${msg.language["statustext"]}" language4 = "${msg.language["nametext"]}"  language5 = "${msg.language["gradetext"]}" lowidentifier = "${msg.identifier}"   ownjobgrade = "${msg.jobgrade}" alt="">
				<img src="src/cog.png" class="editimage" online = "${item.online}" firstname = "${item.firstname}" lastname = "${item.lastname}" jobgrade = "${item.job_grade}" identifier = "${item.identifier}" hasplayerpermission = ${msg.haspermissions} language1 = "${msg.language["TextTopFRAKTION"]}" language2 = "${msg.language["spieleredit"]}" language3 = "${msg.language["statustext"]}" language4 = "${msg.language["nametext"]}"  language5 = "${msg.language["gradetext"]}" lowidentifier = "${msg.identifier}"  ownjobgrade = "${msg.jobgrade}" alt="">
			</div>
		`);
				}
			});
		} else if (msg.type === "OpenBankPage") {
			$(".bankmenu").show();
			document.getElementById("textfraktionenbank").innerHTML =
				msg.language["TextTopFRAKTION"];
			document.getElementById("textmenubank").innerHTML =
				msg.language["Categorys2"];
			document.getElementById("gehalttext").innerHTML =
				msg.language["Wages"];
			document.getElementById("gehaltinformation").innerHTML =
				msg.language["WagesDesc"];
			document.getElementById("rangtext").innerHTML =
				msg.language["rank"];
			document.getElementById("gehalt").innerHTML =
				msg.language["wagetext"];
			document.getElementById("factionskonto").innerHTML =
				msg.language["factionskonto"];
			document.getElementById("texteinzahlen").innerHTML =
				msg.language["payin"];
			document.getElementById("textauszahlen").innerHTML =
				msg.language["payout"];
			document.getElementById("textgehalt2").innerHTML =
				msg.language["gift"];
			document.getElementById("descriptiongehalt2").innerHTML =
				msg.language["giftdesc"];
			document.getElementById("texteinzahlen2").innerHTML =
				msg.language["desctiption"];
			document.getElementById("texteinzahlen3").innerHTML =
				msg.language["onlinemember"];
			document.getElementById("textauszahlen2").innerHTML =
				msg.language["sendtext"];

			document.getElementById("itemofkonto").innerHTML = "$" + msg.geld;
			document.getElementById("verfügbarerbetrag").innerHTML =
				"$" + msg.geld;
			document.getElementById("onlinemember").innerHTML =
				msg.onlinemember;
			$(".container-listofranks").html("");
			$.each(msg.reange, function (index, item) {
				$(".container-listofranks").append(`
				<div class="containerofrank">
                    <img src="src/rankordnung.png" class="imgofrank" alt="">
                    <h1 class="rankofplayer">${item.grade}</h1>
                    <h1 class="gehaltofplayer">$${item.salary}</h1>   
					<img src="src/cog.png" class="cogofgehalt" labelofname = "${item.label}" jobname = "${item.job_name}" labelgehalt = "${item.salary}" language1 = "${msg.language["TextTopFRAKTION"]}" language2 = "${msg.language["wagetext"]}" language3 = "${msg.language["nameofgrade"]}" language4 = "${msg.language["wagestext2"]}"alt="">
                </div>
			`);
			});
			document.getElementById("inputtauszahlen").value = "";
			document.getElementById("betragsenden").value = "";
			document.getElementById("inputteinzahlen").value = "";

			// TODO
		} else if (msg.type === "OpenReangePage") {
			document.getElementById("textfactions").innerHTML =
				msg.language["TextTopFRAKTION"];
			document.getElementById("textreange").innerHTML =
				msg.language["Categorys3"];
			document.getElementById("textstatusnameo").innerHTML =
				msg.language["nameofgrade"];
			document.getElementById("textstatusgrade").innerHTML =
				msg.language["nametextgrade"];
			document.getElementById("textstatusgehalt").innerHTML =
				msg.language["wagestext2"];
			document.getElementById("textstatusedit").innerHTML =
				msg.language["edittext2"];

			$(".franktionränge").show();
			$(".container-reange").html("");
			$.each(msg.jobs, function (index, item) {
				$(".container-reange").append(`
				<div class="container-player-innen">
                    <img src="src/playerractangle.png" class="playerrectangle" alt="">
                    <h1 class="gradeofplayer">${item.grade}</h1>
                    <h1 class="gradeofplayername">${item.label}</h1>
                    <img src="src/money.png" class="statsimage1"  labelofname = "${item.label}" jobname = "${item.job_name}" labelgehalt = "${item.salary}" language1 = "${msg.language["TextTopFRAKTION"]}" language2 = "${msg.language["wagetext"]}" language3 = "${msg.language["nameofgrade"]}" language4 = "${msg.language["wagestext2"]}" alt="">
					<img src="src/cog.png" class="editimage1" labelofname = "${item.label}" jobname = "${item.job_name}" labelgehalt = "${item.salary}" language1 = "${msg.language["TextTopFRAKTION"]}" language2 = "${msg.language["rangedittext"]}" language3 = "${msg.language["nametext"]}" language4 = "${msg.language["statustext"]}" language5 = "${msg.language["nametextgrade"]}" invite = "${item.invite}" grade = "${item.grade}" alt="">
                </div>
			`);
			});
			// TODO
		} else if (msg.type === "UpdateMainFrakMenu") {
			document.getElementById("members").innerHTML = msg.membercount;
			document.getElementById("onlinepeople").innerHTML = msg.online;
			document.getElementById("factionsname").innerHTML = msg.faction;
		} else if (msg.type === "OpenUpgradeList") {
			$(".Upgrades").show();
			$("#lagerplatz").html("");
			$("#autohaus").html("");
			$("#shopcart").html("");
			$("#kontoplace").html("");
			if (msg.costforupgradestate != undefined) {
				document.getElementById("lagerplatzplace").innerHTML =
					"+" + msg.costforupgradestate.storage + " Lagerplatz";
			} else {
				document.getElementById("lagerplatzplace").innerHTML =
					"Max Lagerplatz";
			}
			if (msg.costforupgradeautohaus != undefined) {
				document.getElementById("autohausplace").innerHTML =
					"+" + msg.costforupgradeautohaus.cars + " Autos";
			} else {
				document.getElementById("autohausplace").innerHTML =
					"Max Neue Autos";
			}
			if (msg.costforupgradekonto != undefined) {
				document.getElementById("kontoplaces").innerHTML =
					"+" + msg.costforupgradekonto.walletmax + " Limit";
			} else {
				document.getElementById("kontoplaces").innerHTML = "Max Rabatt";
			}

			if (msg.costforupgradeshop != undefined) {
				document.getElementById("shopcartplace").innerHTML =
					"+" + msg.costforupgradeshop.discount + "% Rabatt";
			} else {
				document.getElementById("shopcartplace").innerHTML =
					"Max Limit ";
			}

			if (msg.upgradestate == 0) {
				$("#lagerplatz").append(`
			<button class="button-mainmenu " id="upgradestate" price = "${msg.costforupgradestate.price}">
				<h1 class="textinmainmenubutton" >
				   $${msg.costforupgradestate.price}
				</h1>
			</button>
		`);
			} else if (msg.upgradestate == 1) {
				$(".balken1").addClass("active");
				$("#lagerplatz").append(` 
				    <button class="button-mainmenu" id="upgradestate" price = "${msg.costforupgradestate.price}">
                        <h1 class="textinmainmenubutton">
                           $${msg.costforupgradestate.price}
                        </h1>
                    </button>
				`);
			} else if (msg.upgradestate == 2) {
				$(".balken1").addClass("active");
				$(".balken2").addClass("active");
				$("#lagerplatz").append(`
				<button class="button-mainmenu" id="upgradestate" price = "${msg.costforupgradestate.price}">
					<h1 class="textinmainmenubutton">
					$${msg.costforupgradestate.price}
					</h1>
				</button>
			`);
			} else if (msg.upgradestate == 3) {
				$(".balken1").addClass("active");
				$(".balken2").addClass("active");
				$(".balken3").addClass("active");
				$("#lagerplatz").append(`
				<button class="button-mainmenuclosed">
                        <h1 class="textinmainmenubuttonclosedshop">
                            MAX
                        </h1>
                </button>
			`);
			}

			if (msg.upgradeautohaus == 0) {
				$("#autohaus").append(`
			<button class="button-mainmenu ">
				<h1 class="textinmainmenubutton" id="upgradeautohaus" price = "${msg.costforupgradeautohaus.price}">
				   $${msg.costforupgradeautohaus.price}
				</h1>
			</button>
		`);
			}
			if (msg.upgradeautohaus == 1) {
				$(".balken4").addClass("active");
				$("#autohaus").append(`
				<button class="button-mainmenu ">
					<h1 class="textinmainmenubutton" id="upgradeautohaus" price = "${msg.costforupgradeautohaus.price}">
					$${msg.costforupgradeautohaus.price}
					</h1>
				</button>
			`);
			} else if (msg.upgradeautohaus == 2) {
				$(".balken4").addClass("active");
				$(".balken5").addClass("active");
				$("#autohaus").append(`
				<button class="button-mainmenu ">
					<h1 class="textinmainmenubutton" id="upgradeautohaus" price = "${msg.costforupgradeautohaus.price}">
					$${msg.costforupgradeautohaus.price}
					</h1>
				</button>
			`);
			} else if (msg.upgradeautohaus == 3) {
				$(".balken4").addClass("active");
				$(".balken5").addClass("active");
				$(".balken6").addClass("active");
				$("#autohaus").append(`
				<button class="button-mainmenuclosed">
                        <h1 class="textinmainmenubuttonclosedshop">
                            MAX
                        </h1>
                    </button>
			`);
			}

			if (msg.upgradekonto == 0) {
				$("#kontoplace").append(`
				<button class="button-mainmenu" id="upgradekonto" price = "${msg.costforupgradekonto.price}">
				<h1 class="textinmainmenubutton">
				$${msg.costforupgradekonto.price}
				</h1>
			</button>
		`);
			} else if (msg.upgradekonto == 1) {
				$(".balken10").addClass("active");
				$("#kontoplace").append(`
				<button class="button-mainmenu" id="upgradekonto" price = "${msg.costforupgradekonto.price}">
				<h1 class="textinmainmenubutton">
				$${msg.costforupgradekonto.price}
				</h1>
			</button>
		`);
			} else if (msg.upgradekonto == 2) {
				$(".balken10").addClass("active");
				$(".balken11").addClass("active");
				$("#kontoplace").append(`
				<button class="button-mainmenu" id="upgradekonto" price = "${msg.costforupgradekonto.price}">
					<h1 class="textinmainmenubutton">
					$${msg.costforupgradekonto.price}
					</h1>
				</button>
				
			`);
			} else if (msg.upgradekonto == 3) {
				$(".balken10").addClass("active");
				$(".balken11").addClass("active");
				$(".balken12").addClass("active");
				$("#kontoplace").append(`
				<button class="button-mainmenuclosed"  >
                        <h1 class="textinmainmenubuttonclosedshop">
                            MAX
                        </h1>
                </button>	
				`);
			}

			if (msg.upgradeshop == 0) {
				$("#shopcart").append(`
			<button class="button-mainmenu" id="upgradeshop" price = "${msg.costforupgradeshop.price}">
				<h1 class="textinmainmenubutton">
				$${msg.costforupgradeshop.price}
				</h1>
			</button>
			
		`);
			} else if (msg.upgradeshop == 1) {
				$(".balken7").addClass("active");
				$("#shopcart").append(`
				<button class="button-mainmenu" id="upgradeshop" price = "${msg.costforupgradeshop.price}">
					<h1 class="textinmainmenubutton">
					$${msg.costforupgradeshop.price}
					</h1>
				</button>
				
			`);
			} else if (msg.upgradeshop == 2) {
				$(".balken7").addClass("active");
				$(".balken8").addClass("active");
				$("#shopcart").append(`
				<button class="button-mainmenu" id="upgradeshop" price = "${msg.costforupgradeshop.price}">
					<h1 class="textinmainmenubutton">
					$${msg.costforupgradeshop.price}
					</h1>
				</button>
				
			`);
			} else if (msg.upgradeshop == 3) {
				$(".balken7").addClass("active");
				$(".balken8").addClass("active");
				$(".balken9").addClass("active");
				$("#shopcart").append(`
				<button class="button-mainmenuclosed"  >
                        <h1 class="textinmainmenubuttonclosedshop">
                            MAX
                        </h1>
                </button>	
				`);
			}
		} else if (msg.type === "UpdateList") {
			$(".container-listofranks").html("");

			$.each(msg.list, function (index, item) {
				$(".container-listofranks").append(`
				<div class="containerofrank">
                    <img src="src/rankordnung.png" class="imgofrank" alt="">
                    <h1 class="rankofplayer">${item.grade}</h1>
                    <h1 class="gehaltofplayer">$${item.salary}</h1>   
					<img src="src/cog.png" class="cogofgehalt" labelofname = "${item.label}" jobname = "${item.job_name}" labelgehalt = "${item.salary}" language1 = "${msg.language["TextTopFRAKTION"]}" language2 = "${msg.language["wagetext"]}" language3 = "${msg.language["nameofgrade"]}" language4 = "${msg.language["wagestext2"]}"alt="">
                </div>
			`);
			});
			$(".container-reange").html("");
			$.each(msg.list, function (index, item) {
				$(".container-reange").append(`
				<div class="container-player-innen">
                    <img src="src/playerractangle.png" class="playerrectangle" alt="">
                    <h1 class="gradeofplayer">${item.grade}</h1>
                    <h1 class="gradeofplayername">${item.label}</h1>
                    <img src="src/money.png" class="statsimage1"  labelofname = "${item.label}" jobname = "${item.job_name}" labelgehalt = "${item.salary}" language1 = "${msg.language["TextTopFRAKTION"]}" language2 = "${msg.language["wagetext"]}" language3 = "${msg.language["nameofgrade"]}" language4 = "${msg.language["wagestext2"]}" alt="">
                    <img src="src/cog.png" class="editimage1" labelofname = "${item.label}" jobname = "${item.job_name}" labelgehalt = "${item.salary}" language1 = "${msg.language["TextTopFRAKTION"]}" language2 = "${msg.language["rangedittext"]}" language3 = "${msg.language["nametext"]}" language4 = "${msg.language["statustext"]}" language5 = "${msg.language["nametextgrade"]}" invite = "${item.invite}" grade = "${item.grade}" alt="">
                </div>
			`);
			});
		} else if (msg.type === "UpdateListMoney") {
			document.getElementById("itemofkonto").innerHTML = "$" + msg.money;
			document.getElementById("verfügbarerbetrag").innerHTML =
				"$" + msg.money;
		} else if (msg.type === "UpdateMembersPage") {
			$(".container-player").html("");
			document.getElementById("textfraktionenuebersicht").innerHTML =
				msg.language["TextTopFRAKTION"];
			document.getElementById("textmenuuebersicht").innerHTML =
				msg.language["Categorys1"];
			document.getElementById("statustext").innerHTML =
				msg.language["statustext"];
			document.getElementById("nametext").innerHTML =
				msg.language["nametext"];
			document.getElementById("namegrade").innerHTML =
				msg.language["gradetext"];
			document.getElementById("namestats").innerHTML =
				msg.language["statstext"];
			document.getElementById("nameedit").innerHTML =
				msg.language["edittext"];

			document.getElementById("members").innerHTML = msg.membercount;
			document.getElementById("onlinepeople").innerHTML = msg.online;

			if (
				msg.identifier == msg.zuidentifier ||
				Number(msg.owngrade) <= Number(msg.informationofplayergrade)
			) {
				$(".button-submenu3").addClass("locked");
				$(".textinmainmenubutton4").addClass("locked");
				$(".button-submenu4").addClass("locked");
				$(".textinmainmenubutton5").addClass("locked");
				$(".locking2").show();
				$(".locking3").show();
				$(".button-submenu2").addClass("locked");
				$(".textinmainmenubutton3").addClass("locked");
				$(".locking").show();
			} else {
				$(".locking2").hide();
				$(".locking3").hide();
				$(".button-submenu3").removeClass("locked");
				$(".textinmainmenubutton4").removeClass("locked");
				$(".button-submenu4").removeClass("locked");
				$(".textinmainmenubutton5").removeClass("locked");
				$(".button-submenu2").removeClass("locked");
				$(".textinmainmenubutton3").removeClass("locked");
				$(".locking").hide();
			}

			$.each(msg.players, function (index, item) {
				if (item.online) {
					$(".container-player").append(`
				<div class="container-player-innen" name = "" >
				<img src="src/playerractangle.png" class="playerrectangle" alt="">
				<div class="onlineorinactive active"></div>
				<h1 class="nameofplayer">${item.firstname} ${item.lastname}</h1>
				<h1 class="gradeofplayer">${item.job_grade}</h1>
				<img src="src/stats.png" class="statsimage"  online = "${item.online}" firstname = "${item.firstname}" lastname = "${item.lastname}" jobgrade = "${item.job_grade}" identifier = "${item.identifier}" hasplayerpermission = ${msg.haspermissions} language1 = "${msg.language["TextTopFRAKTION"]}" language2 = "${msg.language["spieleredit"]}" language3 = "${msg.language["statustext"]}" language4 = "${msg.language["nametext"]}"  language5 = "${msg.language["gradetext"]}" lowidentifier = "${msg.identifier}" ownjobgrade = "${msg.jobgrade}" alt="">
				<img src="src/cog.png" class="editimage" online = "${item.online}" firstname = "${item.firstname}" lastname = "${item.lastname}" jobgrade = "${item.job_grade}" identifier = "${item.identifier}" hasplayerpermission = ${msg.haspermissions} language1 = "${msg.language["TextTopFRAKTION"]}" language2 = "${msg.language["spieleredit"]}" language3 = "${msg.language["statustext"]}" language4 = "${msg.language["nametext"]}"  language5 = "${msg.language["gradetext"]}" lowidentifier = "${msg.identifier}" ownjobgrade = "${msg.jobgrade}" alt="">
			</div>
		`);
				} else {
					$(".container-player").append(`
				<div class="container-player-innen" name = "" >
				<img src="src/playerractangle.png" class="playerrectangle" alt="">
				<div class="onlineorinactive"></div>
				<h1 class="nameofplayer">${item.firstname} ${item.lastname}</h1>
				<h1 class="gradeofplayer">${item.job_grade}</h1>
				<img src="src/stats.png" class="statsimage"  online = "${item.online}" firstname = "${item.firstname}" lastname = "${item.lastname}" jobgrade = "${item.job_grade}" identifier = "${item.identifier}" hasplayerpermission = ${msg.haspermissions} language1 = "${msg.language["TextTopFRAKTION"]}" language2 = "${msg.language["spieleredit"]}" language3 = "${msg.language["statustext"]}" language4 = "${msg.language["nametext"]}"  language5 = "${msg.language["gradetext"]}" lowidentifier = "${msg.identifier}" ownjobgrade = "${msg.jobgrade}" alt="">
				<img src="src/cog.png" class="editimage" online = "${item.online}" firstname = "${item.firstname}" lastname = "${item.lastname}" jobgrade = "${item.job_grade}" identifier = "${item.identifier}" hasplayerpermission = ${msg.haspermissions} language1 = "${msg.language["TextTopFRAKTION"]}" language2 = "${msg.language["spieleredit"]}" language3 = "${msg.language["statustext"]}" language4 = "${msg.language["nametext"]}"  language5 = "${msg.language["gradetext"]}" lowidentifier = "${msg.identifier}" ownjobgrade = "${msg.jobgrade}" alt="">
			</div>
		`);
				}
			});

			document.getElementById("gradeeditplayer").innerHTML =
				msg.informationofplayergrade;
			document.getElementById("playername").innerHTML =
				msg.informationofplayername;
		} else if (msg.type === "UpdateData") {
			var result = msg.result;
			$(".datecontainer").html("");
			$(".containerofbars").html("");
			var durschnitt = 0;
			const maxPlaytime = Math.max(
				...result.map((item) => item.playtime)
			);
			var teilen = 0;
			$.each(result, function (index, item) {
				teilen = teilen + 1;
				var dayy = item.day;
				var day = dayy.substring(0, 3);
				durschnitt = Number(durschnitt) + Number(item.playtime);
				$(".datecontainer").append(`
				<h1 class="textofdate">${day} ${item.date}</h1>
		`);
				const height = getBarHeight(item.playtime);

				$(".containerofbars").append(`
				<div class="outercontainer">
                    <div class="barofcontainer" timeofplayer = "${item.playtime}" style="height: ${height}vh;"></div>
                </div>
	  `);
			});
			var time = toHoursAndMinutes(durschnitt / teilen);

			document.getElementById("durschnittsrechnung").innerHTML =
				time.hours + "h " + time.minutes + "m";
			document.getElementById("ausgeweahltezeit").innerHTML = "0h";
		}
	});
});

function getBarHeight(playtime) {
	const maxHeight = 16;

	// Die Höhe des Balkens wird proportional zur Spielzeit berechnet.
	var height = (playtime / 24) * maxHeight;

	// Wenn die Höhe des Balkens größer als 24vh ist, wird sie auf 24vh begrenzt.
	if (height > maxHeight) {
		height = maxHeight;
	}

	return height;
}

function toHoursAndMinutes(totalMinutes) {
	const hours2 = Math.floor(totalMinutes / 60);
	const minutes2 = totalMinutes % 60;
	var hours = hours2.toFixed(1);
	var minutes = minutes2.toFixed(2);
	return { hours, minutes };
}

// Invite

$("#ablehnen").click(function () {
	var job = document.getElementById("annehmen").getAttribute("job");
	var source = document.getElementById("ablehnen").getAttribute("source");
	$.post(
		"https://" + GetParentResourceName() + "/AblehnenFrak",
		JSON.stringify({ job: job, source: source })
	);
	Close();
});

$("#annehmen").click(function () {
	var job = document.getElementById("annehmen").getAttribute("job");
	var source = document.getElementById("annehmen").getAttribute("source");
	Close();
	$.post(
		"https://" + GetParentResourceName() + "/AnnehmenFrak",
		JSON.stringify({ job: job, source: source })
	);
});

// Close
function Close() {
	$(".FraktionEinladung").fadeOut(400);
	$.post("https://" + GetParentResourceName() + "/Close", JSON.stringify({}));
}

function CloseGarage() {
	$(".GarageMenu").fadeOut(200);
	$(".container-cars").show();
	$(".container-buycar").hide();
	$.post(
		"https://" + GetParentResourceName() + "/CloseGarage",
		JSON.stringify({})
	);
}

function CloseLager() {
	$(".lager").hide();
	$.post(
		"https://" + GetParentResourceName() + "/CloseLager",
		JSON.stringify({})
	);
}
function CloseMeinMenu() {
	$(".FrakMenuMain").hide();
	$.post(
		"https://" + GetParentResourceName() + "/CloseMainMenu",
		JSON.stringify({})
	);
}

function CloseShop() {
	$(".Fraktionsshop").fadeOut(200);
	$(".container-fraktionshop").html("");
	$(".warenkorb-container").html("");
	$.each(basket, function (index, item) {
		delete basket[index];
	});
	priceofbasket = 0;
	$.post(
		"https://" + GetParentResourceName() + "/CloseShop",
		JSON.stringify({})
	);
}
$(".closefrakmenu").click(function () {
	CloseMeinMenu();
});
$(".goback").click(function () {
	$(".frontmenu").show();
	$(".bankmenu").hide();
	$(".franktionränge").hide();
	$(".Upgrades").hide();
	$(".fraktionübersicht").hide();
});
// Garage - Star Changing
$(".container-cars").on("click", ".starimage", function () {
	var button = $(this);
	var state = button.attr("star");
	var plate = button.attr("plate");

	if (state == false || state == "0") {
		state = true;
	} else {
		state = false;
	}

	$.post(
		"https://" + GetParentResourceName() + "/ChangeStar",
		JSON.stringify({ state: state, plate: plate })
	);
});

// Garage - Park In button

$(".buttoneinparken").click(function () {
	$(".container-cars").html("");
	$(".buttoneinparken").addClass("active");
	$(".buttonausparken").removeClass("active");
	$(".buttonShop").removeClass("active");
	$(".buttongarage").addClass("active");
	$.post(
		"https://" + GetParentResourceName() + "/ChangeSite",
		JSON.stringify({ state: "parkin" })
	);
});

// Garage - Park Out Button

$(".buttonausparken").click(function () {
	$(".container-cars").html("");
	$(".buttonausparken").addClass("active");
	$(".buttoneinparken").removeClass("active");
	$(".buttonShop").removeClass("active");
	$(".buttongarage").addClass("active");
	$.post(
		"https://" + GetParentResourceName() + "/ChangeSite",
		JSON.stringify({ state: "parkout" })
	);
});

// Garage - Garage Category

$(".buttongarage").click(function () {
	$(".container-cars").html("");
	$(".buttongarage").addClass("active");
	$(".buttoneinparken").removeClass("active");
	$(".buttonShop").removeClass("active");
	$(".buttonausparken").addClass("active");

	$.post(
		"https://" + GetParentResourceName() + "/ChangeSite",
		JSON.stringify({ state: "parkout" })
	);
});
// Garage - Shop Category

$(".buttonShop").click(function () {
	$(".container-cars").html("");
	$(".buttonShop").addClass("active");
	$(".buttoneinparken").removeClass("active");
	$(".buttongarage").removeClass("active");
	$(".buttonausparken").removeClass("active");
	$.post(
		"https://" + GetParentResourceName() + "/ChangeSite",
		JSON.stringify({ state: "shop" })
	);
});

// Garage - Park In Button
$(".container-cars").on("click", ".container-button1", function () {
	CloseGarage();
	var button = $(this);
	var vehicle = button.attr("vehicle");
	var plate = button.attr("plate");

	$.post(
		"https://" + GetParentResourceName() + "/ParkIn",
		JSON.stringify({ vehicle: vehicle, plate: plate })
	);
});

// Garage - Park In Button
$(".container-cars").on("click", ".container-button2", function () {
	CloseGarage();
	var button = $(this);
	var vehicle = button.attr("vehicle");
	var color = button.attr("color");
	var price = button.attr("price");
	$.post(
		"https://" + GetParentResourceName() + "/BuyVehicle",
		JSON.stringify({ vehicle: vehicle, color: color, price: price })
	);
});
$(".container-cars").on("click", ".container-button", function () {
	CloseGarage();
	var button = $(this);
	var plate = button.attr("plate");
	$.post(
		"https://" + GetParentResourceName() + "/ParkOut",
		JSON.stringify({ plate: plate })
	);
});
// ESC
$(document).on("keydown", function (event) {
	switch (event.keyCode) {
		case 27:
			CloseGarage();
			CloseShop();
			CloseMeinMenu();
			CloseLager();
			$(".FraktionEinladung").hide();
			break;
	}
});

// Add to basket
$(".container-fraktionshop").on("click", ".item-container", function () {
	var button = $(this);
	var label = button.attr("nameoflabel");
	var imgsrc = button.attr("imgsrc");
	var amount = document.getElementById("inputts").value;
	var nameofitem = button.attr("nameofitem");
	var priceofitem = button.attr("priceofitem");
	var totalitemvalue = Number(priceofitem) * Number(amount);
	var typeofitem = button.attr("typeofitem");

	if (typeofitem == "Weapon") {
		amount = 1;
	}
	var IsThereAItem = false;
	$.each(basket, function (index, item) {
		if (item != undefined) {
			if (item.name == nameofitem) {
				IsThereAItem = true;
			}
		}
	});
	if (IsThereAItem) {
		if (typeofitem != "Weapon") {
			priceofbasket =
				Number(priceofbasket) + Number(priceofitem) * Number(amount);
			document.getElementById("totalpreis").innerHTML =
				"$" + priceofbasket;
			$.each(basket, function (index, item) {
				if (item != undefined) {
					if (item.name == nameofitem) {
						count = Number(item.amount) + Number(amount);
						price =
							Number(priceofitem) * Number(amount) +
							Number(item.price);
						item.amount = count;
						item.price = price;
					}
				}
			});
		}
	} else {
		priceofbasket =
			Number(priceofbasket) + Number(priceofitem) * Number(amount);
		document.getElementById("totalpreis").innerHTML = "$" + priceofbasket;
		const object = {
			price: totalitemvalue,
			priceofitem: priceofitem,
			name: nameofitem,
			typeofitem: typeofitem,
			amount: amount,
			label: label,
			imgsrc: imgsrc,
		};
		basket.push(object);
	}
	$(".warenkorb-container").html("");
	$.each(basket, function (index, item) {
		if (item != undefined) {
			var filePath = `items/${item.name.replace(/\s/g, "_")}.png`;
			var path = "src/QuestionMark1.png";
			if (checkFilePathExists(filePath)) {
				path = filePath;
			}
			$(".warenkorb-container").append(`
		<div class="warecontainer">
		<img src="src/Rectangle3.png" class="imgware" alt="">
		<h1 class="warenkorbnameofitem">${item.amount}x ${item.label}</h1>
		<h1 class="warenkorbpreis">$${item.price}</h1>
		<img src="src/minus.png" class="minus" name = "${item.name}"  priceofitem = "${item.priceofitem}" typeofitem = "${item.typeofitem}" alt="">
		<img src="src/plus.png" class="plus" name = "${item.name}"  priceofitem = "${item.priceofitem}" typeofitem = "${item.typeofitem}" alt="">
		<img src="src/Vector.png" class="delete" name = "${item.name}"  priceofitem = "${item.priceofitem}" price = ${item.price} alt="">
		<div class="imgcontainer">
			<img src="${path}" class="imigewarenkorb" alt="">
		</div>
	</div>
	
		`);
		}
	});
});

// Remove item from the Basket
$(".warenkorbframe").on("click", ".minus", function () {
	var button = $(this);
	var name = button.attr("name");
	var priceofitem = button.attr("priceofitem");
	var typeofitem = button.attr("typeofitem");

	$.each(basket, function (index, item) {
		if (item != undefined) {
			if (item.name == name) {
				if (Number(item.amount) - 1 == 0) {
					delete basket[index];
				} else {
					count = Number(item.amount) - 1;
					price = Number(priceofitem) * Number(count);
					item.amount = count;
					item.price = price;
				}
			}
		}
	});

	priceofbasket = Number(priceofbasket) - Number(priceofitem);
	document.getElementById("totalpreis").innerHTML = "$" + priceofbasket;

	$(".warenkorb-container").html("");
	$.each(basket, function (index, item) {
		if (item != undefined) {
			var filePath = `items/${item.name.replace(/\s/g, "_")}.png`;
			var path = "src/QuestionMark1.png";
			if (checkFilePathExists(filePath)) {
				path = filePath;
			}
			$(".warenkorb-container").append(`
		<div class="warecontainer">
		<img src="src/Rectangle3.png" class="imgware" alt="">
		<h1 class="warenkorbnameofitem">${item.amount}x ${item.label}</h1>
		<h1 class="warenkorbpreis">$${item.price}</h1>
		<img src="src/minus.png" class="minus" name = "${item.name}"  priceofitem = "${item.priceofitem}" typeofitem = "${item.typeofitem}" alt="">
		<img src="src/plus.png" class="plus" name = "${item.name}"  priceofitem = "${item.priceofitem}" typeofitem = "${item.typeofitem}" alt="">
		<img src="src/Vector.png" class="delete" name = "${item.name}"  priceofitem = "${item.priceofitem}" price = ${item.price} alt="">
		<div class="imgcontainer">
			<img src="${path}" class="imigewarenkorb" alt="">
		</div>
	</div>
		`);
		}
	});
});
// Add item from the Basket
$(".warenkorbframe").on("click", ".plus", function () {
	var button = $(this);
	var name = button.attr("name");
	var priceofitem = button.attr("priceofitem");
	var typeofitem = button.attr("typeofitem");
	if (typeofitem != "Weapon") {
		$.each(basket, function (index, item) {
			if (item != undefined) {
				if (item.name == name) {
					count = Number(item.amount) + 1;
					price = Number(priceofitem) * Number(count);
					item.amount = count;
					item.price = price;
				}
			}
		});

		priceofbasket = Number(priceofbasket) + Number(priceofitem);
		document.getElementById("totalpreis").innerHTML = "$" + priceofbasket;

		$(".warenkorb-container").html("");
		$.each(basket, function (index, item) {
			if (item != undefined) {
				var filePath = `items/${item.name.replace(/\s/g, "_")}.png`;
				var path = "src/QuestionMark1.png";
				if (checkFilePathExists(filePath)) {
					path = filePath;
				}
				$(".warenkorb-container").append(`
		<div class="warecontainer">
		<img src="src/Rectangle3.png" class="imgware" alt="">
		<h1 class="warenkorbnameofitem">${item.amount}x ${item.label}</h1>
		<h1 class="warenkorbpreis">$${item.price}</h1>
		<img src="src/minus.png" class="minus" name = "${item.name}"  priceofitem = "${item.priceofitem}" typeofitem = "${item.typeofitem}" alt="">
		<img src="src/plus.png" class="plus" name = "${item.name}"  priceofitem = "${item.priceofitem}" typeofitem = "${item.typeofitem}" alt="">
		<img src="src/Vector.png" class="delete" name = "${item.name}"  priceofitem = "${item.priceofitem}" price = ${item.price} alt="">
		<div class="imgcontainer">
			<img src="${path}" class="imigewarenkorb" alt="">
		</div>
	</div>
		`);
			}
		});
	}
});
// Delete item from the Basket
$(".warenkorbframe").on("click", ".delete", function () {
	var button = $(this);
	var name = button.attr("name");
	var priceofitem = button.attr("price");

	$.each(basket, function (index, item) {
		if (item != undefined) {
			if (item.name == name) {
				delete basket[index];
			}
		}
	});

	priceofbasket = Number(priceofbasket) - Number(priceofitem);
	document.getElementById("totalpreis").innerHTML = "$" + priceofbasket;

	$(".warenkorb-container").html("");
	$.each(basket, function (index, item) {
		if (item != undefined) {
			var filePath = `items/${item.name.replace(/\s/g, "_")}.png`;
			var path = "src/QuestionMark1.png";
			if (checkFilePathExists(filePath)) {
				path = filePath;
			}
			$(".warenkorb-container").append(`
		<div class="warecontainer">
		<img src="src/Rectangle3.png" class="imgware" alt="">
		<h1 class="warenkorbnameofitem">${item.amount}x ${item.label}</h1>
		<h1 class="warenkorbpreis">$${item.price}</h1>
		<img src="src/minus.png" class="minus" name = "${item.name}"  priceofitem = "${item.priceofitem}" alt="">
		<img src="src/plus.png" class="plus" name = "${item.name}"  priceofitem = "${item.priceofitem}" alt="">
		<img src="src/Vector.png" class="delete" name = "${item.name}"  priceofitem = "${item.priceofitem}"  price = ${item.price} alt="">
		<div class="imgcontainer">
			<img src="${path}" class="imigewarenkorb" alt="">
		</div>
	</div>
		`);
		}
	});
});

// Buy items
$(".buttonsunten").on("click", ".buttonkaufen", function () {
	var button = $(this);

	var priceofbasketend = priceofbasket;
	priceofbasket = 0;

	$.post(
		"https://" + GetParentResourceName() + "/PayForShop",
		JSON.stringify({ basket: basket, price: priceofbasketend })
	);

	$.each(basket, function (index, item) {
		delete basket[index];
	});

	CloseShop();
});

// Lager
$("#buttonIteminventory").click(function () {
	$(".container-cars").html("");
	lagercategory = "Item";
	$("#buttonIteminventory").addClass("active");
	$("#buttonItemlager").addClass("active");
	$("#buttonWaffeninventory").removeClass("active");
	$("#buttonWaffenlager").removeClass("active");
	$.post(
		"https://" + GetParentResourceName() + "/ChangeSiteLager",
		JSON.stringify({ state: "Items" })
	);
});

// Garage - Item Category

$("#buttonItemlager").click(function () {
	$(".container-cars").html("");
	lagercategory = "Item";
	$("#buttonIteminventory").addClass("active");
	$("#buttonItemlager").addClass("active");
	$("#buttonWaffeninventory").removeClass("active");
	$("#buttonWaffenlager").removeClass("active");
	$.post(
		"https://" + GetParentResourceName() + "/ChangeSiteLager",
		JSON.stringify({ state: "Items" })
	);
});

// Lager - Weapon Category

$("#buttonWaffenlager").click(function () {
	$("#iteminventorylager").html("");
	$("#itemlager").html("");
	lagercategory = "Weapon";
	$("#buttonIteminventory").removeClass("active");
	$("#buttonItemlager").removeClass("active");
	$("#buttonWaffeninventory").addClass("active");
	$("#buttonWaffenlager").addClass("active");

	$.post(
		"https://" + GetParentResourceName() + "/ChangeSiteLager",
		JSON.stringify({ state: "Weapons" })
	);
});

// Lager - Weapon Category

$("#buttonWaffeninventory").click(function () {
	$("#iteminventorylager").html("");
	$("#itemlager").html("");
	lagercategory = "Weapon";
	$("#buttonIteminventory").removeClass("active");
	$("#buttonItemlager").removeClass("active");
	$("#buttonWaffeninventory").addClass("active");
	$("#buttonWaffenlager").addClass("active");
	$.post(
		"https://" + GetParentResourceName() + "/ChangeSiteLager",
		JSON.stringify({ state: "Weapons" })
	);
});
// Übersicht
$(".menufrontübersicht").on("click", "#uebersichtbutton", function () {
	$(".frontmenu").hide();
	$.post(
		"https://" + GetParentResourceName() + "/ChangeSiteMainMenu",
		JSON.stringify({ state: "GetMembers" })
	);
});
// Bank
$(".menufrontübersicht").on("click", "#bankbutton", function () {
	$(".frontmenu").hide();
	$.post(
		"https://" + GetParentResourceName() + "/ChangeSiteMainMenu",
		JSON.stringify({ state: "GetBank" })
	);
});
// Grades
$(".menufrontübersicht").on("click", "#reangebutton", function () {
	$(".frontmenu").hide();
	$.post(
		"https://" + GetParentResourceName() + "/ChangeSiteMainMenu",
		JSON.stringify({ state: "GetReange" })
	);
});
$(".menufrontübersicht").on("click", "#buttonupgrades", function () {
	$(".frontmenu").hide();
	$.post(
		"https://" + GetParentResourceName() + "/ChangeSiteMainMenu",
		JSON.stringify({ state: "GetUpgrades" })
	);
});
// Lager setup
function SetUpLager() {
	$(".item-containerlager").each(function () {
		if ($(this).data("name")) {
			$(this).draggable({
				helper: "clone",
				appendTo: ".lager",
				revert: "invalid",
				containment: "document",
			});
		}
	});

	$(".item-containerlager1").each(function () {
		if ($(this).data("name")) {
			$(this).draggable({
				helper: "clone",
				appendTo: ".lager",
				revert: "invalid",
				containment: "document",
			});
		}
	});

	$("#itemlager")
		.off()
		.droppable({
			drop: function (event, ui) {
				var inventory = ui.draggable.attr("data-inventory");
				if (inventory === "lager") {
					var itemname = ui.draggable.attr("name");
					var anzahl =
						document.getElementById("inputtsinventory").value;
					var label = ui.draggable.attr("data-label");

					if (anzahl !== undefined) {
						$.post(
							"https://" +
								GetParentResourceName() +
								"/giveitemlager",
							JSON.stringify({
								item: itemname,
								anzahl: anzahl,
								label: label,
								category: lagercategory,
							})
						);
					} else {
						$.post(
							"https://" +
								GetParentResourceName() +
								"/giveitemlager",
							JSON.stringify({
								item: itemname,
								anzahl: 1,
								label: label,
								category: lagercategory,
							})
						);
					}
				}
			},
		});

	$("#iteminventorylager")
		.off()
		.droppable({
			drop: function (event, ui) {
				var inventory = ui.draggable.attr("data-inventory");
				if (inventory === "inventory") {
					var itemname = ui.draggable.attr("name");
					var anzahl = document.getElementById("inputtslager").value;
					var label = ui.draggable.attr("data-label");

					if (anzahl !== undefined) {
						$.post(
							"https://" +
								GetParentResourceName() +
								"/giveiteminventory",
							JSON.stringify({
								item: itemname,
								anzahl: anzahl,
								label: label,
								category: lagercategory,
							})
						);
					} else {
						$.post(
							"https://" +
								GetParentResourceName() +
								"/giveiteminventory",
							JSON.stringify({
								item: itemname,
								anzahl: 1,
								label: label,
								category: lagercategory,
							})
						);
					}
				}
			},
		});
}

$(".bankmenu").on("click", ".cogofgehalt", function () {
	$(".gehaltsubmenu").show();
	var button = $(this);
	var labelname = button.attr("labelofname");
	var jobname = button.attr("jobname");
	var gehalt = button.attr("labelgehalt");
	var language1 = button.attr("language1");
	var language2 = button.attr("language2");
	var language3 = button.attr("language3");
	var language4 = button.attr("language4");
	document.getElementById("inputtmoney").value = "";
	document.getElementById("textofsubmenugehalt").innerHTML = language1;
	document.getElementById("textofsubmenugehaltdesc").innerHTML = language2;
	document.getElementById("textofnamegehalt").innerHTML = language3;
	document.getElementById("textofgehalt").innerHTML = language4;

	document.getElementById("nameofrank").innerHTML = labelname;
	document.getElementById("howmanygehalt").innerHTML = gehalt;
	document.getElementById("Speichern").setAttribute("name", labelname);
	document.getElementById("Speichern").setAttribute("name2", jobname);
});

$(".gehaltsubmenu").on("click", "#gobackwithoutsubmenu", function () {
	$(".gehaltsubmenu").hide();
});

$(".gehaltsubmenu").on("click", "#Speichern", function () {
	var amount = document.getElementById("inputtmoney").value;
	var button = $(this);
	var name = button.attr("name");
	var jobname = button.attr("name2");
	$(".gehaltsubmenu").hide();
	if (amount != undefined) {
		$.post(
			"https://" + GetParentResourceName() + "/updategehalt",
			JSON.stringify({
				amount: amount,
				name: name,
				jobname: jobname,
			})
		);
	}
});

$("#approveoben").click(function () {
	var money = document.getElementById("inputteinzahlen").value;

	$.post(
		"https://" + GetParentResourceName() + "/payin",
		JSON.stringify({
			money: money,
		})
	);
});
$("#approvedrunter").click(function () {
	var money = document.getElementById("inputtauszahlen").value;

	$.post(
		"https://" + GetParentResourceName() + "/payout",
		JSON.stringify({
			money: money,
		})
	);
});
$("#approveverteilen").click(function () {
	var money = document.getElementById("betragsenden").value;
	$.post(
		"https://" + GetParentResourceName() + "/payforonline",
		JSON.stringify({
			money: money,
		})
	);
});

$(".franktionränge").on("click", ".statsimage1", function () {
	$(".gehaltsubmenu").show();
	var button = $(this);
	var labelname = button.attr("labelofname");
	var jobname = button.attr("jobname");
	var gehalt = button.attr("labelgehalt");
	var language1 = button.attr("language1");
	var language2 = button.attr("language2");
	var language3 = button.attr("language3");
	var language4 = button.attr("language4");
	document.getElementById("inputtmoney").value = "";
	document.getElementById("textofsubmenugehalt").innerHTML = language1;
	document.getElementById("textofsubmenugehaltdesc").innerHTML = language2;
	document.getElementById("textofnamegehalt").innerHTML = language3;
	document.getElementById("textofgehalt").innerHTML = language4;

	document.getElementById("nameofrank").innerHTML = labelname;
	document.getElementById("howmanygehalt").innerHTML = gehalt;
	document.getElementById("Speichern").setAttribute("name", labelname);
	document.getElementById("Speichern").setAttribute("name2", jobname);
});

$(".franktionränge").on("click", ".editimage1", function () {
	$(".rankedit").show();
	var button = $(this);
	var labelname = button.attr("labelofname");
	var jobname = button.attr("jobname");
	var invite = button.attr("invite");
	var grade = button.attr("grade");
	var language1 = button.attr("language1");
	var language2 = button.attr("language2");
	var language3 = button.attr("language3");
	var language4 = button.attr("language4");
	var language5 = button.attr("language5");

	document.getElementById("inputtname").value = labelname;
	document.getElementById("nameofrankedit").innerHTML = labelname;
	document.getElementById("gradeedit").innerHTML = grade;

	document.getElementById("textoffraktionenrankedit").innerHTML = language1;
	document.getElementById("textoffraktionenrankedit2").innerHTML = language2;
	document.getElementById("textofnamerank").innerHTML = language3;
	document.getElementById("textofgraderank").innerHTML = language5;

	if (invite == "false") {
		$(".checkpng").hide();
	} else {
		$(".checkpng").show();
	}

	document.getElementById("speicherrankedit").setAttribute("invite", invite);
	document.getElementById("speicherrankedit").setAttribute("name", labelname);
	document.getElementById("speicherrankedit").setAttribute("name2", jobname);
	document
		.getElementById("einladungerstellen")
		.setAttribute("invite", invite);
	document
		.getElementById("einladungerstellen")
		.setAttribute("name", labelname);
	document
		.getElementById("einladungerstellen")
		.setAttribute("name2", jobname);
});

$(".rankedit").on("click", "#gobackrankedit", function () {
	$(".rankedit").hide();
});

$("#speicherrankedit").click(function () {
	$(".rankedit").hide();
	var button = $(this);
	var nameofrank = button.attr("name");
	var namename = button.attr("name2");
	var name = document.getElementById("inputtname").value;
	var invite = button.attr("invite");
	$.post(
		"https://" + GetParentResourceName() + "/changename",
		JSON.stringify({
			name: name,
			invite: invite,
			namename: namename,
			nameofrank: nameofrank,
		})
	);
});

$("#einladungerstellen").click(function () {
	var button = $(this);
	var invite = button.attr("invite");
	var name = button.attr("name");
	var namename = button.attr("name2");

	if (invite == "false") {
		$(".checkpng").show();
		document
			.getElementById("einladungerstellen")
			.setAttribute("invite", "true");
		document
			.getElementById("speicherrankedit")
			.setAttribute("invite", "true");
		$.post(
			"https://" + GetParentResourceName() + "/UpdateDatabank",
			JSON.stringify({
				state: "true",
				jobname: namename,
				grade: name,
			})
		);
	} else {
		$(".checkpng").hide();
		document
			.getElementById("einladungerstellen")
			.setAttribute("invite", "false");
		document
			.getElementById("speicherrankedit")
			.setAttribute("invite", "false");
		$.post(
			"https://" + GetParentResourceName() + "/UpdateDatabank",
			JSON.stringify({
				state: "false",
				jobname: namename,
				grade: name,
			})
		);
	}
});

$(".fraktionübersicht").on("click", ".editimage", function () {
	$(".playeredit").show();
	var button = $(this);
	var onlinepeople = button.attr("online");
	var firstname = button.attr("firstname");
	var lastname = button.attr("lastname");
	var jobgrade = button.attr("jobgrade");
	var identifier = button.attr("identifier");
	var ididentifier = button.attr("lowidentifier");
	var hasplayerpermission = button.attr("hasplayerpermission");
	var ownjobgrade = button.attr("ownjobgrade");

	if (onlinepeople == "true") {
		$(".onlineorinactive2").addClass("active");
	} else {
		$(".onlineorinactive2").removeClass("active");
	}

	if (hasplayerpermission) {
		$(".button-submenu2").removeClass("locked");
		$(".textinmainmenubutton3").removeClass("locked");
		$(".locking").hide();
	} else {
		$(".button-submenu2").addClass("locked");
		$(".textinmainmenubutton3").addClass("locked");
		$(".locking").show();
	}

	if (ididentifier == identifier || Number(ownjobgrade) <= Number(jobgrade)) {
		$(".button-submenu3").addClass("locked");
		$(".textinmainmenubutton4").addClass("locked");
		$(".button-submenu4").addClass("locked");
		$(".textinmainmenubutton5").addClass("locked");
		$(".locking2").show();
		$(".locking3").show();
		$(".button-submenu2").addClass("locked");
		$(".textinmainmenubutton3").addClass("locked");
		$(".locking").show();
	} else {
		$(".locking2").hide();
		$(".locking3").hide();
		$(".button-submenu3").removeClass("locked");
		$(".textinmainmenubutton4").removeClass("locked");
		$(".button-submenu4").removeClass("locked");
		$(".textinmainmenubutton5").removeClass("locked");
		$(".button-submenu2").removeClass("locked");
		$(".textinmainmenubutton3").removeClass("locked");
		$(".locking").hide();
	}

	document.getElementById("playername").innerHTML =
		firstname + " " + lastname;
	document.getElementById("gradeeditplayer").innerHTML = jobgrade;

	document
		.getElementById("befördernedit")
		.setAttribute("identifier", identifier);
	document
		.getElementById("degradierenedti")
		.setAttribute("identifier", identifier);
	document.getElementById("feueredit").setAttribute("identifier", identifier);

	// Language
	var language1 = button.attr("language1");
	var language2 = button.attr("language2");
	var language3 = button.attr("language3");
	var language4 = button.attr("language4");
	var language5 = button.attr("language5");

	document.getElementById("textoffraktionenrankeditplayer").innerHTML =
		language1;
	document.getElementById("textoffraktionenrankedit2player").innerHTML =
		language2;
	document.getElementById("textofnamerankplayer").innerHTML = language4;
	document.getElementById("textofnamerankplayer1").innerHTML = language3;
	document.getElementById("textofgraderankplayer").innerHTML = language5;
});

$(".playeredit").on("click", "#gobackrankeditplayer", function () {
	$(".playeredit").hide();
});

$(".playeredit").on("click", "#befördernedit", function () {
	if (!hasClass(document.getElementById("befördernedit"), "locked")) {
		var button = $(this);
		var identifier = button.attr("identifier");
		$.post(
			"https://" + GetParentResourceName() + "/uprank",
			JSON.stringify({
				identifier: identifier,
			})
		);
	}
});

$(".playeredit").on("click", "#degradierenedti", function () {
	if (!hasClass(document.getElementById("degradierenedti"), "locked")) {
		var button = $(this);
		var identifier = button.attr("identifier");
		$.post(
			"https://" + GetParentResourceName() + "/derank",
			JSON.stringify({
				identifier: identifier,
			})
		);
	}
});

$(".playeredit").on("click", "#feueredit", function () {
	if (!hasClass(document.getElementById("feueredit"), "locked")) {
		$(".playeredit").hide();
		var button = $(this);
		var identifier = button.attr("identifier");
		$.post(
			"https://" + GetParentResourceName() + "/feuern",
			JSON.stringify({
				identifier: identifier,
			})
		);
	}
});
function hasClass(element, className) {
	return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
}
$("#lagerplatz").on("click", "#upgradestate", function () {
	var button = $(this);
	var price = button.attr("price");
	$.post(
		"https://" + GetParentResourceName() + "/MakeUpgrade",
		JSON.stringify({ price: price, typeofupgrade: "lagerraum" })
	);
});

$("#autohaus").on("click", "#upgradeautohaus", function () {
	var button = $(this);
	var price = button.attr("price");
	$.post(
		"https://" + GetParentResourceName() + "/MakeUpgrade",
		JSON.stringify({ price: price, typeofupgrade: "upgradeautohaus" })
	);
});

$("#kontoplace").on("click", "#upgradekonto", function () {
	var button = $(this);
	var price = button.attr("price");
	$.post(
		"https://" + GetParentResourceName() + "/MakeUpgrade",
		JSON.stringify({ price: price, typeofupgrade: "upgradekonto" })
	);
});

$("#shopcart").on("click", "#upgradeshop", function () {
	var button = $(this);
	var price = button.attr("price");
	$.post(
		"https://" + GetParentResourceName() + "/MakeUpgrade",
		JSON.stringify({ price: price, typeofupgrade: "upgradeshop" })
	);
});
$(".container-player").on("click", ".statsimage", function () {
	$(".statsedit").show();
	var button = $(this);
	var onlinepeople = button.attr("online");
	var firstname = button.attr("firstname");
	var lastname = button.attr("lastname");
	var grade = button.attr("jobgrade");
	var identifier = button.attr("identifier");

	if (onlinepeople == "true") {
		$(".onlineorinactive3").addClass("active");
	} else {
		$(".onlineorinactive3").removeClass("active");
	}

	document.getElementById("playernamestats").innerHTML =
		firstname + " " + lastname;
	document.getElementById("gradeeditplayerstats").innerHTML = grade;

	$.post(
		"https://" + GetParentResourceName() + "/GetDataForDate",
		JSON.stringify({ identifier: identifier })
	);
});

$(".closestats").click(function () {
	$(".statsedit").hide();
});

$(".containerofbars").on("click", ".barofcontainer", function () {
	var button = $(this);
	var playtime = button.attr("timeofplayer");

	const balken = document.querySelectorAll(".barofcontainer");
	balken.forEach((balken) => {
		balken.classList.remove("active");
	});
	button.addClass("active");
	var time = toHoursAndMinutes(playtime);
	document.getElementById("ausgeweahltezeit").innerHTML =
		time.hours + "h " + time.minutes + "m";
});

function checkFilePathExists(filePath) {
	var xhr = new XMLHttpRequest();
	xhr.open("HEAD", filePath, false);
	xhr.send();
	return xhr.status === 200;
}
