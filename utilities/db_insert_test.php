<?php

// Script to test connection to database and insert 100 random records

// Database connection details
$host = getenv('MYSQL_DB_HOST') ?: 'mysql'; 
$db   = getenv('MYSQL_DATABASE') ?: 'netmatters_db';
$user = getenv('MYSQL_USER') ?: 'myuser';
$pass = getenv('MYSQL_PASSWORD') ?: 'mypassword';

// Create a new connection
$conn = new mysqli($host, $user, $pass, $db);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to generate random strings
function generateRandomString($length = 10) {
    $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

// Loop to insert 100 random entries
for ($i = 1; $i <= 100; $i++) {
    $name = generateRandomString(rand(5, 10));  // Random name between 5 and 10 characters
    $description = generateRandomString(rand(20, 50));  // Random description between 20 and 50 characters
    
    // SQL statement to insert a random record
    $sql = "INSERT INTO test_table (name, description) VALUES ('$name', '$description')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Record $i created successfully.<br>";
    } else {
        echo "Error on record $i: " . $sql . "<br>" . $conn->error . "<br>";
    }
}

// Close the connection
$conn->close();
?>
