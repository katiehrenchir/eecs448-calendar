<?php

  //----------------------------------------------------------------------
  // Database information
  //----------------------------------------------------------------------
  $server = 'mysql.eecs.ku.edu';
  $username = 'sazhar';
  $password = 'dVBaGrGUnJ24e6uJ';

  $db = 'sazhar';
  $table = 'events';

  //----------------------------------------------------------------------
  // Connect to the database
  //----------------------------------------------------------------------
  $con = mysql_connect($server, $username, $password);
  $dbs = mysql_select_db($db, $con);
  if (!$con) {
    die('Connection failed: ' . mysql_error());
  }

  //----------------------------------------------------------------------
  // Query database for data
  //----------------------------------------------------------------------
  $queryResult = mysql_query('SELECT * FROM events', $con);
  if (empty($queryResult)) {
    $sql = 'CREATE TABLE IF NOT EXISTS events (
            event_id INT AUTO_INCREMENT PRIMARY KEY,
            event_name VARCHAR(140) NOT NULL,
            event_desc TINYTEXT NOT NULL,
            start_date DATE NOT NULL,
            end_date DATE NOT NULL,
            start_time TIME NOT NULL,
            end_time TIME NOT NULL)';
    $queryResult = mysql_query($sql, $con);
    if (!$queryResult) {
      die('Could not create table: ' . mysql_error());
    }
  }

  $eventData = [];
  while($row = mysql_fetch_assoc($queryResult)) {
    $eventData[] = $row;
  }

  //----------------------------------------------------------------------
  // echo result as json
  //----------------------------------------------------------------------
  echo json_encode($eventData, JSON_PRETTY_PRINT);

?>
