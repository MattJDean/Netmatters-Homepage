<?php

// Database config
function loadEnv($path) {
    if (!file_exists($path)) {
        die("Missing .env file.");
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) {
            continue; // Skip comments
        }
        list($key, $value) = explode('=', $line, 2);
        $key = trim($key);
        $value = trim($value);
        $value = trim($value, '"'); // Remove surrounding quotes if present
        putenv("$key=$value");
    }
}

// Load .env
loadEnv(__DIR__ . '/.env');
    $host = getenv('HOST');
    $user = getenv('USER');
    $pass = getenv('PASS');
    $db   = getenv('DATABASE');

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
       