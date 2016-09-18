/** Class representing a month */
class Month {

  /**
  * Gets the current displayed month
  * @returns {Number} Value of the current month
  */
  getMonth() {
    let currMonth = months.filter(function(m) {
      return m.numeric === currentDate.getMonth() + 1;
    })[0];
    for (var i = 0; i < 10; i++) {
      if (currMonth.numeric == months[i].numeric) {
        return i;
      }
    }
    return -1;
  };


  /**
  * Displays the next month after current
  */
  showNextMonth() {
    if (displayedMonth != 9) {
      this.populateMonthCalendar(months[displayedMonth + 1]);
      displayedMonth += 1;
      if (displayedMonth == 9) {
        document.getElementById("nxt_btn").className = "btn btn-danger disabled";
      }
    }
  }

  /**
  * Displays the previous month after current
  */
  showPrevMonth() {
    if (displayedMonth != 0) {
      this.populateMonthCalendar(months[displayedMonth - 1]);
      displayedMonth -= 1;
      if (displayedMonth == 0) {
        document.getElementById("prv_btn").className = "btn btn-danger disabled";
      }
    }
  }
  
  /**
  * Displays the current date's month
  */
  showCurrentMonth() {
	displayedMonth = this.getMonth();
	this.populateMonthCalendar(months[displayedMonth]);
  }

  /**
  * Populates the monthly calendar view with dates
  * @param {Object} month - The month object
  */
  populateMonthCalendar(month) {
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
    $('#month').html('<div class="month"><h3 class="monthName" align="center">' + month.month + '</h3>' + calendar + '</div>');
    $('#month .month').prepend(
      '<a id= "prv_btn" class="btn btn-danger" style="float:left;" onclick="calendar.monthView.showPrevMonth()">PREV</a>',
      '<a id= "nxt_btn" class="btn btn-danger" style="float:right;" onclick="calendar.monthView.showNextMonth()">NEXT</a>',
	  '<a id= "cur_btn" class="btn btn-danger" style="float:right; margin-right:50px;" onclick="calendar.monthView.showCurrentMonth()">TODAY</a>'
    );
  }

}
