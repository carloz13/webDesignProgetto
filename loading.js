
$('body').append('<div style="" id="loadingDiv"><div class="loading"><img id="loadingBird" src="images/loading/rondine.gif" /><h3 id="loadingText">Caricamento...</h3></div></div>');
$(document).ready(function () {
	$('html').attr('style', 'overflow-y: hidden;');
	$('#loadingBird').load('images/loading/rondine.gif #loadingBird');

});

$(window).on('load', function() {
	$('html').attr('style', 'overflow-y: scroll;');
	removeLoader();
});

function removeLoader(){
	$("#loadingDiv").fadeOut(500, function() {
	// fadeOut complete. Remove the loading div
	$("#loadingDiv").remove(); //makes page more lightweight 
});
}