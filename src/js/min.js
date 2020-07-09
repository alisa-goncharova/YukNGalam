$(document).ready(function () {
	$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active')
  $('.menu-nav').toggleClass('menu-nav_active')});

$('input[name="radio"]').click(function(){
	var target = $('#block-' + $(this).val());
 
	$('.block-text').not(target).hide(0);
	target.fadeIn(500);
});

});
