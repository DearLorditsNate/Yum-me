$(document).ready(function() {
    // Event listeners
    $('#search-button').on('click', e => {
        event.preventDefault();
        var recipeSearch = $('#recipe-search').val().trim();
        console.log(recipeSearch);

        // $.post("/api/search", recipeSearch).then(function(response) {
        //     // console.log(response);
        // });

        $.ajax({
            url: "/api/search",
            type: "POST",
            data: {
                search: recipeSearch
            }
        }).then(function(response) {
            console.log(response);
        });
    });
});