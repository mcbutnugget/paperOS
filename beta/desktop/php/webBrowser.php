<div>
    <?php
        $file = fopen("AMOGUS.txt", "w") or die("I DIED ECAUSE CANT OPNEN DA FILE");
        $text = "asdfasdf\n";
        fwrite($file,$text);
        echo fread($file);
        fclose($file);
    ?>
</div>