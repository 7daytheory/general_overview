<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css">

    <title>Test Index Page</title>
</head>
<body>
    <?php include "inc/nav.html" ?>

    <?php
    //What will the below display
    $x = true and false;
    var_dump($x);
    //returns booL(true)

    //$x = true;       // sets $x equal to true
    //true and false;  // results in false, but has no affect on anything

    //Values of A and B
    $a = '1';
    $b = &$a; //reference to $a (not setting it to b) 
    $b = "2$b"; //b == 21 - reference above means anything affected to b also changes a

    //both are equal to 21
    echo "<br>";

    //Bools - What will the below output be
    var_dump(0123 == 123); // false (both integers)
    var_dump('0123' == 123); // true (one is string and one is integer)
    var_dump('0123' === 123); // false (string === integer)

?>
    
<script src="js/scripts.js"></script>
</body>
</html>