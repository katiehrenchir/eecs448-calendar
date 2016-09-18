/** Class representing the day */
class Day {

    constructor()   {
        //this.displayedDay = {};
        this.displayNxtDay = true;
        this.currDayNum = currentDate.getDate();
        this.currMonthNum = currentDate.getMonth()+1;
    }

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
    $('#day .day').prepend(
      '<a id= "prv_btn" class="btn btn-danger" style="float:left;" onclick="calendar.dayView.showPrevDay()">PREV</a>',
      '<a id= "nxt_btn" class="btn btn-danger" style="float:right;" onclick="calendar.dayView.showNextDay()">NEXT</a>'
    );

    //alert(months[this.currMonthNum-1].days);
//    alert(currentDate.getDate());

    //alert(this.displayedDay.mnth);
    //alert(getNextMonth(currentMonth));
  }

  /*
  /Displays the next day, as long as it's not after May 31, 2017
  */
  showNextDay() {
      let theDate = currentDate.toISOString().slice(0,10);
      document.getElementById("nxt_btn").className = "btn btn-danger disabled";
     if(this.displayNextDay)    {
         //reaches May 31st
         if(this.currMonthNum == 5 && this.currDayNum < month.days) {
             this.displayNextDay = false;
         }
         else if(this.currDayNum != months[this.currMonthNum-1].days)   {
             alert("hello");
         }
    }
  }

  /*
  /Displays the previous day,as long as it's not before Aug 1, 2016
  */
  showPrevDay() {
      let theDate = currentDate.toISOString().slice(0,10);
      document.getElementById("prv_btn").className = "btn btn-danger disabled";

  }
/*
  getNextMonth(currentMonth)    {
      for(var x=0;x <10; x++)   {
          if(months[x] == currentMonth) {
              return months[x+1];
          }
      }
  }
}

getPrevMonth(currentMonth)  {
    for(var x=0;x <10; x++)   {
        if(months[x] == currentMonth) {
            return months[x-1];
        }
    }
}*/
}
