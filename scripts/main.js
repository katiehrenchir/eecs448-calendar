/*
  Created by Sharynne Azhar - 9/9/2016
  Dynamically load the calendar view
*/

var months = [
  { 'month': 'August', 'days': 31, 'firstDay': 1 },
  { 'month': 'September', 'days': 30, 'firstDay': 4 },
  { 'month': 'October', 'days': 31, 'firstDay': 6 },
  { 'month': 'November', 'days': 30, 'firstDay': 2 },
  { 'month': 'December', 'days': 31, 'firstDay': 4 },
  { 'month': 'January', 'days': 30, 'firstDay': 0 },
  { 'month': 'February', 'days': 28, 'firstDay': 3 },
  { 'month': 'March', 'days': 31, 'firstDay': 3 },
  { 'month': 'April', 'days': 30, 'firstDay': 6 },
  { 'month': 'May', 'days': 30, 'firstDay': 1 }
];

// Generate the Yearly view
var yearGrid = '';
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
    if (cellCount === 1) {
      dates += '<tr>';
    }

    dates += '<td>' + i + '</td>';
    cellCount++;

    if (cellCount === 8) {
      dates += '</tr>';
      cellCount = 1;
    }
  }
  
  dates += '</table>'
  yearGrid += '<div class="month"><h3 class="monthName">' +
               month.month + '</h3>' + dates + '</div>';
});

$('.calendar').append(yearGrid);
