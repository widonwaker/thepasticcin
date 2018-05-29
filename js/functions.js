// FUNZIONI upgrades
function CheckUpgradeAvailable(panel) {
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
	return false;
}

function ClearUpgrade (id) {
	var resetskills = id.parentElement.parentElement.getElementsByClassName("skills");
	for(var i = 0; i < resetskills.length; i++) {
	        resetskills[i].src = 'img/panel/skills_0.png';
	    }
	localStorage.setItem("energyskills",0);	
	localStorage.setItem("machineryskills",0);	
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
	CheckUpgradeAvailable(elem.parentElement.parentElement.parentElement.id);
	localStorage.setItem("money_save",start);
}


function FactoryPanel() {
	//$("#factory-panel").show();
	if ( $( "#factory-panel" ).is( ":hidden" ) ) {
        $( "#factory-panel" ).fadeIn( "slow" );
    }
	if (localStorage.getItem("deflang") == "eng") {
	    $('#factory-rib').attr('src', 'img/panel/fabbrica_eng.png'); 
	} else if (localStorage.getItem("deflang") == "ita") {
		$('#factory-rib').attr('src', 'img/panel/fabbrica_ita.png'); 
	}
	//CheckUpgradeAvailable("factory-panel");
	document.getElementById("power").getElementsByClassName("title")[0].innerHTML = energy_title;
	document.getElementById("power").getElementsByClassName("desc")[0].innerHTML = '+'+localStorage.getItem("energy")+'% '+energy_desc;
	document.getElementById("power").getElementsByClassName("skills")[0].src = 'img/panel/skills_'+localStorage.getItem("energyskills")+'.png';
	document.getElementById("power").getElementsByClassName("btn-cost")[0].innerHTML = localStorage.getItem("energy_val");
	
	document.getElementById("machinery").getElementsByClassName("title")[0].innerHTML = machinery_title;
	document.getElementById("machinery").getElementsByClassName("desc")[0].innerHTML = '+'+localStorage.getItem("machinery")+'% '+machinery_desc;
	document.getElementById("machinery").getElementsByClassName("skills")[0].src = 'img/panel/skills_'+localStorage.getItem("machineryskills")+'.png';
	document.getElementById("machinery").getElementsByClassName("btn-cost")[0].innerHTML = localStorage.getItem("machinery_val");
	
	document.getElementsByClassName("btn-upgrade")[0].innerHTML = btn_upgrade;
	var divs = document.getElementById("factory-panel").getElementsByClassName("btn-cost");
	for(var i = 0; i < divs.length; i++) {
	    CheckSingleUpgrade(divs[i]);
	}
	fontSize();
}


function SingleUpgrade(elem, skill) {
	if (parseInt(elem.innerHTML) < start && elem.parentElement.parentElement.getElementsByClassName("skills")[0].src.indexOf('skills_5') === -1) {
		var current = parseInt(localStorage.getItem(skill+"_val"));
		start = start - current; // scala costo upgrade
		localStorage.setItem(skill+"_val", current*1.5); // setta nuovo costo upgrade
		var up = parseInt(localStorage.getItem(skill+"skills"))+1;
		localStorage.setItem(skill+"skills",up); // aggiungi skill in skillbar
		elem.innerHTML = parseInt(localStorage.getItem(skill+"_val")); 
		elem.parentElement.parentElement.getElementsByClassName("skills")[0].src = 'img/panel/skills_'+up+'.png';
		var perc = parseInt(localStorage.getItem(skill));
		localStorage.setItem(skill,perc+2); // setta nuovo valore upgrade
		var desc = elem.parentElement.parentElement.getElementsByClassName("desc")[0];
		desc.innerHTML = '+'+localStorage.getItem(skill)+'% '+window[skill+'_desc'];
        speed = (parseInt(localStorage.getItem("fabbrica"))-parseInt(localStorage.getItem("orsettini")) )*(1-(parseInt(localStorage.getItem("energy")) / 100))*(1-(parseInt(localStorage.getItem("machinery")) / 100))*(1);
		checkSound("skillup");
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

function videoReward (elem) {
	rewardType = elem;
	$('.option_info').show();
	$(".option_info > span").text("Watch this video and earn X gems");
	var divs = document.getElementsByClassName("option_info");
    for(var i = 0; i < divs.length; i++) {
        var relFontsize = divs[i].offsetHeight*0.11;
        divs[i].style.fontSize = relFontsize+'px';	
    }
}

function dismiss(elem) {
	$('#'+elem.parentElement.id).hide();
	$('#'+rewardType.id).remove();
}

function startReward() {
          Appodeal.show(Appodeal.REWARDED_VIDEO);
}




/* APPODEAL */ 

Appodeal.getRewardParameters( function(result) {
   alert("Appodeal Reward Amount:" + result.amount);
   alert("Appodeal Reward Currency:" + result.currency);
});

Appodeal.setRewardedVideoCallbacks( function(container) {
       if (container.event == 'onLoaded') {
            alert('caricato');
       } else if (container.event == 'onFailedToLoad') {
            alert('failed to load');
       } else if (container.event == 'onShown') {
            // your code
       } else if (container.event == 'onFinished') {
            // container also returns "name" and "amount" variables with reward amount and currency name you have set for your application
            alert( "Appodeal. Rewarded. " + container.event + ", amount: " + container.amount + ", name: " + container.name);
            $('#qwe').show();
       } else if (container.event == 'onClosed') {
            // container also returns "finished" variable with boolean value for indicating if video was finished
            alert("Appodeal. Rewarded. " + container.event + ", finished: " + container.finished);
            $('#qwe').show();
       }
});
