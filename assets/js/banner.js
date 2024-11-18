// Banner 

// Initial check to set the correct text on page load
window.dispatchEvent(new Event('resize'));
window.addEventListener('resize', function() {
    const caption = document.getElementById('start__caption').querySelector('h2');
    if (window.innerWidth >= 1260) {
        caption.innerHTML = "The East Of England's Leading<br> Technology Company";
    } else {
        caption.innerHTML = "The East Of England's<br> Leading Technology<br> Company";
    }
});

// // Our Services Slider (jQuery Slick plugin)
$(document).ready(function() {
    $('.banner-slider').slick({
        dots: true, 
        infinite: true, 
        speed: 500, 
        fade: true, 
        cssEase: 'linear', 
        autoplay: true, 
        autoplaySpeed: 5000, 
        arrows: false, 
        mobileFirst: true, 
        respondTo: 'window', 
        adaptiveHeight: true,
        swipe: true,
    });
});