<?php

// Database config
    $host = getenv('MYSQL_HOST');
    $user = getenv('MYSQL_USER');
    $pass = getenv('MYSQL_PASSWORD');
    $db = getenv('MYSQL_DATABASE');

        // Check valid environment variables
        if (!$host || !$user || !$pass || !$db) {
            die("Database config error.");
        }

        // Database connection 
         $conn = new mysqli($host, $user, $pass, $db);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 


