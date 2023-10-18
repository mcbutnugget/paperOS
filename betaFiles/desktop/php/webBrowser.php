<?php
require 'https://paperos.glitch.me/vendor/autoload.php'; // You'll need to include Goutte library

use Goutte\Client;

$client = new Client();

// Specify the target URL
$target_url = 'https://www.ixl.com/diagnostic/arena';

try {
    $crawler = $client->request('GET', $target_url);

    // Get and display the HTML content
    $htmlContent = $crawler->html();
    echo $htmlContent;
} catch (Exception $e) {
    echo "Failed to fetch the webpage: " . $e->getMessage();
}
?>
