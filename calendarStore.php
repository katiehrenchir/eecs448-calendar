<?php

$server = 'mysql.eecs.ku.edu';
$username = 'sazhar';
$password = 'dVBaGrGUnJ24e6uJ';
$db = 'sazhar';

// Create connection
$conn = new mysql_connect($server, $username, $password);

// Check connection
if (!$conn) {
  die('Connection failed: ' . mysql_error());
}

// Test
$query = 'SELECT * FROM COURSE';
mysql_select_db('test');
$data = mssql_query($query, $conn);

if (!$data) {
  die('Could not get data: ' . mysql_error());
}

echo 'Fetched successfully\n' . $data;

mysql_close($conn);

?>
