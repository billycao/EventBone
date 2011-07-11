//////////////////////////////////////////
// Backbone.js
//////////////////////////////////////////

var Event = Backbone.Model.extend({
  initialize: function() {
    this.set({
      title         : 'New Event',
      start         : '',
      end           : '',
      desc          : '',
      location      : '',
      participants  : '',
      recurrence    : '',
      reminders     : ''
    });
  }
});

var EventList = Backbone.Collection.extend({
  model: Event,
  localStorage: new Store('events'),

	starred			: function() {},
	unstarred		: function() {},
	reminders		: function() {}
});


var EventView = Backbone.View.extend({
	tagName: "li",

	//template: _.template('#item-template').html()),

	events: {
		"click li.item"						: "toggleShow",
		"dblclick .editable"			: "edit",
		"hover span.desc"					: "showDesc"
		// more
	},

	toggleShow	: function() {}
});

var AppView = Backbone.View.extend({
});


$(function(){
});

