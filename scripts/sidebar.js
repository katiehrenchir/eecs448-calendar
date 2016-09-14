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
