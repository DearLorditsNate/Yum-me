$(document).ready(function() {

    // parse out res.json(recipes) from apiRoutes.js file


    $('.card-link').on('click', function() {
        var ingredients = $(this).attr('data-ingredients');
        var instructions = $(this).attr('data-instructions');
        var comments = $(this).attr('data-comment');
        console.log('ingredients', ingredients);
        console.log('instructions', instructions);
        console.log('comments', comments);
    
    });
});