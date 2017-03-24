// Defining Global Variables

var userCalorieGoal = 0;
var userCalorieIntake = 0;

// On Document Load

$(document).ready(function(){

// Loading Animations
function pulsate() {
	$("#hero_logo").fadeIn(2000);
}
pulsate();

// Creates New or Find Me User buttons

	$("<span>")
		.addClass("loginItem")
		.attr("id", "newUserBtn")
		.append($("<button>").text("New User"))
		.appendTo("#user-btn-span");
	$("<span>")
		.addClass("loginItem")
		.append($("<h4>").text(" or "))
		.appendTo("#user-btn-span");
	$("<span>")
		.addClass("loginItem")
		.attr("id", "findUserBtn")
		.append($("<button>").text("Find Me"))
		.appendTo("#user-btn-span");

// On button clicks

$("#newUserBtn").on("click", function(event) {
	$("#new-user-form").attr("style", "");
});






// Closing On Document Load Function
});