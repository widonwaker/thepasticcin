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
		document.getElementById("skillup").play();
	}
	CheckSingleUpgrade(elem);
}


function BuildingNext(elem) {
	var mainid = elem.parentElement.parentElement.id;
	var matches = mainid.match(/\S+(?=-)/g);
	var num = document.getElementById(matches).src.match(/\d+/g).map(Number);
	alert(num);
	if(CheckUpgradeAvailable(elem.parentElement.parentElement.id)===true && num[0]!==5) {    
	    num = (num[0]+1).toString();
		localStorage.setItem(matches,"img/edifici/"+matches+num+".png");
		alert("img/edifici/"+matches+num+".png");
	    document.getElementById(matches).src ="img/edifici/"+matches+num+".png";
		document.getElementById("levelup").play();
		ClearUpgrade(elem);
		$('#'+mainid).hide();
		$('#'+matches+'levelup').show();
	        setTimeout(function() {
                $('#'+matches+'levelup').fadeOut();
            }, 1000);
	    }
}