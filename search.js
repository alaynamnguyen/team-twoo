var CLUB_DATA = [];
function loadData() {} //Call sometime after page load, populate CLUB_DATA.

//This will be a callback for search events or something.
function search(e) {} // -> [club]

function matches(args) {
	//Search through clubs, somehow.
	return [{
		"name" : "Dummy club",
		"keywords" : ["computer science", "math"],
		"schedule" : ["meeting time and date", "meeting time and date", "..."]
	}];
}
