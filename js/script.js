// Slider

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.banner__slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  
    function nextSlide() {
      console.log('Next slide');
      goToSlide(currentSlide + 1);
    }
  
    function goToSlide(n) {
      console.log('Go to slide', n);  
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
      }
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        console.log('Dot clicked', index);
        goToSlide(index);
        resetInterval(); // Restart the interval timer
      });
    });
  
    slides[currentSlide].classList.add('active'); // Show the first slide initially
    dots[currentSlide].classList.add('active'); // Highlight the first dot initially
  });