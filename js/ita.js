if (document.getElementById("tabB") !== null) { document.getElementById("tabB").innerHTML = 'Profili'; }
if (document.getElementById("opzioni") !== null){ document.getElementById("opzioni").innerHTML = 'Opzioni';}
if (document.getElementById("unitmisura") !== null){ document.getElementById("unitmisura").innerHTML = 'Unità di misura:';}
if (document.getElementById("saveopt") !== null){ document.getElementById("saveopt").value = 'Salva';}
if (document.getElementById("creaprofilo") !== null){ document.getElementById("creaprofilo").value = 'Salva';}
if (document.getElementById("sexleg") !== null){ document.getElementById("sexleg").innerHTML = 'Sesso:';}
if (document.getElementById("etaleg") !== null){ document.getElementById("etaleg").innerHTML = 'Età (mesi):';}
if (document.getElementById("pesoleg") !== null){ document.getElementById("pesoleg").innerHTML = 'Peso:';}
if (document.getElementById("altleg") !== null){ document.getElementById("altleg").innerHTML = 'Altezza:';}
if (document.getElementById("calcoform") !== null){ document.getElementById("calcoform").value = 'Calcola';}

if (document.getElementById("resetM") !== null){ document.getElementById("resetM").innerHTML = 'Cancella tutti i dati';}
if (document.getElementById("resetF") !== null){ document.getElementById("resetF").innerHTML = 'Cancella tutti i dati';}
if (document.getElementsByClassName("linktograph") !== null){ 
    var divs = document.getElementsByClassName( 'linktograph' );
    [].slice.call( divs ).forEach(function ( div ) {
        div.innerHTML = 'Vai ai grafici';
    });
}
if (document.getElementById("h1male") !== null) { document.getElementById("h1male").innerHTML = "Maschio"; }
if (document.getElementById("h1female") !== null){ document.getElementById("h1female").innerHTML = "Femmina"; }

if (document.getElementById("istruzioni") !== null){ document.getElementById("istruzioni").innerHTML = '<b>SOGLIE PERCENTILI</b> <br><b>15 - 85 percentile:</b> <br>Stato di normalità<br><b>3 - 15 / 85 - 97 percentile:</b> <br>Patologia lieve e da monitorare<br><b>Minore di 3 / Maggiore di 97 percentile:</b> <br>Patologia conclamata (si consiglia visita).<br>In relazione alla statura si consiglia visita specialistica (valutazione dell’età ossea, della velocità di crescita, esami ematochimici, ecc)';}

if (document.getElementsByClassName("contactstab") !== null){ 
    var divs = document.getElementsByClassName( 'contactstab' );
    [].slice.call( divs ).forEach(function ( div ) {
        div.innerHTML = 'Nuova Misura';
    });
}

if (document.getElementsByClassName("cancella") !== null){ 
    var divs = document.getElementsByClassName( 'cancella' );
    [].slice.call( divs ).forEach(function ( div ) {
        div.innerHTML = 'Cancella Profilo';
    });
}

if (document.getElementById("creanuovo") !== null){ document.getElementById("creanuovo").innerHTML = 'Crea nuovo profilo';}

if (document.getElementById("intestazione") !== null){ document.getElementById("intestazione").innerHTML = '<p align="center">Inserisci nuovi valori per '+nome+'</p>';}

var ClearMessage = 'Tutti i dati relativi al profilo selezionato saranno cancellati. Confermi?';
var completed = 'Completato';
var warning = 'Attenzione!';
var yes = 'Si';
var miobimbo = 'Il mio bimbo';
var miabimba = 'La mia bambina';
var mesi = 'mesi';
var bimboP = 'Peso bambino 0-24 Mesi';
var bimboA = 'Altezza bambino 0-24 Mesi';
var bimbaP = 'Peso bambina 0-24 Mesi';
var bimbaA = 'Altezza bambina 0-24 Mesi';