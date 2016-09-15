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
}
