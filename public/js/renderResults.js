$(document).ready(function () {
    // Event listeners
    $('#search-button').on('click', function(event) {
        event.preventDefault();
        var recipeSearch = $('#recipe-search').val().trim();
        window.location = '/api/search?search=' + recipeSearch;
    });

    $('.save-fave').on('click', function(event) {
        event.preventDefault();
        var data = {
            name: $(this).attr("data-name"),
            image: $(this).attr("data-image"),
            instructions: $(this).attr("data-instructions"),
            ingredientName: $(this).attr("data-ingredients"),
            ingredientMeasure: $(this).attr("data-measurements")
        };
        console.log(data);

        $.post("/api/save", data).then(function (response) {
            console.log("Data logged to server");
            console.log(response);
        });
    });

    $('.delete-fave').on('click', function(event) {
        event.preventDefault();
        var id = $(this).attr("data-id");
        window.location = '/api/delete?id=' + id;
    });
});