<?php

$response = ["success" => false, "message" => ""];

// Enable error logging
ini_set('log_errors', 1);
ini_set('error_log', $_SERVER['DOCUMENT_ROOT'] . '/utilities/php-error.log');
error_log("Script started.");

// Include database configuration
include $_SERVER['DOCUMENT_ROOT'] . '/utilities/db-config.php';

// Check if request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    error_log("POST request received.");
    file_put_contents($_SERVER['DOCUMENT_ROOT'] . '/utilities/debug.log', "POST Data: " . print_r($_POST, true), FILE_APPEND);

    // Capture and sanitize input
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $company = isset($_POST['company']) ? trim($_POST['company']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    $marketingInfo = isset($_POST['marketing_info']) ? (int) $_POST['marketing_info'] : 0;

    // Log individual fields
    error_log("Name: $name, Email: $email, Phone: $phone, Message: $message");

    // Normalize and validate phone
    if (!isset($_POST['phone'])) {
        error_log("Phone field missing in POST data.");
        $response['message'] = "Phone number is required.";
        echo json_encode($response);
        exit;
    }

    if (empty($phone)) {
        error_log("Phone field is empty.");
        $response['message'] = "Phone number is required.";
        echo json_encode($response);
        exit;
    }

    if (!preg_match('/^\+?[0-9]{7,15}$/', $phone)) {
        error_log("Phone validation failed.");
        $response['message'] = "Valid phone number is required.";
        echo json_encode($response);
        exit;
    }

    // Insert into database
    $stmt = $conn->prepare("INSERT INTO contact_form_submissions (name, company, email, phone, message, marketing_info) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssi", $name, $company, $email, $phone, $message, $marketingInfo);

    if ($stmt->execute()) {
        $response['success'] = true;
        $response['message'] = "Thank you for your message!";
    } else {
        $response['message'] = "Failed to submit your message. Please try again.";
    }

    $stmt->close();
} else {
    $response['message'] = "Invalid request method.";
}

$conn->close();
error_log("Script finished.");
echo json_encode($response);
exit;
