// // Clients Slider (jQuery Slick Plugin)

$(document).ready(function() {
    $('.clients__row').slick({
        dots: false,
        infinite: true,
        speed: 200,
        fade: false,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        variableWidth: true,
        slidesToShow: 5,
        rows: 1,
    });

    // function to apply overflow:visible to slick-list after slight delay
    setTimeout(function() {
        $('.slick-list').css('overflow', 'visible');
    }, 100);
  });