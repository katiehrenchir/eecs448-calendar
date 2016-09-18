/** Class representing the day */
class Day {

  /**
  * Checks if a date is in range
  * @author http://stackoverflow.com/questions/24246092/checking-if-a-date-falls-between-a-range-of-dates
  * @param {Date} currDate - The current date specified
  * @param {Date} startDate - The starting date range
  * @param {Date} endDate - The ending date range
  * @returns {Boolean} True if the date is in range, false otherwise
  */
  checkDate(currDate, startDate, endDate) {
    let realEndDate = new Date(endDate.getTime());
    realEndDate.setDate(realEndDate.getDate() + 1);
    let inRange = currDate >= startDate && currDate <= endDate;
    return inRange;
  }

  /**
  * Populates the daily calendar view with list of events
  */
  populateDayCalendar(month, date)  {
    let calendar = '<table class="day_container">';
    let theDate = currentDate.toISOString().slice(0,10);

    let events = [];
    $.ajax({
      url: 'api/dbSetup.php',
      data: '',
      dataType: 'json',
      success: function(data) {
        $.each(data, function(index, event) {
          if (this.checkDate(date, event.start_date, event.end_date)) {
            events.push(event);
          }
        });
      }
    });

    console.log(events);

    for (let x = 0; x < event_num; x++) {
      if ("2016-09-18" == test_event[x].startDate) {
        let evnt = '<h3>' + test_event[x].title + '</h3><p>' + test_event[x].description + '</p><p>' + test_event[x].startTime + ' - ' + test_event[x].endTime + '</p';
        calendar += '<tr>' + evnt + '</tr>';
      }
    }
    calendar += '</table>';
    $('#day').html('<div class="day"><h3 class="monthName" align="center">' + month.month + ' ' + date + '</h3>' + calendar + '</div>');
  }
}
