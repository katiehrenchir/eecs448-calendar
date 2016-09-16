<?php
include 'dbSetup.php';

$eventId = $_POST['eventId'];
$sql = 'DELETE FROM events WHERE event_id=' . $eventId;
$result = mysql_query($sql);
if ($result) {
  echo 'Record deleted.';
}

?>
