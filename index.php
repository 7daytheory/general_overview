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

    //After the code below is executed, what will be the value of $text and what will strlen($text) return? Explain your answer.
    // $text = 'John ';
    // $text[10] = 'Doe'; // Adds the letter D to the 10th value of text - so John       D 

    // strlen($text); // 11

    //Write a sample of code showing the nested ternary conditional operator in PHP.
    //$number_class = $number == 0 ? 'blue' : ($number > 0 ? 'green' : 'red'); 
    echo "<br>";
    
    $num = 5;
    $num_class2 = $num > 0 ? 'green' : 'red';
    $num_class = $num == 0 ? 'blue' : $num_class2;

    echo $num_class;

?>
    
<script src="js/scripts.js"></script>
</body>
</html>