var windowHeight = $(window).height();
var menuHeight = $('#menu').height();
var codeHeight = windowHeight - menuHeight;
$('.codeContainer').height(codeHeight + "px");

$('.tog').click(function() {
	$(this).toggleClass('selected');
	var activeDiv = $(this).html();
	$('#' + activeDiv + "Container").toggle();
	var showDiv = $('.codeContainer').filter(function() {
		return($(this).css("display") !== "none");
	}).length;
	var width = 100/showDiv;
	$('.codeContainer').css('width', width + '%');
});

$('#run').click(function() {
	$('iframe').contents().find('html').html('<style>' + $('#cssCode').val() + '</style>' + $('#htmlCode').val());
	document.getElementById('resultFrame').contentWindow.eval($('#jsCode').val());
});