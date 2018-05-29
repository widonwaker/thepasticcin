// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.

document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
   var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  /*window.plugins.OneSignal
    .startInit("a0d44fd6-1a29-4cc0-8315-96f8b2efe454", "440027051507")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();*/ // ONESIGNAL NOTIFICHE

  
  // Sync hashed email if you have a login system or collect it.
  //   Will be used to reach the user at the most optimal time of day.
  // window.plugins.OneSignal.syncHashedEmail(userEmail);
	

  	var devicePlatform = device.platform;
	if (devicePlatform === "Android") {
            var appKey = "cd5c62835b2ebe600b11caf1965b9cfbb6c4b23255307717";
	}
	else if (devicePlatform === "iOS") {
		    var appKey = "40c249b6e217dbb8b8babe1860d544c9e1c59d9d6584a75a";
	}
  Appodeal.disableLocationPermissionCheck();
  Appodeal.initialize(appKey, Appodeal.REWARDED_VIDEO | Appodeal.INTERSTITIAL | Appodeal.BANNER);
  Appodeal.muteVideosIfCallsMuted(true);
	
	registerAdEvents();
	
	
	    navigator.globalization.getPreferredLanguage(
        function (language) { 
		    if (language.value == "it-IT") {
				    localStorage.setItem("deflang","ita");
					var script= document.createElement('script');
                    script.type= 'text/javascript';
                    script.src= 'js/' + localStorage.getItem("deflang") + '.js';
                    document.body.appendChild(script);
				} else {
					localStorage.setItem("deflang","eng");
					var script= document.createElement('script');
                    script.type= 'text/javascript';
                    script.src= 'js/' + localStorage.getItem("deflang") + '.js';
                    document.body.appendChild(script);
				} 
			},
        function () {localStorage.setItem("deflang","eng");}
    );
  
}, false);
