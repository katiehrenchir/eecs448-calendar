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

class Calendar {
  init() {
    this.createCalendar('year');
    this.populateYearCalendar();

    this.createCalendar('month');
    this.populateMonthCalendar();
    $('#month').hide();

    this.createCalendar('week');
    this.populateWeekCalendar();
    $('#week').hide();
  }

  createCalendar(view) {
    $('.calendar').append('<div id="' + view + '"><div>');
  }

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

  populateMonthCalendar() {
    let calendar = '<table class="day_container"><tr>' +
                   '<th>Su</th>' +
                   '<th>M</th>' +
                   '<th>Tu</th>' +
                   '<th>W</th>' +
                   '<th>Th</th>' +
                   '<th>F</th>' +
                   '<th>Sa</th>' +
                   '</tr>';

    let month = months.filter(function(m) {
      return m.numeric === currentDate.getMonth() + 1;
    })[0];

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
    $('#month').html('<div class="month"><h3 class="monthName">' + month.month + '</h3>' + calendar + '</div>');
  }

  populateWeekCalendar() {
    let calendar = '<table class="day_container"><tr>' +
                   '<th>Su</th>' +
                   '<th>M</th>' +
                   '<th>Tu</th>' +
                   '<th>W</th>' +
                   '<th>Th</th>' +
                   '<th>F</th>' +
                   '<th>Sa</th>' +
                   '</tr>';

    let date = currentDate.getDate() + 1;
    let dayOfWeek = currentDate.getDay() + 1;
    let month = months.filter(function(m) {
      return m.numeric === currentDate.getMonth() + 1;
    })[0];

    let cellCount = 1;
    let startOfWeek = date - dayOfWeek;
    let endOfWeek = date + (7 - dayOfWeek);
    for (let i = startOfWeek; i < endOfWeek; i++) {
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
    $('#week').html('<div class="week"><h3 class="monthName">' + month.month + '</h3>' + calendar + '</div>');
  }
}
