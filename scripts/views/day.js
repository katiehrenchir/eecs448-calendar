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
    return currDate >= startDate && currDate <= endDate;
  }

  /**
  * Populates the daily calendar view with list of events
  */
  populateDayCalendar(month, date)  {
    let calendar = '<table class="day_container">';
    let currDate = currentDate.toISOString().slice(0,10);

    $.ajax({
      url: 'api/dbSetup.php',
      data: '',
      dataType: 'json',
      success: function(data) {
        $.each(data, function(index, event) {
          let cDate = new Date(date);
          let sDate = new Date(event.start_date);
          let eDate = new Date(event.end_date);
          let isInRange = new Day().checkDate(cDate, sDate, eDate);

          if (currDate >= event.start_date && currDate <= event.end_date) {
            let evnt = '<h3>' + event.event_name + '</h3><p>' + event.event_desc + '</p><p>' + event.start_date + ' - ' + event.end_date + '</p';
            calendar += '<tr>' + evnt + '</tr>';
          } else {
            console.log("No events on this day");
          }
        });

        calendar += '</table>';
        $('#day').html('<div class="day"><h3 class="monthName" align="center">' + month.month + ' ' + date + '</h3>' + calendar + '</div>');
      }
    });
  }
}
