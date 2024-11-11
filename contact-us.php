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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=check" />
        <link rel="preload" href="./assets/fonts/icomoon.eot" as="font" crossorigin="anonymous">
        <link rel="preload" href="./assets/fonts/icomoon.woff" as="font" type="font/woff2" crossorigin>
        <script src="https://kit.fontawesome.com/ee55ddb165.js" crossorigin="anonymous"></script>

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

            <!--Contact Section-->
            <section class="bottom-section">
                <div class="container">
                    <div class="contact-container">

                        <!--Contact/Out of Hours-->
                        <?php include 'out-of-hours.php'; ?>

                        <!--Contact Form-->
                        <?php include 'contact-form.php'; ?>

                    </div>
                </div>
            </section>

            <!--Footer-->
            <?php include 'footer.php'; ?> 
</div>

<!--jQuery-->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!--js-->
<script src="js/contact.js"></script>
</body>

</html>