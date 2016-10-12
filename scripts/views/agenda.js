/** Calendar representing the agenda view */
class Agenda {
  /**
  * Shows the Agenda view with a list of 0s .
  */
  showAgenda() {
    let agenda = '<div class="panel panel-default" style="background-color: #FFF">' +
                 '<div class="panel-heading" style="background-color: #FFF">' +
                 '<h2 class="text-left">Upcoming Events</h2></div>' +
                 '<ul class="list-group">';
    $.ajax({
      url: 'api/dbSetup.php',
      data: '',
      dataType: 'json',
      success: function(data) {
        $.each(data, function(index, event) {
          let currDate = currentDate.toISOString().slice(0,10);
          if (currDate <= event.start_date) {
            $('#agenda .list-group').append(
              '<li id="' + event.event_id + '" class="list-group-item">' +
              '<div class="">' + event.event_name + '</div>' +
              '<div class="">' + event.event_desc + '</div>' +
              '</li>'
            );
            if (event.start_date != '0000-00-00') {
              $('#' + event.event_id).append(
                '<div class="">' +
                moment(event.start_date, "YYYY-MM-DD").format("ddd, MMM D YYYY") +
                '</div>'
              );
            }
            if (event.end_date != '0000-00-00') {
              $('#' + event.event_id).append(
                '<div class="">' +
                moment(event.end_date, "YYYY-MM-DD").format("ddd, MMM D YYYY") +
                '</div>');
            }
            $('#' + event.event_id).append(
              '<div class="">' +
              moment(event.start_time, "HH-mm-ss").format("h:mm A") +
              '</div>');
            if (event.start_time != event.end_time) {
              $('#' + event.event_id).append(
                '<div class="">' +
                moment(event.end_time, "HH-mm-ss").format("h:mm A") +
                '</div>');
            }
            $('#' + event.event_id).append('<button class="btn btn-primary btn-sm" onclick="editEvent(' + event.event_id + ')">Edit Event</button>');
            $('#' + event.event_id).append('<button class="btn btn-primary btn-sm" onclick="new Form().deleteEvent(' + event.event_id + ')">Delete Event</button>');
          }
        });
      }
    });
    agenda += '</ul></div>';
    $('#agenda').html(agenda);
  }
}
