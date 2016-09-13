/*
	Created by Erin Coots - 9/12/16
	Handles sidebar methods
*/

class Display {
  constructor() {
    this.currentView = 'year';
  }

  changeView(view) {
    $("#" + this.currentView).hide();
    $("#" + view).show();
    this.currentView = view;
  }
}
