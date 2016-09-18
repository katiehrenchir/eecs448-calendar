/** Class representing a week */
class Week {
  /**
  * Initializes the week view
  */
  constructor() {
    this.displayedWeek = {};
    this.chopped_up = false;
    this.chopped_down = false;
    this.newStart = 2;
  }

  /**
  * Displays the next week after current
  */
  showNextWeek() {
    if (!this.chopped_up) {
      let month = this.displayedWeek.mnth;
      let date = this.displayedWeek.dt - this.displayedWeek.dy;
      let dayOfWeek = 0;
      this.populateWeekCalendar(month, date + 7, dayOfWeek);
      this.displayedWeek= {
        mnth: month,
        dt: date + 7,
        dy: dayOfWeek
      };
    } else {
      this.populateWeekCalendar(this.getNextMonth(this.displayedWeek.mnth), this.newStart, 0);
      this.displayedWeek= {
        mnth: this.getNextMonth(this.displayedWeek.mnth),
        dt: this.newStart,
        dy: 0
      };
      this.chopped_up = false;
    }
  }

  /**
  * Displays the previous week after current
  */
  showPrevWeek() {
    if (!this.chopped_down) {
      let month = this.displayedWeek.mnth;
      let date = this.displayedWeek.dt- this.displayedWeek.dy;
      let dayOfWeek = 0;
      this.populateWeekCalendar(month, date - 7, dayOfWeek);
      this.displayedWeek = {
        mnth: month,
        dt: date - 7,
        dy: dayOfWeek
      };
    } else {
      this.populateWeekCalendar(this.getPrevMonth(this.displayedWeek.mnth), this.newStart, 0);
      this.displayedWeek= {
        mnth: this.getPrevMonth(this.displayedWeek.mnth),
        dt: this.newStart,
        dy: 0
      };
      this.chopped_down = false;
    }
  }
  
  /**
  * Displays the current date's month
  */
  showCurrentWeek() {
	let currentMonth = months.filter(function(m) {
      return m.numeric === currentDate.getMonth() + 1;
    })[0];
    this.populateWeekCalendar(currentMonth, currentDate.getDate(), currentDate.getDay());
    this.displayedWeek = {
      mnth: currentMonth,
      dt: currentDate.getDate(),
      dy: currentDate.getDay()
    };
  }


  /**
  * Retrieves the next month after current
  * @param {Number} curr - Value of the current month
  * @returns {Number} Value of the next month
  */
  getNextMonth(curr) {
    for (var i = 0; i < 10; i++) {
      if(months[i] == curr){
        return months[i + 1];
      }
    }
  }

  /**
  * Retrieves the prev month before current
  * @param {Number} curr - Value of the current month
  * @returns {Number} Value of the previous month
  */
  getPrevMonth(curr) {
    for (var i = 0; i < 10; i++) {
      if (months[i] == curr) {
        return months[i - 1];
      }
    }
  }


  /**
  * Populates the weekly calendar view with dates
  */
  populateWeekCalendar(month, date, dayOfWeek) {
    let calendar = '<table class="day_container"><tr>' +
                   '<th>Su</th>' + '<th>M</th>' +
                   '<th>Tu</th>' + '<th>W</th>' +
                   '<th>Th</th>' + '<th>F</th>' +
                   '<th>Sa</th>' + '</tr><tr>';

    let x = 0;
    let startOfWeek = date - dayOfWeek;
    for (let i = 0; i < 7; i++) {
      if (startOfWeek > month.days) {
        if (displayedMonth != 9) {
          displayedMonth += 1;
        }
        startOfWeek = 1;
        this.chopped_up = true;
        this.newStart = this.displayedWeek.dt=(6-i)+2;
        calendar += '<td onclick="changeView(\'day\')">' + startOfWeek + '</td>';
        startOfWeek++;
      } else if (startOfWeek < 1) {
        if (x == 0) {
          for (var m = 0; m < 10; m++) {
            if (months[m] == this.displayedWeek.mnth) {
              this.newStart = (months[m - 1]).days - 7 + startOfWeek;
            }
          }
          x++;
        }
        this.chopped_down = true;
        calendar += '<td onclick="changeView(\'day\')">' + (months[displayedMonth - 1].days + startOfWeek) + '</td>';
        startOfWeek++;
      } else {
        let highlight = '';
        if (currentDate.getMonth() + 1 === month.numeric && currentDate.getDate() === startOfWeek) {
          highlight = 'currentDate';
        }
        calendar += '<td class="' + highlight + '" onclick="changeView(\'day\')">' + startOfWeek + '</td>';
        startOfWeek++;
      }
    }

    calendar += '</tr></table>';
    $('#week').html('<div class="week"><h3 class="monthName" align="center">' + month.month + '</h3>' + calendar + '</div>');
    $('#week .week').prepend(
      '<a id= "prv_btn_week" class="btn btn-danger" style="float:left;" onclick="calendar.weekView.showPrevWeek()">PREV</a>',
      '<a id= "nxt_btn_week" class="btn btn-danger" style="float:right;" onclick="calendar.weekView.showNextWeek()">NEXT</a>',
	  '<a id= "cur_btn_week" class="btn btn-danger" style="float:right; margin-right:50px" onclick="calendar.weekView.showCurrentWeek()">TODAY</a>'
    );
  }

}
