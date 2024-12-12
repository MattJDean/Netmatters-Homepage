// // Accreditations Slider (jQuery Slick Plugin)

$(document).ready(function() {
    $('.accreditations__row').slick({
        dots: false,
        infinite: true,
        speed: 200,
        fade: false,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        variableWidth: true,
        slidesToShow: 6,
        rows: 1,
    });
  });