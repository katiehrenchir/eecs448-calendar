<?php
include 'dbSetup.php';

$eventId = $_POST['eventId'];
$eventName = mysql_real_escape_string($_POST['eventName']);
$eventDesc = mysql_real_escape_string($_POST['eventDesc']);
$startDate = $_POST['startDate'];
$endDate = $_POST['endDate'];
$startTime = $_POST['startTime'];
$endTime = $_POST['endTime'];

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
  echo 'Record edited.';
}

echo $eventName;

?>
