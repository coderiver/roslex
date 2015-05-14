head.ready(function() {
	$('.slider__top').slick({
	  slidesToShow: 3,
	  centerMode: true,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 5000,
	  variableWidth: true,
   arrows: false,
});
		$('.slider__bottom').slick({
	  slidesToShow: 3,
	  centerMode: true,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 5500,
	  variableWidth: true,
   arrows: false,
});

function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff + 7));
}

da = String(getMonday(new Date()));
// da.substring(0, 15)
var liftoffTime = new Date();
liftoffTime.setDate(liftoffTime.getDate() + 5);
$('.form__timer').countdown({until: new Date(da.substring(0, 15)), padZeroes: true, format: 'DDHHMMSS'});
$('.nav__list a').click(function(event){
	event.preventDefault();});
$('.js-guaranties').click(function(){
	var position = $('.guarantees').offset();
	// if($(".js-fixed").hasClass("is-fixed")){
	// 	$('body, html').animate({
	// 		scrollTop: position.top-100-40
	// 	},1100,'easeInOutCirc');
	// } else {
	// 	$('body, html').animate({
	// 		scrollTop: position.top-100-80
	// 	},1100,'easeInOutCirc');
	// }
	scrollTo(position, -100)
});
function scrollTo(position, del) {
	var n = del || 0;
	if($(".js-fixed").hasClass("is-fixed")){
		$('body, html').animate({
			scrollTop: position.top-38+n
		},1100,'easeInOutCirc');
	} else {
		$('body, html').animate({
			scrollTop: position.top-78+n
		},1100,'easeInOutCirc');
	}
}
$('.js-price').click(function(){
	var position = $('.rates').offset();
 scrollTo(position);
});
$('.js-work').click(function(){
	var position = $('.work').offset();
	 scrollTo(position);
});
$('.js-documentation').click(function(){
	var position = $('.documentation').offset();
	// $('body, html').animate({
	// 	scrollTop: position.top+45-40
	// },1100,'easeInOutCirc');
	 scrollTo(position, 50);

});
$('.js-feedbacks').click(function(){
	var position = $('.feedbacks').offset();
	 scrollTo(position);
});
$('.js-team').click(function(){
	var position = $('.team').offset();
	 scrollTo(position);
});
$('.js-contacts').click(function(){
	var position = $('.contacts').offset();
	 scrollTo(position);
});
$('.js-open-work-form').hover(function(event) {
	$(this).siblings('.form__inputs').fadeIn();
});
var $priceForm = $('.copy-box .copy-form');
$('.js-open-price-form').hover(function(){
	$(this).siblings('.form__inputs').fadeIn();
	$('.copy-form').not($(this).parent()).find('.form__inputs').fadeOut('fast')
}


	);

$(document).click(function(event) {
    if ($(event.target).closest(".copy-form").length) return;
    $(".copy-form .form__inputs").fadeOut('fast');
    event.stopPropagation();
});

$(window).scroll(function() {    
     var scroll = $(window).scrollTop();
     if ($('.js-wrap').length>0) {
      if (scroll >= $('.js-wrap').offset().top) {
          $(".js-fixed").addClass("is-fixed");
      } else {
          $(".js-fixed").removeClass("is-fixed");
      };
     };

     if (scroll >= $('.promo').offset().top+100) {
			$('.js-up').fadeIn('fast');
      } else {
      	$('.js-up').fadeOut('fast');
      }

 });
$('.js-up').click(function(){
	$('body, html').animate({
		scrollTop: 0
		},1100,'easeInOutCirc');
});
$('.getting__list_slider').slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		infinite: false,
		arrows: false
});
$('.js-open-order').on('click', function(e){
	e.preventDefault();
	var $this = $(this),
			item = $this.closest('.order'),
			list = $this.closest('.rates__body'),
			items = list.find('.order'),
			content = item.find('.order__content')
			otherContent = list.find('.order__content'),
			duration = 300;
	
	if(!item.hasClass('is-active')) {
		// items.removeClass('is-active');
		item.addClass('is-active');
		$this.addClass('is-active');

		// otherContent.stop(true, true).slideUp(duration);
		content.stop(true, true).slideDown(duration);

	} else {
		$this.removeClass('is-active');

		content.stop(true, true).slideUp(duration);
		item.stop(true, true).removeClass('is-active');
	}

})

});