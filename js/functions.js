// FUNZIONI upgrades
function CheckUpgradeAvailable(panel) {
	var matches = panel.match(/\S+(?=-)/g);
	if (document.getElementById(matches).src.indexOf(matches+'5') === -1) {
	var divs = document.getElementById(panel).getElementsByClassName("skills");
	var id = document.getElementById(panel);
	var newimg = id.getElementsByClassName("upgrade")[0].querySelector('img');
    for(var i = 0; i < divs.length; i++) {
		if (divs[i].src.indexOf('skills_5') === -1) break;
		if (i === divs.length-1) { 
			newimg.src="img/btn_green.png";
			id.getElementsByClassName("upgrade")[0].classList.remove("grey");
			id.getElementsByClassName("upgrade")[0].classList.add("green");
			id.getElementsByClassName("btn-upgrade")[0].style.top="45%";
			id.getElementsByClassName("btn-upgrade")[0].style.left="50%";
			return true;
		}
    }
	
	} else {
		$('.btn-upgrade').html(btn_upgrade_max);
	}
	return false;
}

function ClearUpgrade (id) {
	var resetskills = id.parentElement.parentElement.getElementsByClassName("skills");
	var container = id.parentElement.parentElement.getElementsByClassName("container");
	for(var i = 0; i < resetskills.length; i++) {
	        resetskills[i].src = 'img/panel/skills_0.png';
			localStorage.setItem(container[i].id+"skills",0);
	    }
	id.parentElement.querySelector('img').src="img/panel/btn_locked.png";
	id.parentElement.classList.remove("green");
	id.parentElement.classList.add("grey");
	id.style.top="55%";
	id.style.left="52%";
}


function CheckSingleUpgrade(elem) {
	if (parseInt(elem.innerHTML) > start || elem.parentElement.parentElement.getElementsByClassName("skills")[0].src.indexOf('skills_5') !== -1) {
		elem.parentElement.style.backgroundImage = "url('img/panel/btn_buy_off.png')";
		elem.parentElement.classList.remove("green-soft");
		elem.parentElement.classList.add("grey-soft");
	} else {
		elem.parentElement.style.backgroundImage = "url('img/panel/btn_buy.png')";
		elem.parentElement.classList.add("green-soft");
		elem.parentElement.classList.remove("grey-soft");
	}
	if (elem.parentElement.parentElement.getElementsByClassName("skills")[0].src.indexOf('skills_5') !== -1) {
		elem.innerHTML = 'Max';
	}
	CheckUpgradeAvailable(elem.parentElement.parentElement.parentElement.id);
	localStorage.setItem("coins_save",start);
}


function FactoryPanel() {
	if ( $( "#factory-panel" ).is( ":hidden" ) ) {
        $( "#factory-panel" ).fadeIn( "slow" );
    }
	if (localStorage.getItem("deflang") == "eng") {
	    $('#factory-rib').attr('src', 'img/panel/fabbrica_eng.png'); 
	} else if (localStorage.getItem("deflang") == "ita") {
		$('#factory-rib').attr('src', 'img/panel/fabbrica_ita.png'); 
	}
	document.getElementById("energy").getElementsByClassName("title")[0].innerHTML = energy_title;
	document.getElementById("energy").getElementsByClassName("desc")[0].innerHTML = '+'+localStorage.getItem("energy")+'% '+energy_desc;
	document.getElementById("energy").getElementsByClassName("skills")[0].src = 'img/panel/skills_'+localStorage.getItem("energyskills")+'.png';
	document.getElementById("energy").getElementsByClassName("btn-cost")[0].innerHTML = parseInt(localStorage.getItem("energy_val"));
	
	document.getElementById("machinery").getElementsByClassName("title")[0].innerHTML = machinery_title;
	document.getElementById("machinery").getElementsByClassName("desc")[0].innerHTML = '+'+localStorage.getItem("machinery")+'% '+machinery_desc;
	document.getElementById("machinery").getElementsByClassName("skills")[0].src = 'img/panel/skills_'+localStorage.getItem("machineryskills")+'.png';
	document.getElementById("machinery").getElementsByClassName("btn-cost")[0].innerHTML = parseInt(localStorage.getItem("machinery_val"));
	
	document.getElementById("capacity").getElementsByClassName("title")[0].innerHTML = capacity_title;
	document.getElementById("capacity").getElementsByClassName("desc")[0].innerHTML = '+'+localStorage.getItem("capacity")+' '+capacity_desc;
	document.getElementById("capacity").getElementsByClassName("skills")[0].src = 'img/panel/skills_'+localStorage.getItem("capacityskills")+'.png';
	document.getElementById("capacity").getElementsByClassName("btn-cost")[0].innerHTML = parseInt(localStorage.getItem("capacity_val"));
	
	document.getElementsByClassName("btn-upgrade")[0].innerHTML = btn_upgrade;
	var divs = document.getElementById("factory-panel").getElementsByClassName("btn-cost");
	for(var i = 0; i < divs.length; i++) {
	    CheckSingleUpgrade(divs[i]);
	}
	fontSize();
}

function AlloggiPanel() {
	//$("#factory-panel").show();
	if ( $( "#alloggi-panel" ).is( ":hidden" ) ) {
        $( "#alloggi-panel" ).fadeIn( "slow" );
    }
	if (localStorage.getItem("deflang") == "eng") {
	    $('#alloggi-rib').attr('src', 'img/panel/alloggi_eng.png'); 
	} else if (localStorage.getItem("deflang") == "ita") {
		$('#alloggi-rib').attr('src', 'img/panel/alloggi_ita.png'); 
	}
	
	document.getElementById("comfort").getElementsByClassName("title")[0].innerHTML = comfort_title;
	document.getElementById("comfort").getElementsByClassName("desc")[0].innerHTML = '+'+localStorage.getItem("comfort")+'% '+comfort_desc;
	document.getElementById("comfort").getElementsByClassName("skills")[0].src = 'img/panel/skills_'+localStorage.getItem("comfortskills")+'.png';
	document.getElementById("comfort").getElementsByClassName("btn-cost")[0].innerHTML = parseInt(localStorage.getItem("comfort_val"));
	
	document.getElementById("capacity_alloggi").getElementsByClassName("title")[0].innerHTML = capacity_title;
	document.getElementById("capacity_alloggi").getElementsByClassName("desc")[0].innerHTML = '+'+localStorage.getItem("capacity_alloggi")+' '+capacity_alloggi_desc;
	document.getElementById("capacity_alloggi").getElementsByClassName("skills")[0].src = 'img/panel/skills_'+localStorage.getItem("capacity_alloggiskills")+'.png';
	document.getElementById("capacity_alloggi").getElementsByClassName("btn-cost")[0].innerHTML = parseInt(localStorage.getItem("capacity_alloggi_val"));

	$('.btn-upgrade').html(btn_upgrade);
	var divs = document.getElementById("alloggi-panel").getElementsByClassName("btn-cost");
	for(var i = 0; i < divs.length; i++) {
	    CheckSingleUpgrade(divs[i]);
	}
	fontSize();
}

function VehiclePanel() {
	//$("#factory-panel").show();
	if ( $( "#vehicle-panel" ).is( ":hidden" ) ) {
        $( "#vehicle-panel" ).fadeIn( "slow" );
    }
	if (localStorage.getItem("deflang") == "eng") {
	    $('#vehicle-rib').attr('src', 'img/panel/vehicle_eng.png'); 
	} else if (localStorage.getItem("deflang") == "ita") {
		$('#vehicle-rib').attr('src', 'img/panel/vehicle_ita.png'); 
	}
	
	document.getElementById("capacity_vehicle").getElementsByClassName("title")[0].innerHTML = capacity_title;
	document.getElementById("capacity_vehicle").getElementsByClassName("desc")[0].innerHTML = '+'+localStorage.getItem("capacity_vehicle")+' '+capacity_vehicle_desc;
	document.getElementById("capacity_vehicle").getElementsByClassName("skills")[0].src = 'img/panel/skills_'+localStorage.getItem("capacity_vehicleskills")+'.png';
	document.getElementById("capacity_vehicle").getElementsByClassName("btn-cost")[0].innerHTML = parseInt(localStorage.getItem("capacity_vehicle_val"));
	
	$('.btn-upgrade').html(btn_upgrade);
	var divs = document.getElementById("vehicle-panel").getElementsByClassName("btn-cost");
	for(var i = 0; i < divs.length; i++) {
	    CheckSingleUpgrade(divs[i]);
	}
	fontSize();
}

function warning() {
	$('#warning-info').show();
	$("#warning-info > span").html(capacityWarning);
	var divs = document.getElementsByClassName("warning_info");
    for(var i = 0; i < divs.length; i++) {
        var relFontsize = divs[i].offsetHeight*0.11;
        divs[i].style.fontSize = relFontsize+'px';	
    }
}

function SingleUpgrade(elem, skill, type, amount) {
	if (skill == "capacity") {
		if (parseInt(localStorage.getItem("capacity")) === parseInt(localStorage.getItem("capacity_alloggi")) ) {
			$('#factory-panel').fadeOut();
			if ($('#warning').length === 0) {
			    $('#right-screen').append('<img src="img/warning.png" id="warning" class="right-icon" onClick="warning()" />');
			}
		    return false;
		}
	}
	if (parseInt(elem.innerHTML) < start && elem.parentElement.parentElement.getElementsByClassName("skills")[0].src.indexOf('skills_5') === -1) {
		var current = parseInt(localStorage.getItem(skill+"_val"));
		start = start - current; // scala costo upgrade
		localStorage.setItem(skill+"_val", current*1.5); // setta nuovo costo upgrade
		var up = parseInt(localStorage.getItem(skill+"skills"))+1;
		localStorage.setItem(skill+"skills",up); // aggiungi skill in skillbar
		elem.innerHTML = parseInt(localStorage.getItem(skill+"_val")); 
		elem.parentElement.parentElement.getElementsByClassName("skills")[0].src = 'img/panel/skills_'+up+'.png';
		var perc = parseInt(localStorage.getItem(skill));
		localStorage.setItem(skill,perc+amount); // setta nuovo valore upgrade
		var desc = elem.parentElement.parentElement.getElementsByClassName("desc")[0];
		desc.innerHTML = '+'+localStorage.getItem(skill)+type+' '+window[skill+'_desc'];
		checkSound("skillup");
        speed = parseInt(localStorage.getItem("fabbrica"))*(1-(parseInt(localStorage.getItem("energy")) / 100))*(1-(parseInt(localStorage.getItem("machinery")) / 100))*(1-(parseInt(localStorage.getItem("comfort")) / 100));
	}
	CheckSingleUpgrade(elem);
}


function BuildingNext(elem) {
	var mainid = elem.parentElement.parentElement.id;
	var matches = mainid.match(/\S+(?=-)/g);
	var num = document.getElementById(matches).src.match(/\d+/g).map(Number);
	if(CheckUpgradeAvailable(elem.parentElement.parentElement.id)===true && num[0]!==5) {    
	    num = (num[num.length-1]+1).toString();
		localStorage.setItem(matches,"img/edifici/"+matches+num+".png");
	    document.getElementById(matches).src ="img/edifici/"+matches+num+".png";
		checkSound("levelup");
		ClearUpgrade(elem);
		$('#'+mainid).hide();
		$('#'+matches+'levelup').show();
	        setTimeout(function() {
                $('#'+matches+'levelup').fadeOut();
            }, 1000);
	    }
}

function checkBgmusic () {
	if (localStorage.getItem("bgmusic") != "Off") document.getElementById("bgmusic").play();
}
function checkSound (sound) {
	if (localStorage.getItem("sound") != "Off") document.getElementById(sound).play();
}

var rewardType;
var plus;

function videoReward (elem) {
	rewardType = elem.id.match(/\S+(?=-)/g);
	if (rewardType == "gems")  {
	    plus = getRandomInt(10, 50);
	}
	else if (rewardType == "coins") {
	    plus = getRandomInt(100000, 500000);
	}
	$('.option_info').show();
	$(".option_info > span").html(rewardMessage+': '+plus+' <img src="img/'+rewardType+'_icon.png" height="25%" />');
	var divs = document.getElementsByClassName("option_info");
    for(var i = 0; i < divs.length; i++) {
        var relFontsize = divs[i].offsetHeight*0.11;
        divs[i].style.fontSize = relFontsize+'px';	
    }
}

function dismiss(elem) {
	$('#'+elem.parentElement.id).hide();
	if (elem.parentElement.id == "askreward") $('#'+rewardType+'-reward').remove();
	if (elem.parentElement.id == "warning-info") $('#warning').remove();
}

function startReward() {
	Appodeal.show(Appodeal.REWARDED_VIDEO);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function assignReward(divisor) {
	var newReward = parseInt(localStorage.getItem(rewardType+"_save"));
	plus = parseInt(plus / divisor);
	if (rewardType == "coins") {
		start = start + plus;
	}
	localStorage.setItem(rewardType+"_save",newReward+plus);
	$('#'+rewardType).html(parseInt(localStorage.getItem(rewardType+"_save")).toLocaleString());
	checkSound("cashout");
	$('#askreward').hide();
	$('#'+rewardType+'-reward').remove();
	$('#plus'+rewardType).show();
	var divs = document.getElementById("plus"+rewardType);
	$('#plus'+rewardType+' > p').text('+ '+plus);	
        var relFontsize = divs.offsetWidth*0.11;
        divs.style.fontSize = relFontsize+'px';	
	        setTimeout(function() {
                $('#plus'+rewardType).fadeOut();
            }, 1000);
}


/* APPODEAL */ 
    function registerAdEvents() {
        Appodeal.setInterstitialCallbacks(function(container){
                if (container.event == 'onClosed') {
                    assignReward(3);
                }
            });
        Appodeal.setRewardedVideoCallbacks(function(container){
            if(container.event == 'onClosed') {
                //document.getElementById("callbackContainer").innerHTML = "Appodeal. Onclosed Rewarded. " + plus + ", finished: " + rewardType;
				assignReward(1);
			}
            else if(container.event == 'onFinished') {
                //document.getElementById("callbackContainer").innerHTML = "Appodeal. OnFinished Rewarded. " + plus + ", amount: " + rewardType;
				assignReward(1);
			}
            else {
                Appodeal.show(Appodeal.INTERSTITIAL);
			}
        });
    }
