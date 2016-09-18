var test_event = [
{   event_id: "1" ,
    title: "Testing1" ,
    description: "This is just a test" ,
    startDate: "2016-09-18" ,
    endDate: "2016-09-18" ,
    startTime: "21:10:00" ,
    endTime: "21:20:00"
},
{   event_id: "2" ,
    title: "Testing2" ,
    description: "This is just a test" ,
    startDate: "2016-09-18" ,
    endDate: "2016-09-18" ,
    startTime: "22:10:00" ,
    endTime: "22:20:00"
},
{   event_id: "3" ,
    title: "Testing3" ,
    description: "This is just a test" ,
    startDate: "2016-09-18" ,
    endDate: "2016-09-18" ,
    startTime: "23:10:00" ,
    endTime: "23:20:00"
}
];

let event_num = 3;
let selectedDate = currentDate;
let displayedMonth = 0;

/** Class representing a calendar. */
class Calendar {
  /** Initializes the calendar */
  constructor() {
    this.currentView = 'year';
    this.agendaView = new Agenda();
    this.yearView = new Year();
    this.monthView = new Month();
    this.weekView = new Week();
    this.dayView = new Day();
  }

  /**
  * Initializes the calendar views. Default view - Yearly
  */
  init() {
    let current_date = currentDate.getDate();
    let current_dayOfWeek = currentDate.getDay();
    let current_month = months.filter(function(m) {
      return m.numeric === currentDate.getMonth() + 1;
    })[0];

    displayedMonth = this.monthView.getMonth();

    this.weekView.displayedWeek = {
      mnth: current_month,
      dt: current_date,
      dy: current_dayOfWeek
    };

    this.createCalendar('year');
    this.yearView.populateYearCalendar();

    this.createCalendar('month');
    this.monthView.populateMonthCalendar(current_month);
    $('#month').hide();

    this.createCalendar('week');
    this.weekView.populateWeekCalendar(current_month, current_date, current_dayOfWeek);
    $('#week').hide();

    this.createCalendar('day');
    this.dayView.populateDayCalendar(current_month, current_date);
    $('#day').hide();

    this.createCalendar('agenda');
    this.agendaView.showAgenda();
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
  * @param {String} view - The calendar view type.
  */
  createCalendar(view) {
    $('.calendar').append('<div id="' + view + '"><div>');
  }

  /**
  * Hides the current view and display the new
  * @param {String} view - The view type to display
  */
  changeView(view) {
	  //if(view == 'today'){
		//if(this.currentView == 'month'){
			//$("#" + this.currentView).hide();
			//$("#" + 'month').show();
			//this.currentView = 'month';
		//}
		//else if(this.currentView == 'week'){
			//$("#" + this.currentView).hide();
			//$("#" + 'week').show();
			//this.currentView = 'week';
		//}
		//else if(this.currentView == 'day'){
			//$("#" + this.currentView).hide();
			//$("#" + 'day').show();
			//this.currentView = 'day';
		//}
		//else{}
	  //}
	  //else{
	    // $("#" + this.currentView).hide();
	    // $("#" + view).show();
	    // this.currentView = view;
	  //}

    $("#" + this.currentView).hide();
    $("#" + view).show();
    this.currentView = view;
  }

}

var events = ["Test1", "Test2", "Test3", "Test4", "Test5"];
