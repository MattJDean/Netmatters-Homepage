<!DOCTYPE html>
<html lang="en">
    
    <head>
        <!--Viewport-->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!--Title-->
        <title>Full Service Digital Agency | Cambridgeshire & Norfolk | Netmatters</title>

        <!--Favicon-->
        <link rel="icon" href="./assets/img/favicon.png" type="image/png">

        <!--Fonts/Icons-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&family=Poppins:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet">
        <link rel="preload" href="./assets/fonts/icomoon.eot" as="font" crossorigin="anonymous">
        <link rel="preload" href="./assets/fonts/icomoon.woff" as="font" type="font/woff2" crossorigin>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=check" />

        <!--Stylesheet-->
        <link rel="stylesheet" type="text/css" href="css/style.css"> 

    </head>

<body>

    <!--Sidebar-->
    <?php include 'sidebar.php'; ?> 

<!--Page Wrapper-->
<div class="page-wrapper">

        <div id="main-header">
            <!--Header-->
            <?php include 'header.php'; ?> 

            <!--Navbar-->
            <?php include 'navbar.php'; ?> 
        </div>

        <div class="page-content-wrapper">

            <!--Breadcrumb-->
            <div class="breadcrumb-container">
                <div class="container">
                    <ul class="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li>Our Offices</li>
                    </ul>
                </div>
            </div>

            <!--Page Heading-->
            <div class="top-section">
                <div class="page-heading">
                    <div class="container">
                        <h1>Our Offices</h1>
                    </div>
                </div>
            </div>

            <!--Office List-->
            <section class="office-list">
                <div class="container">
                    <div class="cards-container">
                        <!--Cambridge Office-->
                        <?php include 'cambridge-office-card.php'; ?> 
                        <!--Wymondham Office-->
                        <?php include 'wymondham-office-card.php'; ?> 
                        <!--Great Yarmouth Office-->
                        <?php include 'yarmouth-office-card.php'; ?> 
                    </div>
                </div>
            </section>

            <!--Contact Form-->
            <section class="bottom-section">
                <div class="container">
                    <div class="contact-container">

                        <!--Contact Form-->
                        <div class="contact-form">
                            <form id="contact-form" action="#" method="post" accept-charset="UTF-8">

                              <div class="form-group">
                                <!--Name-->
                                <div class="form-item top-group">
                                    <label class="form-label" for="name">Your Name<span class="required"></span>
                                    <input id="name" class="form-input" name="name" type="text" value="">
                                    </label>
                                </div>

                                <!--Comapny Name-->
                                <div class="form-item top-group">
                                    <label class="form-label" for="company">Company Name
                                    <input id="company" class="form-input" name="company" type="text" value="">
                                    </label>
                                </div>

                                <!--Email-->
                                <div class="form-item top-group">
                                    <label class="form-label" for="email">Your Email<span class="required"></span>
                                    <input id="email" class="form-input" name="email" type="email" value="">
                                    </label>
                                </div>

                                <!--Telephone-->
                                <div class="form-item top-group">
                                    <label class="form-label" for="telephone">Your Telephone Number<span class="required"></span>
                                    <input id="telephone" class="form-input" name="telephone" type="text" value="">
                                    </label>
                                </div>
                              </div>
                                <!--Message-->
                                <div class="form-item">
                                    <label class="form-label required" for="message">Message</label>
                                    <textarea id="message" class="form-input" name="message" cols="50" rows="10">Hi, I am interested in discussing a Our Offices solution, could you please give me a call or send an email?</textarea>
                                </div>

                                <!--Marketing Info-->
                                <div class="form-item">
                                    <label class="form-label marketing-info">
                                        <span class="checkbox-container">
                                        <span class="checkbox"><span class="material-symbols-outlined checked">check</span></span>
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
                                    <small class="key-text"><span class="required"></span> Fields Required</small>
                                </div>
                            </form>
                        </div>

                        <!--Contact Info-->
                        <div class="contact-info">

                            <!--Email/Phone-->
                            <div class="email-phone">
                                <p><strong>Email us on:</strong></p>
                                <p><a href="#"></a>sales@netmatters.com</p>
                                <p><strong>Business hours:</strong></p>
                                <p><strong>Monday - Friday 07:00 - 18:00</strong></p>
                            </div>

                            <!--Out of Hours Accordion-->
                            <div id="out-of-hours">
                                <h4><a href="#">Out of Hours IT Support</a><i class="fa-solid fa-chevron-down"></i></h4>
                                <div class="out-of-hours-content">
                                    <p>Netmatters IT are offering an Out of Hours service for Emergency and Critical tasks.</p>
                                    <p>
                                        <strong>Monday - Friday 18:00 - 22:00</strong>
                                        <strong>Saturday 08:00 - 16:00</strong>
                                        <br>
                                        <strong>Sunday 10:00 - 18:00</strong>
                                    </p>
                                    <p>To log a critical task, you will need to call our main line number and select Option 2 to leave an Out of Hours voicemail. A technician will contact you on the number provided within 45 minutes of your call.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <!--Footer-->
            <?php include 'footer.php'; ?> 
</div>

<!--jQuery-->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!--js-->
<script src="js/script.js"></script>

</body>

</html>