jQuery(document).ready( function($){
	$('.Form').click(function () {
		$('#comment_form').toggle("slow");
	});
	$('.openComments').click(function(){
		$('.Comments').toggle("normal");
	});
});