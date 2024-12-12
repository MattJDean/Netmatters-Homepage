

<!--Contact Form-->
  <div class="contact-form">
    <form id="contact-form" action="utilities/validate-form.php" method="POST" accept-charset="UTF-8">

        
        <div id="success-message-box" class="success-message-box">
            <button class="close-success-btn" type="button">x</button>
            <div id="success-message"></div>
        </div>

        <div id="error-message-box" class="error-message-box">
            <button class="close-error-btn" type="button">x</button>
            <div id="error-messages"></div>
        </div>

        <div class="form-group">

        <!--Name-->
        <div class="form-item top-group">
            <label class="form-label" for="name">Your Name<span class="required"></span>
            <input id="name" class="form-input" name="name" type="text" required maxlength="30">
            </label>
        </div>

        <!--Comapny Name-->
        <div class="form-item top-group">
            <label class="form-label" for="company">Company Name
            <input id="company" class="form-input" name="company" type="text" maxlength="20">
            </label>
        </div>

        <!--Email-->
        <div class="form-item top-group">
            <label class="form-label" for="email">Your Email<span class="required"></span>
            <input id="email" class="form-input" name="email" type="email" required>
            </label>
        </div>

        <!--Phone-->
        <div class="form-item top-group">
            <label class="form-label" for="phone">Your Telephone Number<span class="required"></span>
            <input id="phone" class="form-input" name="phone" type="text" required>
            </label>
        </div>
        </div>

        <!--Message-->
        <div class="form-item">
            <label class="form-label required" for="message">Message</label>
            <textarea id="message" class="form-input" name="message" type="text" cols="50" rows="10" required>Hi, I am interested in discussing a Our Offices solution, could you please give me a call or send an email?</textarea>
        </div>

        <!--Marketing Info-->
        <div class="form-item">
            <label class="form-label marketing-info">
                <input type="checkbox" id="marketing-info" name="marketing_info" value="1">
                <span class="checkbox-container">
                <span class="checkbox"><svg class="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="m464.563 144.563-256 256c-7.813 7.812-18.047 11.718-28.282 11.718s-20.468-3.906-28.281-11.718l-128-128C8.375 256.938 8.375 231.625 24 216s40.938-15.625 56.562 0l99.719 99.719L408 88c15.625-15.625 40.938-15.625 56.562 0s15.626 40.938.001 56.563Z"/></svg></span>
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

