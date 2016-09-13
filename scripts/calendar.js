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
class Calendar {
  constructor() {}

  createYearCalendar() {
    $('.calendar').append('<div id="year"><div>');
  }

  populateYearCalendar() {
    $.each(months, function(index, month) {
      var dates = '<table class="day_container"><tr>'
                  + '<th>Su</th>'
                  + '<th>M</th>'
                  + '<th>Tu</th>'
                  + '<th>W</th>'
                  + '<th>Th</th>'
                  + '<th>F</th>'
                  + '<th>Sa</th>'
                  + '</tr>';

      var cellCount = 1;

      for (var j = 0; j < month.firstDay; j++) {
          dates += '<td></td>';
          cellCount++;
      }

      for (var i = 1; i <= month.days; i++) {
        var highlight = '';
        if (currentDate.getMonth() + 1 === month.numeric && currentDate.getDate() === i) {
          highlight = 'currentDate';
        }

        if (cellCount === 1) {
          dates += '<tr>';
        }

        dates += '<td class="' + highlight + '"><button onclick="popUp(' + i + ')">' + i + '</button></td>';
        cellCount++;

        if (cellCount === 8) {
          dates += '</tr>';
          cellCount = 1;
        }
      }

      dates += '</table>'
      $('#year').append(
        '<div class="month"><h3 class="monthName">' + month.month + '</h3>' + dates + '</div>'
      );
    });

  }
}
