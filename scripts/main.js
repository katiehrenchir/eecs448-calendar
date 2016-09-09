/*
  Created by Sharynne Azhar - 9/9/2016
  Dynamically load the calendar view
*/

var monthView = '';
var months = ['August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'];
$.each(months, function(index, monthName) {
  monthView += '<div class="month"><h3 class="monthName">' + monthName + '</h3></div>';
});

$('.calendar').append(monthView);
