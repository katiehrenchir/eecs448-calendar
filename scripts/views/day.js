/** Class representing the day */
class Day {
  /**
  * Populates the daily calendar view with list of events
  */
  populateDayCalendar(month, date)  {
    let calendar = '<table class="day_container">';
    let theDate = currentDate.toISOString().slice(0,10);
    for(let x = 0; x < event_num; x++) {
      if ("2016-09-18" == test_event[x].startDate) {
		let evnt = '<h3>' + test_event[x].title + '</h3><p>' + test_event[x].description + '</p><p>' + test_event[x].startTime + ' - ' + test_event[x].endTime + '</p';
		calendar += '<tr>' + evnt + '</tr>';
      }
    }
    calendar += '</table>';
    $('#day').html('<div class="day"><h3 class="monthName" align="center">' + month.month + ' ' + date + '</h3>' + calendar + '</div>');
  }
}
