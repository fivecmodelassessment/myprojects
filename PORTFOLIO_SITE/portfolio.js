$(document).ready(function () {

$(window).scroll(function  () {
	
	var  wScroll = $(this).scrollTop();
	


	

});

$(".nav-toggle").click(function(event) {
$(this).toggleClass("active");
	/* Act on the event */
});
var nav_switch = true;
function Side_nav_visible() {
	if (!nav_switch) {
		$(".side-menu").css('width', '0px');
		$(".navigation-hamburger").css('right', '0px');
		$(".navigation-hamburger").css('position', 'relative');
	}else{
		$(".side-menu").css('width', '250px');
		$(".navigation-hamburger").css('right', '60px');
		$(".navigation-hamburger").css('position', 'fixed');
	}
nav_switch = !nav_switch;



}
$(".nav-toggle").click(Side_nav_visible);




});