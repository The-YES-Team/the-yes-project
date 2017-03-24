$(document).ready(function () {
    var recipeList = [];

    $("#searchRecipeButt").on('click', searchForRecipe);
    $(".recipe").on("keydown", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            searchForRecipe();
        }
    });
    function searchForRecipe() {
        recipeList.length = 0;
        var maxCal = 500, // REMAINING CALORIES FOR THE DAY AFTER FOOD INTAKE,
            minCal = 0,
            ingredient = $("#user-inputRecipe").val().trim();
        ingredient.split(' ').join('+');
        var url = 'https://api.edamam.com/search' +
            '?q=' + ingredient +
            '&app_id=15485612' +
            '&app_key=cb66418c580f3a37a4e343be2af25481' +
            '&from=0' +
            '&to=10' +
            '&calories=gte%20' + minCal + ',%20lte%20' + maxCal +
            '&health=alcohol-free';
        $.ajax({
            url: url,
            method: 'GET'
        }).done(function (response) {
            $("#recipe-result").empty();

            var results = response.hits.length;
            var newDiv = $("<div>");

            for (var i = 0; i < results; i++) {
                recipeList.push(response.hits[i]);
                var button = $("<button>");
                var itemName = response.hits[i].recipe.label;
                var calPerServing = parseInt(response.hits[i].recipe.totalDaily.ENERC_KCAL.quantity);

                button.addClass("recipeButton");
                button.attr("data-name", calPerServing);
                button.attr("data-index", i);
                button.append(itemName + "<br>Cal Per Serving: " + calPerServing);

                newDiv.append(button);
                $("#recipe-result").append(newDiv);
            }
            ; // end of for loop
        });
        $("#user-inputRecipe").val("");
    }
    $("#recipe-result").on('click', '.recipeButton', function () {
        window.open(recipeList[$(this).attr('data-index')].recipe.url, '_blank');
    });
});