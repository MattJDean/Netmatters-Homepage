<?php

require_once __DIR__ . '/vendor/autoload.php'; 
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);

$dotenv->load();
   
// Database configuration
$host = $_ENV['HOST']; 
$user = $_ENV['USER'];
$pass = $_ENV['PASS'];
$db   = $_ENV['DATABASE'];

// Validate the required environment variables
if (!$host || !$user || !$pass || !$db) {
    die("Config error.");
}

// Create a MySQL connection
$conn = new mysqli($host, $user, $pass, $db);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
