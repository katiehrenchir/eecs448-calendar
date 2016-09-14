/*
	Created by Erin Coots - 9/12/16
	Handles sidebar methods
*/

/** Class representing display methods */
class Display {
  /**
  * Sets the current view. Default - yearly
  */
  constructor() {
    this.currentView = 'year';
  }

  /**
  * Hides the current view and display the new
  * @param {string} view - The view type to display
  */
  changeView(view) {
    $("#" + this.currentView).hide();
    $("#" + view).show();
    this.currentView = view;
  }
}

var modal = document.getElementById("create");

var btn = document.getElementById("addButton");

var close = document.getElementsByClassName("close")[0];

var startDate = document.getElementsByName("startDate");

var endDate = document.getElementsByName("endDate");

var startTime = document.getElementsByName("startTime");

var endTime = document.getElementsByName("endTime");

var title = document.getElementById("eventTitle");

var description = document.getElementById("eventDesc");

var createEventBtn = document.getElementById("creating");

var eventsList = [];

var eventNum = 0;

btn.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//not sure if this will store???
createEventBtn.onclick = function() {
    eventsList[eventNum] = [title, startDate, endDate, startTime, endTime, description];
    eventNum++;
}
