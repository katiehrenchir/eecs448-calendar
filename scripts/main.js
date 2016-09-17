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

$('#create form').submit(function(e) {
  let eventName =  $('input[name="eventName"]').val();
  let eventDesc = $('#eventDesc').val();
  let date = {
    "start": $('input[name="startDate"]').val(),
    "end": $('input[name="endDate"]').val()
  };
  let time = {
    "start": $('input[name="startTime"]').val(),
    "end": $('input[name="endTime"]').val()
  };
  form.createEvent(eventName, eventDesc, date, time);
});

calendar.init();
