    var foods = [];
    var totalCalories = 0;

    $(document).ready(function($) {


        $("#submit").on("click", function(event) {
            event.preventDefault();

            var food = $("#user-input").val().trim();

            foods.push(food);

            displayNutrition();

        });

        function displayNutrition() {
            var food = $("#user-input").val().trim();
            var queryURL = "https://api.nutritionix.com/v1_1/search/" + food + "?results=0:50&fields=item_name,brand_name,nf_calories&appId=9cc304a2&appKey=8d110eedc0d5864ef8a2264a9bbbde73";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).done(function(response) {

                var results = response.hits
                $("#nutrition-input").empty();

                console.log(response);

                var newDiv = $("<div>");
                newDiv.addClass("newDiv");


                for (var i = 0; i < results.length; i++) {
                	var button = $("<button>");
                	var itemName = results[i].fields.item_name
                	var brandName = results[i].fields.brand_name
                	var calorieCount = results[i].fields.nf_calories

                	button.addClass("foodButton");
                	button.attr("data-name", calorieCount);
                	button.append(itemName + "<br>" + brandName + "<br>" + calorieCount);

                	newDiv.append(button);
                    $("#nutrition-input").append(newDiv);
                }; // end of for loop
            }); // end of response function
            }; // end of displayNutrition

            var foodDiv = $("<div>");
            foodDiv.addClass("foodDiv");
            var addCalories = [];

            $("#nutrition-input").on("click", ".foodButton" ,function() {
            	$("#nutrition-input").empty();

            	$(this).appendTo("#food-storage");
            	console.log("I am the first this", this);

            	addCalories.push(this);
            	console.log("hello", this);
   	
            	totalCalories += JSON.parse($(this).attr("data-name"));
            	console.log(this);

            	$("#result-div").html(totalCalories);
            }); // end of on click function
            $("#food-storage").on("click", ".foodButton", function() {
            	totalCalories -= JSON.parse($(this).attr("data-name"));
            	$(this).remove();
            	$("#result-div").html(totalCalories);
            });
    }); // end of document.ready
    }; // end of displayNutrition
    }); // end of document.ready

