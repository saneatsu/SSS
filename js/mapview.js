$(function(){
	var search = false;
	var yearSliderAutoPlay = false;
	
	$('#yearSliderProgress').val( 26 );
	$('div.date').html( yearsListArray[26] );
	
	$('#markerButton').click( function(){
		if ( yearSliderAutoPlay ) {
			yearSliderAutoPlay = false;
		} else {
			yearSliderAutoPlay = true;
		}
	});
	
	function mapView(){
		var mainDiv = $('#main-visual .inner');
		var slider = mainDiv.find('#slider');
		var mP = mainDiv.find('#map-point');  // mapPointだったがswitch文が巨大すぎるのでショート名に変更
		var mapArea = '';
		var message = $('.message-wrap');
		var map = $('#map .animate-map');
		var btnSearch = $('#search-area .search-btn a img');
		var btnSearchLink = $('#search-area .search-btn a');
		var marker = $('#search-area .video .marker');
		var selectSports = '';
		
		//UserAgent
		var ua = window.navigator.userAgent;
		var browserIE = false;
		var browser_v = 0;
		var browser_nm = '';
		
		//IE判定
		if(ua.match(/MSIE/) || ua.match(/Trident/)) {
			browserIE = true;
			//browser_v=parseFloat(ua.match(/(MSIE¥s|rv:)([¥d¥.]+)/)[2]);
			map.attr('src', 'images/worldmap.png').css({width:'900px', height:'534px'});
		}
		map.fadeIn(100);
		
		$('#nav-area li').on('click', function(){
			$('#map-point .circle-container, .horizon, .popup-box').remove();
			mapArea = $(this).attr('class');
			mainDiv.css("background-color","#000");
			slider.css("opacity","0.3");
			mainDiv.css({zIndex:'200', backgroundColor:'#000'});
			
			// 世界地図の部分拡大
			switch(mapArea){  // 3000x1782
				case 'world':         map.stop().animate({left:    "0px",top:  "-35px",width: "900px",height: "534px"},800,"easeOutCirc"); break;
				case 'europe':        map.stop().animate({left:  "140px",top: "-315px",width:"3100px",height:"1841px"},800,"easeOutCirc"); break;
				case 'north-america': map.stop().animate({left:"-1300px",top: "-280px",width:"2300px",height:"1366px"},800,"easeOutCirc"); break;
				case 'south-america': map.stop().animate({left:"-1200px",top: "-550px",width:"2000px",height:"1188px"},800,"easeOutCirc"); break;
				case 'africa':        map.stop().animate({left:  "200px",top: "-650px",width:"2500px",height:"1485px"},800,"easeOutCirc"); break;
				case 'asia':          map.stop().animate({left: "-255px",top: "-342px",width:"2300px",height:"1366px"},800,"easeOutCirc"); break;
				case 'oceania':       map.stop().animate({left: "-800px",top:"-1100px",width:"3000px",height:"1782px"},800,"easeOutCirc"); break;
			}
			
		});
		
		
		function mapSearch(arg){
			search = true;
			$('#map-point .circle-container, .horizon, .popup-box').remove();
			$('.message-wrap').fadeOut(800);
			slider.css("opacity","0.3");
			$(mP).fadeIn(function(){
/*** ここにSwitch文を入れる ***/



switch($('div.date').html()){
	case '2012':
	
	

	switch(selectSports){
			case 'wrestling':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,40,782,285,'JPN', './country/country_detail_JPN.html',4,0,2);
								aP(mP,30,223,288,'IRI', './country/country_detail_IRI.html',3,1,2);
								aP(mP,10,330,244,'UZB', './country/country_detail_UZB.html',1,0,0);
								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,657,296,'RUS', './country/country_detail_RUS.html',3,2,5);
								aP(mP,20,767,485,'AZE', './country/country_detail_AZE.html',2,2,2);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,0,2);
								aP(mP,10,588,442,'CUB', './country/country_detail_CUB.html',1,0,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,40,405,210,'JPN','./country/country_detail_JPN.html',4,0,2);
								aP(mP,30,187,211,'IRI','./country/country_detail_IRI.html',3,1,2);
								aP(mP,10,230,195,'UZB','./country/country_detail_UZB.html',1,0,0);
								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,0,0);
														
						

								aP(mP,30,150,139,'RUS','./country/country_detail_RUS.html',3,2,5);
								aP(mP,20,180,197,'AZE','./country/country_detail_AZE.html',2,2,2);
														

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,0,2);
								aP(mP,10,738,246,'CUB','./country/country_detail_CUB.html',1,0,1);
														
						
				}
				
		break;
			case 'tabletennis':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,40,568,293,'CHN', './country/country_detail_CHN.html',4,2,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,40,317,211,'CHN','./country/country_detail_CHN.html',4,2,0);
														
						
						
						
						
				}
				
		break;
			case 'athletics':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				

								aP(mP,20,623,305,'KEN', './country/country_detail_KEN.html',2,2,4);
								aP(mP,20,634,235,'ETH', './country/country_detail_ETH.html',2,1,3);
								aP(mP,10,390,32,'ALG', './country/country_detail_ALG.html',1,0,0);
												
			break;
					case 'europe':
				
				

								aP(mP,30,657,296,'RUS', './country/country_detail_RUS.html',3,4,1);
								aP(mP,20,340,349,'GBR', './country/country_detail_GBR.html',2,1,0);
								aP(mP,10,649,500,'TUR', './country/country_detail_TUR.html',1,1,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,110,623,330,'USA', './country/country_detail_USA.html',11,14,4);
								aP(mP,70,622,474,'JAM', './country/country_detail_JAM.html',7,7,7);
								aP(mP,40,618,429,'BAH', './country/country_detail_BAH.html',4,0,0);
								aP(mP,10,666,468,'DOM', './country/country_detail_DOM.html',1,1,0);
								aP(mP,10,713,515,'GRN', './country/country_detail_GRN.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,0);
												
			break;
				
			case 'world':
			default:
						
						

								aP(mP,20,153,308,'KEN','./country/country_detail_KEN.html',2,2,4);
								aP(mP,20,156,283,'ETH','./country/country_detail_ETH.html',2,1,3);
								aP(mP,10,66,211,'ALG','./country/country_detail_ALG.html',1,0,0);
														

								aP(mP,30,150,139,'RUS','./country/country_detail_RUS.html',3,4,1);
								aP(mP,20,57,157,'GBR','./country/country_detail_GBR.html',2,1,0);
								aP(mP,10,145,200,'TUR','./country/country_detail_TUR.html',1,1,0);
														

								aP(mP,110,752,202,'USA','./country/country_detail_USA.html',11,14,4);
								aP(mP,70,752,257,'JAM','./country/country_detail_JAM.html',7,7,7);
								aP(mP,40,749,242,'BAH','./country/country_detail_BAH.html',4,0,0);
								aP(mP,10,769,257,'DOM','./country/country_detail_DOM.html',1,1,0);
								aP(mP,10,791,275,'GRN','./country/country_detail_GRN.html',1,0,0);
														
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,0);
												}
				
		break;
			case 'swimming':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,50,568,293,'CHN', './country/country_detail_CHN.html',5,2,3);
												
			break;
					case 'africa':
				
				

								aP(mP,20,563,473,'RSA', './country/country_detail_RSA.html',2,1,0);
								aP(mP,10,432,56,'TUN', './country/country_detail_TUN.html',1,0,1);
												
			break;
					case 'europe':
				
				

								aP(mP,40,366,387,'FRA', './country/country_detail_FRA.html',4,2,1);
								aP(mP,20,394,332,'NED', './country/country_detail_NED.html',2,1,1);
								aP(mP,20,511,407,'HUN', './country/country_detail_HUN.html',2,0,1);
								aP(mP,10,548,296,'LTU', './country/country_detail_LTU.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,160,623,330,'USA', './country/country_detail_USA.html',16,9,6);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,6,3);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,50,317,211,'CHN','./country/country_detail_CHN.html',5,2,3);
														

								aP(mP,20,130,371,'RSA','./country/country_detail_RSA.html',2,1,0);
								aP(mP,10,84,221,'TUN','./country/country_detail_TUN.html',1,0,1);
														

								aP(mP,40,66,170,'FRA','./country/country_detail_FRA.html',4,2,1);
								aP(mP,20,73,154,'NED','./country/country_detail_NED.html',2,1,1);
								aP(mP,20,108,174,'HUN','./country/country_detail_HUN.html',2,0,1);
								aP(mP,10,119,142,'LTU','./country/country_detail_LTU.html',1,0,0);
														

								aP(mP,160,752,202,'USA','./country/country_detail_USA.html',16,9,6);
														
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,6,3);
												}
				
		break;
			case 'judo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,700,274,'KOR', './country/country_detail_KOR.html',2,0,1);
								aP(mP,10,782,285,'JPN', './country/country_detail_JPN.html',1,3,3);
								aP(mP,10,697,255,'PRK', './country/country_detail_PRK.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,657,296,'RUS', './country/country_detail_RUS.html',3,1,1);
								aP(mP,20,366,387,'FRA', './country/country_detail_FRA.html',2,0,5);
								aP(mP,10,721,467,'GEO', './country/country_detail_GEO.html',1,0,0);
								aP(mP,10,472,417,'SLO', './country/country_detail_SLO.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,588,442,'CUB', './country/country_detail_CUB.html',1,2,0);
								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,1);
												
			break;
					case 'south-america':
				
				

								aP(mP,10,597,267,'BRA', './country/country_detail_BRA.html',1,0,3);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,374,207,'KOR','./country/country_detail_KOR.html',2,0,1);
								aP(mP,10,405,210,'JPN','./country/country_detail_JPN.html',1,3,3);
								aP(mP,10,372,197,'PRK','./country/country_detail_PRK.html',1,0,0);
														
						

								aP(mP,30,150,139,'RUS','./country/country_detail_RUS.html',3,1,1);
								aP(mP,20,66,170,'FRA','./country/country_detail_FRA.html',2,0,5);
								aP(mP,10,170,192,'GEO','./country/country_detail_GEO.html',1,0,0);
								aP(mP,10,97,178,'SLO','./country/country_detail_SLO.html',1,0,0);
														

								aP(mP,10,738,246,'CUB','./country/country_detail_CUB.html',1,2,0);
								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,1);
														

								aP(mP,10,817,329,'BRA','./country/country_detail_BRA.html',1,0,3);
														
				}
				
		break;
			case 'volleyball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				

								aP(mP,10,597,267,'BRA', './country/country_detail_BRA.html',1,1,0);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,0,0);
														
						

								aP(mP,10,817,329,'BRA','./country/country_detail_BRA.html',1,1,0);
														
				}
				
		break;
			case 'badminton':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,50,568,293,'CHN', './country/country_detail_CHN.html',5,2,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,50,317,211,'CHN','./country/country_detail_CHN.html',5,2,1);
														
						
						
						
						
				}
				
		break;
			case 'synchronisedswimming':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,110,657,296,'RUS', './country/country_detail_RUS.html',11,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,110,150,139,'RUS','./country/country_detail_RUS.html',11,0,0);
														
						
						
				}
				
		break;
			case 'diving':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,100,568,293,'CHN', './country/country_detail_CHN.html',10,3,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,2,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,2,4);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,100,317,211,'CHN','./country/country_detail_CHN.html',10,3,1);
														
						

								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,2,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,2,4);
														
						
				}
				
		break;
			case 'artistic_gymnastics':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,40,568,293,'CHN', './country/country_detail_CHN.html',4,3,1);
								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,0,0);
								aP(mP,10,782,285,'JPN', './country/country_detail_JPN.html',1,2,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,0,0);
								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,0,0);
								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,3,4);
								aP(mP,10,563,423,'ROU', './country/country_detail_ROU.html',1,1,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,30,623,330,'USA', './country/country_detail_USA.html',3,1,2);
												
			break;
					case 'south-america':
				
				

								aP(mP,10,597,267,'BRA', './country/country_detail_BRA.html',1,0,0);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,40,317,211,'CHN','./country/country_detail_CHN.html',4,3,1);
								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,0,0);
								aP(mP,10,405,210,'JPN','./country/country_detail_JPN.html',1,2,0);
														
						

								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,0,0);
								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,0,0);
								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,3,4);
								aP(mP,10,122,179,'ROU','./country/country_detail_ROU.html',1,1,1);
														

								aP(mP,30,752,202,'USA','./country/country_detail_USA.html',3,1,2);
														

								aP(mP,10,817,329,'BRA','./country/country_detail_BRA.html',1,0,0);
														
				}
				
		break;
			case 'rhythmic':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,657,296,'RUS', './country/country_detail_RUS.html',2,1,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,150,139,'RUS','./country/country_detail_RUS.html',2,1,0);
														
						
						
				}
				
		break;
			case 'waterpolo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,476,433,'CRO', './country/country_detail_CRO.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,98,179,'CRO','./country/country_detail_CRO.html',1,0,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,0);
														
						
				}
				
		break;
			case 'basketball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,0,0);
														
						
				}
				
		break;
			case 'handball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,426,192,'NOR', './country/country_detail_NOR.html',1,0,0);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,83,111,'NOR','./country/country_detail_NOR.html',1,0,0);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,0,0);
														
						
						
				}
				
		break;
			case 'beachvolleyball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,0);
														
						
				}
				
		break;
			case 'tennis':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,1,0);
								aP(mP,10,588,321,'BLR', './country/country_detail_BLR.html',1,0,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,30,623,330,'USA', './country/country_detail_USA.html',3,0,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,1,0);
								aP(mP,10,129,150,'BLR','./country/country_detail_BLR.html',1,0,1);
														

								aP(mP,30,752,202,'USA','./country/country_detail_USA.html',3,0,1);
														
						
				}
				
		break;
			case 'hockey':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,1,0);
								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,1,0);
								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,0);
														
						
						
				}
				
		break;
			case 'cycling_Road':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,349,158,'KAZ', './country/country_detail_KAZ.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,1,1);
								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,234,162,'KAZ','./country/country_detail_KAZ.html',1,0,0);
														
						

								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,1,1);
								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,0,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,0);
														
						
				}
				
		break;
			case 'cycling_Track':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,140,340,349,'GBR', './country/country_detail_GBR.html',14,0,1);
								aP(mP,20,438,349,'GER', './country/country_detail_GER.html',2,1,3);
								aP(mP,10,422,287,'DEN', './country/country_detail_DEN.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,4,4);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,140,57,157,'GBR','./country/country_detail_GBR.html',14,0,1);
								aP(mP,20,86,156,'GER','./country/country_detail_GER.html',2,1,3);
								aP(mP,10,83,136,'DEN','./country/country_detail_DEN.html',1,0,0);
														
						
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,4,4);
												}
				
		break;
			case 'cycling_MTB':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,0,0);
								aP(mP,10,476,372,'CZE', './country/country_detail_CZE.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,0,0);
								aP(mP,10,98,163,'CZE','./country/country_detail_CZE.html',1,0,0);
														
						
						
				}
				
		break;
			case 'cycling_BMX':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,568,275,'LAT', './country/country_detail_LAT.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				

								aP(mP,10,497,183,'COL', './country/country_detail_COL.html',1,0,1);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,125,135,'LAT','./country/country_detail_LAT.html',1,0,0);
														
						

								aP(mP,10,760,294,'COL','./country/country_detail_COL.html',1,0,1);
														
				}
				
		break;
			case 'sailing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,320,491,'ESP', './country/country_detail_ESP.html',2,0,0);
								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,1,1);
								aP(mP,10,488,148,'SWE', './country/country_detail_SWE.html',1,0,0);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,4,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,20,483,235,'AUS', './country/country_detail_AUS.html',2,1,0);
								aP(mP,10,804,407,'NZL', './country/country_detail_NZL.html',1,1,0);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,0,0);
														
						

								aP(mP,20,53,196,'ESP','./country/country_detail_ESP.html',2,0,0);
								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,1,1);
								aP(mP,10,102,98,'SWE','./country/country_detail_SWE.html',1,0,0);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,4,0);
														
						
						

								aP(mP,20,390,367,'AUS','./country/country_detail_AUS.html',2,1,0);
								aP(mP,10,478,420,'NZL','./country/country_detail_NZL.html',1,1,0);
												}
				
		break;
			case 'rowing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				

								aP(mP,10,563,473,'RSA', './country/country_detail_RSA.html',1,0,0);
												
			break;
					case 'europe':
				
				

								aP(mP,40,340,349,'GBR', './country/country_detail_GBR.html',4,2,3);
								aP(mP,20,438,349,'GER', './country/country_detail_GER.html',2,1,0);
								aP(mP,10,476,372,'CZE', './country/country_detail_CZE.html',1,1,0);
								aP(mP,10,616,374,'UKR', './country/country_detail_UKR.html',1,0,0);
								aP(mP,10,422,287,'DEN', './country/country_detail_DEN.html',1,1,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,2);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,30,804,407,'NZL', './country/country_detail_NZL.html',3,0,2);
												
			break;
				
			case 'world':
			default:
						
						

								aP(mP,10,130,371,'RSA','./country/country_detail_RSA.html',1,0,0);
														

								aP(mP,40,57,157,'GBR','./country/country_detail_GBR.html',4,2,3);
								aP(mP,20,86,156,'GER','./country/country_detail_GER.html',2,1,0);
								aP(mP,10,98,163,'CZE','./country/country_detail_CZE.html',1,1,0);
								aP(mP,10,139,167,'UKR','./country/country_detail_UKR.html',1,0,0);
								aP(mP,10,83,136,'DEN','./country/country_detail_DEN.html',1,1,1);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,2);
														
						

								aP(mP,30,478,420,'NZL','./country/country_detail_NZL.html',3,0,2);
												}
				
		break;
			case 'canoe':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,511,407,'HUN', './country/country_detail_HUN.html',3,2,1);
								aP(mP,30,438,349,'GER', './country/country_detail_GER.html',3,2,3);
								aP(mP,20,340,349,'GBR', './country/country_detail_GBR.html',2,1,1);
								aP(mP,20,366,387,'FRA', './country/country_detail_FRA.html',2,0,0);
								aP(mP,10,426,192,'NOR', './country/country_detail_NOR.html',1,0,0);
								aP(mP,10,616,374,'UKR', './country/country_detail_UKR.html',1,2,0);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,0);
								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,0,2);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,1,0);
								aP(mP,10,804,407,'NZL', './country/country_detail_NZL.html',1,0,0);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,30,108,174,'HUN','./country/country_detail_HUN.html',3,2,1);
								aP(mP,30,86,156,'GER','./country/country_detail_GER.html',3,2,3);
								aP(mP,20,57,157,'GBR','./country/country_detail_GBR.html',2,1,1);
								aP(mP,20,66,170,'FRA','./country/country_detail_FRA.html',2,0,0);
								aP(mP,10,83,111,'NOR','./country/country_detail_NOR.html',1,0,0);
								aP(mP,10,139,167,'UKR','./country/country_detail_UKR.html',1,2,0);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,0);
								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,0,2);
														
						
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,1,0);
								aP(mP,10,478,420,'NZL','./country/country_detail_NZL.html',1,0,0);
												}
				
		break;
			case 'boxing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,349,158,'KAZ', './country/country_detail_KAZ.html',1,1,2);
								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,1,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,340,349,'GBR', './country/country_detail_GBR.html',3,1,1);
								aP(mP,20,616,374,'UKR', './country/country_detail_UKR.html',2,1,2);
								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,2,3);
								aP(mP,10,288,329,'IRL', './country/country_detail_IRL.html',1,1,2);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,588,442,'CUB', './country/country_detail_CUB.html',2,0,2);
								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,234,162,'KAZ','./country/country_detail_KAZ.html',1,1,2);
								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,1,1);
														
						

								aP(mP,30,57,157,'GBR','./country/country_detail_GBR.html',3,1,1);
								aP(mP,20,139,167,'UKR','./country/country_detail_UKR.html',2,1,2);
								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,2,3);
								aP(mP,10,42,152,'IRL','./country/country_detail_IRL.html',1,1,2);
														

								aP(mP,20,738,246,'CUB','./country/country_detail_CUB.html',2,0,2);
								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,1);
														
						
				}
				
		break;
			case 'fencing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,568,293,'CHN', './country/country_detail_CHN.html',2,0,1);
								aP(mP,20,700,274,'KOR', './country/country_detail_KOR.html',2,1,3);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,454,459,'ITA', './country/country_detail_ITA.html',3,2,2);
								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,0,0);
								aP(mP,10,616,374,'UKR', './country/country_detail_UKR.html',1,0,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				

								aP(mP,10,533,162,'VEN', './country/country_detail_VEN.html',1,0,0);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,317,211,'CHN','./country/country_detail_CHN.html',2,0,1);
								aP(mP,20,374,207,'KOR','./country/country_detail_KOR.html',2,1,3);
														
						

								aP(mP,30,92,189,'ITA','./country/country_detail_ITA.html',3,2,2);
								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,0,0);
								aP(mP,10,139,167,'UKR','./country/country_detail_UKR.html',1,0,1);
														
						

								aP(mP,10,780,284,'VEN','./country/country_detail_VEN.html',1,0,0);
														
				}
				
		break;
			case 'taekwondo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,1,0);
								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,1,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,2,0);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,0,1);
								aP(mP,10,526,438,'SRB', './country/country_detail_SRB.html',1,0,0);
								aP(mP,10,649,500,'TUR', './country/country_detail_TUR.html',1,1,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				

								aP(mP,10,540,398,'ARG', './country/country_detail_ARG.html',1,0,0);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,1,0);
								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,1,0);
														
						

								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,2,0);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,0,1);
								aP(mP,10,111,185,'SRB','./country/country_detail_SRB.html',1,0,0);
								aP(mP,10,145,200,'TUR','./country/country_detail_TUR.html',1,1,0);
														
						

								aP(mP,10,783,379,'ARG','./country/country_detail_ARG.html',1,0,0);
														
				}
				
		break;
			case 'archery':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,30,700,274,'KOR', './country/country_detail_KOR.html',3,0,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,30,374,207,'KOR','./country/country_detail_KOR.html',3,0,1);
														
						

								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,0);
														
						
						
				}
				
		break;
			case 'shooting_Cray':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,1,0);
								aP(mP,10,476,433,'CRO', './country/country_detail_CRO.html',1,0,0);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,1,0);
								aP(mP,10,98,179,'CRO','./country/country_detail_CRO.html',1,0,0);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,0,0);
														

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,0,0);
														
						
				}
				
		break;
			case 'shooting_Rifle':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,30,700,274,'KOR', './country/country_detail_KOR.html',3,2,0);
								aP(mP,20,568,293,'CHN', './country/country_detail_CHN.html',2,1,3);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,588,321,'BLR', './country/country_detail_BLR.html',1,0,0);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,2,0);
								aP(mP,10,563,423,'ROU', './country/country_detail_ROU.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,1);
								aP(mP,10,588,442,'CUB', './country/country_detail_CUB.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,30,374,207,'KOR','./country/country_detail_KOR.html',3,2,0);
								aP(mP,20,317,211,'CHN','./country/country_detail_CHN.html',2,1,3);
														
						

								aP(mP,10,129,150,'BLR','./country/country_detail_BLR.html',1,0,0);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,2,0);
								aP(mP,10,122,179,'ROU','./country/country_detail_ROU.html',1,0,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,1);
								aP(mP,10,738,246,'CUB','./country/country_detail_CUB.html',1,0,0);
														
						
				}
				
		break;
			case 'triathlon':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,0,1);
								aP(mP,10,413,410,'SUI', './country/country_detail_SUI.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,0,1);
								aP(mP,10,80,175,'SUI','./country/country_detail_SUI.html',1,0,0);
														
						
						
				}
				
		break;
			case 'pentathlon':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,476,372,'CZE', './country/country_detail_CZE.html',1,0,0);
								aP(mP,10,548,296,'LTU', './country/country_detail_LTU.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,98,163,'CZE','./country/country_detail_CZE.html',1,0,0);
								aP(mP,10,119,142,'LTU','./country/country_detail_LTU.html',1,0,0);
														
						
						
				}
				
		break;
			case 'equestrian':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,340,349,'GBR', './country/country_detail_GBR.html',3,1,1);
								aP(mP,20,438,349,'GER', './country/country_detail_GER.html',2,1,1);
								aP(mP,10,413,410,'SUI', './country/country_detail_SUI.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,30,57,157,'GBR','./country/country_detail_GBR.html',3,1,1);
								aP(mP,20,86,156,'GER','./country/country_detail_GER.html',2,1,1);
								aP(mP,10,80,175,'SUI','./country/country_detail_SUI.html',1,0,0);
														
						
						
				}
				
		break;
			case 'football':
				switch(mapArea){
					case 'asia':
						
					break;
					case 'africa':
						
					break;
					case 'europe':
						
					break;
					case 'north-america':
						
						aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,0);
						aP(mP,10,482,460,'MEX', './country/country_detail_MEX.html',1,0,0);
						
					break;
					case 'south-america':
						
					break;
					case 'oceania':
						
					break;
					case 'world':
						
					break;
					default:
						
						aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,0);
						aP(mP,10,695,254,'MEX','./country/country_detail_MEX.html',1,0,0);

				}
			break;
		}
	break;
	case '2008':
	
	

	switch(selectSports){
			case 'wrestling':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,782,285,'JPN', './country/country_detail_JPN.html',2,2,2);
								aP(mP,10,330,244,'UZB', './country/country_detail_UZB.html',1,1,0);
								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,1,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,60,657,296,'RUS', './country/country_detail_RUS.html',6,3,2);
								aP(mP,10,649,500,'TUR', './country/country_detail_TUR.html',1,0,1);
								aP(mP,10,721,467,'GEO', './country/country_detail_GEO.html',1,0,2);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,0,0);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,2);
								aP(mP,10,627,271,'CAN', './country/country_detail_CAN.html',1,0,1);
								aP(mP,10,588,442,'CUB', './country/country_detail_CUB.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,405,210,'JPN','./country/country_detail_JPN.html',2,2,2);
								aP(mP,10,230,195,'UZB','./country/country_detail_UZB.html',1,1,0);
								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,1,0);
														
						

								aP(mP,60,150,139,'RUS','./country/country_detail_RUS.html',6,3,2);
								aP(mP,10,145,200,'TUR','./country/country_detail_TUR.html',1,0,1);
								aP(mP,10,170,192,'GEO','./country/country_detail_GEO.html',1,0,2);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,0,0);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,2);
								aP(mP,10,754,179,'CAN','./country/country_detail_CAN.html',1,0,1);
								aP(mP,10,738,246,'CUB','./country/country_detail_CUB.html',1,0,0);
														
						
				}
				
		break;
			case 'tabletennis':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,40,568,293,'CHN', './country/country_detail_CHN.html',4,2,2);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,40,317,211,'CHN','./country/country_detail_CHN.html',4,2,2);
														
						
						
						
						
				}
				
		break;
			case 'athletics':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				

								aP(mP,50,623,305,'KEN', './country/country_detail_KEN.html',5,3,3);
								aP(mP,40,634,235,'ETH', './country/country_detail_ETH.html',4,1,1);
												
			break;
					case 'europe':
				
				

								aP(mP,50,657,296,'RUS', './country/country_detail_RUS.html',5,4,6);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,0,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,110,623,330,'USA', './country/country_detail_USA.html',11,6,7);
								aP(mP,90,622,474,'JAM', './country/country_detail_JAM.html',9,3,5);
								aP(mP,10,588,442,'CUB', './country/country_detail_CUB.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						

								aP(mP,50,153,308,'KEN','./country/country_detail_KEN.html',5,3,3);
								aP(mP,40,156,283,'ETH','./country/country_detail_ETH.html',4,1,1);
														

								aP(mP,50,150,139,'RUS','./country/country_detail_RUS.html',5,4,6);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,0,1);
														

								aP(mP,110,752,202,'USA','./country/country_detail_USA.html',11,6,7);
								aP(mP,90,752,257,'JAM','./country/country_detail_JAM.html',9,3,5);
								aP(mP,10,738,246,'CUB','./country/country_detail_CUB.html',1,0,0);
														
						
				}
				
		break;
			case 'swimming':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,782,285,'JPN', './country/country_detail_JPN.html',2,0,3);
								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,3,2);
								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,1,0);
												
			break;
					case 'africa':
				
				

								aP(mP,10,432,56,'TUN', './country/country_detail_TUN.html',1,0,0);
								aP(mP,10,578,428,'ZIM', './country/country_detail_ZIM.html',1,3,0);
												
			break;
					case 'europe':
				
				

								aP(mP,20,438,349,'GER', './country/country_detail_GER.html',2,0,1);
								aP(mP,20,340,349,'GBR', './country/country_detail_GBR.html',2,2,2);
								aP(mP,20,394,332,'NED', './country/country_detail_NED.html',2,0,0);
								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,1,2);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,1,0);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,2,3);
												
			break;
					case 'north-america':
				
				

								aP(mP,120,623,330,'USA', './country/country_detail_USA.html',12,9,10);
												
			break;
					case 'south-america':
				
				

								aP(mP,10,597,267,'BRA', './country/country_detail_BRA.html',1,0,1);
												
			break;
					case 'oceania':
				
				

								aP(mP,60,483,235,'AUS', './country/country_detail_AUS.html',6,6,8);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,20,405,210,'JPN','./country/country_detail_JPN.html',2,0,3);
								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,3,2);
								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,1,0);
														

								aP(mP,10,84,221,'TUN','./country/country_detail_TUN.html',1,0,0);
								aP(mP,10,136,352,'ZIM','./country/country_detail_ZIM.html',1,3,0);
														

								aP(mP,20,86,156,'GER','./country/country_detail_GER.html',2,0,1);
								aP(mP,20,57,157,'GBR','./country/country_detail_GBR.html',2,2,2);
								aP(mP,20,73,154,'NED','./country/country_detail_NED.html',2,0,0);
								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,1,2);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,1,0);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,2,3);
														

								aP(mP,120,752,202,'USA','./country/country_detail_USA.html',12,9,10);
														

								aP(mP,10,817,329,'BRA','./country/country_detail_BRA.html',1,0,1);
														

								aP(mP,60,390,367,'AUS','./country/country_detail_AUS.html',6,6,8);
												}
				
		break;
			case 'judo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,40,782,285,'JPN', './country/country_detail_JPN.html',4,1,2);
								aP(mP,30,568,293,'CHN', './country/country_detail_CHN.html',3,0,1);
								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,2,1);
								aP(mP,10,557,197,'MGL', './country/country_detail_MGL.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,0);
								aP(mP,10,563,423,'ROU', './country/country_detail_ROU.html',1,0,0);
								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,0);
								aP(mP,10,721,467,'GEO', './country/country_detail_GEO.html',1,0,0);
								aP(mP,10,767,485,'AZE', './country/country_detail_AZE.html',1,0,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,40,405,210,'JPN','./country/country_detail_JPN.html',4,1,2);
								aP(mP,30,317,211,'CHN','./country/country_detail_CHN.html',3,0,1);
								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,2,1);
								aP(mP,10,317,172,'MGL','./country/country_detail_MGL.html',1,0,0);
														
						

								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,0);
								aP(mP,10,122,179,'ROU','./country/country_detail_ROU.html',1,0,0);
								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,0);
								aP(mP,10,170,192,'GEO','./country/country_detail_GEO.html',1,0,0);
								aP(mP,10,180,197,'AZE','./country/country_detail_AZE.html',1,0,1);
														
						
						
				}
				
		break;
			case 'volleyball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,0);
												
			break;
					case 'south-america':
				
				

								aP(mP,10,597,267,'BRA', './country/country_detail_BRA.html',1,1,0);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,0);
														

								aP(mP,10,817,329,'BRA','./country/country_detail_BRA.html',1,1,0);
														
				}
				
		break;
			case 'badminton':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,30,568,293,'CHN', './country/country_detail_CHN.html',3,2,3);
								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,1,1);
								aP(mP,10,572,570,'INA', './country/country_detail_INA.html',1,1,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,30,317,211,'CHN','./country/country_detail_CHN.html',3,2,3);
								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,1,1);
								aP(mP,10,323,321,'INA','./country/country_detail_INA.html',1,1,1);
														
						
						
						
						
				}
				
		break;
			case 'synchronisedswimming':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,110,657,296,'RUS', './country/country_detail_RUS.html',11,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,110,150,139,'RUS','./country/country_detail_RUS.html',11,0,0);
														
						
						
				}
				
		break;
			case 'diving':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,110,568,293,'CHN', './country/country_detail_CHN.html',11,1,2);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,2,0);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,110,317,211,'CHN','./country/country_detail_CHN.html',11,1,2);
														
						
						
						
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,2,0);
												}
				
		break;
			case 'artistic_gymnastics':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,90,568,293,'CHN', './country/country_detail_CHN.html',9,1,4);
								aP(mP,10,697,255,'PRK', './country/country_detail_PRK.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,509,337,'POL', './country/country_detail_POL.html',1,0,0);
								aP(mP,10,563,423,'ROU', './country/country_detail_ROU.html',1,0,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,6,2);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,90,317,211,'CHN','./country/country_detail_CHN.html',9,1,4);
								aP(mP,10,372,197,'PRK','./country/country_detail_PRK.html',1,0,0);
														
						

								aP(mP,10,109,154,'POL','./country/country_detail_POL.html',1,0,0);
								aP(mP,10,122,179,'ROU','./country/country_detail_ROU.html',1,0,1);
														

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,6,2);
														
						
				}
				
		break;
			case 'rhythmic':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,657,296,'RUS', './country/country_detail_RUS.html',2,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,150,139,'RUS','./country/country_detail_RUS.html',2,0,0);
														
						
						
				}
				
		break;
			case 'waterpolo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,0,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,0);
														
						
				}
				
		break;
			case 'basketball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,0,0);
														
						
				}
				
		break;
			case 'handball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,426,192,'NOR', './country/country_detail_NOR.html',1,0,0);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,83,111,'NOR','./country/country_detail_NOR.html',1,0,0);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,0,0);
														
						
						
				}
				
		break;
			case 'beachvolleyball':
		
		

		switch(mapArea){
		
					case 'asia':

				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,0,0);
														
						
				}
				
		break;
			case 'tennis':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,1,1);
								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,1,0);
								aP(mP,10,413,410,'SUI', './country/country_detail_SUI.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,1,1);
								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,1,0);
								aP(mP,10,80,175,'SUI','./country/country_detail_SUI.html',1,0,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,1);
														
						
				}
				
		break;
			case 'hockey':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,0,0);
								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,0,0);
								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,0);
														
						
						
				}
				
		break;
			case 'cycling_Road':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,1,0);
								aP(mP,10,413,410,'SUI', './country/country_detail_SUI.html',1,1,1);
								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,1,0);
								aP(mP,10,80,175,'SUI','./country/country_detail_SUI.html',1,1,1);
								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,0,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,1);
														
						
				}
				
		break;
			case 'cycling_Track':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,120,340,349,'GBR', './country/country_detail_GBR.html',12,3,2);
								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,2,1);
								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				

								aP(mP,20,540,398,'ARG', './country/country_detail_ARG.html',2,0,0);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,120,57,157,'GBR','./country/country_detail_GBR.html',12,3,2);
								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,2,1);
								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,0,0);
														
						

								aP(mP,20,783,379,'ARG','./country/country_detail_ARG.html',2,0,0);
														
				}
				
		break;
			case 'cycling_MTB':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,0);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,1,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,0);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,1,0);
														
						
						
				}
				
		break;
			case 'cycling_BMX':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,568,275,'LAT', './country/country_detail_LAT.html',1,0,0);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,1,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,125,135,'LAT','./country/country_detail_LAT.html',1,0,0);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,1,0);
														
						
						
				}
				
		break;
			case 'sailing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,0,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,340,349,'GBR', './country/country_detail_GBR.html',3,1,0);
								aP(mP,10,422,287,'DEN', './country/country_detail_DEN.html',1,0,0);
								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,1,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,20,483,235,'AUS', './country/country_detail_AUS.html',2,1,0);
								aP(mP,10,804,407,'NZL', './country/country_detail_NZL.html',1,0,0);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,0,1);
														
						

								aP(mP,30,57,157,'GBR','./country/country_detail_GBR.html',3,1,0);
								aP(mP,10,83,136,'DEN','./country/country_detail_DEN.html',1,0,0);
								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,1,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,0);
														
						

								aP(mP,20,390,367,'AUS','./country/country_detail_AUS.html',2,1,0);
								aP(mP,10,478,420,'NZL','./country/country_detail_NZL.html',1,0,0);
												}
				
		break;
			case 'rowing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,1,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,340,349,'GBR', './country/country_detail_GBR.html',2,2,2);
								aP(mP,10,426,192,'NOR', './country/country_detail_NOR.html',1,0,0);
								aP(mP,10,563,423,'ROU', './country/country_detail_ROU.html',1,0,1);
								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,1,0);
								aP(mP,10,509,337,'POL', './country/country_detail_POL.html',1,1,0);
								aP(mP,10,422,287,'DEN', './country/country_detail_DEN.html',1,0,1);
								aP(mP,10,561,458,'BUL', './country/country_detail_BUL.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,627,271,'CAN', './country/country_detail_CAN.html',1,1,2);
								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,20,483,235,'AUS', './country/country_detail_AUS.html',2,1,0);
								aP(mP,10,804,407,'NZL', './country/country_detail_NZL.html',1,0,2);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,1,0);
														
						

								aP(mP,20,57,157,'GBR','./country/country_detail_GBR.html',2,2,2);
								aP(mP,10,83,111,'NOR','./country/country_detail_NOR.html',1,0,0);
								aP(mP,10,122,179,'ROU','./country/country_detail_ROU.html',1,0,1);
								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,1,0);
								aP(mP,10,109,154,'POL','./country/country_detail_POL.html',1,1,0);
								aP(mP,10,83,136,'DEN','./country/country_detail_DEN.html',1,0,1);
								aP(mP,10,122,190,'BUL','./country/country_detail_BUL.html',1,0,0);
														

								aP(mP,10,754,179,'CAN','./country/country_detail_CAN.html',1,1,2);
								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,1);
														
						

								aP(mP,20,390,367,'AUS','./country/country_detail_AUS.html',2,1,0);
								aP(mP,10,478,420,'NZL','./country/country_detail_NZL.html',1,0,2);
												}
				
		break;
			case 'canoe':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,514,387,'SVK', './country/country_detail_SVK.html',3,1,0);
								aP(mP,20,438,349,'GER', './country/country_detail_GER.html',2,2,3);
								aP(mP,20,588,321,'BLR', './country/country_detail_BLR.html',2,0,1);
								aP(mP,20,511,407,'HUN', './country/country_detail_HUN.html',2,1,1);
								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,2,0);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,1,1);
								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,1,1);
								aP(mP,10,616,374,'UKR', './country/country_detail_UKR.html',1,0,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,1,3);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,0,0);
														
						

								aP(mP,30,108,168,'SVK','./country/country_detail_SVK.html',3,1,0);
								aP(mP,20,86,156,'GER','./country/country_detail_GER.html',2,2,3);
								aP(mP,20,129,150,'BLR','./country/country_detail_BLR.html',2,0,1);
								aP(mP,20,108,174,'HUN','./country/country_detail_HUN.html',2,1,1);
								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,2,0);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,1,1);
								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,1,1);
								aP(mP,10,139,167,'UKR','./country/country_detail_UKR.html',1,0,1);
														
						
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,1,3);
												}
				
		break;
			case 'boxing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,568,293,'CHN', './country/country_detail_CHN.html',2,1,1);
								aP(mP,10,557,197,'MGL', './country/country_detail_MGL.html',1,1,0);
								aP(mP,10,531,441,'THA', './country/country_detail_THA.html',1,1,0);
								aP(mP,10,349,158,'KAZ', './country/country_detail_KAZ.html',1,0,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,657,296,'RUS', './country/country_detail_RUS.html',2,0,1);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,0,2);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,1,1);
								aP(mP,10,616,374,'UKR', './country/country_detail_UKR.html',1,0,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,666,468,'DOM', './country/country_detail_DOM.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,317,211,'CHN','./country/country_detail_CHN.html',2,1,1);
								aP(mP,10,317,172,'MGL','./country/country_detail_MGL.html',1,1,0);
								aP(mP,10,308,271,'THA','./country/country_detail_THA.html',1,1,0);
								aP(mP,10,234,162,'KAZ','./country/country_detail_KAZ.html',1,0,1);
														
						

								aP(mP,20,150,139,'RUS','./country/country_detail_RUS.html',2,0,1);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,0,2);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,1,1);
								aP(mP,10,139,167,'UKR','./country/country_detail_UKR.html',1,0,1);
														

								aP(mP,10,769,257,'DOM','./country/country_detail_DOM.html',1,0,0);
														
						
				}
				
		break;
			case 'fencing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,1,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,438,349,'GER', './country/country_detail_GER.html',2,0,0);
								aP(mP,20,366,387,'FRA', './country/country_detail_FRA.html',2,2,0);
								aP(mP,20,454,459,'ITA', './country/country_detail_ITA.html',2,0,5);
								aP(mP,10,616,374,'UKR', './country/country_detail_UKR.html',1,0,0);
								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,3,2);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,1,0);
														
						

								aP(mP,20,86,156,'GER','./country/country_detail_GER.html',2,0,0);
								aP(mP,20,66,170,'FRA','./country/country_detail_FRA.html',2,2,0);
								aP(mP,20,92,189,'ITA','./country/country_detail_ITA.html',2,0,5);
								aP(mP,10,139,167,'UKR','./country/country_detail_UKR.html',1,0,0);
								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,0,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,3,2);
														
						
				}
				
		break;
			case 'taekwondo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,30,700,274,'KOR', './country/country_detail_KOR.html',3,0,0);
								aP(mP,10,223,288,'IRI', './country/country_detail_IRI.html',1,0,0);
								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,0,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,20,482,460,'MEX', './country/country_detail_MEX.html',2,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,30,374,207,'KOR','./country/country_detail_KOR.html',3,0,0);
								aP(mP,10,187,211,'IRI','./country/country_detail_IRI.html',1,0,0);
								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,0,1);
														
						
						

								aP(mP,20,695,254,'MEX','./country/country_detail_MEX.html',2,0,0);
														
						
				}
				
		break;
			case 'archery':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,700,274,'KOR', './country/country_detail_KOR.html',2,2,1);
								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,1,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,616,374,'UKR', './country/country_detail_UKR.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,374,207,'KOR','./country/country_detail_KOR.html',2,2,1);
								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,1,1);
														
						

								aP(mP,10,139,167,'UKR','./country/country_detail_UKR.html',1,0,0);
														
						
						
				}
				
		break;
			case 'shooting_Cray':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,565,172,'FIN', './country/country_detail_FIN.html',1,0,0);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,2,0);
								aP(mP,10,476,372,'CZE', './country/country_detail_CZE.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,1,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,124,105,'FIN','./country/country_detail_FIN.html',1,0,0);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,2,0);
								aP(mP,10,98,163,'CZE','./country/country_detail_CZE.html',1,0,0);
														

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,1,1);
														
						
				}
				
		break;
			case 'shooting_Rifle':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,50,568,293,'CHN', './country/country_detail_CHN.html',5,2,0);
								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,1,0);
								aP(mP,10,385,345,'IND', './country/country_detail_IND.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,616,374,'UKR', './country/country_detail_UKR.html',2,1,0);
								aP(mP,10,476,372,'CZE', './country/country_detail_CZE.html',1,1,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,50,317,211,'CHN','./country/country_detail_CHN.html',5,2,0);
								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,1,0);
								aP(mP,10,250,237,'IND','./country/country_detail_IND.html',1,0,0);
														
						

								aP(mP,20,139,167,'UKR','./country/country_detail_UKR.html',2,1,0);
								aP(mP,10,98,163,'CZE','./country/country_detail_CZE.html',1,1,0);
														
						
						
				}
				
		break;
			case 'triathlon':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,1);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,0);
														
						
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,1);
												}
				
		break;
			case 'pentathlon':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,0);
								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,0);
								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,0,0);
														
						
						
				}
				
		break;
			case 'equestrian':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,438,349,'GER', './country/country_detail_GER.html',3,1,1);
								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,1,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,627,271,'CAN', './country/country_detail_CAN.html',1,1,0);
								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,30,86,156,'GER','./country/country_detail_GER.html',3,1,1);
								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,1,0);
														

								aP(mP,10,754,179,'CAN','./country/country_detail_CAN.html',1,1,0);
								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,1);
														
						
				}
				
		break;
			case 'football':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,0);
												
			break;
					case 'south-america':
				
				

								aP(mP,10,540,398,'ARG', './country/country_detail_ARG.html',1,0,0);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,0);
														

								aP(mP,10,783,379,'ARG','./country/country_detail_ARG.html',1,0,0);
														
				}
				
		break;
		}
		break;
	case '2004':
	
	

	switch(selectSports){
			case 'wrestling':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,782,285,'JPN', './country/country_detail_JPN.html',2,1,3);
								aP(mP,10,330,244,'UZB', './country/country_detail_UZB.html',1,0,0);
								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,0,0);
								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,1,0);
												
			break;
					case 'africa':
				
				

								aP(mP,20,579,89,'EGY', './country/country_detail_EGY.html',2,0,0);
												
			break;
					case 'europe':
				
				

								aP(mP,40,657,296,'RUS', './country/country_detail_RUS.html',4,2,2);
								aP(mP,20,616,374,'UKR', './country/country_detail_UKR.html',2,0,0);
								aP(mP,10,767,485,'AZE', './country/country_detail_AZE.html',1,0,0);
								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,588,442,'CUB', './country/country_detail_CUB.html',1,1,1);
								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,3,2);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,405,210,'JPN','./country/country_detail_JPN.html',2,1,3);
								aP(mP,10,230,195,'UZB','./country/country_detail_UZB.html',1,0,0);
								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,0,0);
								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,1,0);
														

								aP(mP,20,137,231,'EGY','./country/country_detail_EGY.html',2,0,0);
														

								aP(mP,40,150,139,'RUS','./country/country_detail_RUS.html',4,2,2);
								aP(mP,20,139,167,'UKR','./country/country_detail_UKR.html',2,0,0);
								aP(mP,10,180,197,'AZE','./country/country_detail_AZE.html',1,0,0);
								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,0,0);
														

								aP(mP,10,738,246,'CUB','./country/country_detail_CUB.html',1,1,1);
								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,3,2);
														
						
				}
				
		break;
			case 'tabletennis':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,30,568,293,'CHN', './country/country_detail_CHN.html',3,1,2);
								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,1,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,30,317,211,'CHN','./country/country_detail_CHN.html',3,1,2);
								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,1,1);
														
						
						
						
						
				}
				
		break;
			case 'athletics':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,568,293,'CHN', './country/country_detail_CHN.html',2,0,0);
												
			break;
					case 'africa':
				
				

								aP(mP,20,322,70,'MAR', './country/country_detail_MAR.html',2,1,0);
								aP(mP,20,634,235,'ETH', './country/country_detail_ETH.html',2,3,3);
								aP(mP,10,623,305,'KEN', './country/country_detail_KEN.html',1,3,2);
												
			break;
					case 'europe':
				
				

								aP(mP,60,340,349,'GBR', './country/country_detail_GBR.html',6,0,0);
								aP(mP,10,588,321,'BLR', './country/country_detail_BLR.html',1,0,0);
								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,9,1);
								aP(mP,10,535,500,'GRE', './country/country_detail_GRE.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,120,623,330,'USA', './country/country_detail_USA.html',12,9,4);
								aP(mP,50,622,474,'JAM', './country/country_detail_JAM.html',5,1,5);
								aP(mP,10,666,468,'DOM', './country/country_detail_DOM.html',1,0,0);
								aP(mP,10,618,429,'BAH', './country/country_detail_BAH.html',1,0,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,317,211,'CHN','./country/country_detail_CHN.html',2,0,0);
														

								aP(mP,20,46,222,'MAR','./country/country_detail_MAR.html',2,1,0);
								aP(mP,20,156,283,'ETH','./country/country_detail_ETH.html',2,3,3);
								aP(mP,10,153,308,'KEN','./country/country_detail_KEN.html',1,3,2);
														

								aP(mP,60,57,157,'GBR','./country/country_detail_GBR.html',6,0,0);
								aP(mP,10,129,150,'BLR','./country/country_detail_BLR.html',1,0,0);
								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,9,1);
								aP(mP,10,114,201,'GRE','./country/country_detail_GRE.html',1,0,0);
														

								aP(mP,120,752,202,'USA','./country/country_detail_USA.html',12,9,4);
								aP(mP,50,752,257,'JAM','./country/country_detail_JAM.html',5,1,5);
								aP(mP,10,769,257,'DOM','./country/country_detail_DOM.html',1,0,0);
								aP(mP,10,749,242,'BAH','./country/country_detail_BAH.html',1,0,1);
														
						
				}
				
		break;
			case 'swimming':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,30,782,285,'JPN', './country/country_detail_JPN.html',3,1,4);
								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,1,0);
												
			break;
					case 'africa':
				
				

								aP(mP,10,563,473,'RSA', './country/country_detail_RSA.html',1,1,1);
								aP(mP,10,578,428,'ZIM', './country/country_detail_ZIM.html',1,1,1);
												
			break;
					case 'europe':
				
				

								aP(mP,20,394,332,'NED', './country/country_detail_NED.html',2,3,2);
								aP(mP,20,616,374,'UKR', './country/country_detail_UKR.html',2,0,1);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,2,3);
								aP(mP,10,509,337,'POL', './country/country_detail_POL.html',1,2,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,120,623,330,'USA', './country/country_detail_USA.html',12,9,7);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,70,483,235,'AUS', './country/country_detail_AUS.html',7,5,3);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,30,405,210,'JPN','./country/country_detail_JPN.html',3,1,4);
								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,1,0);
														

								aP(mP,10,130,371,'RSA','./country/country_detail_RSA.html',1,1,1);
								aP(mP,10,136,352,'ZIM','./country/country_detail_ZIM.html',1,1,1);
														

								aP(mP,20,73,154,'NED','./country/country_detail_NED.html',2,3,2);
								aP(mP,20,139,167,'UKR','./country/country_detail_UKR.html',2,0,1);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,2,3);
								aP(mP,10,109,154,'POL','./country/country_detail_POL.html',1,2,0);
														

								aP(mP,120,752,202,'USA','./country/country_detail_USA.html',12,9,7);
														
						

								aP(mP,70,390,367,'AUS','./country/country_detail_AUS.html',7,5,3);
												}
				
		break;
			case 'judo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,80,782,285,'JPN', './country/country_detail_JPN.html',8,2,0);
								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,1,3);
								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,1,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,588,321,'BLR', './country/country_detail_BLR.html',1,0,0);
								aP(mP,10,721,467,'GEO', './country/country_detail_GEO.html',1,1,0);
								aP(mP,10,535,500,'GRE', './country/country_detail_GRE.html',1,0,0);
								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,3);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,80,405,210,'JPN','./country/country_detail_JPN.html',8,2,0);
								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,1,3);
								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,1,1);
														
						

								aP(mP,10,129,150,'BLR','./country/country_detail_BLR.html',1,0,0);
								aP(mP,10,170,192,'GEO','./country/country_detail_GEO.html',1,1,0);
								aP(mP,10,114,201,'GRE','./country/country_detail_GRE.html',1,0,0);
								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,3);
														
						
						
				}
				
		break;
			case 'volleyball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				

								aP(mP,10,597,267,'BRA', './country/country_detail_BRA.html',1,0,0);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,0,0);
														
						
						
						

								aP(mP,10,817,329,'BRA','./country/country_detail_BRA.html',1,0,0);
														
				}
				
		break;
			case 'badminton':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,30,568,293,'CHN', './country/country_detail_CHN.html',3,1,1);
								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,2,1);
								aP(mP,10,572,570,'INA', './country/country_detail_INA.html',1,0,2);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,30,317,211,'CHN','./country/country_detail_CHN.html',3,1,1);
								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,2,1);
								aP(mP,10,323,321,'INA','./country/country_detail_INA.html',1,0,2);
														
						
						
						
						
				}
				
		break;
			case 'synchronisedswimming':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,110,657,296,'RUS', './country/country_detail_RUS.html',11,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,110,150,139,'RUS','./country/country_detail_RUS.html',11,0,0);
														
						
						
				}
				
		break;
			case 'diving':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,90,568,293,'CHN', './country/country_detail_CHN.html',9,2,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,535,500,'GRE', './country/country_detail_GRE.html',2,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,1,7);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,90,317,211,'CHN','./country/country_detail_CHN.html',9,2,1);
														
						

								aP(mP,20,114,201,'GRE','./country/country_detail_GRE.html',2,0,0);
														
						
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,1,7);
												}
				
		break;
			case 'artistic_gymnastics':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,0,2);
								aP(mP,10,782,285,'JPN', './country/country_detail_JPN.html',1,1,2);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,1);
								aP(mP,10,535,500,'GRE', './country/country_detail_GRE.html',1,0,0);
								aP(mP,10,616,374,'UKR', './country/country_detail_UKR.html',1,0,0);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,0,0);
								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,0,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,6,1);
								aP(mP,10,627,271,'CAN', './country/country_detail_CAN.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,0,2);
								aP(mP,10,405,210,'JPN','./country/country_detail_JPN.html',1,1,2);
														
						

								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,1);
								aP(mP,10,114,201,'GRE','./country/country_detail_GRE.html',1,0,0);
								aP(mP,10,139,167,'UKR','./country/country_detail_UKR.html',1,0,0);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,0,0);
								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,0,1);
														

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,6,1);
								aP(mP,10,754,179,'CAN','./country/country_detail_CAN.html',1,0,0);
														
						
				}
				
		break;
			case 'rhythmic':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,657,296,'RUS', './country/country_detail_RUS.html',2,1,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,150,139,'RUS','./country/country_detail_RUS.html',2,1,0);
														
						
						
				}
				
		break;
			case 'waterpolo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,0);
								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,0);
								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,0,0);
														
						
						
				}
				
		break;
			case 'basketball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,1);
												
			break;
					case 'south-america':
				
				

								aP(mP,10,540,398,'ARG', './country/country_detail_ARG.html',1,0,0);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,1);
														

								aP(mP,10,783,379,'ARG','./country/country_detail_ARG.html',1,0,0);
														
				}
				
		break;
			case 'handball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,422,287,'DEN', './country/country_detail_DEN.html',1,0,0);
								aP(mP,10,476,433,'CRO', './country/country_detail_CRO.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,83,136,'DEN','./country/country_detail_DEN.html',1,0,0);
								aP(mP,10,98,179,'CRO','./country/country_detail_CRO.html',1,0,0);
														
						
						
				}
				
		break;
			case 'beachvolleyball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,1);
												
			break;
					case 'south-america':
				
				

								aP(mP,10,597,267,'BRA', './country/country_detail_BRA.html',1,1,0);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,1);
														

								aP(mP,10,817,329,'BRA','./country/country_detail_BRA.html',1,1,0);
														
				}
				
		break;
			case 'tennis':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,388,364,'BEL', './country/country_detail_BEL.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				

								aP(mP,20,502,406,'CHI', './country/country_detail_CHI.html',2,0,1);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,0,0);
														
						

								aP(mP,10,72,160,'BEL','./country/country_detail_BEL.html',1,0,0);
														
						

								aP(mP,20,768,370,'CHI','./country/country_detail_CHI.html',2,0,1);
														
				}
				
		break;
			case 'hockey':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,0);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,1);
														
						
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,0);
												}
				
		break;
			case 'cycling_Road':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,0,1);
								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,0,0);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,1);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,0,1);
								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,0,0);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,0);
														
						
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,1);
												}
				
		break;
			case 'cycling_Track':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,438,349,'GER', './country/country_detail_GER.html',3,0,3);
								aP(mP,20,657,296,'RUS', './country/country_detail_RUS.html',2,1,0);
								aP(mP,20,340,349,'GBR', './country/country_detail_GBR.html',2,4,2);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,627,271,'CAN', './country/country_detail_CAN.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,90,483,235,'AUS', './country/country_detail_AUS.html',9,2,2);
								aP(mP,10,804,407,'NZL', './country/country_detail_NZL.html',1,0,0);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,30,86,156,'GER','./country/country_detail_GER.html',3,0,3);
								aP(mP,20,150,139,'RUS','./country/country_detail_RUS.html',2,1,0);
								aP(mP,20,57,157,'GBR','./country/country_detail_GBR.html',2,4,2);
														

								aP(mP,10,754,179,'CAN','./country/country_detail_CAN.html',1,0,0);
														
						

								aP(mP,90,390,367,'AUS','./country/country_detail_AUS.html',9,2,2);
								aP(mP,10,478,420,'NZL','./country/country_detail_NZL.html',1,0,0);
												}
				
		break;
			case 'cycling_MTB':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,0,0);
								aP(mP,10,426,192,'NOR', './country/country_detail_NOR.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,0,0);
								aP(mP,10,83,111,'NOR','./country/country_detail_NOR.html',1,0,0);
														
						
						
				}
				
		break;
			case 'sailing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,340,349,'GBR', './country/country_detail_GBR.html',2,1,2);
								aP(mP,10,470,404,'AUT', './country/country_detail_AUT.html',1,0,0);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,0,1);
								aP(mP,10,643,579,'ISR', './country/country_detail_ISR.html',1,0,0);
								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,2,0);
								aP(mP,10,426,192,'NOR', './country/country_detail_NOR.html',1,0,0);
								aP(mP,10,535,500,'GRE', './country/country_detail_GRE.html',1,1,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,0);
												
			break;
					case 'south-america':
				
				

								aP(mP,10,597,267,'BRA', './country/country_detail_BRA.html',1,0,0);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,57,157,'GBR','./country/country_detail_GBR.html',2,1,2);
								aP(mP,10,97,171,'AUT','./country/country_detail_AUT.html',1,0,0);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,0,1);
								aP(mP,10,146,224,'ISR','./country/country_detail_ISR.html',1,0,0);
								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,2,0);
								aP(mP,10,83,111,'NOR','./country/country_detail_NOR.html',1,0,0);
								aP(mP,10,114,201,'GRE','./country/country_detail_GRE.html',1,1,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,0);
														

								aP(mP,10,817,329,'BRA','./country/country_detail_BRA.html',1,0,0);
														
				}
				
		break;
			case 'rowing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,438,349,'GER', './country/country_detail_GER.html',2,2,0);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,1,0);
								aP(mP,10,426,192,'NOR', './country/country_detail_NOR.html',1,0,0);
								aP(mP,10,422,287,'DEN', './country/country_detail_DEN.html',1,0,0);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,2,1);
								aP(mP,10,509,337,'POL', './country/country_detail_POL.html',1,0,0);
								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,804,407,'NZL', './country/country_detail_NZL.html',1,0,0);
								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,1,2);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,86,156,'GER','./country/country_detail_GER.html',2,2,0);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,1,0);
								aP(mP,10,83,111,'NOR','./country/country_detail_NOR.html',1,0,0);
								aP(mP,10,83,136,'DEN','./country/country_detail_DEN.html',1,0,0);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,2,1);
								aP(mP,10,109,154,'POL','./country/country_detail_POL.html',1,0,0);
								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,0,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,0);
														
						

								aP(mP,10,478,420,'NZL','./country/country_detail_NZL.html',1,0,0);
								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,1,2);
												}
				
		break;
			case 'canoe':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,511,407,'HUN', './country/country_detail_HUN.html',3,1,2);
								aP(mP,30,438,349,'GER', './country/country_detail_GER.html',3,4,1);
								aP(mP,20,366,387,'FRA', './country/country_detail_FRA.html',2,0,1);
								aP(mP,20,514,387,'SVK', './country/country_detail_SVK.html',2,1,1);
								aP(mP,10,488,148,'SWE', './country/country_detail_SWE.html',1,0,0);
								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,1,0);
								aP(mP,10,426,192,'NOR', './country/country_detail_NOR.html',1,0,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,627,271,'CAN', './country/country_detail_CAN.html',1,0,2);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,0,0);
														
						

								aP(mP,30,108,174,'HUN','./country/country_detail_HUN.html',3,1,2);
								aP(mP,30,86,156,'GER','./country/country_detail_GER.html',3,4,1);
								aP(mP,20,66,170,'FRA','./country/country_detail_FRA.html',2,0,1);
								aP(mP,20,108,168,'SVK','./country/country_detail_SVK.html',2,1,1);
								aP(mP,10,102,98,'SWE','./country/country_detail_SWE.html',1,0,0);
								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,1,0);
								aP(mP,10,83,111,'NOR','./country/country_detail_NOR.html',1,0,1);
														

								aP(mP,10,754,179,'CAN','./country/country_detail_CAN.html',1,0,2);
														
						
				}
				
		break;
			case 'boxing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,531,441,'THA', './country/country_detail_THA.html',1,1,1);
								aP(mP,10,349,158,'KAZ', './country/country_detail_KAZ.html',1,1,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,657,296,'RUS', './country/country_detail_RUS.html',3,0,3);
												
			break;
					case 'north-america':
				
				

								aP(mP,50,588,442,'CUB', './country/country_detail_CUB.html',5,2,1);
								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,308,271,'THA','./country/country_detail_THA.html',1,1,1);
								aP(mP,10,234,162,'KAZ','./country/country_detail_KAZ.html',1,1,1);
														
						

								aP(mP,30,150,139,'RUS','./country/country_detail_RUS.html',3,0,3);
														

								aP(mP,50,738,246,'CUB','./country/country_detail_CUB.html',5,2,1);
								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,1);
														
						
				}
				
		break;
			case 'fencing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,366,387,'FRA', './country/country_detail_FRA.html',3,1,2);
								aP(mP,30,454,459,'ITA', './country/country_detail_ITA.html',3,3,1);
								aP(mP,10,413,410,'SUI', './country/country_detail_SUI.html',1,0,0);
								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,2,0);
								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,0,3);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,30,66,170,'FRA','./country/country_detail_FRA.html',3,1,2);
								aP(mP,30,92,189,'ITA','./country/country_detail_ITA.html',3,3,1);
								aP(mP,10,80,175,'SUI','./country/country_detail_SUI.html',1,0,0);
								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,2,0);
								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,0,3);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,1);
														
						
				}
				
		break;
			case 'taekwondo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,663,368,'TPE', './country/country_detail_TPE.html',2,1,0);
								aP(mP,20,568,293,'CHN', './country/country_detail_CHN.html',2,0,0);
								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,0,2);
								aP(mP,10,223,288,'IRI', './country/country_detail_IRI.html',1,0,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,359,243,'TPE','./country/country_detail_TPE.html',2,1,0);
								aP(mP,20,317,211,'CHN','./country/country_detail_CHN.html',2,0,0);
								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,0,2);
								aP(mP,10,187,211,'IRI','./country/country_detail_IRI.html',1,0,1);
														
						
						

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,0);
														
						
				}
				
		break;
			case 'archery':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,30,700,274,'KOR', './country/country_detail_KOR.html',3,1,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,30,374,207,'KOR','./country/country_detail_KOR.html',3,1,0);
														
						

								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,0);
														
						
						
				}
				
		break;
			case 'shooting_Cray':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,242,374,'UAE', './country/country_detail_UAE.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,0);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,1,0);
								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,1,1);
								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,1);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,10,195,244,'UAE','./country/country_detail_UAE.html',1,0,0);
														
						

								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,0);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,1,0);
								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,1,1);
								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,0,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,0);
														
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,1);
												}
				
		break;
			case 'shooting_Rifle':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,40,568,293,'CHN', './country/country_detail_CHN.html',4,1,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,657,296,'RUS', './country/country_detail_RUS.html',2,3,2);
								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,1,0);
								aP(mP,10,616,374,'UKR', './country/country_detail_UKR.html',1,0,0);
								aP(mP,10,561,458,'BUL', './country/country_detail_BUL.html',1,0,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,40,317,211,'CHN','./country/country_detail_CHN.html',4,1,1);
														
						

								aP(mP,20,150,139,'RUS','./country/country_detail_RUS.html',2,3,2);
								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,1,0);
								aP(mP,10,139,167,'UKR','./country/country_detail_UKR.html',1,0,0);
								aP(mP,10,122,190,'BUL','./country/country_detail_BUL.html',1,0,1);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,0);
														
						
				}
				
		break;
			case 'triathlon':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,470,404,'AUT', './country/country_detail_AUT.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,804,407,'NZL', './country/country_detail_NZL.html',1,1,0);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,97,171,'AUT','./country/country_detail_AUT.html',1,0,0);
														
						
						

								aP(mP,10,478,420,'NZL','./country/country_detail_NZL.html',1,1,0);
												}
				
		break;
			case 'pentathlon':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,0,0);
								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,0,0);
								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,0,0);
														
						
						
				}
				
		break;
			case 'equestrian':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,438,349,'GER', './country/country_detail_GER.html',2,1,1);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,0,0);
								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,0,0);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,1,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				

								aP(mP,10,597,267,'BRA', './country/country_detail_BRA.html',1,0,0);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,86,156,'GER','./country/country_detail_GER.html',2,1,1);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,0,0);
								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,0,0);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,1,1);
														
						

								aP(mP,10,817,329,'BRA','./country/country_detail_BRA.html',1,0,0);
														
				}
				
		break;
			case 'football':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,0);
												
			break;
					case 'south-america':
				
				

								aP(mP,10,540,398,'ARG', './country/country_detail_ARG.html',1,0,0);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,0);
														

								aP(mP,10,783,379,'ARG','./country/country_detail_ARG.html',1,0,0);
														
				}
				
		break;
		}
		break;
	case '2000':
	
	

	switch(selectSports){
			case 'wrestling':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,2,1);
								aP(mP,10,223,288,'IRI', './country/country_detail_IRI.html',1,0,0);

												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,50,657,296,'RUS', './country/country_detail_RUS.html',5,2,1);
								aP(mP,10,561,458,'BUL', './country/country_detail_BUL.html',1,1,0);
								aP(mP,10,649,500,'TUR', './country/country_detail_TUR.html',1,0,1);
								aP(mP,10,488,148,'SWE', './country/country_detail_SWE.html',1,0,0);
								aP(mP,10,767,485,'AZE', './country/country_detail_AZE.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,2,3);
								aP(mP,10,588,442,'CUB', './country/country_detail_CUB.html',1,2,1);
								aP(mP,10,627,271,'CAN', './country/country_detail_CAN.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,2,1);
								aP(mP,10,187,211,'IRI','./country/country_detail_IRI.html',1,0,0);
														
						

								aP(mP,50,150,139,'RUS','./country/country_detail_RUS.html',5,2,1);
								aP(mP,10,122,190,'BUL','./country/country_detail_BUL.html',1,1,0);
								aP(mP,10,145,200,'TUR','./country/country_detail_TUR.html',1,0,1);
								aP(mP,10,102,98,'SWE','./country/country_detail_SWE.html',1,0,0);
								aP(mP,10,180,197,'AZE','./country/country_detail_AZE.html',1,0,0);
														

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,2,3);
								aP(mP,10,738,246,'CUB','./country/country_detail_CUB.html',1,2,1);
								aP(mP,10,754,179,'CAN','./country/country_detail_CAN.html',1,0,0);
														
						
				}
				
		break;
			case 'tabletennis':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,40,568,293,'CHN', './country/country_detail_CHN.html',4,3,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,40,317,211,'CHN','./country/country_detail_CHN.html',4,3,1);
														
						
						
						
						
				}
				
		break;
			case 'athletics':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,349,158,'KAZ', './country/country_detail_KAZ.html',1,0,0);
												
			break;
					case 'africa':
				
				

								aP(mP,40,417,230,'NGR', './country/country_detail_NGR.html',4,1,0);
								aP(mP,30,634,235,'ETH', './country/country_detail_ETH.html',3,1,2);
								aP(mP,30,623,305,'KEN', './country/country_detail_KEN.html',3,2,1);
								aP(mP,10,621,408,'MOZ', './country/country_detail_MOZ.html',1,0,0);
												
			break;
					case 'europe':
				
				

								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,0,4);
								aP(mP,10,535,500,'GRE', './country/country_detail_GRE.html',1,1,0);
								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,100,623,330,'USA', './country/country_detail_USA.html',10,2,6);
								aP(mP,50,618,429,'BAH', './country/country_detail_BAH.html',5,0,4);
								aP(mP,10,588,442,'CUB', './country/country_detail_CUB.html',1,0,4);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,0);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,10,234,162,'KAZ','./country/country_detail_KAZ.html',1,0,0);
														

								aP(mP,40,80,280,'NGR','./country/country_detail_NGR.html',4,1,0);
								aP(mP,30,156,283,'ETH','./country/country_detail_ETH.html',3,1,2);
								aP(mP,30,153,308,'KEN','./country/country_detail_KEN.html',3,2,1);
								aP(mP,10,154,340,'MOZ','./country/country_detail_MOZ.html',1,0,0);
														

								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,0,4);
								aP(mP,10,114,201,'GRE','./country/country_detail_GRE.html',1,1,0);
								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,0);
														

								aP(mP,100,752,202,'USA','./country/country_detail_USA.html',10,2,6);
								aP(mP,50,749,242,'BAH','./country/country_detail_BAH.html',5,0,4);
								aP(mP,10,738,246,'CUB','./country/country_detail_CUB.html',1,0,4);
														
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,0);
												}
				
		break;
			case 'swimming':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,50,394,332,'NED', './country/country_detail_NED.html',5,1,2);
								aP(mP,30,454,459,'ITA', './country/country_detail_ITA.html',3,1,2);
								aP(mP,20,616,374,'UKR', './country/country_detail_UKR.html',2,2,0);
								aP(mP,10,488,148,'SWE', './country/country_detail_SWE.html',1,2,1);
								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,130,623,330,'USA', './country/country_detail_USA.html',13,8,10);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,50,483,235,'AUS', './country/country_detail_AUS.html',5,9,4);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,50,73,154,'NED','./country/country_detail_NED.html',5,1,2);
								aP(mP,30,92,189,'ITA','./country/country_detail_ITA.html',3,1,2);
								aP(mP,20,139,167,'UKR','./country/country_detail_UKR.html',2,2,0);
								aP(mP,10,102,98,'SWE','./country/country_detail_SWE.html',1,2,1);
								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,0,0);
														

								aP(mP,130,752,202,'USA','./country/country_detail_USA.html',13,8,10);
														
						

								aP(mP,50,390,367,'AUS','./country/country_detail_AUS.html',5,9,4);
												}
				
		break;
			case 'judo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,40,782,285,'JPN', './country/country_detail_JPN.html',4,2,2);
								aP(mP,20,568,293,'CHN', './country/country_detail_CHN.html',2,1,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,366,387,'FRA', './country/country_detail_FRA.html',2,2,2);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,3);
								aP(mP,10,649,500,'TUR', './country/country_detail_TUR.html',1,0,0);
								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,0,0);
								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,588,442,'CUB', './country/country_detail_CUB.html',2,2,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,40,405,210,'JPN','./country/country_detail_JPN.html',4,2,2);
								aP(mP,20,317,211,'CHN','./country/country_detail_CHN.html',2,1,1);
														
						

								aP(mP,20,66,170,'FRA','./country/country_detail_FRA.html',2,2,2);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,3);
								aP(mP,10,145,200,'TUR','./country/country_detail_TUR.html',1,0,0);
								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,0,0);
								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,0,0);
														

								aP(mP,20,738,246,'CUB','./country/country_detail_CUB.html',2,2,1);
														
						
				}
				
		break;
			case 'volleyball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,588,442,'CUB', './country/country_detail_CUB.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,10,738,246,'CUB','./country/country_detail_CUB.html',1,0,0);
														
						
				}
				
		break;
			case 'badminton':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,40,568,293,'CHN', './country/country_detail_CHN.html',4,1,3);
								aP(mP,10,572,570,'INA', './country/country_detail_INA.html',1,2,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,40,317,211,'CHN','./country/country_detail_CHN.html',4,1,3);
								aP(mP,10,323,321,'INA','./country/country_detail_INA.html',1,2,0);
														
						
						
						
						
				}
				
		break;
			case 'synchronisedswimming':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,100,657,296,'RUS', './country/country_detail_RUS.html',10,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,100,150,139,'RUS','./country/country_detail_RUS.html',10,0,0);
														
						
						
				}
				
		break;
			case 'diving':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,70,568,293,'CHN', './country/country_detail_CHN.html',7,7,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,40,657,296,'RUS', './country/country_detail_RUS.html',4,2,2);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,70,317,211,'CHN','./country/country_detail_CHN.html',7,7,0);
														
						

								aP(mP,40,150,139,'RUS','./country/country_detail_RUS.html',4,2,2);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,0);
														
						
				}
				
		break;
			case 'artistic_gymnastics':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,30,568,293,'CHN', './country/country_detail_CHN.html',3,2,3);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,50,657,296,'RUS', './country/country_detail_RUS.html',5,5,4);
								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,0,0);
								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,0,0);
								aP(mP,10,568,275,'LAT', './country/country_detail_LAT.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,30,317,211,'CHN','./country/country_detail_CHN.html',3,2,3);
														
						

								aP(mP,50,150,139,'RUS','./country/country_detail_RUS.html',5,5,4);
								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,0,0);
								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,0,0);
								aP(mP,10,125,135,'LAT','./country/country_detail_LAT.html',1,0,0);
														
						
						
				}
				
		break;
			case 'rhythmic':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,657,296,'RUS', './country/country_detail_RUS.html',2,0,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,150,139,'RUS','./country/country_detail_RUS.html',2,0,1);
														
						
						
				}
				
		break;
			case 'waterpolo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,0);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,0,0);
														
						
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,0);
												}
				
		break;
			case 'basketball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,0,0);
														
						
				}
				
		break;
			case 'handball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,0,0);
								aP(mP,10,422,287,'DEN', './country/country_detail_DEN.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,0,0);
								aP(mP,10,83,136,'DEN','./country/country_detail_DEN.html',1,0,0);
														
						
						
				}
				
		break;
			case 'beachvolleyball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,0);
												
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,0);
														
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,0);
												}
				
		break;
			case 'tennis':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,1,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,0,1);
								aP(mP,10,627,271,'CAN', './country/country_detail_CAN.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,1,0);
														

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,0,1);
								aP(mP,10,754,179,'CAN','./country/country_detail_CAN.html',1,0,0);
														
						
				}
				
		break;
			case 'hockey':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,0,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,1);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,0,1);
														
						
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,1);
												}
				
		break;
			case 'cycling_Road':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,394,332,'NED', './country/country_detail_NED.html',2,0,0);
								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,0,0);
								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,2,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,73,154,'NED','./country/country_detail_NED.html',2,0,0);
								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,0,0);
								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,2,1);
														
						
						
				}
				
		break;
			case 'cycling_Track':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,60,366,387,'FRA', './country/country_detail_FRA.html',6,2,0);
								aP(mP,50,438,349,'GER', './country/country_detail_GER.html',5,2,2);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,3,5);
								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,1,0);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,2);
								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,20,483,235,'AUS', './country/country_detail_AUS.html',2,2,5);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,60,66,170,'FRA','./country/country_detail_FRA.html',6,2,0);
								aP(mP,50,86,156,'GER','./country/country_detail_GER.html',5,2,2);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,3,5);
								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,1,0);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,2);
								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,0,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,0);
														
						

								aP(mP,20,390,367,'AUS','./country/country_detail_AUS.html',2,2,5);
												}
				
		break;
			case 'cycling_MTB':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,0,0);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,0,0);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,0);
														
						
						
				}
				
		break;
			case 'sailing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,340,349,'GBR', './country/country_detail_GBR.html',2,2,0);
								aP(mP,20,470,404,'AUT', './country/country_detail_AUT.html',2,0,0);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,1,0);
								aP(mP,10,422,287,'DEN', './country/country_detail_DEN.html',1,0,0);
								aP(mP,10,565,172,'FIN', './country/country_detail_FIN.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,2,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,20,483,235,'AUS', './country/country_detail_AUS.html',2,1,0);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,57,157,'GBR','./country/country_detail_GBR.html',2,2,0);
								aP(mP,20,97,171,'AUT','./country/country_detail_AUT.html',2,0,0);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,1,0);
								aP(mP,10,83,136,'DEN','./country/country_detail_DEN.html',1,0,0);
								aP(mP,10,124,105,'FIN','./country/country_detail_FIN.html',1,0,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,2,1);
														
						

								aP(mP,20,390,367,'AUS','./country/country_detail_AUS.html',2,1,0);
												}
				
		break;
			case 'rowing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,438,349,'GER', './country/country_detail_GER.html',2,1,3);
								aP(mP,20,340,349,'GBR', './country/country_detail_GBR.html',2,1,0);
								aP(mP,20,366,387,'FRA', './country/country_detail_FRA.html',2,0,1);
								aP(mP,10,588,321,'BLR', './country/country_detail_BLR.html',1,0,0);
								aP(mP,10,509,337,'POL', './country/country_detail_POL.html',1,0,0);
								aP(mP,10,472,417,'SLO', './country/country_detail_SLO.html',1,0,0);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,2,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,804,407,'NZL', './country/country_detail_NZL.html',1,0,0);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,86,156,'GER','./country/country_detail_GER.html',2,1,3);
								aP(mP,20,57,157,'GBR','./country/country_detail_GBR.html',2,1,0);
								aP(mP,20,66,170,'FRA','./country/country_detail_FRA.html',2,0,1);
								aP(mP,10,129,150,'BLR','./country/country_detail_BLR.html',1,0,0);
								aP(mP,10,109,154,'POL','./country/country_detail_POL.html',1,0,0);
								aP(mP,10,97,178,'SLO','./country/country_detail_SLO.html',1,0,0);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,2,1);
														
						
						

								aP(mP,10,478,420,'NZL','./country/country_detail_NZL.html',1,0,0);
												}
				
		break;
			case 'canoe':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,40,511,407,'HUN', './country/country_detail_HUN.html',4,2,1);
								aP(mP,30,438,349,'GER', './country/country_detail_GER.html',3,1,3);
								aP(mP,20,454,459,'ITA', './country/country_detail_ITA.html',2,0,1);
								aP(mP,20,426,192,'NOR', './country/country_detail_NOR.html',2,0,0);
								aP(mP,10,563,423,'ROU', './country/country_detail_ROU.html',1,0,1);
								aP(mP,10,476,372,'CZE', './country/country_detail_CZE.html',1,0,1);
								aP(mP,10,514,387,'SVK', './country/country_detail_SVK.html',1,1,1);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,1,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,40,108,174,'HUN','./country/country_detail_HUN.html',4,2,1);
								aP(mP,30,86,156,'GER','./country/country_detail_GER.html',3,1,3);
								aP(mP,20,92,189,'ITA','./country/country_detail_ITA.html',2,0,1);
								aP(mP,20,83,111,'NOR','./country/country_detail_NOR.html',2,0,0);
								aP(mP,10,122,179,'ROU','./country/country_detail_ROU.html',1,0,1);
								aP(mP,10,98,163,'CZE','./country/country_detail_CZE.html',1,0,1);
								aP(mP,10,108,168,'SVK','./country/country_detail_SVK.html',1,1,1);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,1,1);
														
						
						
				}
				
		break;
			case 'boxing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,349,158,'KAZ', './country/country_detail_KAZ.html',2,2,0);
								aP(mP,10,531,441,'THA', './country/country_detail_THA.html',1,0,1);
								aP(mP,10,330,244,'UZB', './country/country_detail_UZB.html',1,0,2);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,657,296,'RUS', './country/country_detail_RUS.html',2,3,2);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,0,0);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,0,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,40,588,442,'CUB', './country/country_detail_CUB.html',4,0,2);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,234,162,'KAZ','./country/country_detail_KAZ.html',2,2,0);
								aP(mP,10,308,271,'THA','./country/country_detail_THA.html',1,0,1);
								aP(mP,10,230,195,'UZB','./country/country_detail_UZB.html',1,0,2);
														
						

								aP(mP,20,150,139,'RUS','./country/country_detail_RUS.html',2,3,2);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,0,0);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,0,1);
														

								aP(mP,40,738,246,'CUB','./country/country_detail_CUB.html',4,0,2);
														
						
				}
				
		break;
			case 'fencing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,0,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,657,296,'RUS', './country/country_detail_RUS.html',3,0,1);
								aP(mP,30,454,459,'ITA', './country/country_detail_ITA.html',3,0,2);
								aP(mP,10,563,423,'ROU', './country/country_detail_ROU.html',1,0,0);
								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,0,0);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,4,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,0,1);
														
						

								aP(mP,30,150,139,'RUS','./country/country_detail_RUS.html',3,0,1);
								aP(mP,30,92,189,'ITA','./country/country_detail_ITA.html',3,0,2);
								aP(mP,10,122,179,'ROU','./country/country_detail_ROU.html',1,0,0);
								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,0,0);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,4,1);
														
						
						
				}
				
		break;
			case 'taekwondo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,700,274,'KOR', './country/country_detail_KOR.html',2,1,0);
								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,535,500,'GRE', './country/country_detail_GRE.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,0);
								aP(mP,10,588,442,'CUB', './country/country_detail_CUB.html',1,1,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,0);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,20,374,207,'KOR','./country/country_detail_KOR.html',2,1,0);
								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,0,0);
														
						

								aP(mP,10,114,201,'GRE','./country/country_detail_GRE.html',1,0,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,0);
								aP(mP,10,738,246,'CUB','./country/country_detail_CUB.html',1,1,0);
														
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,0);
												}
				
		break;
			case 'archery':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,30,700,274,'KOR', './country/country_detail_KOR.html',3,1,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,0);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,30,374,207,'KOR','./country/country_detail_KOR.html',3,1,1);
														
						
						
						
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,0);
												}
				
		break;
			case 'shooting_Cray':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,0,2);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,616,374,'UKR', './country/country_detail_UKR.html',1,0,0);
								aP(mP,10,548,296,'LTU', './country/country_detail_LTU.html',1,0,0);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,1,0);
								aP(mP,10,488,148,'SWE', './country/country_detail_SWE.html',1,0,0);
								aP(mP,10,767,485,'AZE', './country/country_detail_AZE.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,1,0);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,0,2);
														
						

								aP(mP,10,139,167,'UKR','./country/country_detail_UKR.html',1,0,0);
								aP(mP,10,119,142,'LTU','./country/country_detail_LTU.html',1,0,0);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,1,0);
								aP(mP,10,102,98,'SWE','./country/country_detail_SWE.html',1,0,0);
								aP(mP,10,180,197,'AZE','./country/country_detail_AZE.html',1,0,0);
														
						
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,1,0);
												}
				
		break;
			case 'shooting_Rifle':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,568,293,'CHN', './country/country_detail_CHN.html',2,2,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,561,458,'BUL', './country/country_detail_BUL.html',2,0,0);
								aP(mP,10,472,417,'SLO', './country/country_detail_SLO.html',1,0,0);
								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,2,2);
								aP(mP,10,488,148,'SWE', './country/country_detail_SWE.html',1,0,0);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,0,0);
								aP(mP,10,509,337,'POL', './country/country_detail_POL.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,317,211,'CHN','./country/country_detail_CHN.html',2,2,1);
														
						

								aP(mP,20,122,190,'BUL','./country/country_detail_BUL.html',2,0,0);
								aP(mP,10,97,178,'SLO','./country/country_detail_SLO.html',1,0,0);
								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,2,2);
								aP(mP,10,102,98,'SWE','./country/country_detail_SWE.html',1,0,0);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,0,0);
								aP(mP,10,109,154,'POL','./country/country_detail_POL.html',1,0,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,0);
														
						
				}
				
		break;
			case 'triathlon':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,413,410,'SUI', './country/country_detail_SUI.html',1,0,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,627,271,'CAN', './country/country_detail_CAN.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,80,175,'SUI','./country/country_detail_SUI.html',1,0,1);
														

								aP(mP,10,754,179,'CAN','./country/country_detail_CAN.html',1,0,0);
														
						
				}
				
		break;
			case 'pentathlon':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,0,1);
								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,0,1);
								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,0,0);
														
						
						
				}
				
		break;
			case 'equestrian':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,394,332,'NED', './country/country_detail_NED.html',2,2,0);
								aP(mP,20,438,349,'GER', './country/country_detail_GER.html',2,1,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,2);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,0);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,73,154,'NED','./country/country_detail_NED.html',2,2,0);
								aP(mP,20,86,156,'GER','./country/country_detail_GER.html',2,1,1);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,2);
														
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,0);
												}
				
		break;
			case 'football':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				

								aP(mP,10,447,267,'CMR', './country/country_detail_CMR.html',1,0,0);
												
			break;
					case 'europe':
				
				

								aP(mP,10,426,192,'NOR', './country/country_detail_NOR.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						

								aP(mP,10,89,293,'CMR','./country/country_detail_CMR.html',1,0,0);
														

								aP(mP,10,83,111,'NOR','./country/country_detail_NOR.html',1,0,0);
														
						
						
				}
				
		break;
		}
		break;
	case '1996':
	
	

	switch(selectSports){
			case 'wrestling':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,3,0);
								aP(mP,10,697,255,'PRK', './country/country_detail_PRK.html',1,0,1);
								aP(mP,10,349,158,'KAZ', './country/country_detail_KAZ.html',1,0,1);
								aP(mP,10,223,288,'IRI', './country/country_detail_IRI.html',1,1,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,40,657,296,'RUS', './country/country_detail_RUS.html',4,1,2);
								aP(mP,30,509,337,'POL', './country/country_detail_POL.html',3,1,0);
								aP(mP,20,649,500,'TUR', './country/country_detail_TUR.html',2,0,1);
								aP(mP,10,616,374,'UKR', './country/country_detail_UKR.html',1,0,3);
								aP(mP,10,732,486,'ARM', './country/country_detail_ARM.html',1,1,0);
								aP(mP,10,561,458,'BUL', './country/country_detail_BUL.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,30,623,330,'USA', './country/country_detail_USA.html',3,4,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,3,0);
								aP(mP,10,372,197,'PRK','./country/country_detail_PRK.html',1,0,1);
								aP(mP,10,234,162,'KAZ','./country/country_detail_KAZ.html',1,0,1);
								aP(mP,10,187,211,'IRI','./country/country_detail_IRI.html',1,1,1);
														
						

								aP(mP,40,150,139,'RUS','./country/country_detail_RUS.html',4,1,2);
								aP(mP,30,109,154,'POL','./country/country_detail_POL.html',3,1,0);
								aP(mP,20,145,200,'TUR','./country/country_detail_TUR.html',2,0,1);
								aP(mP,10,139,167,'UKR','./country/country_detail_UKR.html',1,0,3);
								aP(mP,10,172,197,'ARM','./country/country_detail_ARM.html',1,1,0);
								aP(mP,10,122,190,'BUL','./country/country_detail_BUL.html',1,0,0);
														

								aP(mP,30,752,202,'USA','./country/country_detail_USA.html',3,4,1);
														
						
				}
				
		break;
			case 'tabletennis':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,40,568,293,'CHN', './country/country_detail_CHN.html',4,3,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,40,317,211,'CHN','./country/country_detail_CHN.html',4,3,1);
														
						
						
						
						
				}
				
		break;
			case 'athletics':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,1,0);
												
			break;
					case 'africa':
				
				

								aP(mP,10,623,305,'KEN', './country/country_detail_KEN.html',1,4,2);
								aP(mP,10,576,317,'BDI', './country/country_detail_BDI.html',1,0,0);
								aP(mP,10,390,32,'ALG', './country/country_detail_ALG.html',1,0,0);
								aP(mP,10,634,235,'ETH', './country/country_detail_ETH.html',1,0,1);
												
			break;
					case 'europe':
				
				

								aP(mP,20,366,387,'FRA', './country/country_detail_FRA.html',2,0,1);
								aP(mP,20,657,296,'RUS', './country/country_detail_RUS.html',2,0,0);
								aP(mP,10,488,148,'SWE', './country/country_detail_SWE.html',1,0,0);
								aP(mP,10,278,496,'POR', './country/country_detail_POR.html',1,0,0);
								aP(mP,10,426,192,'NOR', './country/country_detail_NOR.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,170,623,330,'USA', './country/country_detail_USA.html',17,6,3);
								aP(mP,50,627,271,'CAN', './country/country_detail_CAN.html',5,0,0);
								aP(mP,10,622,474,'JAM', './country/country_detail_JAM.html',1,2,8);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,1,0);
														

								aP(mP,10,153,308,'KEN','./country/country_detail_KEN.html',1,4,2);
								aP(mP,10,135,312,'BDI','./country/country_detail_BDI.html',1,0,0);
								aP(mP,10,66,211,'ALG','./country/country_detail_ALG.html',1,0,0);
								aP(mP,10,156,283,'ETH','./country/country_detail_ETH.html',1,0,1);
														

								aP(mP,20,66,170,'FRA','./country/country_detail_FRA.html',2,0,1);
								aP(mP,20,150,139,'RUS','./country/country_detail_RUS.html',2,0,0);
								aP(mP,10,102,98,'SWE','./country/country_detail_SWE.html',1,0,0);
								aP(mP,10,40,200,'POR','./country/country_detail_POR.html',1,0,0);
								aP(mP,10,83,111,'NOR','./country/country_detail_NOR.html',1,0,0);
														

								aP(mP,170,752,202,'USA','./country/country_detail_USA.html',17,6,3);
								aP(mP,50,754,179,'CAN','./country/country_detail_CAN.html',5,0,0);
								aP(mP,10,752,257,'JAM','./country/country_detail_JAM.html',1,2,8);
														
						
				}
				
		break;
			case 'swimming':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,3,2);
												
			break;
					case 'africa':
				
				

								aP(mP,20,563,473,'RSA', './country/country_detail_RSA.html',2,0,1);
												
			break;
					case 'europe':
				
				

								aP(mP,40,657,296,'RUS', './country/country_detail_RUS.html',4,2,2);
								aP(mP,30,288,329,'IRL', './country/country_detail_IRL.html',3,0,1);
								aP(mP,30,511,407,'HUN', './country/country_detail_HUN.html',3,1,2);
								aP(mP,10,388,364,'BEL', './country/country_detail_BEL.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,130,623,330,'USA', './country/country_detail_USA.html',13,11,2);
								aP(mP,10,579,524,'CRC', './country/country_detail_CRC.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,20,483,235,'AUS', './country/country_detail_AUS.html',2,4,6);
								aP(mP,20,804,407,'NZL', './country/country_detail_NZL.html',2,0,0);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,3,2);
														

								aP(mP,20,130,371,'RSA','./country/country_detail_RSA.html',2,0,1);
														

								aP(mP,40,150,139,'RUS','./country/country_detail_RUS.html',4,2,2);
								aP(mP,30,42,152,'IRL','./country/country_detail_IRL.html',3,0,1);
								aP(mP,30,108,174,'HUN','./country/country_detail_HUN.html',3,1,2);
								aP(mP,10,72,160,'BEL','./country/country_detail_BEL.html',1,0,0);
														

								aP(mP,130,752,202,'USA','./country/country_detail_USA.html',13,11,2);
								aP(mP,10,734,280,'CRC','./country/country_detail_CRC.html',1,0,0);
														
						

								aP(mP,20,390,367,'AUS','./country/country_detail_AUS.html',2,4,6);
								aP(mP,20,478,420,'NZL','./country/country_detail_NZL.html',2,0,0);
												}
				
		break;
			case 'judo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,30,782,285,'JPN', './country/country_detail_JPN.html',3,4,1);
								aP(mP,20,700,274,'KOR', './country/country_detail_KOR.html',2,4,2);
								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,0,1);
								aP(mP,10,697,255,'PRK', './country/country_detail_PRK.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,366,387,'FRA', './country/country_detail_FRA.html',3,0,3);
								aP(mP,10,509,337,'POL', './country/country_detail_POL.html',1,1,0);
								aP(mP,10,388,364,'BEL', './country/country_detail_BEL.html',1,1,2);
								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,4);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,588,442,'CUB', './country/country_detail_CUB.html',1,1,4);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,30,405,210,'JPN','./country/country_detail_JPN.html',3,4,1);
								aP(mP,20,374,207,'KOR','./country/country_detail_KOR.html',2,4,2);
								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,0,1);
								aP(mP,10,372,197,'PRK','./country/country_detail_PRK.html',1,0,0);
														
						

								aP(mP,30,66,170,'FRA','./country/country_detail_FRA.html',3,0,3);
								aP(mP,10,109,154,'POL','./country/country_detail_POL.html',1,1,0);
								aP(mP,10,72,160,'BEL','./country/country_detail_BEL.html',1,1,2);
								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,4);
														

								aP(mP,10,738,246,'CUB','./country/country_detail_CUB.html',1,1,4);
														
						
				}
				
		break;
			case 'volleyball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,588,442,'CUB', './country/country_detail_CUB.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,0,0);
														

								aP(mP,10,738,246,'CUB','./country/country_detail_CUB.html',1,0,0);
														
						
				}
				
		break;
			case 'badminton':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,700,274,'KOR', './country/country_detail_KOR.html',2,2,0);
								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,1,2);
								aP(mP,10,572,570,'INA', './country/country_detail_INA.html',1,1,2);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,422,287,'DEN', './country/country_detail_DEN.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,374,207,'KOR','./country/country_detail_KOR.html',2,2,0);
								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,1,2);
								aP(mP,10,323,321,'INA','./country/country_detail_INA.html',1,1,2);
														
						

								aP(mP,10,83,136,'DEN','./country/country_detail_DEN.html',1,0,0);
														
						
						
				}
				
		break;
			case 'synchronisedswimming':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,100,623,330,'USA', './country/country_detail_USA.html',10,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,100,752,202,'USA','./country/country_detail_USA.html',10,0,0);
														
						
				}
				
		break;
			case 'diving':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,30,568,293,'CHN', './country/country_detail_CHN.html',3,1,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,1,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,30,317,211,'CHN','./country/country_detail_CHN.html',3,1,1);
														
						

								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,1,0);
														
						
						
				}
				
		break;
			case 'artistic_gymnastics':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,4,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,657,296,'RUS', './country/country_detail_RUS.html',3,2,3);
								aP(mP,30,616,374,'UKR', './country/country_detail_UKR.html',3,1,1);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,0);
								aP(mP,10,535,500,'GRE', './country/country_detail_GRE.html',1,0,0);
								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,0);
								aP(mP,10,413,410,'SUI', './country/country_detail_SUI.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,2,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,4,1);
														
						

								aP(mP,30,150,139,'RUS','./country/country_detail_RUS.html',3,2,3);
								aP(mP,30,139,167,'UKR','./country/country_detail_UKR.html',3,1,1);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,0);
								aP(mP,10,114,201,'GRE','./country/country_detail_GRE.html',1,0,0);
								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,0);
								aP(mP,10,80,175,'SUI','./country/country_detail_SUI.html',1,0,0);
														

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,2,1);
														
						
				}
				
		break;
			case 'rhythmic':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,0,0);
								aP(mP,10,616,374,'UKR', './country/country_detail_UKR.html',1,0,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,0,0);
								aP(mP,10,139,167,'UKR','./country/country_detail_UKR.html',1,0,1);
														
						
						
				}
				
		break;
			case 'waterpolo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,0,0);
														
						
						
				}
				
		break;
			case 'basketball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,0,0);
														
						
				}
				
		break;
			case 'handball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,422,287,'DEN', './country/country_detail_DEN.html',1,0,0);
								aP(mP,10,476,433,'CRO', './country/country_detail_CRO.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,83,136,'DEN','./country/country_detail_DEN.html',1,0,0);
								aP(mP,10,98,179,'CRO','./country/country_detail_CRO.html',1,0,0);
														
						
						
				}
				
		break;
			case 'beachvolleyball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,0);
												
			break;
					case 'south-america':
				
				

								aP(mP,10,597,267,'BRA', './country/country_detail_BRA.html',1,1,0);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,0);
														

								aP(mP,10,817,329,'BRA','./country/country_detail_BRA.html',1,1,0);
														
				}
				
		break;
			case 'tennis':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,30,623,330,'USA', './country/country_detail_USA.html',3,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,0);
												
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,30,752,202,'USA','./country/country_detail_USA.html',3,0,0);
														
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,0);
												}
				
		break;
			case 'hockey':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,0,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,1);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,0,1);
														
						
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,1);
												}
				
		break;
			case 'cycling_Road':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,0,0);
								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,1,0);
								aP(mP,10,413,410,'SUI', './country/country_detail_SUI.html',1,0,0);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,1,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,0,0);
								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,1,0);
								aP(mP,10,80,175,'SUI','./country/country_detail_SUI.html',1,0,0);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,1,0);
														
						
						
				}
				
		break;
			case 'cycling_Track':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,70,366,387,'FRA', './country/country_detail_FRA.html',7,2,0);
								aP(mP,30,454,459,'ITA', './country/country_detail_ITA.html',3,0,0);
								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,70,66,170,'FRA','./country/country_detail_FRA.html',7,2,0);
								aP(mP,30,92,189,'ITA','./country/country_detail_ITA.html',3,0,0);
								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,1);
														
						
						
				}
				
		break;
			case 'cycling_MTB':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,0);
								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,0);
								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,0,0);
														
						
						
				}
				
		break;
			case 'sailing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,618,382,'HKG', './country/country_detail_HKG.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,320,491,'ESP', './country/country_detail_ESP.html',2,0,0);
								aP(mP,10,535,500,'GRE', './country/country_detail_GRE.html',1,0,0);
								aP(mP,10,509,337,'POL', './country/country_detail_POL.html',1,0,0);
								aP(mP,10,422,287,'DEN', './country/country_detail_DEN.html',1,0,0);
								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,0);
								aP(mP,10,616,374,'UKR', './country/country_detail_UKR.html',1,0,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				

								aP(mP,10,597,267,'BRA', './country/country_detail_BRA.html',1,0,1);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,342,247,'HKG','./country/country_detail_HKG.html',1,0,0);
														
						

								aP(mP,20,53,196,'ESP','./country/country_detail_ESP.html',2,0,0);
								aP(mP,10,114,201,'GRE','./country/country_detail_GRE.html',1,0,0);
								aP(mP,10,109,154,'POL','./country/country_detail_POL.html',1,0,0);
								aP(mP,10,83,136,'DEN','./country/country_detail_DEN.html',1,0,0);
								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,0);
								aP(mP,10,139,167,'UKR','./country/country_detail_UKR.html',1,0,1);
														
						

								aP(mP,10,817,329,'BRA','./country/country_detail_BRA.html',1,0,1);
														
				}
				
		break;
			case 'rowing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,438,349,'GER', './country/country_detail_GER.html',2,1,1);
								aP(mP,20,413,410,'SUI', './country/country_detail_SUI.html',2,0,0);
								aP(mP,10,588,321,'BLR', './country/country_detail_BLR.html',1,0,1);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,0);
								aP(mP,10,422,287,'DEN', './country/country_detail_DEN.html',1,0,1);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,0,1);
								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,1,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,627,271,'CAN', './country/country_detail_CAN.html',1,4,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,20,483,235,'AUS', './country/country_detail_AUS.html',2,1,3);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,86,156,'GER','./country/country_detail_GER.html',2,1,1);
								aP(mP,20,80,175,'SUI','./country/country_detail_SUI.html',2,0,0);
								aP(mP,10,129,150,'BLR','./country/country_detail_BLR.html',1,0,1);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,0);
								aP(mP,10,83,136,'DEN','./country/country_detail_DEN.html',1,0,1);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,0,1);
								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,1,1);
														

								aP(mP,10,754,179,'CAN','./country/country_detail_CAN.html',1,4,1);
														
						

								aP(mP,20,390,367,'AUS','./country/country_detail_AUS.html',2,1,3);
												}
				
		break;
			case 'canoe':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,40,438,349,'GER', './country/country_detail_GER.html',4,2,2);
								aP(mP,30,476,372,'CZE', './country/country_detail_CZE.html',3,2,0);
								aP(mP,20,454,459,'ITA', './country/country_detail_ITA.html',2,2,1);
								aP(mP,20,511,407,'HUN', './country/country_detail_HUN.html',2,1,3);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,0,2);
								aP(mP,10,426,192,'NOR', './country/country_detail_NOR.html',1,1,0);
								aP(mP,10,488,148,'SWE', './country/country_detail_SWE.html',1,0,1);
								aP(mP,10,514,387,'SVK', './country/country_detail_SVK.html',1,1,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,40,86,156,'GER','./country/country_detail_GER.html',4,2,2);
								aP(mP,30,98,163,'CZE','./country/country_detail_CZE.html',3,2,0);
								aP(mP,20,92,189,'ITA','./country/country_detail_ITA.html',2,2,1);
								aP(mP,20,108,174,'HUN','./country/country_detail_HUN.html',2,1,3);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,0,2);
								aP(mP,10,83,111,'NOR','./country/country_detail_NOR.html',1,1,0);
								aP(mP,10,102,98,'SWE','./country/country_detail_SWE.html',1,0,1);
								aP(mP,10,108,168,'SVK','./country/country_detail_SVK.html',1,1,0);
														
						
						
				}
				
		break;
			case 'boxing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,531,441,'THA', './country/country_detail_THA.html',1,0,1);
								aP(mP,10,349,158,'KAZ', './country/country_detail_KAZ.html',1,1,2);
												
			break;
					case 'africa':
				
				

								aP(mP,10,390,32,'ALG', './country/country_detail_ALG.html',1,0,1);
												
			break;
					case 'europe':
				
				

								aP(mP,10,561,458,'BUL', './country/country_detail_BUL.html',1,2,0);
								aP(mP,10,616,374,'UKR', './country/country_detail_UKR.html',1,0,1);
								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,0,0);
								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,0,3);
												
			break;
					case 'north-america':
				
				

								aP(mP,40,588,442,'CUB', './country/country_detail_CUB.html',4,3,0);
								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,5);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,308,271,'THA','./country/country_detail_THA.html',1,0,1);
								aP(mP,10,234,162,'KAZ','./country/country_detail_KAZ.html',1,1,2);
														

								aP(mP,10,66,211,'ALG','./country/country_detail_ALG.html',1,0,1);
														

								aP(mP,10,122,190,'BUL','./country/country_detail_BUL.html',1,2,0);
								aP(mP,10,139,167,'UKR','./country/country_detail_UKR.html',1,0,1);
								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,0,0);
								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,0,3);
														

								aP(mP,40,738,246,'CUB','./country/country_detail_CUB.html',4,3,0);
								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,5);
														
						
				}
				
		break;
			case 'fencing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,40,657,296,'RUS', './country/country_detail_RUS.html',4,2,1);
								aP(mP,30,454,459,'ITA', './country/country_detail_ITA.html',3,2,2);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,1,3);
								aP(mP,10,563,423,'ROU', './country/country_detail_ROU.html',1,1,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,40,150,139,'RUS','./country/country_detail_RUS.html',4,2,1);
								aP(mP,30,92,189,'ITA','./country/country_detail_ITA.html',3,2,2);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,1,3);
								aP(mP,10,122,179,'ROU','./country/country_detail_ROU.html',1,1,0);
														
						
						
				}
				
		break;
			case 'archery':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,700,274,'KOR', './country/country_detail_KOR.html',2,1,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,374,207,'KOR','./country/country_detail_KOR.html',2,1,1);
														
						
						

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,0,0);
														
						
				}
				
		break;
			case 'shooting_Cray':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,1,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,1,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,20,483,235,'AUS', './country/country_detail_AUS.html',2,0,1);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,1,1);
														
						

								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,1,1);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,1);
														
						

								aP(mP,20,390,367,'AUS','./country/country_detail_AUS.html',2,0,1);
												}
				
		break;
			case 'shooting_Rifle':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,1,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,657,296,'RUS', './country/country_detail_RUS.html',3,2,1);
								aP(mP,20,438,349,'GER', './country/country_detail_GER.html',2,1,0);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,1);
								aP(mP,10,509,337,'POL', './country/country_detail_POL.html',1,0,1);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,0,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,1,0);
														
						

								aP(mP,30,150,139,'RUS','./country/country_detail_RUS.html',3,2,1);
								aP(mP,20,86,156,'GER','./country/country_detail_GER.html',2,1,0);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,1);
								aP(mP,10,109,154,'POL','./country/country_detail_POL.html',1,0,1);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,0,1);
														
						
						
				}
				
		break;
			case 'pentathlon':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,349,158,'KAZ', './country/country_detail_KAZ.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,234,162,'KAZ','./country/country_detail_KAZ.html',1,0,0);
														
						
						
						
						
				}
				
		break;
			case 'equestrian':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,40,438,349,'GER', './country/country_detail_GER.html',4,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,804,407,'NZL', './country/country_detail_NZL.html',1,0,1);
								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,1,0);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,40,86,156,'GER','./country/country_detail_GER.html',4,0,0);
														
						
						

								aP(mP,10,478,420,'NZL','./country/country_detail_NZL.html',1,0,1);
								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,1,0);
												}
				
		break;
			case 'football':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				

								aP(mP,10,417,230,'NGR', './country/country_detail_NGR.html',1,0,0);
												
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						

								aP(mP,10,80,280,'NGR','./country/country_detail_NGR.html',1,0,0);
														
						

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,0);
														
						
				}
				
		break;
		}
		break;
	case '1993':
	
	

	switch(selectSports){
			case 'cycling_Track':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,0);
														
						
						
				}
				
		break;
		}
		break;
	case '1992':
	
	

	switch(selectSports){
			case 'wrestling':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,697,255,'PRK', './country/country_detail_PRK.html',2,0,1);
								aP(mP,20,700,274,'KOR', './country/country_detail_KOR.html',2,1,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,511,407,'HUN', './country/country_detail_HUN.html',2,0,0);
								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,2,0);
								aP(mP,10,657,296,'RUS', './country/country_detail_RUS.html',1,0,0);
								aP(mP,10,426,192,'NOR', './country/country_detail_NOR.html',1,0,0);
								aP(mP,10,649,500,'TUR', './country/country_detail_TUR.html',1,2,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,30,623,330,'USA', './country/country_detail_USA.html',3,3,2);
								aP(mP,20,588,442,'CUB', './country/country_detail_CUB.html',2,0,3);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,372,197,'PRK','./country/country_detail_PRK.html',2,0,1);
								aP(mP,20,374,207,'KOR','./country/country_detail_KOR.html',2,1,1);
														
						

								aP(mP,20,108,174,'HUN','./country/country_detail_HUN.html',2,0,0);
								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,2,0);
								aP(mP,10,150,139,'RUS','./country/country_detail_RUS.html',1,0,0);
								aP(mP,10,83,111,'NOR','./country/country_detail_NOR.html',1,0,0);
								aP(mP,10,145,200,'TUR','./country/country_detail_TUR.html',1,2,1);
														

								aP(mP,30,752,202,'USA','./country/country_detail_USA.html',3,3,2);
								aP(mP,20,738,246,'CUB','./country/country_detail_CUB.html',2,0,3);
														
						
				}
				
		break;
			case 'tabletennis':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,30,568,293,'CHN', './country/country_detail_CHN.html',3,2,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,488,148,'SWE', './country/country_detail_SWE.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,30,317,211,'CHN','./country/country_detail_CHN.html',3,2,1);
														
						

								aP(mP,10,102,98,'SWE','./country/country_detail_SWE.html',1,0,0);
														
						
						
				}
				
		break;
			case 'athletics':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				

								aP(mP,20,623,305,'KEN', './country/country_detail_KEN.html',2,4,2);
								aP(mP,10,634,235,'ETH', './country/country_detail_ETH.html',1,0,2);
								aP(mP,10,322,70,'MAR', './country/country_detail_MAR.html',1,1,0);
												
			break;
					case 'europe':
				
				

								aP(mP,20,340,349,'GBR', './country/country_detail_GBR.html',2,0,9);
								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,0,0);
								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,0,0);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,0,0);
								aP(mP,10,535,500,'GRE', './country/country_detail_GRE.html',1,0,0);
								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,170,623,330,'USA', './country/country_detail_USA.html',17,8,6);
								aP(mP,10,627,271,'CAN', './country/country_detail_CAN.html',1,0,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						

								aP(mP,20,153,308,'KEN','./country/country_detail_KEN.html',2,4,2);
								aP(mP,10,156,283,'ETH','./country/country_detail_ETH.html',1,0,2);
								aP(mP,10,46,222,'MAR','./country/country_detail_MAR.html',1,1,0);
														

								aP(mP,20,57,157,'GBR','./country/country_detail_GBR.html',2,0,9);
								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,0,0);
								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,0,0);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,0,0);
								aP(mP,10,114,201,'GRE','./country/country_detail_GRE.html',1,0,0);
								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,0);
														

								aP(mP,170,752,202,'USA','./country/country_detail_USA.html',17,8,6);
								aP(mP,10,754,179,'CAN','./country/country_detail_CAN.html',1,0,1);
														
						
				}
				
		break;
			case 'swimming':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,40,568,293,'CHN', './country/country_detail_CHN.html',4,5,0);
								aP(mP,10,782,285,'JPN', './country/country_detail_JPN.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,50,511,407,'HUN', './country/country_detail_HUN.html',5,3,1);
								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,0,0);
								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,3,7);
												
			break;
					case 'north-america':
				
				

								aP(mP,110,623,330,'USA', './country/country_detail_USA.html',11,9,7);
								aP(mP,10,627,271,'CAN', './country/country_detail_CAN.html',1,0,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,3,5);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,40,317,211,'CHN','./country/country_detail_CHN.html',4,5,0);
								aP(mP,10,405,210,'JPN','./country/country_detail_JPN.html',1,0,0);
														
						

								aP(mP,50,108,174,'HUN','./country/country_detail_HUN.html',5,3,1);
								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,0,0);
								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,3,7);
														

								aP(mP,110,752,202,'USA','./country/country_detail_USA.html',11,9,7);
								aP(mP,10,754,179,'CAN','./country/country_detail_CAN.html',1,0,1);
														
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,3,5);
												}
				
		break;
			case 'judo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,782,285,'JPN', './country/country_detail_JPN.html',2,4,4);
								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,0,2);
								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,1,2);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,320,491,'ESP', './country/country_detail_ESP.html',2,0,0);
								aP(mP,20,366,387,'FRA', './country/country_detail_FRA.html',2,1,4);
								aP(mP,10,509,337,'POL', './country/country_detail_POL.html',1,0,0);
								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,2,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,588,442,'CUB', './country/country_detail_CUB.html',1,1,3);
												
			break;
					case 'south-america':
				
				

								aP(mP,10,597,267,'BRA', './country/country_detail_BRA.html',1,0,0);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,405,210,'JPN','./country/country_detail_JPN.html',2,4,4);
								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,0,2);
								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,1,2);
														
						

								aP(mP,20,53,196,'ESP','./country/country_detail_ESP.html',2,0,0);
								aP(mP,20,66,170,'FRA','./country/country_detail_FRA.html',2,1,4);
								aP(mP,10,109,154,'POL','./country/country_detail_POL.html',1,0,0);
								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,2,1);
														

								aP(mP,10,738,246,'CUB','./country/country_detail_CUB.html',1,1,3);
														

								aP(mP,10,817,329,'BRA','./country/country_detail_BRA.html',1,0,0);
														
				}
				
		break;
			case 'volleyball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,588,442,'CUB', './country/country_detail_CUB.html',1,0,0);
												
			break;
					case 'south-america':
				
				

								aP(mP,10,597,267,'BRA', './country/country_detail_BRA.html',1,0,0);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,10,738,246,'CUB','./country/country_detail_CUB.html',1,0,0);
														

								aP(mP,10,817,329,'BRA','./country/country_detail_BRA.html',1,0,0);
														
				}
				
		break;
			case 'badminton':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,700,274,'KOR', './country/country_detail_KOR.html',2,1,1);
								aP(mP,20,572,570,'INA', './country/country_detail_INA.html',2,2,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,374,207,'KOR','./country/country_detail_KOR.html',2,1,1);
								aP(mP,20,323,321,'INA','./country/country_detail_INA.html',2,2,1);
														
						
						
						
						
				}
				
		break;
			case 'synchronisedswimming':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,30,623,330,'USA', './country/country_detail_USA.html',3,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,30,752,202,'USA','./country/country_detail_USA.html',3,0,0);
														
						
				}
				
		break;
			case 'diving':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,30,568,293,'CHN', './country/country_detail_CHN.html',3,1,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,30,317,211,'CHN','./country/country_detail_CHN.html',3,1,1);
														
						
						

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,1);
														
						
				}
				
		break;
			case 'artistic_gymnastics':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,568,293,'CHN', './country/country_detail_CHN.html',2,4,2);
								aP(mP,10,697,255,'PRK', './country/country_detail_PRK.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,1,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,2,3);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,317,211,'CHN','./country/country_detail_CHN.html',2,4,2);
								aP(mP,10,372,197,'PRK','./country/country_detail_PRK.html',1,0,0);
														
						

								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,1,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,2,3);
														
						
				}
				
		break;
			case 'rhythmic':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						
						
						
				}
				
		break;
			case 'waterpolo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,0);
														
						
						
				}
				
		break;
			case 'basketball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,1);
														
						
				}
				
		break;
			case 'handball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,0,0);
														
						
						
						
						
				}
				
		break;
			case 'tennis':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,413,410,'SUI', './country/country_detail_SUI.html',1,0,0);
								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,1,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,0,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,80,175,'SUI','./country/country_detail_SUI.html',1,0,0);
								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,1,0);
														

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,0,1);
														
						
				}
				
		break;
			case 'hockey':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,0,0);
								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,1,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,0,0);
								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,1,0);
														
						
						
				}
				
		break;
			case 'cycling_Road':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,40,438,349,'GER', './country/country_detail_GER.html',4,0,0);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,4,0);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,1,4);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,40,86,156,'GER','./country/country_detail_GER.html',4,0,0);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,4,0);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,1,4);
														
						
						
				}
				
		break;
			case 'cycling_Track':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,60,438,349,'GER', './country/country_detail_GER.html',6,2,0);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,0,0);
								aP(mP,10,564,246,'EST', './country/country_detail_EST.html',1,0,0);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,0);
								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,60,86,156,'GER','./country/country_detail_GER.html',6,2,0);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,0,0);
								aP(mP,10,123,125,'EST','./country/country_detail_EST.html',1,0,0);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,0);
								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,0,0);
														
						
						
				}
				
		break;
			case 'sailing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,40,320,491,'ESP', './country/country_detail_ESP.html',4,1,0);
								aP(mP,20,366,387,'FRA', './country/country_detail_FRA.html',2,0,0);
								aP(mP,10,422,287,'DEN', './country/country_detail_DEN.html',1,0,1);
								aP(mP,10,426,192,'NOR', './country/country_detail_NOR.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,6,2);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,804,407,'NZL', './country/country_detail_NZL.html',1,2,1);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,40,53,196,'ESP','./country/country_detail_ESP.html',4,1,0);
								aP(mP,20,66,170,'FRA','./country/country_detail_FRA.html',2,0,0);
								aP(mP,10,83,136,'DEN','./country/country_detail_DEN.html',1,0,1);
								aP(mP,10,83,111,'NOR','./country/country_detail_NOR.html',1,0,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,6,2);
														
						

								aP(mP,10,478,420,'NZL','./country/country_detail_NZL.html',1,2,1);
												}
				
		break;
			case 'rowing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,40,438,349,'GER', './country/country_detail_GER.html',4,3,3);
								aP(mP,20,340,349,'GBR', './country/country_detail_GBR.html',2,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,40,627,271,'CAN', './country/country_detail_CAN.html',4,0,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,20,483,235,'AUS', './country/country_detail_AUS.html',2,0,0);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,40,86,156,'GER','./country/country_detail_GER.html',4,3,3);
								aP(mP,20,57,157,'GBR','./country/country_detail_GBR.html',2,0,0);
														

								aP(mP,40,754,179,'CAN','./country/country_detail_CAN.html',4,0,1);
														
						

								aP(mP,20,390,367,'AUS','./country/country_detail_AUS.html',2,0,0);
												}
				
		break;
			case 'canoe':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,70,438,349,'GER', './country/country_detail_GER.html',7,2,2);
								aP(mP,20,561,458,'BUL', './country/country_detail_BUL.html',2,0,1);
								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,3,2);
								aP(mP,10,565,172,'FIN', './country/country_detail_FIN.html',1,0,0);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,2);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,1,1);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,70,86,156,'GER','./country/country_detail_GER.html',7,2,2);
								aP(mP,20,122,190,'BUL','./country/country_detail_BUL.html',2,0,1);
								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,3,2);
								aP(mP,10,124,105,'FIN','./country/country_detail_FIN.html',1,0,0);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,1);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,2);
														
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,1,1);
												}
				
		break;
			case 'boxing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,697,255,'PRK', './country/country_detail_PRK.html',1,0,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,438,349,'GER', './country/country_detail_GER.html',2,1,1);
								aP(mP,10,288,329,'IRL', './country/country_detail_IRL.html',1,1,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,70,588,442,'CUB', './country/country_detail_CUB.html',7,2,0);
								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,372,197,'PRK','./country/country_detail_PRK.html',1,0,1);
														
						

								aP(mP,20,86,156,'GER','./country/country_detail_GER.html',2,1,1);
								aP(mP,10,42,152,'IRL','./country/country_detail_IRL.html',1,1,0);
														

								aP(mP,70,738,246,'CUB','./country/country_detail_CUB.html',7,2,0);
								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,1);
														
						
				}
				
		break;
			case 'fencing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,454,459,'ITA', './country/country_detail_ITA.html',2,1,0);
								aP(mP,20,366,387,'FRA', './country/country_detail_FRA.html',2,0,3);
								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,2,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,92,189,'ITA','./country/country_detail_ITA.html',2,1,0);
								aP(mP,20,66,170,'FRA','./country/country_detail_FRA.html',2,0,3);
								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,2,0);
														
						
						
				}
				
		break;
			case 'archery':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,700,274,'KOR', './country/country_detail_KOR.html',2,2,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,0,0);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,374,207,'KOR','./country/country_detail_KOR.html',2,2,0);
														
						

								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,0,0);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,0,0);
														
						
						
				}
				
		break;
			case 'shooting_Cray':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,0,0);
														
						

								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,0);
														
						
						
				}
				
		break;
			case 'shooting_Rifle':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,700,274,'KOR', './country/country_detail_KOR.html',2,0,0);
								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,2,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,438,349,'GER', './country/country_detail_GER.html',1,0,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,374,207,'KOR','./country/country_detail_KOR.html',2,0,0);
								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,2,0);
														
						

								aP(mP,10,86,156,'GER','./country/country_detail_GER.html',1,0,1);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,0);
														
						
				}
				
		break;
			case 'pentathlon':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,509,337,'POL', './country/country_detail_POL.html',2,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,109,154,'POL','./country/country_detail_POL.html',2,0,0);
														
						
						
				}
				
		break;
			case 'equestrian':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,438,349,'GER', './country/country_detail_GER.html',3,2,2);
								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,2,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,20,483,235,'AUS', './country/country_detail_AUS.html',2,1,0);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,30,86,156,'GER','./country/country_detail_GER.html',3,2,2);
								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,2,0);
														
						
						

								aP(mP,20,390,367,'AUS','./country/country_detail_AUS.html',2,1,0);
												}
				
		break;
			case 'football':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,0,0);
														
						
						
				}
				
		break;
		}
		break;
	case '1989':
	
	

	switch(selectSports){
			case 'cycling_Track':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						
						
						
				}
				
		break;
		}
		break;
	case '1988':
	
	

	switch(selectSports){
			case 'wrestling':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,782,285,'JPN', './country/country_detail_JPN.html',2,2,0);
								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,2,5);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,1,0);
								aP(mP,10,509,337,'POL', './country/country_detail_POL.html',1,1,0);
								aP(mP,10,561,458,'BUL', './country/country_detail_BUL.html',1,4,3);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,0);
								aP(mP,10,426,192,'NOR', './country/country_detail_NOR.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,1,3);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,405,210,'JPN','./country/country_detail_JPN.html',2,2,0);
								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,2,5);
														
						

								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,1,0);
								aP(mP,10,109,154,'POL','./country/country_detail_POL.html',1,1,0);
								aP(mP,10,122,190,'BUL','./country/country_detail_BUL.html',1,4,3);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,0);
								aP(mP,10,83,111,'NOR','./country/country_detail_NOR.html',1,0,0);
														

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,1,3);
														
						
				}
				
		break;
			case 'tabletennis':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,700,274,'KOR', './country/country_detail_KOR.html',2,1,1);
								aP(mP,20,568,293,'CHN', './country/country_detail_CHN.html',2,2,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,374,207,'KOR','./country/country_detail_KOR.html',2,1,1);
								aP(mP,20,317,211,'CHN','./country/country_detail_CHN.html',2,2,1);
														
						
						
						
						
				}
				
		break;
			case 'athletics':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				

								aP(mP,40,623,305,'KEN', './country/country_detail_KEN.html',4,1,1);
								aP(mP,10,322,70,'MAR', './country/country_detail_MAR.html',1,0,1);
												
			break;
					case 'europe':
				
				

								aP(mP,10,561,458,'BUL', './country/country_detail_BUL.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,150,623,330,'USA', './country/country_detail_USA.html',15,7,5);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,0);
												
			break;
				
			case 'world':
			default:
						
						

								aP(mP,40,153,308,'KEN','./country/country_detail_KEN.html',4,1,1);
								aP(mP,10,46,222,'MAR','./country/country_detail_MAR.html',1,0,1);
														

								aP(mP,10,122,190,'BUL','./country/country_detail_BUL.html',1,0,0);
														

								aP(mP,150,752,202,'USA','./country/country_detail_USA.html',15,7,5);
														
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,0);
												}
				
		break;
			case 'swimming':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,782,285,'JPN', './country/country_detail_JPN.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,40,511,407,'HUN', './country/country_detail_HUN.html',4,2,0);
								aP(mP,10,561,458,'BUL', './country/country_detail_BUL.html',1,1,1);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,1,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,80,623,330,'USA', './country/country_detail_USA.html',8,6,4);
												
			break;
					case 'south-america':
				
				

								aP(mP,10,590,180,'SUR', './country/country_detail_SUR.html',1,0,0);
												
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,1,1);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,10,405,210,'JPN','./country/country_detail_JPN.html',1,0,0);
														
						

								aP(mP,40,108,174,'HUN','./country/country_detail_HUN.html',4,2,0);
								aP(mP,10,122,190,'BUL','./country/country_detail_BUL.html',1,1,1);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,1,1);
														

								aP(mP,80,752,202,'USA','./country/country_detail_USA.html',8,6,4);
														

								aP(mP,10,806,294,'SUR','./country/country_detail_SUR.html',1,0,0);
														

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,1,1);
												}
				
		break;
			case 'judo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,700,274,'KOR', './country/country_detail_KOR.html',2,1,3);
								aP(mP,20,782,285,'JPN', './country/country_detail_JPN.html',2,1,6);
								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,2,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,561,458,'BUL', './country/country_detail_BUL.html',2,0,1);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,2,2);
								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,0,1);
								aP(mP,10,388,364,'BEL', './country/country_detail_BEL.html',1,0,1);
								aP(mP,10,470,404,'AUT', './country/country_detail_AUT.html',1,0,1);
								aP(mP,10,509,337,'POL', './country/country_detail_POL.html',1,1,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				

								aP(mP,10,597,267,'BRA', './country/country_detail_BRA.html',1,0,0);
												
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,1);
												
			break;
				
			case 'world':
			default:
						

								aP(mP,20,374,207,'KOR','./country/country_detail_KOR.html',2,1,3);
								aP(mP,20,405,210,'JPN','./country/country_detail_JPN.html',2,1,6);
								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,2,0);
														
						

								aP(mP,20,122,190,'BUL','./country/country_detail_BUL.html',2,0,1);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,2,2);
								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,0,1);
								aP(mP,10,72,160,'BEL','./country/country_detail_BEL.html',1,0,1);
								aP(mP,10,97,171,'AUT','./country/country_detail_AUT.html',1,0,1);
								aP(mP,10,109,154,'POL','./country/country_detail_POL.html',1,1,1);
														
						

								aP(mP,10,817,329,'BRA','./country/country_detail_BRA.html',1,0,0);
														

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,1);
												}
				
		break;
			case 'volleyball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,0);
														
						
				}
				
		break;
			case 'synchronisedswimming':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,30,627,271,'CAN', './country/country_detail_CAN.html',3,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,30,754,179,'CAN','./country/country_detail_CAN.html',3,0,0);
														
						
				}
				
		break;
			case 'diving':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,568,293,'CHN', './country/country_detail_CHN.html',2,3,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,1,2);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,317,211,'CHN','./country/country_detail_CHN.html',2,3,1);
														
						
						

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,1,2);
														
						
				}
				
		break;
			case 'artistic_gymnastics':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,0,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,561,458,'BUL', './country/country_detail_BUL.html',1,0,1);
								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,0,1);
														
						

								aP(mP,10,122,190,'BUL','./country/country_detail_BUL.html',1,0,1);
								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,0,0);
														
						
						
				}
				
		break;
			case 'rhythmic':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						
						
						
				}
				
		break;
			case 'waterpolo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						
						
						
				}
				
		break;
			case 'basketball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,1);
														
						
				}
				
		break;
			case 'handball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,1,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,1,0);
														
						
						
						
						
				}
				
		break;
			case 'tennis':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,1,2);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,1,2);
														
						
				}
				
		break;
			case 'hockey':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,0);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,0,0);
														
						
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,0);
												}
				
		break;
			case 'cycling_Road':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,0,0);
														
						
						
				}
				
		break;
			case 'cycling_Track':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,422,287,'DEN', './country/country_detail_DEN.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,83,136,'DEN','./country/country_detail_DEN.html',1,0,0);
														
						
						
				}
				
		break;
			case 'sailing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,366,387,'FRA', './country/country_detail_FRA.html',2,0,0);
								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,0,0);
								aP(mP,10,422,287,'DEN', './country/country_detail_DEN.html',1,0,1);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,2,2);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,804,407,'NZL', './country/country_detail_NZL.html',1,1,1);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,66,170,'FRA','./country/country_detail_FRA.html',2,0,0);
								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,0,0);
								aP(mP,10,83,136,'DEN','./country/country_detail_DEN.html',1,0,1);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,0,0);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,2,2);
														
						

								aP(mP,10,478,420,'NZL','./country/country_detail_NZL.html',1,1,1);
												}
				
		break;
			case 'rowing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,454,459,'ITA', './country/country_detail_ITA.html',2,0,0);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,0,1);
								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,92,189,'ITA','./country/country_detail_ITA.html',2,0,0);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,0,1);
								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,0,0);
														
						
						
				}
				
		break;
			case 'canoe':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,511,407,'HUN', './country/country_detail_HUN.html',2,1,1);
								aP(mP,10,561,458,'BUL', './country/country_detail_BUL.html',1,1,3);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,804,407,'NZL', './country/country_detail_NZL.html',1,1,1);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,108,174,'HUN','./country/country_detail_HUN.html',2,1,1);
								aP(mP,10,122,190,'BUL','./country/country_detail_BUL.html',1,1,3);
														

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,0,0);
														
						

								aP(mP,10,478,420,'NZL','./country/country_detail_NZL.html',1,1,1);
												}
				
		break;
			case 'boxing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,700,274,'KOR', './country/country_detail_KOR.html',2,1,1);
												
			break;
					case 'africa':
				
				

								aP(mP,10,623,305,'KEN', './country/country_detail_KEN.html',1,0,1);
												
			break;
					case 'europe':
				
				

								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,0);
								aP(mP,10,561,458,'BUL', './country/country_detail_BUL.html',1,1,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,30,623,330,'USA', './country/country_detail_USA.html',3,3,2);
								aP(mP,10,627,271,'CAN', './country/country_detail_CAN.html',1,1,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,374,207,'KOR','./country/country_detail_KOR.html',2,1,1);
														

								aP(mP,10,153,308,'KEN','./country/country_detail_KEN.html',1,0,1);
														

								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,0);
								aP(mP,10,122,190,'BUL','./country/country_detail_BUL.html',1,1,0);
														

								aP(mP,30,752,202,'USA','./country/country_detail_USA.html',3,3,2);
								aP(mP,10,754,179,'CAN','./country/country_detail_CAN.html',1,1,1);
														
						
				}
				
		break;
			case 'fencing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,366,387,'FRA', './country/country_detail_FRA.html',2,1,0);
								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,1,2);
								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,0,2);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,66,170,'FRA','./country/country_detail_FRA.html',2,1,0);
								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,1,2);
								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,0,2);
														
						
						
				}
				
		break;
			case 'archery':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,30,700,274,'KOR', './country/country_detail_KOR.html',3,2,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,30,374,207,'KOR','./country/country_detail_KOR.html',3,2,1);
														
						
						

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,1);
														
						
				}
				
		break;
			case 'shooting_Cray':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,426,192,'NOR', './country/country_detail_NOR.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,83,111,'NOR','./country/country_detail_NOR.html',1,0,0);
														
						
						
				}
				
		break;
			case 'shooting_Rifle':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,1,0);
								aP(mP,10,561,458,'BUL', './country/country_detail_BUL.html',1,1,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,1,0);
								aP(mP,10,122,190,'BUL','./country/country_detail_BUL.html',1,1,0);
														
						
						
				}
				
		break;
			case 'pentathlon':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,511,407,'HUN', './country/country_detail_HUN.html',2,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,108,174,'HUN','./country/country_detail_HUN.html',2,0,0);
														
						
						
				}
				
		break;
			case 'equestrian':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,1,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,804,407,'NZL', './country/country_detail_NZL.html',1,0,1);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,1,1);
														
						
						

								aP(mP,10,478,420,'NZL','./country/country_detail_NZL.html',1,0,1);
												}
				
		break;
			case 'football':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						
						
						
				}
				
		break;
		}
		break;
	case '1984':
	
	

	switch(selectSports){
			case 'wrestling':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,0);
														
						
				}
				
		break;
			case 'athletics':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				

								aP(mP,20,322,70,'MAR', './country/country_detail_MAR.html',2,0,0);
								aP(mP,10,623,305,'KEN', './country/country_detail_KEN.html',1,0,2);
												
			break;
					case 'europe':
				
				

								aP(mP,20,454,459,'ITA', './country/country_detail_ITA.html',2,0,0);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,9,5);
												
			break;
					case 'north-america':
				
				

								aP(mP,250,623,330,'USA', './country/country_detail_USA.html',25,9,5);
												
			break;
					case 'south-america':
				
				

								aP(mP,10,597,267,'BRA', './country/country_detail_BRA.html',1,0,0);
												
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						

								aP(mP,20,46,222,'MAR','./country/country_detail_MAR.html',2,0,0);
								aP(mP,10,153,308,'KEN','./country/country_detail_KEN.html',1,0,2);
														

								aP(mP,20,92,189,'ITA','./country/country_detail_ITA.html',2,0,0);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,9,5);
														

								aP(mP,250,752,202,'USA','./country/country_detail_USA.html',25,9,5);
														

								aP(mP,10,817,329,'BRA','./country/country_detail_BRA.html',1,0,0);
														
				}
				
		break;
			case 'swimming':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,394,332,'NED', './country/country_detail_NED.html',2,1,3);
												
			break;
					case 'north-america':
				
				

								aP(mP,200,623,330,'USA', './country/country_detail_USA.html',20,13,0);
								aP(mP,40,627,271,'CAN', './country/country_detail_CAN.html',4,3,3);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,5,6);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,73,154,'NED','./country/country_detail_NED.html',2,1,3);
														

								aP(mP,200,752,202,'USA','./country/country_detail_USA.html',20,13,0);
								aP(mP,40,754,179,'CAN','./country/country_detail_CAN.html',4,3,3);
														
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,5,6);
												}
				
		break;
			case 'judo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,40,782,285,'JPN', './country/country_detail_JPN.html',4,0,1);
								aP(mP,20,700,274,'KOR', './country/country_detail_KOR.html',2,2,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,470,404,'AUT', './country/country_detail_AUT.html',1,0,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,40,405,210,'JPN','./country/country_detail_JPN.html',4,0,1);
								aP(mP,20,374,207,'KOR','./country/country_detail_KOR.html',2,2,1);
														
						

								aP(mP,10,97,171,'AUT','./country/country_detail_AUT.html',1,0,1);
														
						
						
				}
				
		break;
			case 'volleyball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,0,0);
														
						
						

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,0);
														
						
				}
				
		break;
			case 'synchronisedswimming':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,30,623,330,'USA', './country/country_detail_USA.html',3,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,30,752,202,'USA','./country/country_detail_USA.html',3,0,0);
														
						
				}
				
		break;
			case 'diving':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,1,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,3,3);
								aP(mP,10,627,271,'CAN', './country/country_detail_CAN.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,1,1);
														
						
						

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,3,3);
								aP(mP,10,754,179,'CAN','./country/country_detail_CAN.html',1,0,0);
														
						
				}
				
		break;
			case 'artistic_gymnastics':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,50,568,293,'CHN', './country/country_detail_CHN.html',5,4,2);
								aP(mP,30,782,285,'JPN', './country/country_detail_JPN.html',3,3,3);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,50,623,330,'USA', './country/country_detail_USA.html',5,5,6);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,50,317,211,'CHN','./country/country_detail_CHN.html',5,4,2);
								aP(mP,30,405,210,'JPN','./country/country_detail_JPN.html',3,3,3);
														
						
						

								aP(mP,50,752,202,'USA','./country/country_detail_USA.html',5,5,6);
														
						
				}
				
		break;
			case 'rhythmic':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,627,271,'CAN', './country/country_detail_CAN.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,10,754,179,'CAN','./country/country_detail_CAN.html',1,0,0);
														
						
				}
				
		break;
			case 'waterpolo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						
						
						
				}
				
		break;
			case 'basketball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,0,0);
														
						
				}
				
		break;
			case 'handball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						
						
						
				}
				
		break;
			case 'hockey':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,361,305,'PAK', './country/country_detail_PAK.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,240,220,'PAK','./country/country_detail_PAK.html',1,0,0);
														
						

								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,0,0);
														
						
						
				}
				
		break;
			case 'cycling_Road':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,40,454,459,'ITA', './country/country_detail_ITA.html',4,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,1,4);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,40,92,189,'ITA','./country/country_detail_ITA.html',4,0,0);
														

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,1,4);
														
						
				}
				
		break;
			case 'cycling_Track':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,388,364,'BEL', './country/country_detail_BEL.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,5,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,40,483,235,'AUS', './country/country_detail_AUS.html',4,0,0);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,72,160,'BEL','./country/country_detail_BEL.html',1,0,0);
														

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,5,1);
														
						

								aP(mP,40,390,367,'AUS','./country/country_detail_AUS.html',4,0,0);
												}
				
		break;
			case 'sailing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,0,0);
								aP(mP,10,320,491,'ESP', './country/country_detail_ESP.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,30,623,330,'USA', './country/country_detail_USA.html',3,4,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,20,804,407,'NZL', './country/country_detail_NZL.html',2,0,1);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,0,0);
								aP(mP,10,53,196,'ESP','./country/country_detail_ESP.html',1,0,0);
														

								aP(mP,30,752,202,'USA','./country/country_detail_USA.html',3,4,0);
														
						

								aP(mP,20,478,420,'NZL','./country/country_detail_NZL.html',2,0,1);
												}
				
		break;
			case 'rowing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,0);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,0,0);
								aP(mP,10,565,172,'FIN', './country/country_detail_FIN.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,5,1);
								aP(mP,10,627,271,'CAN', './country/country_detail_CAN.html',1,2,3);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,804,407,'NZL', './country/country_detail_NZL.html',1,0,1);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,0);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,0,0);
								aP(mP,10,124,105,'FIN','./country/country_detail_FIN.html',1,0,0);
														

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,5,1);
								aP(mP,10,754,179,'CAN','./country/country_detail_CAN.html',1,2,3);
														
						

								aP(mP,10,478,420,'NZL','./country/country_detail_NZL.html',1,0,1);
												}
				
		break;
			case 'canoe':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,488,148,'SWE', './country/country_detail_SWE.html',2,4,0);
								aP(mP,10,563,423,'ROU', './country/country_detail_ROU.html',1,1,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,627,271,'CAN', './country/country_detail_CAN.html',2,2,2);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,40,804,407,'NZL', './country/country_detail_NZL.html',4,0,0);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,102,98,'SWE','./country/country_detail_SWE.html',2,4,0);
								aP(mP,10,122,179,'ROU','./country/country_detail_ROU.html',1,1,1);
														

								aP(mP,20,754,179,'CAN','./country/country_detail_CAN.html',2,2,2);
														
						

								aP(mP,40,478,420,'NZL','./country/country_detail_NZL.html',4,0,0);
												}
				
		break;
			case 'boxing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,1,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,2,2);
												

			break;
					case 'north-america':
				
				

								aP(mP,90,623,330,'USA', './country/country_detail_USA.html',9,1,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,1,1);
														
						

								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,2,2);
														

								aP(mP,90,752,202,'USA','./country/country_detail_USA.html',9,1,1);
														
						
				}
				
		break;
			case 'fencing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,454,459,'ITA', './country/country_detail_ITA.html',3,1,3);
								aP(mP,20,366,387,'FRA', './country/country_detail_FRA.html',2,2,3);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,0,0);
														
						

								aP(mP,30,92,189,'ITA','./country/country_detail_ITA.html',3,1,3);
								aP(mP,20,66,170,'FRA','./country/country_detail_FRA.html',2,2,3);
														
						
						
				}
				
		break;
			case 'archery':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,700,274,'KOR', './country/country_detail_KOR.html',1,0,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,374,207,'KOR','./country/country_detail_KOR.html',1,0,1);
														
						
						

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,0);
														
						
				}
				
		break;
			case 'shooting_Cray':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,568,293,'CHN', './country/country_detail_CHN.html',1,0,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,317,211,'CHN','./country/country_detail_CHN.html',1,0,1);
														
						

								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,1);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,1);
														
						
				}
				
		break;
			case 'shooting_Rifle':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,20,568,293,'CHN', './country/country_detail_CHN.html',2,0,2);
								aP(mP,10,782,285,'JPN', './country/country_detail_JPN.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,1,0);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,0,3);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,1,1);
								aP(mP,10,627,271,'CAN', './country/country_detail_CAN.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,20,317,211,'CHN','./country/country_detail_CHN.html',2,0,2);
								aP(mP,10,405,210,'JPN','./country/country_detail_JPN.html',1,0,0);
														
						

								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,1,0);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,0,3);
														

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,1,1);
								aP(mP,10,754,179,'CAN','./country/country_detail_CAN.html',1,0,0);
														
						
				}
				
		break;
			case 'pentathlon':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,454,459,'ITA', './country/country_detail_ITA.html',2,0,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,92,189,'ITA','./country/country_detail_ITA.html',2,0,1);
														
						
						
				}
				
		break;
			case 'equestrian':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,30,623,330,'USA', './country/country_detail_USA.html',3,2,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,804,407,'NZL', './country/country_detail_NZL.html',1,0,0);
												
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,30,752,202,'USA','./country/country_detail_USA.html',3,2,0);
														
						

								aP(mP,10,478,420,'NZL','./country/country_detail_NZL.html',1,0,0);
												}
				
		break;
			case 'football':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,0,0);
														
						
						
				}
				
		break;
		}
		break;
	case '1964':
	
	

	switch(selectSports){
			case 'wrestling':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,50,782,285,'JPN', './country/country_detail_JPN.html',5,0,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,561,458,'BUL', './country/country_detail_BUL.html',3,4,1);
								aP(mP,20,511,407,'HUN', './country/country_detail_HUN.html',2,0,0);
								aP(mP,20,649,500,'TUR', './country/country_detail_TUR.html',2,3,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,50,405,210,'JPN','./country/country_detail_JPN.html',5,0,1);
														
						

								aP(mP,30,122,190,'BUL','./country/country_detail_BUL.html',3,4,1);
								aP(mP,20,108,174,'HUN','./country/country_detail_HUN.html',2,0,0);
								aP(mP,20,145,200,'TUR','./country/country_detail_TUR.html',2,3,1);
														
						
						
				}
				
		break;
			case 'athletics':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,40,509,337,'POL', './country/country_detail_POL.html',4,6,2);
								aP(mP,10,340,349,'GBR', './country/country_detail_GBR.html',1,7,4);
								aP(mP,10,388,364,'BEL', './country/country_detail_BEL.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,170,623,330,'USA', './country/country_detail_USA.html',17,7,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,804,407,'NZL', './country/country_detail_NZL.html',1,0,2);
								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,4);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,40,109,154,'POL','./country/country_detail_POL.html',4,6,2);
								aP(mP,10,57,157,'GBR','./country/country_detail_GBR.html',1,7,4);
								aP(mP,10,72,160,'BEL','./country/country_detail_BEL.html',1,0,0);
														

								aP(mP,170,752,202,'USA','./country/country_detail_USA.html',17,7,1);
														
						

								aP(mP,10,478,420,'NZL','./country/country_detail_NZL.html',1,0,2);
								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,4);
												}
				
		break;
			case 'swimming':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,130,623,330,'USA', './country/country_detail_USA.html',13,8,8);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,40,483,235,'AUS', './country/country_detail_AUS.html',4,1,4);
												
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,130,752,202,'USA','./country/country_detail_USA.html',13,8,8);
														
						

								aP(mP,40,390,367,'AUS','./country/country_detail_AUS.html',4,1,4);
												}
				
		break;
			case 'judo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,30,782,285,'JPN', './country/country_detail_JPN.html',3,1,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,394,332,'NED', './country/country_detail_NED.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,30,405,210,'JPN','./country/country_detail_JPN.html',3,1,0);
														
						

								aP(mP,10,73,154,'NED','./country/country_detail_NED.html',1,0,0);
														
						
						
				}
				
		break;
			case 'volleyball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,782,285,'JPN', './country/country_detail_JPN.html',1,0,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,405,210,'JPN','./country/country_detail_JPN.html',1,0,1);
														
						
						
						
						
				}
				
		break;
			case 'diving':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,30,623,330,'USA', './country/country_detail_USA.html',3,2,3);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,30,752,202,'USA','./country/country_detail_USA.html',3,2,3);
														
						
				}
				
		break;
			case 'artistic_gymnastics':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,50,782,285,'JPN', './country/country_detail_JPN.html',5,4,1);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,1,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,50,405,210,'JPN','./country/country_detail_JPN.html',5,4,1);
														
						

								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,1,1);
														
						
						
				}
				
		break;
			case 'waterpolo':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,0,0);
														
						
						
				}
				
		break;
			case 'basketball':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						
						

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,0);
														
						
				}
				
		break;
			case 'hockey':
		
		

		switch(mapArea){
		
					case 'asia':
				
				

								aP(mP,10,385,345,'IND', './country/country_detail_IND.html',1,0,0);
												
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				
				
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						

								aP(mP,10,250,237,'IND','./country/country_detail_IND.html',1,0,0);
														
						
						
						
						
				}
				
		break;
			case 'cycling_Track':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,2,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,2,0);
														
						
						
				}
				
		break;
			case 'sailing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,422,287,'DEN', './country/country_detail_DEN.html',1,0,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,618,429,'BAH', './country/country_detail_BAH.html',1,0,0);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				

								aP(mP,10,483,235,'AUS', './country/country_detail_AUS.html',1,0,0);
								aP(mP,10,804,407,'NZL', './country/country_detail_NZL.html',1,0,0);
												
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,83,136,'DEN','./country/country_detail_DEN.html',1,0,1);
														

								aP(mP,10,749,242,'BAH','./country/country_detail_BAH.html',1,0,0);
														
						

								aP(mP,10,390,367,'AUS','./country/country_detail_AUS.html',1,0,0);
								aP(mP,10,478,420,'NZL','./country/country_detail_NZL.html',1,0,0);
												}
				
		break;
			case 'rowing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,422,287,'DEN', './country/country_detail_DEN.html',1,0,0);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,627,271,'CAN', './country/country_detail_CAN.html',1,0,0);
								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,1,1);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,83,136,'DEN','./country/country_detail_DEN.html',1,0,0);
														

								aP(mP,10,754,179,'CAN','./country/country_detail_CAN.html',1,0,0);
								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,1,1);
														
						
				}
				
		break;
			case 'canoe':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,488,148,'SWE', './country/country_detail_SWE.html',2,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,102,98,'SWE','./country/country_detail_SWE.html',2,0,0);
														
						
						
				}
				
		break;
			case 'boxing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,30,509,337,'POL', './country/country_detail_POL.html',3,2,3);
								aP(mP,20,454,459,'ITA', './country/country_detail_ITA.html',2,0,3);
												
			break;
					case 'north-america':
				
				

								aP(mP,10,623,330,'USA', './country/country_detail_USA.html',1,0,3);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,30,109,154,'POL','./country/country_detail_POL.html',3,2,3);
								aP(mP,20,92,189,'ITA','./country/country_detail_ITA.html',2,0,3);
														

								aP(mP,10,752,202,'USA','./country/country_detail_USA.html',1,0,3);
														
						
				}
				
		break;
			case 'fencing':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,40,511,407,'HUN', './country/country_detail_HUN.html',4,0,0);
								aP(mP,10,509,337,'POL', './country/country_detail_POL.html',1,1,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,40,108,174,'HUN','./country/country_detail_HUN.html',4,0,0);
								aP(mP,10,109,154,'POL','./country/country_detail_POL.html',1,1,1);
														
						
						
				}
				
		break;
			case 'shooting_Cray':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,454,459,'ITA', './country/country_detail_ITA.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,92,189,'ITA','./country/country_detail_ITA.html',1,0,0);
														
						
						
				}
				
		break;
			case 'shooting_Rifle':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,565,172,'FIN', './country/country_detail_FIN.html',2,0,0);
								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,0,1);
												
			break;
					case 'north-america':
				
				

								aP(mP,20,623,330,'USA', './country/country_detail_USA.html',2,2,2);
												
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,124,105,'FIN','./country/country_detail_FIN.html',2,0,0);
								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,0,1);
														

								aP(mP,20,752,202,'USA','./country/country_detail_USA.html',2,2,2);
														
						
				}
				
		break;
			case 'pentathlon':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,0,1);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,0,1);
														
						
						
				}
				
		break;
			case 'equestrian':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,20,454,459,'ITA', './country/country_detail_ITA.html',2,0,1);
								aP(mP,10,366,387,'FRA', './country/country_detail_FRA.html',1,1,0);
								aP(mP,10,413,410,'SUI', './country/country_detail_SUI.html',1,1,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,20,92,189,'ITA','./country/country_detail_ITA.html',2,0,1);
								aP(mP,10,66,170,'FRA','./country/country_detail_FRA.html',1,1,0);
								aP(mP,10,80,175,'SUI','./country/country_detail_SUI.html',1,1,0);
														
						
						
				}
				
		break;
			case 'football':
		
		

		switch(mapArea){
		
					case 'asia':
				
				
				
			break;
					case 'africa':
				
				
				
			break;
					case 'europe':
				
				

								aP(mP,10,511,407,'HUN', './country/country_detail_HUN.html',1,0,0);
												
			break;
					case 'north-america':
				
				
				
			break;
					case 'south-america':
				
				
				
			break;
					case 'oceania':
				
				
				
			break;
				
			case 'world':
			default:
						
						
						

								aP(mP,10,108,174,'HUN','./country/country_detail_HUN.html',1,0,0);
														
						
						
				}
				
		break;
		}
		break;
}


/*** /ここにSwitch文を入れる ***/
				
				if ( arg ) {
					$('#slider .slideList').hide();
					$('#slider .historyList li').removeClass('current');
					$('#slider .historyList .list'+arg).addClass('current');
				}
				
				btnSearch.attr('src', 'images/common/btn_search_flashing.png');
				$('#search-area').css('opacity', 1);
				$('#search-area .search-btn a.disabled').removeClass('disabled');
				
				setInterval(function(){
					btnSearch.fadeOut(1000).fadeIn(1000);
					marker.fadeOut(1000).fadeIn(1000);
				}, 2000);
				
				var circle = $('#map-point .circle');
				circle.show().animate({width:"100%",height:"100%",top:"0",left:"0"},500,"easeOutCirc");
				
				$("#map-point .circle").on({
					'mouseenter':function(){
						$('.horizon, .popup-box').remove();
						$(this).addClass('circle-mouseover').removeClass('circle-mouseleave');
						var elm = $(this).parent();
						showDetail(elm.data('size'), elm.data('x'), elm.data('y'), elm.data('country'), elm.data('href'), elm.data('gold'), elm.data('silver'), elm.data('blonze') );
					},
					'mouseleave':function(){
						$(this).removeClass('circle-mouseover').addClass('circle-mouseleave');
					}
				});
			});
		}
		
		
/* 自動再生がONなら4秒毎にスライドを移動（mapSearch関数より下に無いと動かないYo!!） */
setInterval( function(){
	if ( yearSliderAutoPlay == true ) {
		var ny = $('#yearSliderProgress').val();
		if ( ny == $('#yearSliderProgress').attr('max') ) {
			ny = 0;
		} else {
			ny++;
		}
		$('#yearSliderProgress').val( ny );
		$('div.date').html( yearsListArray[ny] );		// ここの、yearsListArray[ny]、もしくは、$('div.date').html() の内容をグローバルで取得出来る仕組みを作る!!
														// 下記の function mapSearch(arg) にあるswitchを更に"年次"で覆うswitchを生成する時、ここの値を評価に使います。
		mapSearch();
	}
}, 4000);
		
		
		/** スライダー部分 */
		$('#yearSliderProgress').change( function(){
			var sy = $('#yearSliderProgress').val();
			$('div.date').html( yearsListArray[sy] );
		});
		
		/** これ、、、競技詳細ページのやつじゃね？ **/
		$('.btn-history').on('click', function(){
			var elm = $(this);
			
			if(elm.hasClass('active')){
				$('#main-visual').animate({'height': '198px'}, function(){
					$('.header-bar').show();
					$('#map-container').fadeOut();
				});
			}else{
				$('#map-container').fadeIn();
				$('#main-visual').animate({'height': '624px'});
				$('.header-bar').hide();
			}
			
			elm.toggleClass('active');
			if(location.pathname == '/detail.html'){
				sports = $('body').data('sports');
				mapSearch(sports);
			}else{
				mapSearch();
			}
			
			$('html').toggleClass('mapview-open');
		});	
		
		
		
		/**
		 *  元の処理だと問題があったため修正  -  あと関数名をショートに変更
		 *    ・左上を起点にして呼び出していた為、サイズが変わると位置がずれる
		 *    ・class定義していないサイズを指定すると表示されない
		 *    ・メダル数を持つ所が無いのでエレメントに保持
		 *
		function addPoint(elm, size, left, top, country, href){
			elm.append('<div class="circle-container circle'+ size +'" style="position: absolute; top:'+ top +'px; left:'+ left +'px" data-size="'+ size +'" data-x="'+ left +'" data-y="'+ top +'" data-country="'+ country +'" data-href="'+ href +'"><span class="circle circle-mouseleave circle01"><a href="#"><div class="double-bounce1"></div><div class="double-bounce2"></div></span></a></div>');
		}
		*/
		function aP( elm, size, x, y, country, href, gold, silver, blonze ) {
			var r = Math.round( size / 2 );
			var top  = y - r;
			var left = x - r;
			elm.append(
				'<div class="circle-container" style="width:'+ size +'px; height:'+ size +'px; position:absolute; top:'+ top +'px; left:'+ left +'px" ' +
				'data-size="'+ size +'" ' +
				'data-x="'+ left +'" ' +
				'data-y="'+ top +'" ' +
				'data-country="'+ country +'" '+
				'data-href="'+ href +'" ' +
				'data-gold="'+ gold +'" ' +
				'data-silver="'+ silver +'" ' +
				'data-blonze="'+ blonze +'" ' +
				'>' +
				'<span class="circle circle-mouseleave circle01">' +
				'<a href="#"><div class="double-bounce1"></div><div class="double-bounce2"></div></span></a></div>'
			);
		}
		
		
		function showDetail(size, x, y, country, href, gold, silver, blonze ){
			mainDiv.css({ backgroundImage: 'none'});
			ptX = (x >= 500) ? x - 230 : x + 80;
			ptY = (y >= 250) ? y - 100 : y;
			var btn_detail = href ? '<a href="'+ href +'" class="btn">詳細をみる</a>' : '';
			
			var window = $(
				'<div class="popup-box popup-box1" style="top:'+ ptY +'px; left:'+ ptX +'px;">'+
					'<div class="clearfix">'+
						'<div class="flag"><img src="images/flag/flag_'+ country +'_s.png"></div>'+
						'<div class="medal"><ul><li class="gold">'+ gold +'</li><li class="silver">'+ silver +'</li><li class="bronze">'+ blonze +'</li></ul></div>'+
					'</div>'+
					btn_detail +
				'</div>'
			);
			mP.append(window);
			setTimeout(function(){
				window.fadeOut();
			}, 3000);
		}
		
		$(document).on({
			'click': function(){
				var list = $(this).attr('class');
				selectSports = $(this).attr('data-sports');
				selectSportsEn = $(this).attr('data-sports-en');
				var selectSportsJa = ($(this).attr('data-sports-ja')) ? '− '+ $(this).attr('data-sports-ja') +' −' : '';
				
				// add by sasaki 2016.06.17  HTMLの方にも detail-page 要素を追加（この中に詳細ページURLを入れる）
				btnSearchLink.attr( "href", $(this).attr('detail-page') );
				
				message.fadeOut();
				$('#slider .slideList').hide();
				map.css('opacity', '0.6');
				$('#slider .historyList li').removeClass('current');
				$('#slider .historyList .'+list).addClass('current');
				mapSearch();
				
				$('#main-visual .scale').fadeIn(1000);
				$('.history-label').html('<span class="en">'+ selectSportsEn +'</span><span class="ja">'+ selectSportsJa +'</span>').fadeIn(1000);
			}
		}, '#vt-carousel li img');
	};



	/* carousel */
	function vtCarousel(){
		var items = [];
		var itemNum = $('#vt-carousel li').length;
		$('#vt-carousel').fadeIn();
		$('#vt-carousel li').each(function(index){
			items[index] = $(this);
			var elm = $(this).find('img');
			var num = elm.data('item');
			carouselSwitch(elm, num);
		});
		$('#vt-carousel ul').fadeIn(400);
		addCarouselEvent();
		
		
		// ↑押したとき（カルーセルは上から下へスクロール）
		function carouselUp(){
			$('.carousel-up').on('click', function(){
				lastItem = items[itemNum-1].clone();
				lastItem.find('img').attr('data-item', 0).animate({'top': '-180px', 'left': '32px', 'width': '48px', 'height': '29px', 'opacity':'0'}, 20);
				$('#vt-carousel ul').prepend(lastItem);
				items[itemNum-1].remove();
				items.unshift(lastItem);
				items.pop();
				$('#vt-carousel li img').each(function(){
					var elm = $(this);
					var num = parseInt(elm.attr('data-item')) + 1;
					elm.attr('data-item', num);
					carouselSwitch(elm, num);
					
					// reset pick actions
					carouselPick();
				});
			});
		}
		
		
		// ↓押したとき（カルーセルは下から上へスクロール）
		function carouselDown(){
			$('.carousel-down').on('click', function(){
				firstItem = items[0].clone();
				firstItem.find('img').attr('data-item', itemNum).animate({'top': '-190px', 'left': '32px', 'width': '48px', 'height': '29px', 'opacity':'0'}, 20);
				
				$('#vt-carousel li img').each(function(){
					var elm = $(this);
					var num = parseInt(elm.attr('data-item')) - 1;
					elm.attr('data-item', num);
					carouselSwitch(elm, num);
				});
				
				$('#vt-carousel ul').append(firstItem);
				items[0].remove();
				items.push(firstItem);
				items.shift();
				
				// reset pick actions
				carouselPick();
			});
		}
		
		
		// pick action
		function carouselPickFunc(){
				pickNum = parseInt($(this).find('img').attr('data-item'));
				if(pickNum < 4){
					//roll down
					times = 4 - pickNum
					for(i = 0 ; i < times ; ++i){
						lastItem = items[itemNum-1].clone();
						lastItem.find('img').attr('data-item', 0).animate({'top': '-180px', 'left': '32px', 'width': '48px', 'height': '29px', 'opacity':'0'}, 10, 'easeOutElastic');
						$('#vt-carousel ul').prepend(lastItem);
						items[itemNum-1].remove();
						items.unshift(lastItem);
						items.pop();
						$('#vt-carousel li img').each(function(){
							var elm = $(this);
							var num = parseInt(elm.attr('data-item')) + 1;
							elm.attr('data-item', num);
							carouselSwitch(elm, num);
						});
						
					}
				}else if(pickNum>4){
					//roll up
					times = pickNum - 4
					for(i = 0 ; i < times ; ++i){
						firstItem = items[0].clone();
						firstItem.find('img').attr('data-item', itemNum).animate({'top': '-190px', 'left': '32px', 'width': '48px', 'height': '29px', 'opacity':'0'}, 300, 'easeInSine');
						$('#vt-carousel li img').each(function(){
							var elm = $(this);
							var num = parseInt(elm.attr('data-item')) - 1;
							elm.attr('data-item', num);
							carouselSwitch(elm, num);
						});
						$('#vt-carousel ul').append(firstItem);
						items[0].remove();
						items.push(firstItem);
						items.shift();
					}
				}
				// reset pick actions
				carouselPick();
		}

		
		function carouselPick(){
			// avoid duplicate click action
			$('.carousel-pick').off('click');
			// add all pics click function
			$('.carousel-pick').on('click', carouselPickFunc);
		}
		
		
		function carouselSwitch(elm, num){
			switch(num){
				case 0:
					elm.animate({'top':'-180px', 'left':'45px', 'width':'23px' ,'height':'13px', 'display':'none', 'opacity':'0'}, 150);
					break;
				case 1:
					elm.animate({'top':'-166px', 'left':'34px', 'width':'46px' ,'height':'27px', 'opacity':'1'}, 150);
					break;
				case 2:
					elm.animate({'top':'-128px', 'left':'23px', 'width':'69px' ,'height':'41px'}, 150);
					break;
				case 3:
					elm.animate({'top':'-71px' , 'left':'11px', 'width':'92px' ,'height':'55px'}, 150);
					break;
				case 4:
					elm.animate({'top':'0px'   , 'left':'0px' , 'width':'114px','height':'66px'}, 150);
					break;
				case 5:
					elm.animate({'top':'82px'  , 'left':'11px', 'width':'92px' ,'height':'55px'}, 150);
					break;
				case 6:
					elm.animate({'top':'151px' , 'left':'23px', 'width':'69px' ,'height':'41px'}, 150);
					break;
				case 7:
					elm.animate({'top':'210px' , 'left':'34px', 'width':'46px' ,'height':'27px', 'opacity':'1'}, 150);
					break;
				case 8:
				default:
					elm.animate({'top':'240px' , 'left':'45px', 'width':'23px' ,'height':'13px', 'display':'none', 'opacity':'0'}, 150);
					break;
			}
		}
		
		
		function addCarouselEvent(){
			carouselPick();
			carouselUp();
			carouselDown();
		}
	}



	$(window).on('load', function(){
		setTimeout(function(){
			$('.message-wrap').fadeOut(800);
			vtCarousel();
		}, 1000);
		$('#map .animate-map').stop().animate({left:"0px",top:"-35px",width:"900px",height:"534px"},1500,"easeOutCirc");
		mapView();
		
		$('#search-area .search-btn a').on('click', function(){
			if($(this).hasClass('disabled')) return false;
		});
		
		$('#search-area .category-pullup').hover(function(){
			$('#search-area .category-pullup ul:not(animated)').stop().slideDown(800);
		}, function(){
			$('#search-area .category-pullup ul').stop().slideUp(600);
		});
		
		$('.video .btn a').on('click', function(e){
			e.preventDefault();
			if(search){
				$(this).parent().toggleClass('playing');
			}
		});
	});
	
});