/*
	Created by Ashli Mosiman - 9/14/16
	Handles form methods
*/

/** Class representing event form methods */
class Form {
  constructor() {
    this.events = [];
  }

  /**
  * Creates a new event
  */
  createEvent() {
    var data = {
      "eventName": $('input[name="eventName"]').val(),
      "startDate": $('input[name="startDate"]').val(),
      "endDate": $('input[name="endDate"]').val(),
      "startTime": $('input[name="startTime"]').val(),
      "endTime": $('input[name="endTime"]').val(),
      "eventDesc": $('input[name="eventDesc"]').val()
    }

    $.ajax({
      url: 'api/createEvent.php',
      type: 'POST',
      data: data,
      success: function(data, status, xhr) {
        console.log(data);
      }
    })
  }

  /**
  * Deletes an event
  */
  deleteEvent() {
    $.ajax({
      url: 'api/deleteEvent.php',
      type: 'POST',
      data: $('input[name="eventId"]').val(),
      success: function(data, status, xhr) {
        console.log(data);
      }
    })
  }

  /**
  * Modify an event
  */
  modifyEvent() {
    var data = {
      "eventId": $('input[name="eventId"]').val(),
      "eventName": $('input[name="eventName"]').val(),
      "startDate": $('input[name="startDate"]').val(),
      "endDate": $('input[name="endDate"]').val(),
      "startTime": $('input[name="startTime"]').val(),
      "endTime": $('input[name="endTime"]').val(),
      "eventDesc": $('input[name="eventDesc"]').val()
    }

    $.ajax({
      url: 'api/editEvent.php',
      type: 'POST',
      data: data,
      success: function(data, status, xhr) {
        console.log(data);
      }
    })
  }
}
