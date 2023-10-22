<html>
<?php
$browser = new RBI.Browser();

$browser->load($_GET['url']);

echo $browser->getData();
?>
</html>