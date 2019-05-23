$(function(){
	var search = false;
			
	function mapView(){
		var mainDiv = $('#main-visual .inner');
		var slider = mainDiv.find('#slider');
		var mapPoint = mainDiv.find('#map-point');
		var mapArea = '';
		var message = $('.message-wrap');
		var map = $('#map .animate-map');
		var btnSearch = $('#search-area .search-btn a img');
		var marker = $('#search-area .video .marker');
		
		//UserAgent
		var ua = window.navigator.userAgent;
		var browserIE = false;
		var browser_v = 0;
		var browser_nm = '';

		//IE判定
		if(ua.match(/MSIE/) || ua.match(/Trident/)) {
    		browserIE = true;
    		//browser_v=parseFloat(ua.match(/(MSIE\s|rv:)([\d\.]+)/)[2]);
    		map.attr('src', '../../images/worldmap.png').css({width:'900px', height:'534px'});
		}
		map.fadeIn(100);
		
		$('#nav-area li').on('click', function(){
			$('#map-point .circle-container, .horizon, .popup-box').remove();
			mapArea = $(this).attr('class');
			mainDiv.css("background-color","#000");
			slider.css("opacity","0.4");
			mainDiv.css({zIndex:'200', backgroundColor:'#000'});	
							
			switch(mapArea){
				case 'world':
					map.stop().animate({left:"0px",top:"-35px",width:"900px",height:"534px"},1000,"easeOutCirc");
					break;
				case 'europe':
					map.stop().animate({left:"140px",top:"-315px",width:"3100px",height:"1841px"},2000,"easeOutCirc");
					break;
				case 'north-america':
					map.stop().animate({left:"-1300px",top:"-280px",width:"2300px",height:"1366px"},1000,"easeOutCirc");
					break;
				case 'south-america':
					map.stop().animate({left:"-1500px",top:"-750px",width:"2300px",height:"1366px"},1000,"easeOutCirc");
					break;
				case 'africa':
					map.stop().animate({left:"200px",top:"-650px",width:"2500px",height:"1485px"},2000,"easeOutCirc");
					break;
				case 'asia':
					map.stop().animate({left:"-255px",top:"-342px",width:"2300px",height:"1366px"},2000,"easeOutCirc");
					break;
				case 'oceania':
					map.stop().animate({left:"-800px",top:"-1100px",width:"3000px",height:"1782px"},2000,"easeOutCirc");
					break;		
			}
			
		});
		
		
		function mapSearch(arg){
			search = true;
			$('#map-point .circle-container, .horizon, .popup-box').remove();
			$('.message-wrap').fadeOut(800);
			slider.css("opacity","0.3");
			$(mapPoint).fadeIn(function(){
				
				
				switch(mapArea){
							case 'europe':
								addPoint(mapPoint, 40, 657, 296, 'RUS', '../../country/country_detail_RUS.html', 4, 2, 5);		// OK
								addPoint(mapPoint, 10, 929, 476, 'UZB', '../../country/country_detail_UZB.html', 1, 0, 0);		// OK
								addPoint(mapPoint, 20, 767, 484, 'AZE', '../../country/country_detail_AZE.html', 2, 2, 3);		// OK
								break;
							case 'north-america':
								addPoint(mapPoint, 20, 623, 328, 'USA', '../../country/country_detail_USA.html', 2, 0, 2);		// OK
								break;
							case 'south-america':
								addPoint(mapPoint, 10, 442,  78, 'CUB', '../../country/country_detail_CUB.html', 1, 0, 1);		// OK
								break;
							case 'africa':
								break;
							case 'asia':
								addPoint(mapPoint, 10, 700, 276, 'KOR', '../../country/country_detail_KOR.html', 1, 0, 0);		// OK
								addPoint(mapPoint, 40, 782, 285, 'JPN', '../../country/country_detail_JPN.html', 4, 0, 2);		// OK
								addPoint(mapPoint, 30, 222, 288, 'IRI', '../../country/country_detail_IRI.html', 3, 1, 2);		// OK
								break;
							case 'oceania':
								break;
							case 'world':
							default:
								// europe
								addPoint(mapPoint, 40, 150, 139, 'RUS', '../../country/country_detail_RUS.html', 4, 2, 5);		// OK
								addPoint(mapPoint, 10, 180, 197, 'UZB', '../../country/country_detail_UZB.html', 1, 0, 0);		// OK
								addPoint(mapPoint, 20, 229, 195, 'AZE', '../../country/country_detail_AZE.html', 2, 2, 3);		// OK
								// north-america
								addPoint(mapPoint, 20, 755, 201, 'USA', '../../country/country_detail_USA.html', 2, 0, 2);		// OK
								// south-america
								addPoint(mapPoint, 10, 739, 248, 'CUB', '../../country/country_detail_CUB.html', 1, 0, 1);		// OK
								// africa
								// asia
								addPoint(mapPoint, 10, 374, 206, 'KOR', '../../country/country_detail_KOR.html', 1, 0, 0);		// OK
								addPoint(mapPoint, 40, 405, 210, 'JPN', '../../country/country_detail_JPN.html', 4, 0, 2);		// OK
								addPoint(mapPoint, 30, 184, 209, 'IRI', '../../country/country_detail_IRI.html', 3, 1, 2);		// OK
								// oceania
								break;
							/*
							default:
								// europe
								addPoint(mapPoint, 40, 175, 164, 'RUS', '../../country/country_detail_RUS.html', 4, 2, 5);		// OK
								addPoint(mapPoint, 10, 205, 232, 'UZB', '../../country/country_detail_UZB.html', 1, 0, 0);		// OK
								addPoint(mapPoint, 20, 254, 220, 'AZE', '../../country/country_detail_AZE.html', 2, 2, 3);		// OK
								// north-america
								addPoint(mapPoint, 20, 755, 226, 'USA', '../../country/country_detail_USA.html', 2, 0, 2);		// OK
								// south-america
								addPoint(mapPoint, 10, 764, 273, 'CUB', '../../country/country_detail_CUB.html', 1, 0, 1);		// OK
								// africa
								// asia
								addPoint(mapPoint, 10, 399, 231, 'KOR', '../../country/country_detail_KOR.html', 1, 0, 0);		// OK
								addPoint(mapPoint, 40, 430, 235, 'JPN', '../../country/country_detail_JPN.html', 4, 0, 2);		// OK
								addPoint(mapPoint, 30, 209, 234, 'IRI', '../../country/country_detail_IRI.html', 3, 1, 2);		// OK
								// oceania
								break;
							*/
				}
				
				
				
				
				
				/*
				switch(mapArea){
					case 'world':
						addPoint(mapPoint, 60, 100, 735, 'australia', '/detail.html');
						addPoint(mapPoint, 40, 220, 345, 'australia', '');
						addPoint(mapPoint, 30, 160, 107, 'australia', '');
						addPoint(mapPoint, 55, 220, 183, 'australia', '');
						break;
					case 'europe':
						addPoint(mapPoint, 60, 100, 555, 'australia', '/detail.html');
						addPoint(mapPoint, 40, 240, 480, 'australia', '');
						addPoint(mapPoint, 60, 290, 342, 'australia', '');
						addPoint(mapPoint, 75, 130, 440, 'australia', '');
						break;
					case 'america':
						addPoint(mapPoint, 60, 100, 735, 'australia', '/detail.html');
						break;
					case 'africa':
						addPoint(mapPoint, 60, 100, 735, 'australia', '');
						break;
					case 'asia':
						addPoint(mapPoint, 60, 50, 700, 'australia', '/detail.html');
						addPoint(mapPoint, 40, 200, 485, 'australia', '');
						break;
					case 'oceania':
						addPoint(mapPoint, 60, 100, 735, 'australia', '');
						break;
					default:
						mainDiv.css("background-color","#000");
						mainDiv.css({backgroundImage:'none',zIndex:'200',backgroundColor:'#000'});
						map.stop().animate({left:"0px",top:"-30px",width:"900px",height:"534px"},1000, "easeOutCirc");
						addPoint(mapPoint, 60, 100, 735, 'australia', '/detail.html');
						addPoint(mapPoint, 40, 220, 345, 'australia', '');
						addPoint(mapPoint, 30, 160, 107, 'australia', '');
						addPoint(mapPoint, 55, 220, 183, 'australia', '');						
						break;
				}
				*/
				
				
				
				
				if(arg){
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

				/*
				$("#map-point .circle").on({
					'mouseenter':function(){
						$('.horizon, .popup-box').remove();
						$(this).addClass('circle-mouseover').removeClass('circle-mouseleave');
						var elm = $(this).parent();
						showDetail(elm.data('size'), elm.data('x'), elm.data('y'), elm.data('country'), elm.data('href'));			
					},
					'mouseleave':function(){
						$(this).removeClass('circle-mouseover').addClass('circle-mouseleave');
					}
				});
				*/
			});
			
		}

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
		 *  元の処理だと問題があったため修正
		 *    ・左上を起点にして呼び出していた為、サイズが変わると位置がずれる
		 *    ・class定義していないサイズを指定すると表示されない
		 *    ・メダル数を持つ所が無いのでをエレメントに保持ｗ
		 *
		 */
		/* 
		function addPoint(elm, size, left, top, country, href){
			elm.append('<div class="circle-container circle'+ size +'" style="position: absolute; top:'+ top +'px; left:'+ left +'px" data-size="'+ size +'" data-x="'+ left +'" data-y="'+ top +'" data-country="'+ country +'" data-href="'+ href +'"><span class="circle circle-mouseleave circle01"><a href="#"><div class="double-bounce1"></div><div class="double-bounce2"></div></span></a></div>');
		}
		
		function showDetail(size, x, y, country, href){
			mainDiv.css({ backgroundImage: 'none'});
			ptX = (x >= 500) ? x - 230 : x + 80;
			ptY = (y >= 250) ? y - 100 : y;
			var btn_detail = href ? '<a href="'+ href +'" class="btn">詳細をみる</a>' : '';
			
			var window = $(
				'<div class="popup-box popup-box1" style="top:'+ ptY +'px; left:'+ ptX +'px;">'+
					'<div class="wrap">'+
						'<div class="flag"><img src="images/flag_'+ country +'.png"></div>'+
						'<div class="medal"><ul><li class="gold">000</li><li class="silver">000</li><li class="bronze">000</li></ul></div>'+
					'</div>'+
					btn_detail +
				'</div>'
			);
			mapPoint.append(window);
			setTimeout(function(){
				window.fadeOut();
			}, 3000);
		}
		*/
		function addPoint( elm, size, x, y, country, href, gold, silver, blonze ) {
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
					'<div class="wrap">'+
						'<div class="flag"><img src="../../images/flag/flag_'+ country +'_s.png"></div>'+
						'<div class="medal"><ul><li class="gold">'+ gold +'</li><li class="silver">'+ silver +'</li><li class="bronze">'+ blonze +'</li></ul></div>'+
					'</div>'+
					btn_detail +
				'</div>'
			);
			mapPoint.append(window);
			setTimeout(function(){
				window.fadeOut();
			}, 3000);
		}
			
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

		function carouselDown(){
			$('.carousel-down').on('click', function(){
				firstItem = items[0].clone();
				firstItem.find('img').attr('data-item', itemNum).animate({'top': '-190px', 'left': '32px', 'width': '48px', 'height': '29px', 'opacity': 0});
				
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
			});
		}
		
		
		function carouselUp(){
			$('.carousel-up').on('click', function(){
				lastItem = items[itemNum-1].clone();
				lastItem.find('img').attr('data-item', 0).animate({'top': '-180px', 'left': '32px', 'width': '48px', 'height': '29px', 'opacity': 0});
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
			});
		}
		
		function carouselSwitch(elm, num){
			switch(num){
				case 0:
					elm.animate({'top': '-180px', 'left': '34px', 'width': '46px', 'height': '27px', 'display': 'none', 'opacity': 0});
					break;
				case 1:
					elm.animate({'top': '-166px', 'left': '34px', 'width': '46px', 'height': '27px', 'opacity': 1});
					break;
				case 2:
					elm.animate({'top': '-128px', 'left': '23px', 'width': '69px', 'height': '41px'});
					break;
				case 3:
					elm.animate({'top': '-71px', 'left': '11px', 'width': '92px', 'height': '55px'});
					break;
				case 4:
					elm.animate({'top': 0, 'left': 0, 'width': '114px', 'height': '66px'});
					break;
				case 5:
					elm.animate({'top': '82px', 'left': '11px', 'width': '92px', 'height': '55px'});
					break;
				case 6:
					elm.animate({'top': '151px', 'left': '23px', 'width': '69px', 'height': '41px'});
					break;
				case 7:
					elm.animate({'top': '210px', 'left': '34px', 'width': '46px', 'height': '27px', 'opacity': 1});
					break;
				case 8:
					elm.animate({'top': '240px', 'left': '34px', 'width': '46px', 'height': '27px', 'display': 'none', 'opacity': 0});
					break;						
				default:
					elm.animate({'top': '240px', 'left': '34px', 'width': '46px', 'height': '27px', 'display': 'none', 'opacity': 0});
					break;
			}
		}
		
		function addCarouselEvent(){
			carouselUp();
			carouselDown();
		}	
	}


	$(window).on('load', function(){
		
		
		
		/*setTimeout(function(){
			$('.message-wrap').fadeOut(800);
			vtCarousel();
		}, 5000);
		mapView();
		*/
		
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