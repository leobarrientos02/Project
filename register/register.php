<?php
/* Database credentials. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'ezwork');
 
/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
$sql = "INSERT INTO client (`FirstName`, `LastName`, `Email`, `Password`, `Phone`, `BirthDate`) VALUES (?, ?, ?, ?, ?, ?)";
 
if($stmt = mysqli_prepare($link, $sql)){
    // Bind variables to the prepared statement as parameters
    mysqli_stmt_bind_param($stmt, "ssssss", $FirstName, $LastName, $Email, $Password, $Phone, $BirthDate);
    
    // Set parameters
    $FirstName =$_POST['FirstName'];
    $LastName = $_POST['LastName'];
    $Email = $_POST['Email'];
    $Password = $_POST['Password'];
    $Phone = $_POST['Phone'];
    $BirthDate = $_POST['BirthDate'];
    
    // Attempt to execute the prepared statement
    if(mysqli_stmt_execute($stmt)){
        //echo "Records inserted successfully.";
        header("location: ../login/index.html");
    } else{
        //echo "<p>ERROR: Could not execute query: $sql. " . mysqli_error($link) . "</p>";
        header("location: ../404Page/index.html");
    }
} else{
    
    //echo "<p>ERROR: Could not prepare query: $sql. " . mysqli_error($link) ."</p>";
    header("location: ../404Page/index.html");
}
 
// Close statement
mysqli_stmt_close($stmt);
 
// Close connection
mysqli_close($link);


?>