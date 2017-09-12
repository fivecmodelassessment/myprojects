$(document).ready(function () {

$(window).scroll(function  () {
	
	var  wScroll = $(this).scrollTop();
	


	

});

$(".navigation-hamburger").click(function(event) {
$(".nav-toggle").toggleClass("active");
	/* Act on the event */
});
var nav_switch = true;
function Side_nav_visible() {
	if (!nav_switch) {
		$(".side-menu").css('width', '0px');
		$(".navigation-hamburger").css('right', '0px');
		$(".navigation-hamburger").css('position', 'relative');
		$(".tr1").removeClass('tr1_an');
		$(".tr2").removeClass('tr2_an');
		$(".tr3").removeClass('tr3_an');
		$(".tr4").removeClass('tr4_an');
		$(".tr5").removeClass('tr5_an');
		$(".tr6").removeClass('tr6_an');
		$(".tr7").removeClass('tr7_an');
		$(".tr8").removeClass('tr8_an');
		$(".tr9").removeClass('tr9_an');
		$(".tr10").removeClass('tr10_an');
	}else{
		$(".side-menu").css('width', '250px');
		$(".navigation-hamburger").css('right', '60px');
		$(".navigation-hamburger").css('position', 'fixed');

		$(".tr1").addClass('tr1_an');
		$(".tr2").addClass('tr2_an');
		$(".tr3").addClass('tr3_an');
		$(".tr4").addClass('tr4_an');
		$(".tr5").addClass('tr5_an');
		$(".tr6").addClass('tr6_an');
		$(".tr7").addClass('tr7_an');
		$(".tr8").addClass('tr8_an');
		$(".tr9").addClass('tr9_an');
		$(".tr10").addClass('tr10_an');
	}
nav_switch = !nav_switch;



}
$(".navigation-hamburger").click(Side_nav_visible);

















});