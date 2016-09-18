/** Class representing the day */
class Day {
  /**
  * Populates the daily calendar view with list of events
  */
  populateDayCalendar(month, date)  {
    let calendar = '<table class="day_container"><tr>' + '</tr><tr>';
    let theDate = currentDate.toISOString().slice(0,10);
    for(let x = 0; x < event_num; x++) {
      if ("2016-09-17" == test_event[x].startDate) {
        document.write(test_event[x].title);
      }
    }
    calendar += '</tr></table>';
    $('#day').html('<div class="day"><h3 class="monthName" align="center">' + month.month + ' ' + date + '</h3>' + calendar + '</div>');
  }
}
