



var $star_rating = $('.star-rating .star');

var SetRatingStar = function() {
  return $star_rating.each(function() {
    if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('far').addClass('fas');
    } else {
      return $(this).removeClass('fas').addClass('far');
    }
  });
};

$star_rating.on('click', function() {
  $star_rating.siblings('input.rating-value').val($(this).data('rating'));
  return SetRatingStar();
});

SetRatingStar();
$(document).ready(function() {

});


//
var $star_rating2 = $('.star-rating .star2');

var SetRatingStar2 = function() {
  return $star_rating2.each(function() {
    if (parseInt($star_rating2.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('far').addClass('fas');
    } else {
      return $(this).removeClass('fas').addClass('far');
    }
  });
};

$star_rating2.on('click', function() {
  $star_rating2.siblings('input.rating-value').val($(this).data('rating'));
  return SetRatingStar2();
});

SetRatingStar2();
$(document).ready(function() {

});