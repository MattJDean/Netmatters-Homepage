<?php

    // Database config
    $host = 'mysql'; 
    $db   = getenv('MYSQL_DATABASE');
    $user = getenv('MYSQL_USER');
    $pass = getenv('MYSQL_PASSWORD');

        // Check valid environment variables
        if (!$host || !$db || !$user || !$pass) {
            die("Database config error.");
            echo "Database config error.";
        }
            


    $conn = new mysqli($host, $user, $pass, $db);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
            echo "Connected successfully to the database.";
        } 
            
    $conn->close();

