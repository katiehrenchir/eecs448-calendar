/*
  Created by Sharynne Azhar - 9/9/2016
  Handles calendar methods
*/

// This global variable will remember the month that is currently being displayed.
var displayedMonth=0;

// This global variable remembers the current week view
var displayedWeek= {};

const months = [
  { 'month': 'August', 'numeric': 8, 'days': 31, 'firstDay': 1 },
  { 'month': 'September', 'numeric': 9, 'days': 30, 'firstDay': 4 },
  { 'month': 'October', 'numeric': 10, 'days': 31, 'firstDay': 6 },
  { 'month': 'November', 'numeric': 11, 'days': 30, 'firstDay': 2 },
  { 'month': 'December', 'numeric': 12, 'days': 31, 'firstDay': 4 },
  { 'month': 'January', 'numeric': 1, 'days': 30, 'firstDay': 0 },
  { 'month': 'February', 'numeric': 2, 'days': 28, 'firstDay': 3 },
  { 'month': 'March', 'numeric': 3, 'days': 31, 'firstDay': 3 },
  { 'month': 'April', 'numeric': 4, 'days': 30, 'firstDay': 6 },
  { 'month': 'May', 'numeric': 5, 'days': 30, 'firstDay': 1 }
];

let currentDate = new Date();
let selectedDate = currentDate;

/** Class representing a calendar. */
class Calendar {
  /**
  * Initializes the calendar views. Default view - Yearly
  */
  init() {
  	//this.globalSetup();

  	// The "current_month" value is to be used for both the month
  	// and the week view. Hence this bit was pulled out of both the
  	// methods to avoid repetition.
  	let current_month = months.filter(function(m) {
      return m.numeric === currentDate.getMonth() + 1;
    })[0];

    let current_date = currentDate.getDate();
    let current_dayOfWeek = currentDate.getDay();

    /* Remembers the index of the currently displayed month inside of the months object
     * NOTE -> Get rid of the alerts.
    */
    displayedMonth = function(current_month){
    	for(var i=0; i<10; i++){
    		if(current_month.numeric == months[i].numeric){
    			//alert("Matched!" + months[i].numeric + " and the index is : "+ i);
    			return i;
    		}else{
    			//alert("Not matching" + months[i].numeric);
    		}
    	}
    	// DO ERROR HANDLING HERE
    	// Ran out of available calendar months
    	return -1;
    }(current_month);

    displayedWeek= {mnth: current_month, dt: current_date, dy: current_dayOfWeek};

    this.createCalendar('year');
    this.populateYearCalendar();

    this.createCalendar('week');
    this.populateWeekCalendar(current_month, current_date, current_dayOfWeek);
    $('#week').hide();

    this.createCalendar('month');
    this.populateMonthCalendar(current_month);
    $('#month').hide();

    // Set default date in create event form
    $('input[type="date"]').val(moment().format('YYYY-MM-DD'));
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
                  '<th>Su</th>' +
                  '<th>M</th>' +
                  '<th>Tu</th>' +
                  '<th>W</th>' +
                  '<th>Th</th>' +
                  '<th>F</th>' +
                  '<th>Sa</th>' +
                  '</tr>';

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

  /**
  * Populates the monthly calendar view with dates
  */
  populateMonthCalendar(month) {
    let calendar = '<table class="day_container"><tr>' +
                   '<th>Su</th>' +
                   '<th>M</th>' +
                   '<th>Tu</th>' +
                   '<th>W</th>' +
                   '<th>Th</th>' +
                   '<th>F</th>' +
                   '<th>Sa</th>' +
                   '</tr>';

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

  nextMonth(){
  	//alert("currently displaying index "+ displayedMonth + " and intending to show index = "+ (displayedMonth+1)+ "which is : "+months[displayedMonth+1].month);
    if(displayedMonth != 9){
      calendar.populateMonthCalendar(months[displayedMonth+1]);
      displayedMonth+=1;
      if(displayedMonth==9){
        document.getElementById("nxt_btn").className = "btn btn-danger disabled";
      }
    }
  }

  prevMonth(){
  	//alert("currently displaying index "+ displayedMonth + " and intending to show index = "+ (displayedMonth+1)+ "which is : "+months[displayedMonth+1].month);
    if(displayedMonth != 0){
      calendar.populateMonthCalendar(months[displayedMonth-1]);
      displayedMonth-=1;
      if(displayedMonth==0){
        document.getElementById("prv_btn").className = "btn btn-danger disabled";
      }
    }
  }
  /**
  * Populates the weekly calendar view with dates
  */
  populateWeekCalendar(month, date, dayOfWeek) {
    let calendar = '<table class="day_container"><tr>' +
                   '<th>Su</th>' +
                   '<th>M</th>' +
                   '<th>Tu</th>' +
                   '<th>W</th>' +
                   '<th>Th</th>' +
                   '<th>F</th>' +
                   '<th>Sa</th>' +
                   '</tr><tr>';

    let startOfWeek = date - dayOfWeek;
    let endOfWeek = date + (7 - dayOfWeek);

    for (let i = startOfWeek; i < endOfWeek; i++) {
    	if(i < 1 || i > month.days){
    		calendar += "<td></td>";
    	}else {
    		let highlight = '';
    		if (currentDate.getMonth() + 1 === month.numeric && currentDate.getDate() === i) highlight = 'currentDate';
    		calendar += '<td class="' + highlight + '" onclick="popUp(' + i + ')">' + i + '</td>';
    	}
    }

    calendar += '</tr></table>';
    $('#week').html('<div class="week"><h3 class="monthName" align="center">' + month.month + '</h3>' + calendar + '</div>');
    $('#week .week').prepend('<a id= "nxt_btn_week" class="btn btn-danger" style="float:right;" onclick="calendar.nextWeek()">NEXT</a>');
    $('#week .week').prepend('<a id= "prv_btn_week" class="btn btn-danger" style="float:left;" onclick="calendar.prevWeek()">PREV</a>');
  }

  /* THE ERRORS HERE ARE NOT HANDLED - SETTING UP THE FOUNDATION!!!!
  *		WORK IN PROGRESS
  */
  nextWeek(){
  	let month = displayedWeek.mnth;
  	let date = displayedWeek.dt- displayedWeek.dy;
  	let dayOfWeek = 0;

    calendar.populateWeekCalendar(month, date + 7, dayOfWeek);
	displayedWeek= {mnth: month, dt: date+7, dy: dayOfWeek};

  }

  prevWeek(){
  	let month = displayedWeek.mnth;
  	let date = displayedWeek.dt- displayedWeek.dy;
  	let dayOfWeek = 0;

    calendar.populateWeekCalendar(month, date - 7, dayOfWeek);
	displayedWeek= {mnth: month, dt: date-7, dy: dayOfWeek};

  }
}
