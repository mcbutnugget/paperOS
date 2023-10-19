<?php

if (isset($_GET['url'])) {
    $url = $_GET['url'];

    // Fetch the content of the external webpage
    $content = file_get_contents($url);

    // Extract scripts and styles using regular expressions
    $scripts = [];
    $styles = [];

    // Extract script tags
    preg_match_all('/<script\b[^>]*src=["\'](https?:\/\/[^"\']+)["\'][^>]*>.*<\/script>/i', $content, $scriptMatches);
    if (!empty($scriptMatches[1])) {
        $scripts = $scriptMatches[1];
    }

    // Extract link tags for stylesheets
    preg_match_all('/<link\b[^>]*rel=["\']stylesheet["\'][^>]*href=["\'](https?:\/\/[^"\']+)["\'][^>]*>/i', $content, $styleMatches);
    if (!empty($styleMatches[1])) {
        $styles = $styleMatches[1];
    }

    // Create an array to hold the HTML content, scripts, and styles
    $response = [
        'html' => $content,
        'scripts' => $scripts,
        'styles' => $styles,
    ];

    // Set the content type to JSON
    header('Content-Type: application/json');

    // Send the response as JSON
    echo json_encode($response);
} else {
    // Handle errors or invalid requests
    echo json_encode(['error' => 'Invalid request']);
}
