
// Sticky Header

const header = document.getElementById('main-header');
let lastScrollY = window.pageYOffset;
const threshold = 5; // A small scroll threshold

window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset;

  

    if (Math.abs(currentScrollY - lastScrollY) > threshold) {
        if (currentScrollY > lastScrollY) {
            // Scrolling down, hide header
            header.classList.add('hidden');
            header.classList.remove('visible');
            
        } else {
            // Scrolling up, show header
            header.classList.remove('hidden');
            header.classList.add('visible');
            
        }

        lastScrollY = currentScrollY;
    }

    // Always show header when at the top of the page
    if (currentScrollY === 0) {
        header.classList.remove('hidden');
        header.classList.add('visible');
    }
});