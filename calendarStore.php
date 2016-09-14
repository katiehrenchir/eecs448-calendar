<?php

$server = 'mysql.eecs.ku.edu';
$username = 'sazhar';
$password = 'dVBaGrGUnJ24e6uJ';
$db = 'sazhar';

// Create connection
$conn = mysql_connect($server, $username, $password);
mysql_select_db($db);

// Check connection
if (!$conn) {
    die('Connection failed: ' . mysql_error());
}

// Create the events table in database if it doesn't already exist
$eventData = null;
$tableName = 'events';

$sql = 'SELECT * FROM events';
$eventData = mysql_query($sql, $conn);

if (empty($eventData)) {
    $sql = 'CREATE TABLE IF NOT EXISTS events (
            event_id INT AUTO_INCREMENT PRIMARY KEY,
            event_name VARCHAR(20) NOT NULL,
            event_desc TINYTEXT NOT NULL,
            start_date DATE NOT NULL,
            end_date DATE NOT NULL)';

    $eventData = mysql_query($sql, $conn);

    if (!$eventData) {
        die('Could not create table: ' . mysql_error());
    }

    echo '<br>Created table successfully<br>';
}

if (!$eventData) {
    die('Could not get data: '. mysql_error());
}

$rowDisplay = '<table><tr><th>Name</th><th>Description</th><th>Date</th></tr></table>';
// while ($row = mysql_fetch_array($eventData)) {
//     $rowDisplay += '<tr>'
//     $rowDisplay += '<td>' . $row{'event_name'} . '<td>';
//     $rowDisplay += '<td>' . $row{'event_desc'} . '<td>';
//     $rowDisplay += '<td>' . $row{'start_date'} . " - " . $row{'end_date'}  . '<td>';
//     $rowDisplay += '</tr>';
// }

echo $rowDisplay;

echo '<br>Fetched successfully<br>';

mysql_close($conn);

?>
