
  // Inject helper
  phantom.injectJs("../../script/lib/scraper.js");

  // ------------------------------------------
  //  OPTIONS
  // ------------------------------------------

  // Merge default options
  var options = {
   'type' : ''
  };
  scraper.setOptions(options);

  var url = 'http://wap.ratp.fr/siv/perturbation?cause=alerte&reseau='+options.type;

// Scrap
scraper.scrap(url, options, function(options, results) {	
	var infotraffic = $('DIV.bg1 b').text();
	results.tts = infotraffic;
});
    
