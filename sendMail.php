<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "your@email.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $message = "Name: " . $_POST["name"] . "\n";
    $message .= "Email: " . $_POST["email"] . "\n";
    $message .= "Message: " . $_POST["message"];

    // Additional headers (optional)
    // $headers = "From: webmaster@example.com"; // Set your "From" address

    // Send the email
    $success = mail($to, $subject, $message);

    if ($success) {
        echo "Message sent successfully!";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
