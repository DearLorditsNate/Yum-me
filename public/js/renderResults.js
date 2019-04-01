$(document).ready(function() {
    // Event listeners
    $('#search-button').on('click', e => {
        event.preventDefault();
        var recipeSearch = $('#recipe-search').val().trim();
        console.log(recipeSearch);

        $.ajax({
            url: "/api/search",
            type: "GET",
            data: {
                search: recipeSearch
            }
        }).then(function(response) {
            console.log(response);
            // Render results to the DOM
            for (var i = 0; i < response.meals.length; i++) {
                console.log(response.meals[i]);
                // Name
                console.log(response.meals[i].strMeal);
                // Image
                console.log(response.meals[i].strMealThumb);
            }
        });
    });
});