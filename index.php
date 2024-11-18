
<!DOCTYPE html>
<html lang="en">
    
    <head>
        <!--Viewport-->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!--Title-->
        <title>Full Service Digital Agency | Cambridgeshire & Norfolk | Netmatters</title>

        <!--Favicon-->
        <link rel="icon" href="/assets/img/favicon.png" type="image/png">

        <!--Fonts/Icons-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&family=Poppins:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet">
        <link rel="preload" href="assets/fonts/icomoon.eot" as="font" crossorigin="anonymous">
        <link rel="preload" href="assets/fonts/icomoon.woff" as="font" type="font/woff" crossorigin>

        <!-- JS Scripts -->
        <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.js" integrity="sha512-eP8DK17a+MOcKHXC5Yrqzd8WI5WKh6F1TIk5QZ/8Lbv+8ssblcz7oGC8ZmQ/ZSAPa7ZmsCU4e/hcovqR8jfJqA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="assets/js/banner.js" defer></script>
        <script src="assets/js/accredSlider.js" defer></script>
        <script src="assets/js/clientsSlider.js" defer></script>
        <script src="assets/js/cookies.js" defer></script>
        <script src="assets/js/sidebar.js" defer></script>
        <script src="assets/js/header.js" defer></script>
        
        <!--Stylesheets-->
        <link rel="stylesheet" type="text/css" href="assets/css/style.css"> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css" integrity="sha512-wR4oNhLBHf7smjy0K4oqzdWumd+r5/+6QO/vDda76MW5iug4PT7v86FoEkySIJft3XA0Ae6axhIvHrqwm793Nw==" crossorigin="anonymous" referrerpolicy="no-referrer" />      

    </head>

 <body>
  <!-- Cookies -->
  <?php include 'includes/cookies.php';?>  
    
  <!--Sidebar-->
  <?php include 'includes/sidebar.php'; ?> 

  <!--Page Wrapper-->
  <div class="page-wrapper">

        <!-- Sticky Header-->
        <div id="main-header">

            <!--Header-->
            <?php include 'includes/header.php'; ?>  

            <!--Navbar-->
            <?php include 'includes/navbar.php'; ?>

        </div>

  <!-- Page Content -->
    <div class="page-content-wrapper">

        <!-- Banner -->
        <?php include 'includes/banner.php'; ?> 
                                          
        <!-- Services -->
        <?php include 'includes/services.php'; ?> 

        <!-- Accreditations -->
        <?php include 'includes/accreditations.php'; ?> 
                
        <!-- About Content -->
        <?php include 'includes/about.php'; ?>     

        <!-- News -->
        <?php include 'includes/news.php'; ?>                 

        <!-- Clients -->
        <?php include 'includes/clients.php';?>  

    </div>   

    <!-- Footer -->
    <?php include 'includes/footer.php'; ?> 

  </div>


 </body>


</html>