<?php
include 'dbSetup.php';

$eventId = $_POST['eventId'];
$eventName = $_POST['eventName'];
$startDate = $_POST['startDate'];
$endDate = $_POST['endDate'];
$startTime = $_POST['startTime'];
$endTime = $_POST['endTime'];
$eventDesc = $_POST['eventDesc'];

$sql = 'UPDATE events
        SET eventName = "' . $eventName . '",
            eventDesc = "' . $eventDesc . '",
            startDate = "' . $startDate . '",
            startTime = "' . $startTime . '",
            endDate = "' . $endDate . '",
            endTime = "' . $endTime . '"
        WHERE event_id = ' . $eventId;

$result = mysql_query($sql);
if ($result) {
  echo 'Record deleted.';
}

?>
