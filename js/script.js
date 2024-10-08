


// Sticky Header

const header = document.getElementById('main-header');
let lastScrollY = window.pageYOffset;
const threshold = 5; // A small scroll threshold

window.addEventListener('scroll', () => {
  const currentScrollY = window.pageYOffset;

  console.log('Scroll event detected');

  if (Math.abs(currentScrollY - lastScrollY) > threshold) {
    if (currentScrollY > lastScrollY) {
      // Scrolling down, hide header
      header.classList.add('hidden');
      header.classList.remove('visible');
      console.log(header.classList); // Check if 'hidden' class is added
    } else {
      // Scrolling up, show header
      header.classList.remove('hidden');
      header.classList.add('visible');
      console.log(header.classList); // Check if 'visible' class is added
    }

    lastScrollY = currentScrollY;
  }

  // Always show header when at the top of the page
  if (currentScrollY === 0) {
    header.classList.remove('hidden');
    header.classList.add('visible');
  }
});

// Slider

$(document).ready(function(){
  $('.banner-slider').slick({
    dots: true,  // Adds navigation dots
    infinite: true,  // Infinite looping
    speed: 500,  // Transition speed
    fade: true,  // Enables fading effect
    cssEase: 'linear',  // Smooth transition
    autoplay: true,  // Automatically transition between slides
    autoplaySpeed: 5000,  // 5 seconds between each slide
    arrows: false,  // Shows navigation arrows
    mobileFirst: true,  // Mobile first design
    respondTo: 'window',  // Respond to window resizing
    swipe: false,   // Disable swipe gestures
    vertical: false, 
    adaptiveHeight: true
  });
});



// Cookies

document.addEventListener('DOMContentLoaded', function() {
  const cookiesOverlay = document.querySelector('.overlay');
  const cookiesDialog = document.querySelector('.cookies');
  const acceptBtn = document.querySelector('.accept__btn');
  const changeBtn = document.querySelector('.change__btn');
  const manageConsentBtn = document.querySelector('.cookie__consent-btn');

  // Show or hide the cookies dialog based on display value
  function toggleCookiesDialog(show = true) {
    const display = show ? 'block' : 'none';
    cookiesOverlay.style.display = display;
    cookiesDialog.style.display = display;
  }

  // Handle consent change and update localStorage
  function updateConsent(accepted) {
    localStorage.setItem('cookiesAccepted', accepted ? 'true' : 'false');
    toggleCookiesDialog(false);
  }

  // Show the cookies dialog on page load if not accepted yet
  if (localStorage.getItem('cookiesAccepted') !== 'true') {
    toggleCookiesDialog();
  }

  // Event listeners for buttons
  acceptBtn.addEventListener('click', () => updateConsent(true));
  changeBtn.addEventListener('click', () => updateConsent(false));
  manageConsentBtn.addEventListener('click', () => toggleCookiesDialog());

});


// Sidebar

document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    hamburger: document.querySelector('.header__hamburger'),
    desktopSidebar: document.querySelector('.sidebar'),
    mobileSidebar: document.querySelector('.xs-sidebar'),
    overlay: document.querySelector('.overlay'),
    pageWrapper: document.querySelector('.page-wrapper')
  };

  const toggleClass = (element, className) => element.classList.toggle(className);
  const addClass = (element, className) => element.classList.add(className);
  const removeClass = (element, className) => element.classList.remove(className);
  const isMobile = () => window.innerWidth <= 990;
  let isSidebarOpen = false;

  const openSidebar = () => {
    const sidebar = isMobile() ? elements.mobileSidebar : elements.desktopSidebar;
    const shiftClass = isMobile() ? 'shift-left-xs' : 'shift-left';

    addClass(sidebar, 'active');
    addClass(elements.pageWrapper, shiftClass);
    addClass(elements.overlay, 'active');
    addClass(elements.hamburger, 'is-active');
    isSidebarOpen = true;
  };

  const closeSidebar = () => {
    removeClass(elements.mobileSidebar, 'active');
    removeClass(elements.desktopSidebar, 'active');
    removeClass(elements.pageWrapper, 'shift-left');
    removeClass(elements.pageWrapper, 'shift-left-xs');
    removeClass(elements.overlay, 'active');
    removeClass(elements.hamburger, 'is-active');
    isSidebarOpen = false;
  };

  if (Object.values(elements).every(el => el)) {
    elements.hamburger.addEventListener('click', () => {
      if (isSidebarOpen) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });

    elements.overlay.addEventListener('click', closeSidebar);

    window.addEventListener('resize', () => {
      const wasMobile = isMobile();

      if (isSidebarOpen) {
        if (wasMobile) {
          // Switch to mobile, hide desktop sidebar and maintain mobile sidebar state
          removeClass(elements.desktopSidebar, 'active');
          removeClass(elements.pageWrapper, 'shift-left');
          addClass(elements.mobileSidebar, 'active');
          addClass(elements.pageWrapper, 'shift-left-xs');
        } else {
          // Switch to desktop, hide mobile sidebar and maintain desktop sidebar state
          removeClass(elements.mobileSidebar, 'active');
          removeClass(elements.pageWrapper, 'shift-left-xs');
          addClass(elements.desktopSidebar, 'active');
          addClass(elements.pageWrapper, 'shift-left');
        }
        addClass(elements.overlay, 'active');
        addClass(elements.hamburger, 'is-active');
      } else {
        // If no sidebar is open, make sure both are closed
        closeSidebar();
      }
    });
  } else {
    console.error('One or more elements not found. Check class names.');
  }
});

