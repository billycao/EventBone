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

