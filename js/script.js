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


// document.addEventListener('DOMContentLoaded', function() {
//   const cookiesOverlay = document.querySelector('.overlay');
//   const cookiesDialog = document.querySelector('.cookies');
//   const acceptBtn = document.querySelector('.accept__btn');
//   const changeBtn = document.querySelector('.change__btn');
//   const manageConsentBtn = document.querySelector('.cookie__consent-btn');

//   // Function to show the cookies dialog
//   function showCookiesDialog() {
//     cookiesOverlay.style.display = 'block';
//     cookiesDialog.style.display = 'block';
//   }

//   // Function to hide the cookies dialog
//   function hideCookiesDialog() {
//     cookiesOverlay.style.display = 'none';
//     cookiesDialog.style.display = 'none';
//   }

//   // Show the cookies dialog on page load if not accepted yet
//   if (localStorage.getItem('cookiesAccepted') !== 'true') {
//     showCookiesDialog();
//   }

//   //Show the cookies dialog on page load - debug
//   // showCookiesDialog();

//   // Function to handle accept button click
//   function handleAccept() {
//     localStorage.setItem('cookiesAccepted', 'true');
//     hideCookiesDialog();
//   }

//   // Function to handle change settings button click
//   function handleChangeSettings() {
//     localStorage.setItem('cookiesAccepted', 'false');
//     hideCookiesDialog();
//   }

//   // Check localStorage to see if cookies have been accepted
//   if (localStorage.getItem('cookiesAccepted') !== 'true') {
//     showCookiesDialog();
//   }

//   // Hide the cookies dialog when the accept button is clicked
//   acceptBtn.addEventListener('click', handleAccept);
//   changeBtn.addEventListener('click', handleChangeSettings);

//   // Add event listener for the "Manage Consent" button to show the dialog again
//   manageConsentBtn.addEventListener('click', function() {
//     showCookiesDialog();
//   });
  
// });


  
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

  let isSidebarOpen = false; // Track if sidebar is open

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
      isSidebarOpen = !isSidebarOpen; // Update sidebar open state
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
      isSidebarOpen = false; // Reset sidebar state
    });

    // Reset sidebar state on window resize
    window.addEventListener('resize', function() {
      if (isMobileViewport()) {
        // If switching to mobile, hide desktop sidebar 
        desktopSidebar.classList.remove('active');
        pageWrapper.classList.remove('shift-left');
        if (isSidebarOpen) {
          mobileSidebar.classList.add('active'); // Keep mobile sidebar open 
          pageWrapper.classList.add('shift-left-xs');
          overlay.classList.add('active');
          hamburger.classList.add('is-active');
        }
      } else {
        // If switching to desktop, hide mobile sidebar and show desktop sidebar
        mobileSidebar.classList.remove('active');
        pageWrapper.classList.remove('shift-left-xs');
        if (isSidebarOpen) {
          desktopSidebar.classList.add('active'); // Keep desktop sidebar open 
          pageWrapper.classList.add('shift-left');
          overlay.classList.add('active');
          hamburger.classList.add('is-active');
        }
      }
    });

  } else {
    console.error('One or more elements not found. Check class names.');
  }
});


 