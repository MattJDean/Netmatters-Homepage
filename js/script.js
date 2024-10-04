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
  const cookiesOverlay = document.querySelector('.cookies-overlay');
  const cookiesDialog = document.querySelector('.cookies');
  const acceptBtn = document.querySelector('.accept__btn');
  const changeBtn = document.querySelector('.change__btn');

  // Function to show the cookies dialog
  function showCookiesDialog() {
    cookiesOverlay.style.display = 'block';
    cookiesDialog.style.display = 'block';
  }

  // Function to hide the cookies dialog
  function hideCookiesDialog() {
    cookiesOverlay.style.display = 'none';
    cookiesDialog.style.display = 'none';
  }

  // Show the cookies dialog on page load
  // showCookiesDialog();

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

let lastScrollY = window.pageYOffset;

window.addEventListener('scroll', function() {
  const header = document.getElementById('main-header');
  let currentScrollY = window.pageYOffset;

  if (currentScrollY > lastScrollY && currentScrollY > 210) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
});





  
// Sidebar

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.header__hamburger');
  const desktopSidebar = document.querySelector('.sidebar'); // Desktop sidebar
  const mobileSidebar = document.querySelector('.xs-sidebar'); // Mobile sidebar
  const overlay = document.querySelector('.overlay');
  const pageWrapper = document.querySelector('.page-wrapper');

  // Helper function to determine if it's a mobile viewport
  function isMobileViewport() {
    return window.innerWidth <= 990;
  }

  // Check if all required elements are selected
  if (hamburger && desktopSidebar && mobileSidebar && overlay && pageWrapper) {
    
    // Toggle sidebar visibility on hamburger click
    hamburger.addEventListener('click', function() {
      console.log('Hamburger clicked'); //debug
      if (isMobileViewport()) {
        // Mobile sidebar logic
        mobileSidebar.classList.toggle('active');
        pageWrapper.classList.toggle('shift-left-xs'); // Moves the main content
      } else {
        // Desktop sidebar logic
        desktopSidebar.classList.toggle('active');
        pageWrapper.classList.toggle('shift-left'); // Moves the main content
      }
      overlay.classList.toggle('active');
      hamburger.classList.toggle('is-active');
    });

    // Close sidebar when overlay is clicked
    overlay.addEventListener('click', function() {
      // Close both sidebars
      mobileSidebar.classList.remove('active');
      desktopSidebar.classList.remove('active');
      pageWrapper.classList.remove('shift-left'); // Reset page position
      pageWrapper.classList.remove('shift-left-xs'); // Reset mobile page position
      overlay.classList.remove('active');
      hamburger.classList.remove('is-active');
    });

    // Reset sidebar state on window resize
    window.addEventListener('resize', function() {
      if (!isMobileViewport()) {
        mobileSidebar.classList.remove('active'); // Ensure mobile sidebar is closed
        overlay.classList.remove('active');
        hamburger.classList.remove('is-active');
      }
    });
  } else {
    console.error('One or more elements not found. Check class names.');
  }
});


 