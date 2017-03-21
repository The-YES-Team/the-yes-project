var foods = "cheeseburger";
var fields = [
    "item_name",
    "brand_name",
    "nf_calories"
  ];

$(document).on("click", "#submit", displayNutrition);

function displayNutrition() { 
var food = $(this).attr("data-name");
var queryURL = "https://api.nutritionix.com/v1_1/search/" + food + "?results=0:20&fields=item_name,brand_name,nf_calories&appId=9cc304a2&appKey=8d110eedc0d5864ef8a2264a9bbbde73";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
    	console.log(response);
})
};