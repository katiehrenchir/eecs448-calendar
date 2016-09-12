/*
	Created by Erin Coots - 9/12/16
	Handles sidebar methods
*/

var currentView = 'year';
$("#" + currentView).show();

var changeView = function(view) {
  $("#" + currentView).hide();
  $("#" + view).show();
  currentView = view;
}
