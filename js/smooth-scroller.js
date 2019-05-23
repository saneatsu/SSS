$(function(){
	
	/* smooth scroll */
	$('a[href^=#]').on('click', function(e){
		var winWd = $(window).width();
		if(winWd < 900){
			e.preventDefault();
		}else{
			var speed = 500;
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$("html, body").animate({scrollTop:position}, speed, "swing");
			return false;
		}
	});

			
	$('.right-contents nav li').each(function(){
		elm = $(this);
		elm.on('click', function(){
			$('.right-contents nav li').removeClass('current');
			$(this).addClass('current');
			var elmId = $(this).find('a').attr('href');
			$('.right-contents .section').hide();
			$('.right-contents ' + elmId).show();
		})
	});
			
	
	$(window).on('load resize', function(){
				
		var sidebar = $('.scroll-contents');	
		var offset = sidebar.offset();
		
		/* side-fixed */
		if(sidebar.length) {		
			$(window).scroll(function() {
				var map = 0;
				var state = $('html').attr('class');
				if(state == 'mapview-open') map = 426;
				
				if ($(window).scrollTop() > offset.top + map) {
					$(sidebar).stop().animate({
						duration: 'fast',
						marginTop: $(window).scrollTop() - offset.top - map
					});
				} else {
					$(sidebar).stop().animate({
						marginTop: 0
					});
				}
			});
		}

	});
})