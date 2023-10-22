<html>
    <head>
        
    </head>
    <body>
        <?php
            $browser = new RBI.Browser();

            $browser->load($_GET['url']);

            echo $browser->getData();
        ?>
</body>