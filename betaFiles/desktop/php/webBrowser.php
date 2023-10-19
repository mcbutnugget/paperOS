<div>
    <?php
        $siteToGet = POST("https://ixl.com/") or die echo "it didn't work :(";

        echo $siteToGet;
    ?>
</div>