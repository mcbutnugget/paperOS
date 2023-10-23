<html>
    <head>

    </head>
    <body>
        <?php

            ProxyPass /php/server.php /betaFiles/desktop/php/server.php
            $browser = new RBI.Browser();

            $browser->load($_GET['url']);

            echo $browser->getData();
        ?>
</body>