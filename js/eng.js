if (document.getElementById("play") !== null) { document.getElementById("play").innerHTML = 'Play'; }
if (document.getElementById("opzioni") !== null){document.getElementById("opzioni").innerHTML = 'Options'; }
if (document.getElementById("unitmisura") !== null){document.getElementById("unitmisura").innerHTML = 'Unit of measure'; }
if (document.getElementById("saveopt") !== null){document.getElementById("saveopt").value = 'Save'; }
if (document.getElementById("creaprofilo") !== null){document.getElementById("creaprofilo").value = 'Save'; }
if (document.getElementById("sexleg") !== null){document.getElementById("sexleg").innerHTML = 'Sex:'; }
if (document.getElementById("etaleg") !== null){document.getElementById("etaleg").innerHTML = 'Age (months):'; }
if (document.getElementById("pesoleg") !== null){document.getElementById("pesoleg").innerHTML = 'Weight:'; }
if (document.getElementById("altleg") !== null){document.getElementById("altleg").innerHTML = 'Height:'; }
if (document.getElementById("calcoform") !== null){document.getElementById("calcoform").value = 'Calculate'; }

if (document.getElementById("resetM") !== null){document.getElementById("resetM").innerHTML = 'Clear all data'; }
if (document.getElementById("resetF") !== null){document.getElementById("resetF").innerHTML = 'Clear all data'; }
if (document.getElementsByClassName("linktograph") !== null){
    var divs = document.getElementsByClassName( 'linktograph' );
    [].slice.call( divs ).forEach(function ( div ) {
        div.innerHTML = 'Access the graphs';
    });	
}
if (document.getElementById("h1male") !== null){document.getElementById("h1male").innerHTML = 'Male'; }
if (document.getElementById("h1female") !== null){document.getElementById("h1female").innerHTML = 'Female'; }

if (document.getElementById("istruzioni") !== null){ document.getElementById("istruzioni").innerHTML = '<b>PERCENTILE THRESHOLDS</b> <br><b>15 - 85 percentile:</b> <br>State of normality<br><b>3 - 15 / 85 - 97 percentile:</b> <br>Mild pathology, to be monitored<br><b>Lower than 3 / Higher than 97 percentile:</b> <br>Blown pathology (visit recommended).<br>In relation to stature, a specialist examination is recommended (bone age evaluation, growth rate, hematochemical examinations, etc.)'; }

if (document.getElementsByClassName("contactstab") !== null){ 
    var divs = document.getElementsByClassName( 'contactstab' );
    [].slice.call( divs ).forEach(function ( div ) {
        div.innerHTML = 'New Measurement';
    });
}

if (document.getElementsByClassName("cancella") !== null){ 
    var divs = document.getElementsByClassName( 'cancella' );
    [].slice.call( divs ).forEach(function ( div ) {
        div.innerHTML = 'Delete Profile';
    });
}

if (document.getElementById("creanuovo") !== null){ document.getElementById("creanuovo").innerHTML = 'Create new profile';}

if (document.getElementById("intestazione") !== null){ document.getElementById("intestazione").innerHTML = '<p align="center">Insert new values for '+nome+'</p>'; }

var ClearMessage = 'You are going to delete this profile. Are you sure?';
var completed = 'Completed';
var yes = 'Yes';
var warning = 'Warning!';
var miobimbo = 'My son';
var miabimba = 'My daughter';
var mesi = 'months';
var bimboP = 'Baby weight from 0 to 24 months';
var bimboA = 'Baby height from 0 to 24 months';
var bimbaP = 'Baby weight from 0 to 24 months';
var bimbaA = 'Baby height from 0 to 24 months';