let currentView = 'year';

const calendar = new Calendar();
const form = new Form();

function changeView(view) {
  calendar.changeView(view);
}



$('#set form').submit(function(e) {
	let day = $('select[name="day"]').val();
	let month = $('select[name="month"]').val();
	let year = $('select[name="year"]').val();
	if(( year == 2016 && month < 7 ) || ( year == 2017 && month > 4 )){
		alert("The month you selected is not available for the year you selected");
	}
	else if((( month == 3 || month == 8 || month == 10 ) && day == 31 ) || ( month == 1 && day > 28 )){
		alert("The day you selected is not available for the month you selected");
	}
	else{
		currentDate.setFullYear(year, month, day);
		$('#year').remove();
		$('#month').remove();
		$('#week').remove();
		$('#day').remove();
		calendar.init();
	}
});

function daysInMonth(month, year)
{
	return (new Date(year, month, 0).getDate()+1);
}

function parseDate(input) {
  var parts = input.match(/(\d+)/g);
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
}

$('#create form').submit(function(e) {
  var eventName =  $('input[name="eventName"]').val();
  var eventDesc = $('#eventDesc').val();
  var endDate = parseDate($('input[name="endDate"]').val());
  var startDate = parseDate($('input[name="startDate"]').val());
  var reWeekly = $('select[name="reWeekly"]').val();
  var diffTime= Math.abs(endDate.getDate() - startDate.getDate());
  var diffDays= Math.ceil(diffTime/(1000*3600*24));
  var Sremain=0;
  var Eremain=0;
  var Sjump=0;
  var Ejump=0;
  var start=0;
  var end=0;
  if(reWeekly==1)
  {
	 while(endDate.getMonth()!="5"&& endDate.getFullYear()<2018)
	 {
		  if(endDate.getDate() + 7 + diffDays <= daysInMonth(endDate.getMonth(),endDate.getFullYear()))
		  {
		  	alert("Not end of month!");
			  startDate.setDate(startDate.getDate() + 7 + diffDays );
			  endDate.setDate(endDate.getDate() + 7 + diffDays );
			   start = startDate.toISOString().substring(0, 10);
				end = endDate.toISOString().substring(0, 10);
				alert(start);
			  let date = {
					start,
					end
			  };
			  let time = {
				"start": $('input[name="startTime"]').val(),
				"end": $('input[name="endTime"]').val()
			  };
			  form.createEvent(eventName, eventDesc, date, time);
		  }
		  else
		  {
		  	  /*alert("end of month!!");
			  Sremain= daysInMonth(startDate.getMonth(),startDate.getFullYear())-startDate.getDate();
			  Eremain= daysInMonth(endDate.getMonth(),endDate.getFullYear())-endDate.getDate();
			  alert("passed remaining!");
			  if(StartDate.getDate() + 7 + diffDays <= daysInMonth(StartDate.getMonth(),StartDate.getFullYear()))
			  {  
			  	alert("startDate didn't jump to to next month!!");
				  startDate.setDate(startDate.getDate() + 7 + diffDays );
				  Ejump= 7+ diffDays -Eremain;
				  endDate.setMonth(endDate.getMonth()+1);
				  endDate.setDate(1);
				  endDate.setDate(endDate.getDate() + Ejump );
				  start = startDate.toISOString().substring(0, 10);
				  end = endDate.toISOString().substring(0, 10);
				  let date = {
					start,
					end
				  };
				  let time = {
					"start": $('input[name="startTime"]').val(),
					"end": $('input[name="endTime"]').val()
				  };
				  form.createEvent(eventName, eventDesc, date, time);
			  }
			  else*/
			  //{
			  	
			  	
			  	 Sremain= daysInMonth(startDate.getMonth(),startDate.getFullYear())-startDate.getDate();
			    Eremain= daysInMonth(endDate.getMonth(),endDate.getFullYear())-endDate.getDate();
				 Sjump= 7+diffDays-Eremain;
				  startDate.setMonth(startDate.getMonth()+1);
				  startDate.setDate(1);
				  startDate.setDate(startDate.getDate() + Sjump );
				 Ejump= 7+diffDays-Eremain;
				  endDate.setMonth(endDate.getMonth()+1);
				  endDate.setDate(1);
				  endDate.setDate(endDate.getDate() + Ejump );
				  start = startDate.toISOString().substring(0, 10);
				  end = endDate.toISOString().substring(0, 10);
				  alert(start);
				  let date = {
					start,
					end
				  };
				  let time = {
					"start": $('input[name="startTime"]').val(),
					"end": $('input[name="endTime"]').val()
				  };
				    alert("out of if statement!");
				  form.createEvent(eventName, eventDesc, date, time);  
			   
			}
	  }
	  
  }
  else if(reWeekly==2)
 {
 	while(endDate.getMonth()!="5"&& endDate.getFullYear()<2018)
	  {
	  	
		  if(endDate.getDate() + 14 + diffDays <= daysInMonth(endDate.getMonth(),endDate.getFullYear()))
		  {
		  	  alert("Not end of month!");
			  startDate.setDate(startDate.getDate() + 14 + diffDays );
			  endDate.setDate(endDate.getDate() + 14 + diffDays );
			   start = startDate.toISOString().substring(0, 10);
				end = endDate.toISOString().substring(0, 10);
				alert(start);
			  let date = {
					start,
					end
			  };
			  let time = {
				"start": $('input[name="startTime"]').val(),
				"end": $('input[name="endTime"]').val()
			  };
			  form.createEvent(eventName, eventDesc, date, time);
		  }
		  else
		  {

			  	 Sremain= daysInMonth(startDate.getMonth(),startDate.getFullYear())-startDate.getDate();
			    Eremain= daysInMonth(endDate.getMonth(),endDate.getFullYear())-endDate.getDate();
				 Sjump= 14+diffDays-Eremain;
				  startDate.setMonth(startDate.getMonth()+1);
				  startDate.setDate(1);
				  startDate.setDate(startDate.getDate() + Sjump );
				 Ejump= 14+diffDays-Eremain;
				  endDate.setMonth(endDate.getMonth()+1);
				  endDate.setDate(1);
				  endDate.setDate(endDate.getDate() + Ejump );
				  start = startDate.toISOString().substring(0, 10);
				  end = endDate.toISOString().substring(0, 10);
				  alert(start);
				  let date = {
					start,
					end
				  };
				  let time = {
					"start": $('input[name="startTime"]').val(),
					"end": $('input[name="endTime"]').val()
				  };
				    alert("out of if statement!");
				  form.createEvent(eventName, eventDesc, date, time);  
				}
			  }
	  
		  
 }
 else if(reWeekly==3)
 {
	 
 }
 else
 {
 	alert("reWeekly=0!");
	  start = startDate.toISOString().substring(0, 10);
	  end= endDate.toISOString().substring(0, 10);
	  let date = {
					start,
					end
	  };
	  let time = {
		"start": $('input[name="startTime"]').val(),
		"end": $('input[name="endTime"]').val()
	  };
	  form.createEvent(eventName, eventDesc, date, time);
 }
});

function editEvent(id) {
  $('#edit').modal('toggle');
  $('#edit .modal-body .eventId').val(id);
}

$('#edit form').submit(function(e) {
  let eventId = $('#edit .modal-body .eventId').val();;
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
  form.editEvent(eventId, eventName, eventDesc, date, time);
});

calendar.init();
