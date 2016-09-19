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

    this.current_date = currentDate.getDate();
    this.current_dayOfWeek = currentDate.getDay();
    this.current_month = months.filter(function(m) {
      return m.numeric === currentDate.getMonth() + 1;
    })[0];
  }

  /**
  * Initializes the calendar views. Default view - Yearly
  */
  init() {

    displayedMonth = this.monthView.getMonth();

    this.weekView.displayedWeek = {
      mnth: this.current_month,
      dt: this.current_date,
      dy: this.current_dayOfWeek
    };

    this.createCalendar('year');
    this.yearView.populateYearCalendar();

    this.createCalendar('month');
    this.createCalendar('week');
    this.createCalendar('day');
    this.createCalendar('agenda');

    // Set default date in create event form
    $('input[type="date"]').val(moment().format('YYYY-MM-DD'));

    if (this.current_month.numeric > 5) {
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
    $("#" + this.currentView).hide();
    switch (view) {
      case 'year':
        this.yearView.populateYearCalendar();
        break;
      case 'month':
        this.monthView.populateMonthCalendar(this.current_month);
        break;
      case 'week':
        this.weekView.populateWeekCalendar(this.current_month, this.current_date, this.current_dayOfWeek);
        break;
      case 'day':
        this.dayView.populateDayCalendar(this.current_month, this.current_date);
        break;
      case 'agenda':
        this.agendaView.showAgenda();
        break;
    }
    $("#" + view).show();
    this.currentView = view;
  }

}
