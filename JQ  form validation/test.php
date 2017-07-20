<?php

$link = mysqli_connect("localhost", "root", "", "firstdb");

if ($link === false) {
    
    die("ERROR: Could not connect. " . mysqli_connect_error());
    
}


$name     = $_POST['name'];
$password = $_POST['password'];



$sql = "INSERT INTO human (name,password) VALUES ('$name','$password')";

if (mysqli_query($link, $sql)) {
    
    echo "Records inserted successfully.";
    
} else {
    
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
    
}







echo "Zdraweite " . $name . "kak ste ? ";


mysqli_close($link);

?>
