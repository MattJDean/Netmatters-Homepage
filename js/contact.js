// Sticky Header

const header = document.getElementById('main-header');
let lastScrollY = window.pageYOffset;
const threshold = 5; // small scroll threshold

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
  

  // Out of Hours Accordion
  
  const accord = document.getElementsByClassName("accordion-base");
  let i;
  
  for (i = 0; i < accord.length; i++) {
      accord[i].addEventListener("click", function() {
        /* Toggle between adding and removing the 'open' class.*/
        this.classList.toggle("open");
    
        /* Toggle between hiding and showing content */
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    } 

// Checkbox 
document.addEventListener("DOMContentLoaded", function() {
const checkbox = document.querySelector(".checkbox");

// Click event listener
checkbox.addEventListener("click", function() {
    // Toggle 'active' class to fill background color and show the tick
    checkbox.classList.toggle("active");
});


//Contact Form 

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to handle validation

    const name = document.getElementById("name").value;
    const company = document.getElementById("company").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const marketingInfo = checkbox.classList.contains("active");
    const errorMessageBox = document.getElementById("error-message-box");
    
    let errors = [];

    // Validate Name 
    const nameRegex = /^[A-Za-z][A-Za-z\s]*$/; // Ensures name starts with a letter and contains only letters or spaces
    if (!name.trim()) {
        errors.push("Name is required.");
    } else if (!nameRegex.test(name)) {
        errors.push("Name cannot include numbers or special characters.");
    }

    // Validate Email with a strict regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Ensures email is in the correct format
    if (!email.trim()) {
        errors.push("Email is required.");
    } else if (!emailRegex.test(email)) {
        errors.push("Please enter a valid email address.");
    }

    // Validate Phone 
    const phoneRegex = /^[0-9]{10,15}$/; // Accepts phone numbers of 10 to 15 digits
    if (!phone.trim()) {
        errors.push("Phone number is required.");
    } else if (!phoneRegex.test(phone)) {
        errors.push("Please enter a valid phone number (digits only, 10-15 digits).");
    }

    // Validate Message (must be longer than 20 characters)
    if (!message.trim()) {
        errors.push("Message is required.");
    } else if (message.length < 20) {
        errors.push("Message must be longer than 20 characters.");
    }

    if (errors.length > 0) {
        errorMessageBox.innerHTML = errors.join("<br>");
        errorMessageBox.style.display = "block";
    } else {
        errorMessageBox.style.display = "none";
        // If validation passes, submit form 
        submitForm(name, company, email, phone, message, marketingInfo);
    }
});
});

function submitForm(name, company, email, phone, message, marketingInfo) {
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("company", company);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);
    formData.append("marketing_info", marketingInfo ? "1" : "0");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);
    console.log("Marketing Info Checked:", marketingInfo);

    fetch("/submit", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Your message has been sent successfully.");
        } else {
            alert("There was an error sending your message.");
        }
    })
    .catch(error => {
        alert("Error: " + error);
    });
}
