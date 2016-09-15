<?php

  include('event.php');

  $server = 'mysql.eecs.ku.edu';
  $username = 'sazhar';
  $password = 'dVBaGrGUnJ24e6uJ';
  $db = 'sazhar';

  // Create connection
  $conn = mysql_connect($server, $username, $password);
  mysql_select_db($db);
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
            end_date DATE,
            start_time TIME,
            end_time TIME)';
    $eventData = mysql_query($sql, $conn);
    if (!$eventData) {
      die('Could not create table: ' . mysql_error());
    }
  }

  if (!$eventData) {
    die('Could not get data: '. mysql_error());
  }

  $rowDisplay = '<table style="border: thin solid black; text-align: left;">
                 <tr>
                 <th>Name</th>
                 <th>Description</th>
                 <th>Start Date</th>
                 <th>End Date</th>
                 <th>Start Time</th>
                 <th>End Time</th>
                 </tr>';
  while ($row = mysql_fetch_array($eventData)) {
    $rowDisplay .= '<tr">';
    $rowDisplay .= '<td>' . $row{'event_name'} . '</td>';
    $rowDisplay .= '<td>' . $row{'event_desc'} . '</td>';
    $rowDisplay .= '<td>' . $row{'start_date'} . '</td>';
    $rowDisplay .= '<td>' . $row{'end_date'} . '</td>';
    $rowDisplay .= '<td>' . $row{'start_time'} . '</td>';
    $rowDisplay .= '<td>' . $row{'end_time'} . '</td>';
    $rowDisplay .= '</tr>';
  }
  $rowDisplay .= '</table>';

  echo $rowDisplay;
  echo '<br>Fetched successfully<br>';

  $event = new Event('test', 'testdesc', '2016-09-14', '2016-09-14', '01:00:00', '14:00:00');
  $sql = 'INSERT INTO events (event_name, event_desc , start_date, end_date, start_time, end_time)
          VALUES ("' . $event->name . '",  "' . $event->name . '",  "' . $event->startDate . '",  "' . $event->endDate . '",  "' . $event->startTime . '",  "' . $event->endTime . '")';
  if (mysql_query($sql, $conn)) {
    echo 'New record created successfully';
  } else {
    echo 'Error: ' . mysql_error();
  }

  mysql_close($conn);

?>
