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
$('.form__timer').timeTo({
    timeTo: new Date(new Date('Thu Apr 09 2015 09:00:00 GMT+0300 (Финляндия (лето))')),
    displayDays: 2,
    // theme: "w",
    displayCaptions: true,
    fontSize: 35,
    captionSize: 14,
    lang: 'ru'
});
});