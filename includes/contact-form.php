

<!--Contact Form-->
  <div class="contact-form">
    <form id="contact-form" action="/utilities/validate-form.php" method="POST" accept-charset="UTF-8">

        
        <div id="success-message-box" class="success-message-box">
            <button class="close-btn" type="button">x</button>
            <div id="success-message"></div>
        </div>

        <div id="error-message-box" class="error-message-box">
            <button class="close-btn" type="button">x</button>
            <div id="error-messages"></div>
        </div>

        <div class="form-group">
        <!--Name-->
        <div class="form-item top-group">
            <label class="form-label" for="name">Your Name<span class="required"></span>
            <input id="name" class="form-input" name="name" type="text" required>
            </label>
        </div>

        <!--Comapny Name-->
        <div class="form-item top-group">
            <label class="form-label" for="company">Company Name
            <input id="company" class="form-input" name="company" type="text">
            </label>
        </div>

        <!--Email-->
        <div class="form-item top-group">
            <label class="form-label" for="email">Your Email<span class="required"></span>
            <input id="email" class="form-input" name="email" type="email" required>
            </label>
        </div>

        <!--Telephone-->
        <div class="form-item top-group">
            <label class="form-label" for="telephone">Your Telephone Number<span class="required"></span>
            <input id="telephone" class="form-input" name="telephone" type="phone" required>
            </label>
        </div>
        </div>
        <!--Message-->
        <div class="form-item">
            <label class="form-label required" for="message">Message</label>
            <textarea id="message" class="form-input" name="message" cols="50" rows="10" required>Hi, I am interested in discussing a Our Offices solution, could you please give me a call or send an email?</textarea>
        </div>

        <!--Marketing Info-->
        <div class="form-item">
            <label class="form-label marketing-info">
                <span class="checkbox-container">
                <span class="checkbox"><span class="material-symbols-outlined check">check</span></span>
                </span>
                <span class="marketing-info-text">
                Please tick this box if you wish to receive marketing information from us.
                Please see our <a href="#">Privacy Policy</a> for more information on how we keep your data safe.
                </span>
            </label>
        </div>

        <!--reCaptcha-->
        <div class="form-item recaptcha">
            <span>This site is protected by reCAPTCHA and the Google <a href="#"><u>Privacy Policy</u></a> and <a href="#"><u>Terms of Service</u></a> apply.</span>
        </div>
        

        <!--Submit Button-->
        <div class="form-submit">
            <button class="contact-form-btn" type="submit">Send Enquiry</button>
            <small class="key-text"><span class="required"></span>Fields Required</small>
        </div>
    </form>
  </div>

