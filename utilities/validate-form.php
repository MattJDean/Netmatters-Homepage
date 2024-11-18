<?php

// Debug
ini_set('display_errors', 1);
error_reporting(E_ALL);
ini_set('error_log', $_SERVER['DOCUMENT_ROOT'] . 'utilities/php-error.log');

header('Content-Type: application/json');

ob_start();


$response = ["success" => false, "message" => ""];


// Check database config exists at path and include it if it does.
$path = $_SERVER['DOCUMENT_ROOT'] . '/utilities/db-config.php';
if (file_exists($path)) {
    include $path;
} else {
    $response['message'] = "Database configuration file not found.";
    error_log("db-config.php not found at $path");
    echo json_encode($response);
    exit;
}

// Check if request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    

    // Capture and sanitize input
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8') : '';
    $company = isset($_POST['company']) ? trim($_POST['company']) : '';
    $email = isset($_POST['email']) ? htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8') : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    $marketingInfo = isset($_POST['marketing_info']) ? (int) $_POST['marketing_info'] : 0;

    $errors = [];

    // Validate name
    if (empty($name)) {
        $errors[] = "Name is required.";
    } elseif (!preg_match('/^[A-Za-z][A-Za-z\s]*$/', $name)) {
        $errors[] = "Name cannot include numbers or special characters.";
    }

    // Validate email
    if (empty($email)) {
        $errors[] = "Email is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Please enter a valid email address.";
    }

    // Validate phone
    if (empty($phone)) {
        $errors[] = "Phone number is required.";
    } elseif (!preg_match('/^[0-9]{10,15}$/', $phone)) {
        $errors[] = "Please enter a valid phone number (digits only, 10-15 digits).";
    }

    // Validate message
    if (empty($message)) {
        $errors[] = "Message is required.";
    } elseif (strlen($message) < 20) {
        $errors[] = "Message must be at least 20 characters long.";
    }

    // Check for validation errors
    if (!empty($errors)) {
        $response['success'] = false;
        $response['message'] = implode(' ', $errors); // Combine all error messages
        echo json_encode($response);
        exit;
    }

    // If validation passes, post to database

    try {
        
        $stmt = $conn->prepare("INSERT INTO contact_form_submissions (name, company, email, phone, message, marketing_info) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssi", $name, $company, $email, $phone, $message, $marketingInfo);
        $stmt->execute();
        $response['success'] = true;
        $response['message'] = "Your message has been sent!";
        

    } catch (Exception $e) {
        
        unset($response['errors']);
        $response['message'] = "Database error: " . $e->getMessage();
        error_log("Database error: " . $e->getMessage() . " in " . $e->getFile() . " on line " . $e->getLine());
    }   
}

// Output response as JSON
$output = ob_get_clean(); // Capture non-JSON output
if (!empty($output)) {
    error_log("Non-JSON output detected: " . $output);
}
echo json_encode($response);

$conn->close();

exit;
