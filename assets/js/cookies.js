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