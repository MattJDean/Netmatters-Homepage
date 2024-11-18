<?php

// Database config
    $host = 'mysql';
    $user = getenv('MYSQL_USER');
    $pass = getenv('MYSQL_PASSWORD');
    $db   = getenv('MYSQL_DATABASE');

        // Check valid environment variables
        if (!$host || !$user || !$pass || !$db) {
            die("Database config error.");
        }

    $conn = new mysqli($host, $user, $pass, $db);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 


// $host = 'localhost';
// $port = '3306';
// $user = 'matthewdean_admin';
// $password = 'PHP_myadmin4488';
// $database = 'matthewdean_folio';

// $conn = new mysqli($host, $user, $password, $database, $port);

// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }
// echo "Connected successfully!";
       