$(document).ready(function() {

    $('#calendar-home').fullCalendar({

		header: false,
		views: {
        	listEvent: {
	            type: 'list',
	            buttonText: 'list',
				duration: { days: 90 },
			}
		},
		defaultView: 'listEvent',
		height: 'auto',
		displayEventTime: false,

		// THIS KEY WON'T WORK IN PRODUCTION!!!
		// To make your own Google API key, follow the directions here:
		// http://fullcalendar.io/docs/google_calendar/
		googleCalendarApiKey: 'AIzaSyB_Wv5xTOTvjWZ6TibSPHGW_2mpp9ju7S4',
		events: 'bm4nl4f76dop3h66n7a4ea67r8@group.calendar.google.com',
		
		eventClick: function(event) {
			// opens events in a popup window
			window.open(event.url, 'gcalevent', 'width=700,height=600');
			return false;
		}
		
	});

    $('#calendar').fullCalendar({

		// THIS KEY WON'T WORK IN PRODUCTION!!!
		// To make your own Google API key, follow the directions here:
		// http://fullcalendar.io/docs/google_calendar/
		googleCalendarApiKey: 'AIzaSyB_Wv5xTOTvjWZ6TibSPHGW_2mpp9ju7S4',
		events: 'bm4nl4f76dop3h66n7a4ea67r8@group.calendar.google.com',
		locale: 'ja',
		displayEventTime: false,

		eventClick: function(event) {
			// opens events in a popup window
			window.open(event.url, 'gcalevent', 'width=700,height=600');
			return false;
		}
		
	});

});