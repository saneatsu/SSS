$(function(){
	$('.rollover').easyRollover({
		transition: 'fade'
	});	

	if($('body').attr('id') == 'detail'){
		$('.image-popup').magnificPopup({
	    	type: 'image'
	  	});
	}  		
});