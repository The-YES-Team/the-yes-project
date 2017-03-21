$(document).ready(function () {


    $(":button").on('click', function () {
        var minCal = 500,
            maxCal = 700,
            ingredient = 'chicken',
            url = 'https://api.edamam.com/search' +
                '?q=' + ingredient +
                '&app_id=15485612' +
                '&app_key=cb66418c580f3a37a4e343be2af25481' +
                '&from=0' +
                '&to=3' +
                '&calories=gte%20' + minCal + ',%20lte%20' + maxCal +
                '&health=alcohol-free';
        $.ajax({
            url: url,
            method: 'GET'
        }).done(function (response) {


        });


    });

});