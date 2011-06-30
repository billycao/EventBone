
//////////////////////////////////////////
// Google Calendar functions
//////////////////////////////////////////

function gcalLogin() {
  scope = "https://www.google.com/calendar/feeds/";
  var token = google.accounts.user.login(scope);
}

function gcalLogout() {
  google.accounts.user.logout();
}

function gcalSetup() {
  gcalService = new google.gdata.calendar.CalendarService('EventBone-1');
  gcalLogin();
}

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
  localStorage: new Store('events');
  
});

$(function(){
});



