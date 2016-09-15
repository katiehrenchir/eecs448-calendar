/*
  Created by Sharynne Azhar - 9/12/2016
  Main file
*/

function popUp(date) {
  this.alert("DATE: " + date);
}

let currentView = 'year';

const calendar = new Calendar();
const display = new Display();
const form = new Form();

function changeView(view) {
  display.changeView(view);
}

$('form').submit(function(e) {
  form.createEvent();
});

calendar.init();
