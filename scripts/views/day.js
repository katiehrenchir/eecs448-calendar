/** Class representing the day */
class Day {

  constructor(){
    this.currDayNum = currentDate.getDate();
    this.currMonthNum = currentDate.getMonth()+1;
  }

  /*
  * Displays the next day, as long as it's not after May 31, 2017
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
  * Displays the previous day,as long as it's not before Aug 1, 2016
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
    let calendar = '<div class="panel panel-default" style="background-color: #FFF">' +
                   '<div class="panel-heading" style="background-color: #FFF">' +
                   '<a id= "prv_btn_day" class="btn btn-danger" style="float:left;" onclick="calendar.dayView.showPrevDay()">PREV</a>' +
                   '<a id= "nxt_btn_day" class="btn btn-danger" style="float:right;" onclick="calendar.dayView.showNextDay()">NEXT</a>' +
                   '<a id= "cur_btn_day" class="btn btn-danger" style="float:right; margin-right:50px" onclick="calendar.dayView.showCurrentDay()">TODAY</a>' +
                   '<h3 class="monthName" align="center">' + month.month + ' ' + date + '</h3>' +
                   '<ul class="list-group">';
    let currDate = currentDate.toISOString().slice(0,10);

    $.ajax({
      url: 'api/dbSetup.php',
      data: '',
      dataType: 'json',
      success: function(data) {
        $.each(data, function(index, event) {
          let currDate = currentDate.toISOString().slice(0,10);
          if (currDate <= event.start_date) {
            $('#day .list-group').append(
              '<li id="' + event.event_id + '" class="list-group-item">' +
              '<div class="">' + event.event_name + '</div>' +
              '<div class="">' + event.event_desc + '</div>' +
              '</li>'
            );
            if (event.start_date != '0000-00-00') {
              $('#' + event.event_id).append(
                '<div class="">' +
                moment(event.start_date, "YYYY-MM-DD").format("ddd, MMM D YYYY") +
                '</div>'
              );
            }
            if (event.end_date != '0000-00-00') {
              $('#' + event.event_id).append(
                '<div class="">' +
                moment(event.end_date, "YYYY-MM-DD").format("ddd, MMM D YYYY") +
                '</div>');
            }
            $('#' + event.event_id).append(
              '<div class="">' +
              moment(event.start_time, "HH-mm-ss").format("h:mm A") +
              '</div>');
            if (event.start_time != event.end_time) {
              $('#' + event.event_id).append(
                '<div class="">' +
                moment(event.end_time, "HH-mm-ss").format("h:mm A") +
                '</div>');
            }
            $('#' + event.event_id).append('<button class="btn btn-primary btn-sm" onclick="editEvent(' + event.event_id + ')">Edit Event</button>');
            $('#' + event.event_id).append('<button class="btn btn-primary btn-sm" onclick="new Form().deleteEvent(' + event.event_id + ')">Delete Event</button>');
          }
          else {
          	$('#day .list-group').append(
              '<li id="' + event.event_id + '" class="list-group-item">' +
              '<div class="">' + event.event_name + '</div>' +
              '<div class="">' + event.event_desc + '</div>' +
              '</li>'
            );
            if (event.start_date != '0000-00-00') {
              $('#' + event.event_id).append(
                '<div class="">' +
                moment(event.start_date, "YYYY-MM-DD").format("ddd, MMM D YYYY") +
                '</div>'
              );
            }
            if (event.end_date != '0000-00-00') {
              $('#' + event.event_id).append(
                '<div class="">' +
                moment(event.end_date, "YYYY-MM-DD").format("ddd, MMM D YYYY") +
                '</div>');
            }
            $('#' + event.event_id).append(
              '<div class="">' +
              moment(event.start_time, "HH-mm-ss").format("h:mm A") +
              '</div>');
            if (event.start_time != event.end_time) {
              $('#' + event.event_id).append(
                '<div class="">' +
                moment(event.end_time, "HH-mm-ss").format("h:mm A") +
                '</div>');
            }
            $('#' + event.event_id).append('<button class="btn btn-primary btn-sm" onclick="editEvent(' + event.event_id + ')">Edit Event</button>');
            $('#' + event.event_id).append('<button class="btn btn-primary btn-sm" onclick="new Form().deleteEvent(' + event.event_id + ')">Delete Event</button>');
          }
        });
      }
    });
    calendar += '</ul></div>';
    $('#day').html(calendar);
  }
}
