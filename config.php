<?php


// JS Scripts

    // JS scripts array 
    $scripts = [
        'accredSlider' => '/assets/js/accredSlider.js',
        'banner' =>  '/assets/js/banner.js',
        'clientsSlider' => '/assets/js/clientsSlider.js',
        'contactForm' => '/assets/js/contactForm.js',
        'cookies' => '/assets/js/cookies.js',
        'header' => '/assets/js/header.js',
        'jquery' => 'https://code.jquery.com/jquery-3.6.0.min.js', 
        'navbar' => '/assets/js/navbar.js',
        'oohAccordion' => '/assets/js/oohAccordion.js',
        'sidebar' => '/assets/js/sidebar.js',
        'slick' => 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js' 
    ];


    // Page JS dependencies
    $pageScripts = [
        'index' => ['jquery', 'slick', 'cookies', 'sidebar', 'header', 'navbar', 'banner', 'accredSlider', 'clientsSlider'],
        'contact' => ['jquery', 'cookies', 'sidebar', 'header', 'navbar', 'oohAccordion', 'contactForm']
    ];


    // Scripts inclusion function
    function includeScripts(array $scriptKeys, array $scripts) {
        $output = ''; 
        foreach ($scriptKeys as $key) {
            if (isset($scripts[$key])) {
                $output .= "<script src=\"{$scripts[$key]}\"></script>\n";
            }
        }
        return $output; // Return value of the function
    }
    
?>
