$(function(){
	$('.all-category-box .tab li').each(function(){
		$(this).on('click', function(e){
			e.preventDefault();
			var elm = $(this);
			var tab = elm.data('tab');
			$('.all-category-box .table-group').hide();
			$('.all-category-box .tab li').removeClass('current');
			elm.addClass('current');
			$('.all-category-box .'+ tab).show();
		});
	});
	
	
});