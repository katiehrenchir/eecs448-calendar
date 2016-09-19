/** Class representing event form methods */
class Form {
  /**
  * Initializes the form
  */
  constructor() {
    this.events = [];
  }

  /**
  * Creates a new event
  * @param {String} name - Event name
  * @param {String} desc - Event description
  * @param {Object} date - Event start date and end date
  * @param {Object} time - Event start time and end time
  */
  createEvent(name, desc, date, time) {
    var data = {
      "eventName": name,
      "eventDesc": desc,
      "startDate": date.start,
      "endDate": date.end,
      "startTime": time.start,
      "endTime": time.end
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
  deleteEvent(eventId) {
    $.ajax({
      url: 'api/deleteEvent.php',
      type: 'POST',
      data: "eventId=" + eventId,
      success: function(data, status, xhr) {
        alert('Record deleted');
        location.reload();
      }
    })
  }

  /**
  * Modify an event
  * @param {Number} id - Event id
  * @param {String} name - Event name
  * @param {String} desc - Event description
  * @param {Object} date - Event start date and end date
  * @param {Object} time - Event start time and end time
  */
  editEvent(id, name, desc, date, time) {
    var data = {
      eventId: id,
      eventName: name,
      eventDesc: desc,
      startDate: date.start,
      endDate: date.end,
      startTime: time.start,
      endTime: time.end
    }
    $.ajax({
      url: 'api/editEvent.php',
      type: 'POST',
      data: data,
      success: function(data, status, xhr) {
        alert('Record edited');
        location.reload();
      }
    })
  }
}
