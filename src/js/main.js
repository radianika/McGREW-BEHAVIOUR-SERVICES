 $(".burger").click(function () {
 	$(".navigation").slideToggle({
 		start: function () {
 			$(this).css({
 				display: "flex",
 				transform: "translateY( 60px)"
 			})
 		}
 	});
 	$(".sub__nav").css("display", "none");
 });

 $(".sub__nav").on('mouseover', function () {
 		$(this).parent().css({
 			'color': 'white',
 			'text-shadow': '0px 1px 0px rgba(0, 0, 0, 0.5)'
 		})
 	})
 	.on('mouseout', function () {
 		$(this).parent().css({
 			'color': 'inherit',
 			'text-shadow': 'none'
 		})
 	});


 $(".navigation__item").click(function () {
 	$(".sub__nav").slideUp();
 	$(this).find('.sub__nav').slideToggle();
 });

 $(window).resize(function () {
 	$(".sub__nav").slideUp();
 	if ($(window).width() >= 1200) {
 		$(".navigation").removeAttr('style');
 	}
 });



$(document).ready(function(){
  $('.slider__box').slick({
    autoplay: true,
  	autoplaySpeed: 3000,
		dots: false,
  	infinite: false,
		prevArrow: false,
		nextArrow:false
  });
});