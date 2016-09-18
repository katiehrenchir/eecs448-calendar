const months = [
  { 'month': 'August', 'numeric': 8, 'days': 31, 'firstDay': 1 },
  { 'month': 'September', 'numeric': 9, 'days': 30, 'firstDay': 4 },
  { 'month': 'October', 'numeric': 10, 'days': 31, 'firstDay': 6 },
  { 'month': 'November', 'numeric': 11, 'days': 30, 'firstDay': 2 },
  { 'month': 'December', 'numeric': 12, 'days': 31, 'firstDay': 4 },
  { 'month': 'January', 'numeric': 1, 'days': 31, 'firstDay': 0 },
  { 'month': 'February', 'numeric': 2, 'days': 28, 'firstDay': 3 },
  { 'month': 'March', 'numeric': 3, 'days': 31, 'firstDay': 3 },
  { 'month': 'April', 'numeric': 4, 'days': 30, 'firstDay': 6 },
  { 'month': 'May', 'numeric': 5, 'days': 30, 'firstDay': 1 }
];

var test_event = [
{   event_id: "1" ,
    title: "Testing" ,
    description: "This is just a test" ,
    startDate: "2016-09-17" ,
    endDate: "2016-09-17" ,
    startTime: "21:10:00" ,
    endTime: "21:20:00"
},
{   event_id: "2" ,
    title: "Testing" ,
    description: "This is just a test" ,
    startDate: "2016-09-17" ,
    endDate: "2016-09-17" ,
    startTime: "22:10:00" ,
    endTime: "22:20:00"
},
{   event_id: "3" ,
    title: "Testing" ,
    description: "This is just a test" ,
    startDate: "2016-09-17" ,
    endDate: "2016-09-17" ,
    startTime: "23:10:00" ,
    endTime: "23:20:00"
}
];

var event_num = 3;

let currentDate = new Date();
let selectedDate = currentDate;

let current_month = months.filter(function(m) {
      return m.numeric === currentDate.getMonth() + 1;
    })[0];

let current_date = currentDate.getDate();
let current_dayOfWeek = currentDate.getDay();

// This global variable will remember the month that is currently being displayed.
var get_mnth = function(){
  for(var i=0; i<10; i++){
    if(current_month.numeric == months[i].numeric){
      return i;
    }
  }
  return -1;
};

var displayedMonth= get_mnth();
var newStart=2;
var chopped_up= false;
var chopped_down= false;

// This global variable remembers the current week view
var displayedWeek= {};

// Flag to indicate if the current month is over in weekview
var weekView_monthEnd= false;

/** Class representing a calendar. */
class Calendar {

  /**
  * Initializes the calendar views. Default view - Yearly
  */
  init() {
    displayedWeek= {
      mnth: current_month,
      dt: current_date,
      dy: current_dayOfWeek
    };

    this.createCalendar('year');
    this.populateYearCalendar();

    this.createCalendar('month');
    this.populateMonthCalendar(current_month);
    $('#month').hide();

    this.createCalendar('week');
    this.populateWeekCalendar(current_month, current_date, current_dayOfWeek);
    $('#week').hide();

    this.createCalendar('day');
    this.populateDayCalendar(current_month, current_date);
    $('#day').hide();

    this.createCalendar('agenda');
    this.showAgenda();
    $('#agenda').hide();

    // Set default date in create event form
    $('input[type="date"]').val(moment().format('YYYY-MM-DD'));

    if (current_month.numeric > 5) {
      let current_year = 2016;
    }
    else {
      let current_year = 2017;
    }
  }


  /**
  * Creates a calendar element
  * @param {string} view - The calendar view type.
  */
  createCalendar(view) {
    $('.calendar').append('<div id="' + view + '"><div>');
  }

  /**
  * Populates the yearly calendar view with months and dates
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

        calendar += '<td class="' + highlight + '" onclick="popUp(' + i + ')">' + i + '</td>';
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

  getNextMonth(curr) {
    for(var i=0; i<10; i++){
      if(months[i] == curr){
        return (months[i+1]);
      }
    }
  }

  getPrevMonth(curr) {
    for(var i=0; i<10; i++){
      if(months[i] == curr){
        return (months[i-1]);
      }
    }
  }

  nextMonth() {
    if (displayedMonth != 9) {
      calendar.populateMonthCalendar(months[displayedMonth + 1]);
      displayedMonth += 1;
      if (displayedMonth ==9 ) {
        document.getElementById("nxt_btn").className = "btn btn-danger disabled";
      }
    }
  }

  prevMonth() {
    if (displayedMonth != 0) {
      calendar.populateMonthCalendar(months[displayedMonth-1]);
      displayedMonth -= 1;
      if (displayedMonth == 0) {
        document.getElementById("prv_btn").className = "btn btn-danger disabled";
      }
    }
  }

  /**
  * Populates the monthly calendar view with dates
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

      calendar += '<td class="' + highlight + '" onclick="popUp(' + i + ')">' + i + '</td>';
      cellCount++;

      if (cellCount === 8) {
        calendar += '</tr>';
        cellCount = 1;
      }
    }

    calendar += '</table>';
    $('#month').html('<div class="month"><h3 class="monthName" align="center">' + month.month + '</h3>' + calendar + '</div>');
    $('#month .month').prepend('<a id= "nxt_btn" class="btn btn-danger" style="float:right;" onclick="calendar.nextMonth()">NEXT</a>');
    $('#month .month').prepend('<a id= "prv_btn" class="btn btn-danger" style="float:left;" onclick="calendar.prevMonth()">PREV</a>');
  }

  nextWeek() {
    if (!chopped_up) {
      let month = displayedWeek.mnth;
      let date = displayedWeek.dt - displayedWeek.dy;
      let dayOfWeek = 0;

      calendar.populateWeekCalendar(month, date + 7, dayOfWeek);
      displayedWeek= {
        mnth: month,
        dt: date + 7,
        dy: dayOfWeek
      };
    } else {
      calendar.populateWeekCalendar(calendar.getNextMonth(displayedWeek.mnth), newStart, 0);
      displayedWeek= {
        mnth: calendar.getNextMonth(displayedWeek.mnth),
        dt: newStart,
        dy: 0
      };
      chopped_up = false;
    }
  }

  prevWeek() {
    if (!chopped_down) {
      let month = displayedWeek.mnth;
      let date = displayedWeek.dt- displayedWeek.dy;
      let dayOfWeek = 0;
      calendar.populateWeekCalendar(month, date - 7, dayOfWeek);
      displayedWeek = {
        mnth: month,
        dt: date - 7,
        dy: dayOfWeek
      };
    } else {
      calendar.populateWeekCalendar(calendar.getPrevMonth(displayedWeek.mnth), newStart, 0);
      displayedWeek= {
        mnth: calendar.getPrevMonth(displayedWeek.mnth),
        dt: newStart,
        dy: 0
      };
      chopped_down = false;
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
        chopped_up = true;
        newStart = displayedWeek.dt=(6-i)+2;
        calendar += '<td onclick="popUp(' + startOfWeek + ')">' + startOfWeek + '</td>';
        startOfWeek++;
      } else if (startOfWeek < 1) {
        if (x == 0) {
          for (var m = 0; m < 10; m++) {
            if (months[m] == displayedWeek.mnth) {
              newStart = (months[m - 1]).days - 7 + startOfWeek;
            }
          }
          x++;
        }
        chopped_down = true;
        calendar += '<td onclick="popUp(' + (months[displayedMonth - 1].days + startOfWeek) + ')">' + (months[displayedMonth - 1].days + startOfWeek) + '</td>';
        startOfWeek++;
      } else {
        let highlight = '';
        if (currentDate.getMonth() + 1 === month.numeric && currentDate.getDate() === startOfWeek) {
          highlight = 'currentDate';
        }
        calendar += '<td class="' + highlight + '" onclick="popUp(' + startOfWeek + ')">' + startOfWeek + '</td>';
        startOfWeek++;
      }
    }

    calendar += '</tr></table>';
    $('#week').html('<div class="week"><h3 class="monthName" align="center">' + month.month + '</h3>' + calendar + '</div>');
    $('#week .week').prepend('<a id= "nxt_btn_week" class="btn btn-danger" style="float:right;" onclick="calendar.nextWeek()">NEXT</a>');
    $('#week .week').prepend('<a id= "prv_btn_week" class="btn btn-danger" style="float:left;" onclick="calendar.prevWeek()">PREV</a>');
  }

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

  /**
  * Shows the Agenda view with a list of 0s .
  */
  showAgenda() {
    let agenda = '<div class="panel panel-default" style="background-color: #FFF">' +
                 '<div class="panel-heading" style="background-color: #FFF">' +
                 '<h2 class="text-left">Agenda</h2></div>' +
                 '<ul class="list-group">';
    $.ajax({
      url: 'api/dbSetup.php',
      data: '',
      dataType: 'json',
      success: function(data) {
        $.each(data, function(index, event) {
          if (event.start_date >= currentDate.toISOString().slice(0,10)) {
            $('#agenda .list-group').append(
              '<li class="list-group-item ' + event.event_id + '">' +
              '<div class="">' + event.event_name + '</div>' +
              '<div class="">' + event.event_desc + '</div>' +
              '</li>'
            );
            if (event.start_date != '0000-00-00') {
              $('.' + event.event_id).append(
                '<div class="">' +
                moment(event.start_date, "YYYY-MM-DD").format("ddd, MMM D YYYY") +
                '</div>'
              );
            }
            if (event.end_date != '0000-00-00') {
              $('.' + event.event_id).append(
                '<div class="">' +
                moment(event.end_date, "YYYY-MM-DD").format("ddd, MMM D YYYY") +
                '</div>');
            }
            $('.' + event.event_id).append(
              '<div class="">' +
              moment(event.start_time, "HH-mm-ss").format("h:mm A") +
              '</div>');
            if (event.start_time != event.end_time) {
              $('.' + event.event_id).append(
                '<div class="">' +
                moment(event.end_time, "HH-mm-ss").format("h:mm A") +
                '</div>');
            }
          }
        });
      }
    });
    agenda += '</ul></div>';
    $('#agenda').html(agenda);
  }
}

var events = ["Test1", "Test2", "Test3", "Test4", "Test5"];
