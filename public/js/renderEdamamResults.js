$('.ingredient-start').css('display', 'block');

var random = Math.floor((Math.random() * 8));
for (var i = 0; i < 3; i++) {

    var thisHit = response.hits[random].recipe;

    //build each recipe
    $('#card-' + i + '-img').attr('src', thisHit.image);
    $('#card-' + i + '-title').text(thisHit.label);
    $('#ul-' + i).append($('<li>').text('Serving size: ' + thisHit.yield));
    $('#recipe-url-' + i).text("See Full Recipe").attr('href', thisHit.url).attr('target', '_blank');

    //add link, title and photo to 'save recipe' button
    $('#save-recipe-' + i).attr('link', thisHit.url);
    $('#save-recipe-' + i).attr('title', thisHit.label);
    $('#save-recipe-' + i).attr('photo', thisHit.image);

    //Populate ingredients popup card
    ingredients(response);
    $('#popup-title-' + i).text(thisHit.label);
    for (var j = 0; j < thisHit.ingredients.length; j++) {
        $('#popup-ingredients-' + i).append($('<li class="ingredient">').text(thisHit.ingredients[j].text));
    };

    random++;

    //add in dietlabels
    for (var j = 0; j < thisHit.dietLabels.length; j++) {
        $('#ul-' + i).append($('<li>').text(thisHit.dietLabels[j]));
    };

    //add in healthlabels
    for (var j = 0; j < 2; j++) {
        $('#ul-' + i).append($('<li>').text(thisHit.healthLabels[j]));
    };
    //reset input values
    $('#protein-search').val('');
    $('#vegetable-search').val('');
}