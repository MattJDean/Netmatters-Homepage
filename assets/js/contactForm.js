document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.querySelector(".checkbox");
    const form = document.getElementById("contact-form");
    const errorMessageBox = document.getElementById("error-message-box");
    const errorMessagesContainer = document.getElementById("error-messages");
    const successMessageBox = document.getElementById("success-message-box");
    const successMessageContainer = document.getElementById("success-message");

    if (!errorMessagesContainer) {
        console.error("Error: 'error-messages' container is missing in the DOM.");
        return;
    }

     // Reset the form on page load
     form.reset(); 
     document.querySelectorAll(".error-outline").forEach(field => field.classList.remove("error-outline")); 
     document.getElementById("error-message-box").style.display = "none"; 
     document.getElementById("success-message-box").style.display = "none";

    checkbox.addEventListener("click", function() {
    checkbox.classList.toggle("active");
    });

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const nameField = document.getElementById("name");
        const companyField = document.getElementById("company");
        const emailField = document.getElementById("email");
        const phoneField = document.getElementById("telephone");
        const messageField = document.getElementById("message");

        const name = nameField.value;
        const company = companyField.value;
        const email = emailField.value;
        const phone = phoneField.value;
        const message = messageField.value;
        const marketingInfo = checkbox.classList.contains("active");
        const errorMessageBox = document.getElementById("error-message-box");

        const errorMessagesContainer = document.getElementById("error-messages");
        
        const successMessageBox = document.getElementById("success-message-box");
        
        const successMessageContainer = document.getElementById("success-message");
        


        let errors = [];
        

        // Validate Name
        const nameRegex = /^[A-Za-z][A-Za-z\s]*$/;
        if (!name.trim()) {
            errors.push("Name is required.");
            nameField.classList.add("error-outline");
        } else if (!nameRegex.test(name)) {
            errors.push("Name cannot include numbers or special characters.");
            nameField.classList.add("error-outline");
        }

        // Validate Email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email.trim()) {
            errors.push("Email is required.");
            emailField.classList.add("error-outline");
        } else if (!emailRegex.test(email)) {
            errors.push("Please enter a valid email address.");
            emailField.classList.add("error-outline");
        }

        // Validate Phone
        const phoneRegex = /^[0-9]{10,15}$/;
        if (!phone.trim()) {
            errors.push("Phone number is required.");
            phoneField.classList.add("error-outline");
        } else if (!phoneRegex.test(phone)) {
            errors.push("Please enter a valid phone number (digits only, 10-15 digits).");
            phoneField.classList.add("error-outline");
        }

        // Validate Message
        if (!message.trim()) {
            errors.push("Message is required.");
            messageField.classList.add("error-outline");
        } else if (message.length < 20) {
            errors.push("Message must be longer than 20 characters.");
            messageField.classList.add("error-outline");
        }

        if (errors.length > 0) {
            // Clear previous error messages
            errorMessagesContainer.innerHTML = "";
        
            // Create a separate div for each error
            errors.forEach(error => {
                const errorDiv = document.createElement("div");
                errorDiv.classList.add("error-message-box");
                errorDiv.innerText = error;
                errorMessagesContainer.appendChild(errorDiv);
            });
        
            errorMessageBox.style.display = "block";
        } 
              
        else {
            errorMessageBox.style.display = "none";
            submitForm(name, company, email, phone, message, marketingInfo);
        }
    });

    // Clear error outline on focus
    const inputFields = [document.getElementById("name"), document.getElementById("company"), 
        document.getElementById("email"), document.getElementById("telephone"), 
        document.getElementById("message")];

        inputFields.forEach(field => {
        field.addEventListener("focus", function() {
        field.classList.remove("error-outline");
        });
    });

    // Close button event listener
    document.querySelector(".close-error-btn").addEventListener("click", function() {
    document.getElementById("error-message-box").style.display = "none";
    });
    document.querySelector(".close-success-btn").addEventListener("click", function() {
    document.getElementById("success-message-box").style.display = "none";
    });

    function submitForm(name, company, email, phone, message, marketingInfo) {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("company", company);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("message", message);
        formData.append("marketing_info", marketingInfo ? "1" : "0");
    
        fetch("utilities/validate-form.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(text => {
        console.log("Raw response text:", text); // Check the response format
        return JSON.parse(text); // Parse it after inspection
        })
        .then(data => {
        if (data.success) {
            // Display individual success messages
            successMessageContainer.innerHTML = "";
            
            
                const successDiv = document.createElement("div");
                successDiv.innerText = "Your message has been sent!";
                successMessageContainer.appendChild(successDiv);
            
                successMessageBox.style.display = "block";
                errorMessageBox.style.display = "none";
                form.reset();
          }
                else {
                errorMessagesContainer.textContent = data.message || "An error occurred.";
                errorMessageBox.style.display = "block";
                successMessageBox.style.display = "none";
                }
        })
.catch(error => {
    errorMessagesContainer.textContent = "An error occurred. Please try again.";
    errorMessageBox.style.display = "block";
    successMessageBox.style.display = "none";
});
}});