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
$('.nav__list a').click(function(event){
	event.preventDefault();});
$('.js-guaranties').click(function(){
	var position = $('.guarantees').offset();
	$('body, html').animate({
		scrollTop: position.top-100-40
	},1100,'easeInOutCirc');
});
$('.js-price').click(function(){
	var position = $('.rates').offset();
	$('body, html').animate({
		scrollTop: position.top-40
	},1100,'easeInOutCirc');
});
$('.js-work').click(function(){
	var position = $('.work').offset();
	$('body, html').animate({
		scrollTop: position.top-40
	},1100,'easeInOutCirc');
});
$('.js-documentation').click(function(){
	var position = $('.documentation').offset();
	$('body, html').animate({
		scrollTop: position.top+45-40
	},1100,'easeInOutCirc');
});
$('.js-feedbacks').click(function(){
	var position = $('.feedbacks').offset();
	$('body, html').animate({
		scrollTop: position.top-40
	},1100,'easeInOutCirc');
});
$('.js-team').click(function(){
	var position = $('.team').offset();
	$('body, html').animate({
		scrollTop: position.top-40
	},1100,'easeInOutCirc');
});
$('.js-contacts').click(function(){
	var position = $('.contacts').offset();
	$('body, html').animate({
		scrollTop: position.top-40
	},1100,'easeInOutCirc');
});
$('.js-open-work-form').hover(function(event) {
	$('.work-form').fadeIn();
});
var $priceForm = $('.copy-box .copy-form');
$('.js-open-price-form').hover(function(){
	$(this).siblings('.form').fadeIn();
	$('.price_item__foo').not($(this).parent()).find('.form').fadeOut('fast')
});

$(document).click(function(event) {
    if ($(event.target).closest(".copy-form").length) return;
    $(".copy-form").fadeOut('fast');
    event.stopPropagation();
});
// $(document).scroll(function(){
// 	var scroll = $(window).scrollTop();
// 	$('.nav').addClass('is-fixed');
// });
$(window).scroll(function() {    
     var scroll = $(window).scrollTop();
     if ($('.js-wrap').length>0) {
      if (scroll >= $('.js-wrap').offset().top) {
          $(".js-fixed").addClass("is-fixed");
      } else {
          $(".js-fixed").removeClass("is-fixed");
      };
     };
 });
});