/*
  Created by Sharynne Azhar - 9/9/2016
  Handles calendar methods
*/
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
displayedWeek= {};

// Flag to indicate if the current month is over in weekview
var weekView_monthEnd= false;

/** Class representing a calendar. */
class Calendar {
  /**
  * Initializes the calendar views. Default view - Yearly
  */
  init() {
  	// The "current_month" value is to be used for both the month
  	// and the week view. Hence this bit was pulled out of both the
  	// methods to avoid repetition.


    /* Remembers the index of the currently displayed month inside of the months object
     * NOTE -> Get rid of the alerts.
    */

    displayedWeek= {mnth: current_month, dt: current_date, dy: current_dayOfWeek};

    this.createCalendar('year');
    this.populateYearCalendar();

    this.createCalendar('week');
    this.populateWeekCalendar(current_month, current_date, current_dayOfWeek);
    $('#week').hide();

    this.createCalendar('month');
    this.populateMonthCalendar(current_month);
    $('#month').hide();
  }


  /**
  * Creates a calendar element
  * @param {string} view - The calendar view type.
  */
  createCalendar(view) {
    $('.calendar').append('<div id="' + view + '"><div>');
  }

  getNextMonth(curr){
  	for(var i=0; i<10; i++){
  		if(months[i] == curr){
  			return (months[i+1]);
  		}
  	}
  }

  getPrevMonth(curr){
  	for(var i=0; i<10; i++){
  		if(months[i] == curr){
  			return (months[i-1]);
  		}
  	}
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
    if(displayedMonth != 9){
      calendar.populateMonthCalendar(months[displayedMonth+1]);
      displayedMonth+=1;
      if(displayedMonth==9){
        document.getElementById("nxt_btn").className = "btn btn-danger disabled";
      }
    }
  }

  prevMonth(){
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
    var x=0;
    for(let i=0; i<7; i++){
    	if(startOfWeek > month.days){
    		if(displayedMonth != 9){
    			displayedMonth+=1;
    		}
    		startOfWeek=1;
    		chopped_up=true;
    		newStart= displayedWeek.dt=(6-i)+2;
    		calendar += '<td onclick="popUp(' + startOfWeek + ')">' + startOfWeek + '</td>';
    		startOfWeek++;

    	}else if(startOfWeek < 1){
    		if(x==0){
    			for(var m=0; m<10; m++){
  					if(months[m] == displayedWeek.mnth){
  						newStart= (months[m-1]).days-7+startOfWeek;
  					}
  				}
    			x++;
    		}
    		chopped_down=true;
    		calendar += '<td onclick="popUp(' + (months[displayedMonth-1].days+startOfWeek) + ')">' + (months[displayedMonth-1].days+startOfWeek) + '</td>';
    		startOfWeek++;
    	}else{
    		let highlight = '';
    		if (currentDate.getMonth() + 1 === month.numeric && currentDate.getDate() === startOfWeek) highlight = 'currentDate';
    		calendar += '<td class="' + highlight + '" onclick="popUp(' + startOfWeek + ')">' + startOfWeek + '</td>';
    		startOfWeek++;
    	}

    }
    calendar += '</tr></table>';
    $('#week').html('<div class="week"><h3 class="monthName" align="center">' + month.month + '</h3>' + calendar + '</div>');
    $('#week .week').prepend('<a id= "nxt_btn_week" class="btn btn-danger" style="float:right;" onclick="calendar.nextWeek()">NEXT</a>');
    $('#week .week').prepend('<a id= "prv_btn_week" class="btn btn-danger" style="float:left;" onclick="calendar.prevWeek()">PREV</a>');
  }

  nextWeek(){
  	if (!chopped_up){
  		let month = displayedWeek.mnth;
	  	let date = displayedWeek.dt- displayedWeek.dy;
	  	let dayOfWeek = 0;

	    calendar.populateWeekCalendar(month, date + 7, dayOfWeek);
		displayedWeek= {mnth: month, dt: date+7, dy: dayOfWeek};
  	}else{
  		calendar.populateWeekCalendar(calendar.getNextMonth(displayedWeek.mnth), newStart, 0);
		displayedWeek= {mnth: calendar.getNextMonth(displayedWeek.mnth), dt: newStart, dy: 0};
  		chopped_up=false;
  	}
  }

  prevWeek(){
	if (!chopped_down){
  		let month = displayedWeek.mnth;
	  	let date = displayedWeek.dt- displayedWeek.dy;
	  	let dayOfWeek = 0;

	    calendar.populateWeekCalendar(month, date - 7, dayOfWeek);
		displayedWeek= {mnth: month, dt: date-7, dy: dayOfWeek};
  	}else{
  		calendar.populateWeekCalendar(calendar.getPrevMonth(displayedWeek.mnth), newStart, 0);
		displayedWeek= {mnth: calendar.getPrevMonth(displayedWeek.mnth), dt: newStart, dy: 0};
  		chopped_down=false;
  	}
  }
}
