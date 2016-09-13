<?php

$server = "mysql.eecs.ku.edu";
$username = "sazhar";
$password = "mypassword"; // will update this once I figure out a way to encrypt

// Create connection
$conn = new mysql_connect($server, $username, $password);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysql_error());
}

echo "Connected successfully";

?>
