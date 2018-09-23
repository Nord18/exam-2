$(".map__width").hover(function() {
    $(this).find(".map__width_popup").show('slow')
}, function() {
	$(this).find(".map__width_popup").hide('slow')
});

$('.safari__slider').slick({
  slidesToShow: 1,
  variableWidth: true,
  centerMode: true,
  cssEase: 'linear',
  prevArrow: ".safari__slider_prev",
  nextArrow: ".safari__slider_next"
});