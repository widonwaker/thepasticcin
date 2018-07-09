// FUNZIONI
var newDB = JSON.parse(localStorage.getItem("achievements_db"));
console.log(newDB);

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
		achievementsCheck(5);
	}
	return false;
}

function NextLevel() {
	if (document.getElementsByClassName("pastries-story")[0].src.indexOf('dolce5') !== -1) {
		return false;
	}
	var consegnati = $("#delivered-pastries").html().match(/\d+/g, "")+'';
	var c = consegnati.split(',').join('');
	var obiettivo = $("#obiettivo").html().match(/\d+/g, "")+'';
	var o = obiettivo.split(',').join('');
	if(Number(c) >= Number(o)) {
		var music = localStorage.getItem("bgmusic");
	    var sound = localStorage.getItem("sound");
		var lang = localStorage.getItem("deflang");
		var pastrynow = parseInt(localStorage.getItem("pasticcino"));
		var achievements = localStorage.getItem("achievements_db");
		var gemupgrades = [];
		for (i = 0; i < localStorage.length; i++)    {    
            key = localStorage.key(i);
			if (key.indexOf('gems_') !== -1) {
				gemupgrades[key] = parseInt(localStorage.getItem(key));
			}
        }
	    localStorage.clear();
		window.localStorage.clear();
	    del_start = 0;
		start = 0;
		Object.keys(gemupgrades).forEach(function(key) {
			localStorage.setItem(key,gemupgrades[key]);
        });
		localStorage.setItem("deflang",lang);
	    localStorage.setItem("bgmusic",music);
	    localStorage.setItem("sound",sound);
		localStorage.setItem("pasticcino", pastrynow+1);
		localStorage.setItem("achievements_db",achievements);
		achievementsCheck(6);
		location.reload(); 

	}
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
	if (elem.parentElement.parentElement.parentElement.id == "master-container") {
		var gems = parseInt(localStorage.getItem("gems_save"));
		if (parseInt(elem.innerHTML) > gems || elem.parentElement.parentElement.getElementsByClassName("skills")[0].src.indexOf('skills_5') !== -1) {
		    elem.parentElement.style.backgroundImage = "url('img/panel/btn_buy2_off.png')";
		    elem.parentElement.classList.remove("green-soft");
		    elem.parentElement.classList.add("grey-soft");
	    } else {
		    elem.parentElement.style.backgroundImage = "url('img/panel/btn_buy2.png')";
		    elem.parentElement.classList.add("green-soft");
		    elem.parentElement.classList.remove("grey-soft");
	    }
	    if (elem.parentElement.parentElement.getElementsByClassName("skills")[0].src.indexOf('skills_5') !== -1) {
		    elem.innerHTML = 'Max';
	    }
		return false;
	}
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
		achievementsCheck(1);
	}
	CheckUpgradeAvailable(elem.parentElement.parentElement.parentElement.id);
	localStorage.setItem("coins_save",start);
	localStorage.setItem("delivered",del_start);
}

function rewardChance() {
	var d = Math.random();
	var n = parseInt(localStorage.getItem("gems_rewards"))/100;
	var randNum = getRandomInt(0, 1);
    if (d < n) {
		if ($('#gems-reward').length === 0 && $('#coins-reward').length === 0) {
			if (randNum === 0)
		    $('#right-screen').append('<img src="img/play.png" id="gems-reward" class="right-icon" onClick="videoReward(this)" />');
			else if (randNum === 1)
			$('#right-screen').append('<img src="img/play.png" id="coins-reward" class="right-icon" onClick="videoReward(this)" />');
		}
	}
}


function story() {
	if ( $( "#story-panel" ).is( ":hidden" ) ) {
        $( "#story-panel" ).fadeIn( "fast" );
    }
	if (localStorage.getItem("deflang") == "eng") {
	    $('#story-rib').attr('src', 'img/panel/progress_eng.png'); 
	} else if (localStorage.getItem("deflang") == "ita") {
		$('#story-rib').attr('src', 'img/panel/progress_ita.png'); 
	}
	
	alsecondo = Math.round(1000/speed*10)/10*orsettini;
    alminuto = alsecondo*60;
	var levelup = 1 - parseInt(localStorage.getItem("gems_levelup")) / 100;
	var divisore = parseInt(localStorage.getItem("pasticcino"))*2*250000*levelup;
	var deliveredperc = parseInt(100*del_start/divisore);
	if (deliveredperc >= 100) deliveredperc = 100;	
	var barlength = document.getElementsByClassName("progress-inside")[0].offsetWidth;
	document.getElementsByClassName("progress-bar")[0].querySelector('img').style.width = barlength+'px';
	document.getElementsByClassName("progress-bar")[0].style.width = deliveredperc+'%';
	$("#obiettivo").html(divisore.toLocaleString());
	$('#delivered-perc').html(deliveredperc+'%');
	$('#pastries-story').html("<img class='pastries-story' src='img/dolci/dolce"+localStorage.getItem("pasticcino")+".png' />");
	$('#alminuto').html(production+" "+parseInt(alminuto)+" \/ min");
	if (deliveredperc >= 100) {
		if (document.getElementsByClassName("pastries-story")[0].src.indexOf('dolce5') === -1) {
		    var id = document.getElementById('story-panel');
		    var newimg = id.getElementsByClassName("upgrade")[0].querySelector('img');
		    newimg.src="img/btn_green.png";
		    id.getElementsByClassName("upgrade")[0].classList.remove("grey");
		    id.getElementsByClassName("upgrade")[0].classList.add("green");
		    id.getElementsByClassName("btn-upgrade")[0].style.top="45%";
		    id.getElementsByClassName("btn-upgrade")[0].style.left="50%";
		} else 	if (document.getElementsByClassName("pastries-story")[0].src.indexOf('dolce5') !== -1) {
		    attenzione(endgameWarning);
			localStorage.setItem("newgame","available");
	    }
	}
	fontSize();
}

function achievementsCheck(index) {
	if (newDB[index]["completed"] === "no") {
		rewardType = newDB[index]["type"];
		plus = newDB[index]["reward"];
		assignReward(1);
		newDB[index]["completed"] = "yes";
		localStorage.setItem("achievements_db", JSON.stringify(newDB));
		newDB = JSON.parse(localStorage.getItem("achievements_db"));
		return true;
	}
}

function achievements() {
	if ( $( "#mission-panel" ).is( ":hidden" ) ) {
        $( "#mission-panel" ).fadeIn( "fast" );
    }
	if (localStorage.getItem("deflang") == "eng") {
	    $('#mission-rib').attr('src', 'img/panel/mission_eng.png'); 
	} else if (localStorage.getItem("deflang") == "ita") {
		$('#mission-rib').attr('src', 'img/panel/mission_ita.png'); 
	}
	//newDB = JSON.parse(localStorage.getItem("achievements_db"));
	//localStorage.removeItem("achievements_db");
		var onoff;
		var tempclass;
		var tempcolor; 
		//if( $.trim( $('#master-container2').html() ).length > 39 ) return false;
		
		$('#master-container2').empty();
		
    for (var i = 0; i < newDB.length; i++) {
        var info = newDB[i];
		if (info.completed === 'yes') { 
		    onoff = 'img/panel/checked_on.png';
			info.reward = "";
			tempclass = "container";
			tempcolor = "brown";
		}
		else {
			 onoff = 'img/'+info.type+'_icon.png';
			 tempclass = "container-off";
			 tempcolor = "grey";
		}
        $('#master-container2').append($('<div  class="'+tempclass+' large-container">')
		                       .append('<img src="'+onoff+'" class="mission-icon" />')
							   .append('<p class="mission-txt '+tempcolor+'">'+info.title+'</p>'));
    }
	
	var divs = document.getElementById("master-container2");
        var relFontsize = divs.offsetHeight*0.05;
        divs.style.fontSize = relFontsize+'px';	

}

function GemsPanel() {
	if ( $( "#gems-panel" ).is( ":hidden" ) ) {
        $( "#gems-panel" ).fadeIn( "fast" );
    }
	if (localStorage.getItem("deflang") == "eng") {
	    $('#gems-rib').attr('src', 'img/panel/gems_eng.png'); 
	} else if (localStorage.getItem("deflang") == "ita") {
		$('#gems-rib').attr('src', 'img/panel/gems_ita.png'); 
	}
	
document.getElementById("gems_video1").getElementsByClassName("title")[0].innerHTML = gems_video1_title;
document.getElementById("gems_video1").getElementsByClassName("desc")[0].innerHTML = '+'+localStorage.getItem("gems_video1")+'% '+gems_video1_desc;
document.getElementById("gems_video1").getElementsByClassName("skills")[0].src = 'img/panel/skills_'+localStorage.getItem("gems_video1skills")+'.png';
document.getElementById("gems_video1").getElementsByClassName("btn-cost")[0].innerHTML = parseInt(localStorage.getItem("gems_video1_val"));

document.getElementById("gems_powerups").getElementsByClassName("title")[0].innerHTML = gems_powerups_title;
document.getElementById("gems_powerups").getElementsByClassName("desc")[0].innerHTML = '-'+localStorage.getItem("gems_powerups")+'% '+gems_powerups_desc;
document.getElementById("gems_powerups").getElementsByClassName("skills")[0].src = 'img/panel/skills_'+localStorage.getItem("gems_powerupsskills")+'.png';
document.getElementById("gems_powerups").getElementsByClassName("btn-cost")[0].innerHTML = parseInt(localStorage.getItem("gems_powerups_val"));

document.getElementById("gems_rewards").getElementsByClassName("title")[0].innerHTML = gems_rewards_title;
document.getElementById("gems_rewards").getElementsByClassName("desc")[0].innerHTML = '+'+localStorage.getItem("gems_rewards")+'% '+gems_rewards_desc;
document.getElementById("gems_rewards").getElementsByClassName("skills")[0].src = 'img/panel/skills_'+localStorage.getItem("gems_rewardsskills")+'.png';
document.getElementById("gems_rewards").getElementsByClassName("btn-cost")[0].innerHTML = parseInt(localStorage.getItem("gems_rewards_val"));

document.getElementById("gems_levelup").getElementsByClassName("title")[0].innerHTML = gems_levelup_title;
document.getElementById("gems_levelup").getElementsByClassName("desc")[0].innerHTML = '-'+localStorage.getItem("gems_levelup")+'% '+gems_levelup_desc;
document.getElementById("gems_levelup").getElementsByClassName("skills")[0].src = 'img/panel/skills_'+localStorage.getItem("gems_levelupskills")+'.png';
document.getElementById("gems_levelup").getElementsByClassName("btn-cost")[0].innerHTML = parseInt(localStorage.getItem("gems_levelup_val"));
	
	var divs = document.getElementById("gems-panel").getElementsByClassName("btn-cost");
	for(var i = 0; i < divs.length; i++) {
	    CheckSingleUpgrade(divs[i]);
	}
	
	var divs = document.getElementsByClassName("btn-buy2");
    for(var i = 0; i < divs.length; i++) {
        var relFontsize = divs[i].offsetWidth*0.18;
        divs[i].style.fontSize = relFontsize+'px';	
    }
	fontSize();
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
	
	delivery_limit = parseInt(localStorage.getItem("speed_vehicle"))*parseInt(localStorage.getItem("capacity_vehicle"));
	$('#capacitymin').html(vehicle_carry_info+delivery_limit_min);
	
	document.getElementById("speed_vehicle").getElementsByClassName("title")[0].innerHTML = speed_title;
	document.getElementById("speed_vehicle").getElementsByClassName("desc")[0].innerHTML = '+'+localStorage.getItem("speed_vehicle")+' '+speed_vehicle_desc;
	document.getElementById("speed_vehicle").getElementsByClassName("skills")[0].src = 'img/panel/skills_'+localStorage.getItem("speed_vehicleskills")+'.png';
	document.getElementById("speed_vehicle").getElementsByClassName("btn-cost")[0].innerHTML = parseInt(localStorage.getItem("speed_vehicle_val"));
	
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

function attenzione(msg) {
	$('#warning-info').show();
	$("#warning-info > span").html(msg);
	var divs = document.getElementsByClassName("warning_info");
    for(var i = 0; i < divs.length; i++) {
        var relFontsize = divs[i].offsetHeight*0.11;
        divs[i].style.fontSize = relFontsize+'px';	
    }
}

function GemsUpgrade(elem, skill, sign, amount) {
	var gems = parseInt(localStorage.getItem("gems_save"));
	if (parseInt(elem.innerHTML) <= gems && elem.parentElement.parentElement.getElementsByClassName("skills")[0].src.indexOf('skills_5') === -1) {
		var current = parseInt(localStorage.getItem(skill+"_val"));
		localStorage.setItem("gems_save",gems - current); // scala costo upgrade
		document.getElementById('gems').innerHTML = localStorage.getItem("gems_save"); // aggiorna gemme rimanenti
		localStorage.setItem(skill+"_val", current*2); // setta nuovo costo upgrade
		var up = parseInt(localStorage.getItem(skill+"skills"))+1;
		localStorage.setItem(skill+"skills",up); // aggiungi skill in skillbar
		elem.innerHTML = parseInt(localStorage.getItem(skill+"_val")); 
		elem.parentElement.parentElement.getElementsByClassName("skills")[0].src = 'img/panel/skills_'+up+'.png';
		var perc = parseInt(localStorage.getItem(skill));
		localStorage.setItem(skill,perc+amount); // setta nuovo valore upgrade
		var desc = elem.parentElement.parentElement.getElementsByClassName("desc")[0];
		desc.innerHTML = sign+localStorage.getItem(skill)+'% '+window[skill+'_desc'];
		checkSound("skillup");
		achievementsCheck(4);
	}
	if (skill == "gems_powerups") {
		// loop tutti i locastorage contenenti '_val' tranne contenenti 'gems_'
        for (i = 0; i < localStorage.length; i++)    {    
            key = localStorage.key(i);
			if (key.indexOf('gems_') === -1 && key.indexOf('_val') !== -1) {
				localStorage.setItem(key,parseInt(parseInt(localStorage.getItem(key))-parseInt(localStorage.getItem(key))*10/100));
			}
        }
	} // fine if skill = gems_powerups
	CheckSingleUpgrade(elem);
}

function SingleUpgrade(elem, skill, type, amount) {
	if (skill == "capacity") {
		if (parseInt(localStorage.getItem("capacity")) === parseInt(localStorage.getItem("capacity_alloggi")) ) {
			$('#factory-panel').fadeOut();
			if ($('#warning').length === 0) {
			    $('#right-screen').append('<img src="img/warning.png" id="warning" class="right-icon" onClick="attenzione(capacityWarning)" />');
			}
		    return false;
		}
	}
	
	if (parseInt(elem.innerHTML) < start && elem.parentElement.parentElement.getElementsByClassName("skills")[0].src.indexOf('skills_5') === -1) {
		var current = parseInt(localStorage.getItem(skill+"_val"));
		start = start - current; // scala costo upgrade
		localStorage.setItem(skill+"_val", current*1.6); // setta nuovo costo upgrade
		var up = parseInt(localStorage.getItem(skill+"skills"))+1;
		localStorage.setItem(skill+"skills",up); // aggiungi skill in skillbar
		elem.innerHTML = parseInt(localStorage.getItem(skill+"_val")); 
		elem.parentElement.parentElement.getElementsByClassName("skills")[0].src = 'img/panel/skills_'+up+'.png';
		var perc = parseInt(localStorage.getItem(skill));
		localStorage.setItem(skill,perc+amount); // setta nuovo valore upgrade
		var desc = elem.parentElement.parentElement.getElementsByClassName("desc")[0];
		desc.innerHTML = '+'+localStorage.getItem(skill)+type+' '+window[skill+'_desc'];
		checkSound("skillup");
		rewardChance();
        speed = parseInt(localStorage.getItem("fabbrica"))*(1-(parseInt(localStorage.getItem("energy")) / 100))*(1-(parseInt(localStorage.getItem("machinery")) / 100))*(1-(parseInt(localStorage.getItem("comfort")) / 100));
		achievementsCheck(0);
	}
	if (skill == "capacity") {
		orsettini = parseInt(localStorage.getItem("capacity"));
	}
	if (skill == "speed_vehicle" || skill == "capacity_vehicle") {
		delivery_limit_min = parseInt(localStorage.getItem("speed_vehicle"))*parseInt(localStorage.getItem("capacity_vehicle"));
		delivery_limit_sec = delivery_limit_min/60;
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
		achievementsCheck(2);	
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
		plus = parseInt(plus + plus*parseInt(localStorage.getItem("gems_video1"))/100);
	}
	else if (rewardType == "coins") {
		del_start = parseInt(localStorage.getItem("delivered"));
	    plus = getRandomInt(del_start, del_start*5);
		plus = parseInt(plus + plus*parseInt(localStorage.getItem("gems_video1"))/100);
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
	registerAdEvents();	
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
				achievementsCheck(3);
			}
            else if(container.event == 'onFinished') {
                //document.getElementById("callbackContainer").innerHTML = "Appodeal. OnFinished Rewarded. " + plus + ", amount: " + rewardType;
				//assignReward(1);
			}
            else {
                Appodeal.show(Appodeal.INTERSTITIAL);
			}
        });
    }
