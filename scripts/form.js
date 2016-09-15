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
    var name = $('input[name="eventName"]').val();
    var startDate = $('input[name="startDate"]').val();
    var endDate = $('input[name="endDate"]').val();
    var startTime = $('input[name="startTime"]').val();
    var endTime = $('input[name="endTime"]').val();
    var description = $('input[name="eventDesc"]').val();
    this.events.push({
      'name': name,
      'startDate': startDate,
      'endDate': endDate,
      'startTime': startTime,
      'endTime': endTime,
      'description': description
    });
    console.log(JSON.stringify(this.events, null, "  "));
  }
}
