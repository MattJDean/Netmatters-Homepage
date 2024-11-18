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