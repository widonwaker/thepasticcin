if (localStorage.getItem("factory")===null) localStorage.setItem("factory","img/edifici/factory1.png");
if (localStorage.getItem("alloggi")===null) localStorage.setItem("alloggi","img/edifici/alloggi1.png");
if (localStorage.getItem("vehicle")===null) localStorage.setItem("vehicle","img/edifici/vehicle1.png");
if (localStorage.getItem("coins_save")===null || localStorage.getItem("coins_save")=="NaN") localStorage.setItem("coins_save",10000);
if (localStorage.getItem("gems_save")===null || localStorage.getItem("gems_save")=="NaN") localStorage.setItem("gems_save",0);
if (localStorage.getItem("delivered")===null || localStorage.getItem("delivered")=="NaN") localStorage.setItem("delivered",0);
if (localStorage.getItem("pasticcino")===null) localStorage.setItem("pasticcino",1);
if (localStorage.getItem("fabbrica")===null) localStorage.setItem("fabbrica",1000);
//if (localStorage.getItem("orsettini")===null) localStorage.setItem("orsettini",1);

/* inizio fabbrica */
if (localStorage.getItem("energyskills")===null) localStorage.setItem("energyskills",0);
if (localStorage.getItem("machineryskills")===null) localStorage.setItem("machineryskills",0);
if (localStorage.getItem("capacityskills")===null) localStorage.setItem("capacityskills",0);
if (localStorage.getItem("energy")===null) localStorage.setItem("energy",0);	
if (localStorage.getItem("energy_val")===null) localStorage.setItem("energy_val",20);
if (localStorage.getItem("machinery")===null) localStorage.setItem("machinery",0);	
if (localStorage.getItem("machinery_val")===null) localStorage.setItem("machinery_val",30);
if (localStorage.getItem("capacity")===null) localStorage.setItem("capacity",0);	
if (localStorage.getItem("capacity_val")===null) localStorage.setItem("capacity_val",50);
/* fine fabbrica */

/* inizio alloggi */
if (localStorage.getItem("comfortskills")===null) localStorage.setItem("comfortskills",0);
if (localStorage.getItem("comfort")===null) localStorage.setItem("comfort",0);	
if (localStorage.getItem("comfort_val")===null) localStorage.setItem("comfort_val",30);
if (localStorage.getItem("capacity_alloggiskills")===null) localStorage.setItem("capacity_alloggiskills",0);
if (localStorage.getItem("capacity_alloggi")===null) localStorage.setItem("capacity_alloggi",0);	
if (localStorage.getItem("capacity_alloggi_val")===null) localStorage.setItem("capacity_alloggi_val",40);
/* fine alloggi */

/* inizio veicoli */
if (localStorage.getItem("speed_vehicleskills")===null) localStorage.setItem("speed_vehicleskills",0);
if (localStorage.getItem("speed_vehicle")===null) localStorage.setItem("speed_vehicle",1);	
if (localStorage.getItem("speed_vehicle_val")===null) localStorage.setItem("speed_vehicle_val",30);
if (localStorage.getItem("capacity_vehicleskills")===null) localStorage.setItem("capacity_vehicleskills",0);
if (localStorage.getItem("capacity_vehicle")===null) localStorage.setItem("capacity_vehicle",60);	
if (localStorage.getItem("capacity_vehicle_val")===null) localStorage.setItem("capacity_vehicle_val",40);
/* fine veicoli */

/* inizio gemme */
if (localStorage.getItem("gems_video1skills")===null) localStorage.setItem("gems_video1skills",0);
if (localStorage.getItem("gems_video1")===null) localStorage.setItem("gems_video1",0);	
if (localStorage.getItem("gems_video1_val")===null) localStorage.setItem("gems_video1_val",30);
if (localStorage.getItem("gems_powerupsskills")===null) localStorage.setItem("gems_powerupsskills",0);
if (localStorage.getItem("gems_powerups")===null) localStorage.setItem("gems_powerups",0);	
if (localStorage.getItem("gems_powerups_val")===null) localStorage.setItem("gems_powerups_val",50);
if (localStorage.getItem("gems_rewardsskills")===null) localStorage.setItem("gems_rewardsskills",0);
if (localStorage.getItem("gems_rewards")===null) localStorage.setItem("gems_rewards",10);	
if (localStorage.getItem("gems_rewards_val")===null) localStorage.setItem("gems_rewards_val",20);
if (localStorage.getItem("gems_levelupskills")===null) localStorage.setItem("gems_levelupskills",0);
if (localStorage.getItem("gems_levelup")===null) localStorage.setItem("gems_levelup",0);	
if (localStorage.getItem("gems_levelup_val")===null) localStorage.setItem("gems_levelup_val",70);
/* fine gemme */

if (localStorage.getItem("bgmusic")===null) localStorage.setItem("bgmusic","On");
if (localStorage.getItem("sound")===null) localStorage.setItem("sound","On");

/* achievements */
if (localStorage.getItem("achievements_db")===null) localStorage.setItem("achievements_db", '[{"title":"'+m1+'","desc":"","completed":"no","reward":"100","type":"coins"}, {"title":"'+m2+'","desc":"test desc","completed":"no","reward":"300","type":"coins"}, {"title":"'+m3+'","desc":"","completed":"no","reward":"900","type":"coins"}, {"title":"'+m4+'","desc":"","completed":"no","reward":"20","type":"gems"}, {"title":"'+m5+'","desc":"","completed":"no","reward":"30","type":"gems"}, {"title":"'+m6+'","desc":"","completed":"no","reward":"40","type":"gems"}, {"title":"'+m7+'","desc":"","completed":"no","reward":"50","type":"gems"}]');
