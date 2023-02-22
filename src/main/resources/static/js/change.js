$(document).ready(function(){
	
	$('ul.reservation-search li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.reservation-search li').removeClass('current');
		$('.serve-container').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});