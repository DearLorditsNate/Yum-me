$(document).ready(function() {
    // Event listeners
    $('#search-button').on('click', e => {
        event.preventDefault();
        var recipeSearch = $('#recipe-search').val().trim();
        console.log(recipeSearch);
        window.location = '/api/search?search=' + recipeSearch;
    });
});