/** Calendar representing the agenda view */
class Agenda {
  /**
  * Shows the Agenda view with a list of 0s .
  */
  showAgenda() {
    let agenda = '<div class="panel panel-default" style="background-color: #FFF">' +
                 '<div class="panel-heading" style="background-color: #FFF">' +
                 '<h2 class="text-left">Agenda</h2></div>' +
                 '<ul class="list-group">';
    $.ajax({
      url: 'api/dbSetup.php',
      data: '',
      dataType: 'json',
      success: function(data) {
        $.each(data, function(index, event) {
          if (event.start_date >= currentDate.toISOString().slice(0,10)) {
            $('#agenda .list-group').append(
              '<li class="list-group-item ' + event.event_id + '">' +
              '<div class="">' + event.event_name + '</div>' +
              '<div class="">' + event.event_desc + '</div>' +
              '</li>'
            );
            if (event.start_date != '0000-00-00') {
              $('.' + event.event_id).append(
                '<div class="">' +
                moment(event.start_date, "YYYY-MM-DD").format("ddd, MMM D YYYY") +
                '</div>'
              );
            }
            if (event.end_date != '0000-00-00') {
              $('.' + event.event_id).append(
                '<div class="">' +
                moment(event.end_date, "YYYY-MM-DD").format("ddd, MMM D YYYY") +
                '</div>');
            }
            $('.' + event.event_id).append(
              '<div class="">' +
              moment(event.start_time, "HH-mm-ss").format("h:mm A") +
              '</div>');
            if (event.start_time != event.end_time) {
              $('.' + event.event_id).append(
                '<div class="">' +
                moment(event.end_time, "HH-mm-ss").format("h:mm A") +
                '</div>');
            }
          }
        });
      }
    });
    agenda += '</ul></div>';
    $('#agenda').html(agenda);
  }
}
