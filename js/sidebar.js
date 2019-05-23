$(function(){
				$("ul.sec").hide();
				$("div.chapter").click(function(){
					$("ul.sec").slideUp();
					$("div.chapter").removeClass("open");
					if($("+ul",this).css("display")=="none"){
						$("+ul",this).slideDown();
						$(this).addClass("open");
					}
				});
				$("ul.sec li").mouseover(function(){
					$(this).addClass("rollover");
				}).mouseout(function(){
					$(this).removeClass("rollover");
				});
			});