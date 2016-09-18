/** Class representing a year */
class Year {

  /**
  * Populates the yearly calendar view
  */
  populateYearCalendar() {
    $.each(months, function(index, month) {
      let calendar = '<table class="day_container"><tr>' +
                  '<th>Su</th>' + '<th>M</th>' +
                  '<th>Tu</th>' + '<th>W</th>' +
                  '<th>Th</th>' + '<th>F</th>' +
                  '<th>Sa</th>' + '</tr>';

      let cellCount = 1;
      for (let j = 0; j < month.firstDay; j++) {
          calendar += '<td></td>';
          cellCount++;
      }

      for (let i = 1; i <= month.days; i++) {
        let highlight = '';
        if (currentDate.getMonth() + 1 === month.numeric && currentDate.getDate() === i) {
          highlight = 'currentDate';
        }

        if (cellCount === 1) {
          calendar += '<tr>';
        }

        calendar += '<td class="' + highlight + '" onclick="changeView(\'day\')">' + i + '</td>';
        cellCount++;

        if (cellCount === 8) {
          calendar += '</tr>';
          cellCount = 1;
        }
      }

      calendar += '</table>';
      $('#year').append('<div class="month"><h3 class="monthName">' + month.month + '</h3>' + calendar + '</div>');
    });
  }

}
