<?php

  //----------------------------------------------------------------------
  // Database information
  //----------------------------------------------------------------------
  $server = 'mysql.eecs.ku.edu';
  $username = 'athomas';
  $password = 'Password123!';

  $db = 'athomas';
  $table = 'focusDate';

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
  $queryResult = mysql_query('SELECT * FROM focusDate', $con);
  if (empty($queryResult)) {
    $sql = 'CREATE TABLE IF NOT EXISTS date (
            date_id INT NOT NULL PRIMARY KEY DEFAULT '1',
            month INT NOT NULL,
            day INT NOT NULL,
            year INT NOT NULL,';
    $queryResult = mysql_query($sql, $con);
    if (!$queryResult) {
      die('Could not create table: ' . mysql_error());
    }
  }

  $dateData = [];
  while($row = mysql_fetch_assoc($queryResult)) {
    $dateData[] = $row;
  }

  //----------------------------------------------------------------------
  // echo result as json
  //----------------------------------------------------------------------
  echo json_encode($dateData, JSON_PRETTY_PRINT);

?>
