<?php
$host = 'mysql';
$db   = getenv('MYSQL_DATABASE');
$user = getenv('MYSQL_USER');
$pass = getenv('MYSQL_PASSWORD');

// Verify that environment variables are being read correctly
if (!$db || !$user || !$pass) {
    die("Environment variables are not being loaded correctly.");
}

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully to the database.";
$conn->close();
?>
