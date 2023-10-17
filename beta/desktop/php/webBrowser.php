<div>
    <?php
        $file = fopen("https://posh.glitch.me/", "r") or die("I DIED ECAUSE CANT OPNEN DA FILE");
        echo fread($file, fread("https://posh.glitch.me/"));
        fclose($file);
    ?>
</div>