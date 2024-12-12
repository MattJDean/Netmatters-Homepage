<?php
include 'config.php';

  $page = 'contact';
  
?>

<!DOCTYPE html>
<html lang="en">
    
    <head>
        <!--Viewport-->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!--Title-->
        <title>Full Service Digital Agency | Cambridgeshire & Norfolk | Netmatters</title>

        <!--Favicon-->
        <link rel="icon" href="assets/img/favicon.png" type="image/png">

        <!--Fonts/Icons-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&family=Poppins:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,0,0&icon_names=check" />
        <link rel="preload" href="assets/fonts/icomoon.woff" as="font" type="font/woff" crossorigin="anonymous">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=keyboard_arrow_down" />
   
        <!--Stylesheet-->
        <link rel="stylesheet" type="text/css" href="assets/css/style.css"> 

       <!-- JS Scripts -->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" defer></script>
        <script src="assets/js/cookies.js" defer></script>
        <script src="assets/js/sidebar.js" defer></script>
        <script src="assets/js/header.js" defer></script>
        <script src="assets/js/oohAccordion.js" defer></script>
        <script src="assets/js/contactForm.js" defer></script>

    </head>

<body>

    <!-- Cookies -->
    <?php include 'includes/cookies.php';?>

    <!--Sidebar-->
    <?php include 'includes/sidebar.php'; ?> 

    <!--Page Wrapper-->
    <div class="page-wrapper">

        <div id="main-header">
            <!--Header-->
            <?php include 'includes/header.php'; ?> 

            <!--Navbar-->
            <?php include 'includes/navbar.php'; ?> 
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
                        <?php include 'includes/cambridge-office-card.php'; ?> 
                        <!--Wymondham Office-->
                        <?php include 'includes/wymondham-office-card.php'; ?> 
                        <!--Great Yarmouth Office-->
                        <?php include 'includes/yarmouth-office-card.php'; ?> 
                    </div>
                </div>
            </section>

            <!--Contact Section-->
            <section class="bottom-section">
                <div class="container">
                    <div class="contact-container">

                        <!--Contact/Out of Hours-->
                        <?php include 'includes/out-of-hours.php'; ?>

                        <!--Contact Form-->
                        <?php include 'includes/contact-form.php'; ?>

                    </div>
                </div>
            </section>

            <!--Footer-->
            <?php include 'includes/footer.php'; ?> 
        </div>
    </div>
</body>

</html>