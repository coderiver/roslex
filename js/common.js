head.ready(function() {

	$('.slider__top').slick({
	  slidesToShow: 3,
	  centerMode: true,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  variableWidth: true,
   arrows: false,
});
		$('.slider__bottom').slick({
	  slidesToShow: 3,
	  centerMode: true,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2500,
	  variableWidth: true,
   arrows: false,
});
});