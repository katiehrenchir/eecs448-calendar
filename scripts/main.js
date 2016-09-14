/*
  Created by Sharynne Azhar - 9/12/2016
  Main file
*/

function popUp(date) {
  this.alert("DATE: " + date);
}

let currentView = 'year';

const display = new Display();
function changeView(view) {
  display.changeView(view);
}

const calendar = new Calendar();
calendar.init();
