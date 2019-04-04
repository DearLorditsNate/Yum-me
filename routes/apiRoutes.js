var db = require('../models')

module.exports = function(app){
    // Add recipe
    app.post('/api/save', function(req, res) {
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
            res.render('favorites', {recipes: recipes});
        });
    });

    // Delete saved recipe
    app.get('/api/delete', function(req, res) {
        db.Recipe.destroy({
            where: {
                id: req.query.id
            }
        }).then(function(response) {
            res.redirect('/profile/favorites');
        });
    });
}