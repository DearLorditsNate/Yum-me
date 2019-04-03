var db = require('../models')

module.exports = function(app){
    // Add recipe
    app.post('/api/save', function(req, res) {
        console.log(req.body);
        db.Recipe.create({
            name: req.body.name,
            image: req.body.image,
            instructions: req.body.instructions,
            ingredientName: req.body.ingredientName,
            ingredientMeasure: req.body.ingredientMeasure
        }).then(function(response) {
            res.json(response);
        });
    });

    // Get saved recipes
    app.get('/profile/favorites', function(req, res) {
        db.Recipe.findAll({}).then(function(recipes) {
            console.log('recipes', recipes)
            // console.log('recipes', recipes[0].dataValues)
            res.render('favorites', {recipes: recipes});
        });
    });
}