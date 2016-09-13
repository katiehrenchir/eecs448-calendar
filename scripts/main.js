/*
  Created by Sharynne Azhar - 9/12/2016
  Main file
*/

function popUp(date) {
  this.alert("DATE: " + date);
}

var calendar = new Calendar();
calendar.createYearCalendar();
calendar.populateYearCalendar();
