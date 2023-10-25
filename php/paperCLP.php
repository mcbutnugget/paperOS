<html>
    <head>

    </head>
    <body>
        <?php

$rbi = new RBI\Browser();

$rbi->on('ready', function() use ($rbi) {
  $rbi->load($_SERVER['REQUEST_URI']);
});

$rbi->on('data', function($data) use ($rbi) {
  echo $data;
});

$rbi->run();
        ?>
</body>
