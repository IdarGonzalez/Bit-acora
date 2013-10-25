jQuery(document).ready( function($){
	$('.form').click(function () {
		$('#comment_form').toggle("slow");
	});
	$('.openComments').click(function () {
		$('.Comments').toggle("slow");
	});
});