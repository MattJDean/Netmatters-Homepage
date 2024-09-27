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


  // Cookies

  document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const cookiesDialog = document.querySelector('.cookies');
    const acceptBtn = document.querySelector('.accept__btn');
    const changeBtn = document.querySelector('.change__btn');
  
    // Function to show the cookies dialog
    function showCookiesDialog() {
      overlay.style.display = 'block';
      cookiesDialog.style.display = 'block';
    }
  
    // Function to hide the cookies dialog
    function hideCookiesDialog() {
      overlay.style.display = 'none';
      cookiesDialog.style.display = 'none';
    }

    // Show the cookies dialog on page load
    showCookiesDialog();
  
    // Function to handle accept button click
    function handleAccept() {
      localStorage.setItem('cookiesAccepted', 'true');
      hideCookiesDialog();
    }

    // Function to handle change settings button click
    function handleChangeSettings() {
      localStorage.setItem('cookiesAccepted', 'false');
      hideCookiesDialog();
    }

    // Check localStorage to see if cookies have been accepted
    if (localStorage.getItem('cookiesAccepted') !== 'true') {
      showCookiesDialog();
    }

    // Hide the cookies dialog when the accept button is clicked
    acceptBtn.addEventListener('click', handleAccept);
    changeBtn.addEventListener('click', handleChangeSettings);
  });

  // Sticky Header

 