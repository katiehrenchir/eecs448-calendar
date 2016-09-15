<?php

class CalendarService {
    function addEvent($event) {
        $sql = 'INSERT INTO
                  events ("event_name", "event_desc",
                          "start_date", "end_date",
                          "start_time", "end_time")
                VALUES
                  ("'.$event->name.'", "'.$event->desc.'",
                   "'.$event->startDate.'", "'.$event->endDate.'",
                   "'.$event->startTime.'", "'.$event->endTime.'")';
        if (mysql_query($sql, $conn)) {
            echo 'New record created successfully';
        } else {
            echo 'Error: ' . mysql_error();
        }
    }
}

?>
