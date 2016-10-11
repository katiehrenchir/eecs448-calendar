<?php
include 'datebSetup.php';

$date = $_POST['day'];
$month = $_POST['month'];
$year = $_POST['year'];

$sql = 'UPDATE focusDate
				SET month = "' . $month . '",
						day = "' . $date . '",
						year = "' . $year . '"
				WHERE date_id = '1;

$result = mysql_query($sql);
if ($result)
{
	echo 'Date changed.';
}
 ?>
