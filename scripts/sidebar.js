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
  * @param {String} view - The view type to display
  */
  changeView(view) {
	  //if(view == 'today'){
		//if(this.currentView == 'month'){
			//$("#" + this.currentView).hide();
			//$("#" + 'month').show();
			//this.currentView = 'month';
		//}
		//else if(this.currentView == 'week'){
			//$("#" + this.currentView).hide();
			//$("#" + 'week').show();
			//this.currentView = 'week';
		//}
		//else if(this.currentView == 'day'){
			//$("#" + this.currentView).hide();
			//$("#" + 'day').show();
			//this.currentView = 'day';
		//}
		//else{}
	  //}
	  //else{
	    // $("#" + this.currentView).hide();
	    // $("#" + view).show();
	    // this.currentView = view;
	  //}

    $("#" + this.currentView).hide();
    $("#" + view).show();
    this.currentView = view;
  }
}
