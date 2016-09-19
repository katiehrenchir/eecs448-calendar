/** Class representing the day */
class Day {
	
  constructor(){
    this.currDayNum = currentDate.getDate();
    this.currMonthNum = currentDate.getMonth()+1;
  }

  /*
  /Displays the next day, as long as it's not after May 31, 2017
  */
  showNextDay() {
	if(this.currMonthNum != 5 && this.currDayNum != 31) {
		this.currDayNum += 1;
		if(months[this.currMonthNum].days < this.currDayNum){
			if(this.currMonthNum == 12){
				this.currMonthNum = 1;
			}
			else{
				this.currMonthNum += 1;
			}
			this.currDayNum = 1;
		}
    	this.populateDayCalendar(months[this.currMonthNum], this.currDayNum);
    	if (this.currMonthNum == 5 && this.currDayNum == 31) {
			document.getElementById("nxt_btn_day").className = "btn btn-danger disabled";
		}
    }
  }

  /*
  /Displays the previous day,as long as it's not before Aug 1, 2016
  */
  showPrevDay() {
     if (this.currMonthNum != 8 && this.currDayNum != 1) {
		this.currDayNum -= 1;
		if(this.currDayNum == 0){
			if(this.currMonthNum == 1){
				this.currMonthNum = 12;
			}
			else{
				this.currMonthNum -= 1;
			}
			this.currDayNum = 31;
		}
    	this.populateDayCalendar(months[this.currMonthNum], this.currDayNum);
    	if (this.currMonthNum == 8 && this.currDayNum == 1) {
			document.getElementById("prv_btn_day").className = "btn btn-danger disabled";
		}
    }
  }
  
  /**
  * Displays the current date's day view
  */
  showCurrentDay() {
	let currentMonth = months.filter(function(m) {
      return m.numeric === currentDate.getMonth() + 1;
    })[0];
    this.populateDayCalendar(currentMonth, currentDate.getDate());
    this.currDayNum = currentDate.getDate();
    this.currMonthNum = currentDate.getMonth()+1;
  }
  
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
      }
	  
	  calendar += '</table>';
		$('#day').html('<div class="day"><h3 class="monthName" align="center">' + month.month + ' ' + date + '</h3>' + calendar + '</div>');
		$('#day .day').prepend(
		'<a id= "prv_btn_day" class="btn btn-danger" style="float:left;" onclick="calendar.dayView.showPrevDay()">PREV</a>',
		'<a id= "nxt_btn_day" class="btn btn-danger" style="float:right;" onclick="calendar.dayView.showNextDay()">NEXT</a>',
		'<a id= "cur_btn_day" class="btn btn-danger" style="float:right; margin-right:50px" onclick="calendar.dayView.showCurrentDay()">TODAY</a>'
		);
    });
  }
}
