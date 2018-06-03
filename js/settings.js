if (localStorage.getItem("factory")===null) localStorage.setItem("factory","img/edifici/factory1.png");
if (localStorage.getItem("alloggi")===null) localStorage.setItem("alloggi","img/edifici/alloggi1.png");
if (localStorage.getItem("vehicle")===null) localStorage.setItem("vehicle","img/trasporti/vehicle1.png");
if (localStorage.getItem("coins_save")===null || localStorage.getItem("coins_save")=="NaN") localStorage.setItem("coins_save",3000000);
if (localStorage.getItem("gems_save")===null || localStorage.getItem("gems_save")=="NaN") localStorage.setItem("gems_save",0);
if (localStorage.getItem("pasticcino")===null) localStorage.setItem("pasticcino",1);
if (localStorage.getItem("fabbrica")===null) localStorage.setItem("fabbrica",1000);
if (localStorage.getItem("orsettini")===null) localStorage.setItem("orsettini",1);

/* inizio fabbrica */
if (localStorage.getItem("energyskills")===null) localStorage.setItem("energyskills",0);
if (localStorage.getItem("machineryskills")===null) localStorage.setItem("machineryskills",0);
if (localStorage.getItem("capacityskills")===null) localStorage.setItem("capacityskills",0);
if (localStorage.getItem("energy")===null) localStorage.setItem("energy",0);	
if (localStorage.getItem("energy_val")===null) localStorage.setItem("energy_val",30);
if (localStorage.getItem("machinery")===null) localStorage.setItem("machinery",0);	
if (localStorage.getItem("machinery_val")===null) localStorage.setItem("machinery_val",20);
if (localStorage.getItem("capacity")===null) localStorage.setItem("capacity",0);	
if (localStorage.getItem("capacity_val")===null) localStorage.setItem("capacity_val",35);
/* fine fabbrica */

/* inizio alloggi */
if (localStorage.getItem("comfortskills")===null) localStorage.setItem("comfortskills",0);
if (localStorage.getItem("comfort")===null) localStorage.setItem("comfort",0);	
if (localStorage.getItem("comfort_val")===null) localStorage.setItem("comfort_val",30);
if (localStorage.getItem("capacity_alloggiskills")===null) localStorage.setItem("capacity_alloggiskills",0);
if (localStorage.getItem("capacity_alloggi")===null) localStorage.setItem("capacity_alloggi",0);	
if (localStorage.getItem("capacity_alloggi_val")===null) localStorage.setItem("capacity_alloggi_val",40);
/* fine alloggi */

if (localStorage.getItem("bgmusic")===null) localStorage.setItem("bgmusic","On");
if (localStorage.getItem("sound")===null) localStorage.setItem("sound","On");