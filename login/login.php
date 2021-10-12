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
}else{


    $Email = $_POST['Email'];
    $Password = $_POST['Password'];

   $sql= "SELECT * FROM `client` WHERE `Email` = '$Email'  and `Password` = '$Password' LIMIT 1";

    $result = $link->query($sql);
    
    if ($result->num_rows == 1) {
      
      // output data of each row
      if($row = $result->fetch_assoc()) {                     
        
        // Redirect user to home page
        header("location: ../ClientProfile/index.php");

      }
    } else {
      header("location: ../404Page/index.html");
      echo "0 results in our system" ."<br>";
      echo "Error Logging in" ."<br>";
          
    }
    $link->close();
  }
?>
