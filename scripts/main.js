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
  var reWeek= $('select[name="reWeek"]').val();
  var reDate= $('select[name="reDate"]').val();
  var diffTime= Math.abs(endDate.getDate() - startDate.getDate());
  var diffDays= Math.ceil(diffTime/(1000*3600*24));
  var Sremain=0;
  var Eremain=0;
  var Sjump=0;
  var Ejump=0;
  var start=0;
  var end=0;




//recurring weekly, biweekly, or monthly
if(reDate!=0)
  {  
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
  	while(endDate.getFullYear()<2018)
  	{
  	 
  		if(startDate.getMonth()+1==0 ||startDate.getMonth()+1==2 || startDate.getMonth()+1==4 || startDate.getMonth()+1==6 || startDate.getMonth()+1==7 ||startDate.getMonth()+1==9 || startDate.getMonth()+1==11)
  		{
  			alert("31 days");
			startDate.setMonth(startDate.getMonth()+1);
			endDate.setMonth(endDate.getMonth()+1);
			startDate.setDate(reDate);
			endDate.setDate(reDate);		
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
		else if(startDate.getMonth()+1==1) 
		{
			if(reDate>28)
			{
				startDate.setMonth(startDate.getMonth()+1);
				endDate.setMonth(endDate.getMonth()+1);	
			}
			else 
			{
			startDate.setMonth(startDate.getMonth()+1);
			endDate.setMonth(endDate.getMonth()+1);	
			startDate.setDate(reDate);
			endDate.setDate(reDate);		
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
		}
		else
		{
			
			if(reDate>30)
			{
				startDate.setMonth(startDate.getMonth()+1);
				endDate.setMonth(endDate.getMonth()+1);	
			}
			else
		   {
				startDate.setMonth(startDate.getMonth()+1);
				endDate.setMonth(endDate.getMonth()+1);
				startDate.setDate(reDate);
				endDate.setDate(reDate);			
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
	}
 }
}
  if(reWeekly==1)
  {
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

	//recurring bi weekly
  else if(reWeekly==2)
 {
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

//recurring monthly (quad weekly?) 
//ex. the first monday of every month
 else if(reWeekly==3)
 {
	let time = {
	"start": $('input[name="startTime"]').val(),
	"end": $('input[name="endTime"]').val()
	};

	//get the desired day of the week on which the event will be repeated
	var dayOfTheWeek = dayOfWeek( $('input[name="startDate"]').val() ) ;
	alert(dayOfTheWeek);

	//get the day of the week & week number we wish to repeat on
	//also computes the difference between the start day and end day (for multi day events)
	var recurDay = ( $('input[name="startDate"]').val() ) .substring(8,10);
	var recurDayDiff = ( $('input[name="startDate"]').val() ) .substring(8,10) - recurDay;
	var recurWeekNum = Math.ceil(recurDay/7);

	//gets the month index from the calendarInfo.js array
	var recurMonth = ($('input[name="startDate"]').val()).substring(5,7);
	var monthIndex;
	for(var i = 0; i <10; i++) {
		if(months[i].numeric == recurMonth){
			monthIndex = i;
		}
	}

	var startDayOfWeek;
	var multiplier;
	var desiredDate;
	var desiredEndDate;
	for(monthIndex; monthIndex <= 9; monthIndex++) {

		//find the day of the week that the month starts on
		startDayOfWeek = months[monthIndex].firstDay;
		
		//finds the week multiplier
		if(dayOfTheWeek >= startDayOfWeek ) {
			multiplier = recurWeekNum -1;
		} else {
			multiplier = recurWeekNum;
		}	

		//calculates the desired date
		desiredDate= dayOfTheWeek + 1 - startDayOfWeek + (multiplier * 7);
		desiredEndDate = desiredDate - recurDayDiff;

		//if date impossible, print error message, otherwise add event
		if(desiredDate > months[monthIndex].days) {

			var dayOfWeekName;
			if(dayOfTheWeek == 0 ) { dayOfWeekName="Sundays";
			} else if( dayOfTheWeek == 1 ) { dayOfWeekName="Mondays";
			} else if( dayOfTheWeek == 2 ) { dayOfWeekName="Tuesdays";
			} else if( dayOfTheWeek == 3 ) { dayOfWeekName="Wednesdays";
			} else if( dayOfTheWeek == 4 ) { dayOfWeekName="Thursdays";
			} else if( dayOfTheWeek == 5 ) { dayOfWeekName="Fridays";
			} else if( dayOfTheWeek == 6 ) { dayOfWeekName="Saturdays"; }

			alert("The pattern you have requested is not fully available because " + 
					"there are fewer than " + recurWeekNum + " " + dayOfWeekName + 
					" in " + months[monthIndex].month);

		} else {	
			//change the date
			var year;
			if(monthIndex > 5 ){ year=2017;
			} else { year=2016;	}

			let date = {
					"start": year+"-"+months[monthIndex].numeric+"-"+desiredDate,
					"end": year+"-"+months[monthIndex].numeric+"-"+desiredEndDate,
			};
		
			//create the event
			form.createEvent(eventName, eventDesc, date, time);
		}
	}
 }

//recurring by a day of the week
else if(reWeek != 7) {

	let time = {
		"start": $('input[name="startTime"]').val(),
		"end": $('input[name="endTime"]').val()
	};

	//get the current day of the week based on start date
	var dayOfTheWeek1 = dayOfWeek( $('input[name="startDate"]').val() ) ;

	//get the date
	var curDay = ( $('input[name="startDate"]').val() ) .substring(8,10);
	var expectedDiff = ( $('input[name="startDate"]').val() ) .substring(8,10) - curDay;

	//gets the month index from the calendarInfo.js array
	var curMonth = ($('input[name="startDate"]').val()).substring(5,7);
	var monthIndex1;

	var reWeekOptions = document.getElementById("reWeek1");
	var dayArray = [];
	for ( var i = 0; i < 8; i++) {
		if(reWeekOptions.options[i].selected) {
			dayArray.push(reWeekOptions.options[i].value);
		}
	}

	var desiredDayOfWeek;
	var daysAdded;
	var newDate;
	var first;
	var startD, endD;
	for( var k = 0; k < dayArray.length; k++) {
		desiredDayOfWeek = dayArray[k];
		first = true;
		//console.log("-----desired day: " + desiredDayOfWeek);
		//console.log("day array length: " + dayArray.length);

		curDay = ( $('input[name="startDate"]').val() ) .substring(8,10);
		curMonth = ($('input[name="startDate"]').val()).substring(5,7);
		for(var i = 0; i <10; i++) {
			if(months[i].numeric == curMonth){
				monthIndex1 = i;
			}
		}

		dayOfTheWeek1 = dayOfWeek( $('input[name="startDate"]').val() ) ;
		//console.log("current day " + curDay);
		//console.log("current month" + curMonth);
		//console.log(dayOfTheWeek1);

		//queues up the next date on the right day of the week
		newDate = parseInt(curDay);
		if(desiredDayOfWeek > dayOfTheWeek1){
			daysAdded =  desiredDayOfWeek - dayOfTheWeek1;
		} else if(desiredDayOfWeek < dayOfTheWeek1) {
			daysAdded =  desiredDayOfWeek - dayOfTheWeek1 + 7;
		} else if(desiredDayOfWeek == dayOfTheWeek1) {
			daysAdded = 0;
		}
		newDate += daysAdded;

		//determines all the dates to be added
		for(var j =0; monthIndex1 <=9; j++ ){

			var year1;
			if(monthIndex1 > 5 ){ year1=2017;
			} else { year1=2016;	}

			if(first){
				startD = year1 +"-"+months[monthIndex1].numeric+"-"+newDate;
				endD = year1 +"-"+months[monthIndex1].numeric+"-"+(parseInt(newDate) + expectedDiff);
				//console.log(startD);
				addEvent( eventName, eventDesc, startD, endD, time);
				first = false;
			}

			newDate += 7; 

			if(newDate <= months[monthIndex1].days ) {
				startD = year1 +"-"+months[monthIndex1].numeric+"-"+newDate;
				endD = year1 +"-"+months[monthIndex1].numeric+"-"+(parseInt(newDate) + expectedDiff);
				//console.log(startD);
				addEvent( eventName, eventDesc, startD, endD, time);
				//add date

			} else  {
				//console.log("moving to new month");
				newDate -= months[monthIndex1].days;
				//console.log("new date: " + newDate);
				monthIndex1++;
				if(monthIndex1 != 10 ) {
					startD = year1 +"-"+months[monthIndex1].numeric+"-"+newDate;
					endD = year1 +"-"+months[monthIndex1].numeric+"-"+(parseInt(newDate) + expectedDiff);
					addEvent( eventName, eventDesc, startD, endD, time);
					//console.log(startD);
				}						
			}
		}
	}
}

//not recurring based on weeks
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

function addEvent(name, desc, date1, date2, time){

	let date = {
			"start": date1,
			"end": date2
	};

			form.createEvent(name, desc, date, time);

}

//determines the day of the week for a date passed in
function dayOfWeek(date){
	//parses the month and date
	var day = date.substring(8,10);

	//compares the month number to the index of the months array
	//that stores the info for this particular month in the calendarInfo.js
	var month = date.substring(5,7);
	var monthIndex;
	for(var i = 0; i <10; i++) {
		if(months[i].numeric == month){
			monthIndex = i;
		}
	}

	//gets the week number
	// ex October 12 is the second Wednesday in October
	var weekNum = Math.ceil(day/7);

	//gets the day of the week of the first day of the month, uses it to 
	//find the day of the week for the current date
	var dayOfWeekOfFirstDay = months[monthIndex].firstDay;

	if( (day - (weekNum-1)*7 - (7-dayOfWeekOfFirstDay) ) <= 0 ) {
		multip = weekNum -1;
	} else {
		multip = weekNum;
	}
	var dayOfTheWeek = (day - (multip * 7) ) + dayOfWeekOfFirstDay -1;

	return dayOfTheWeek;
 
}


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
