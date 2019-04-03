var db = require('../models')

module.exports = function(app){
    // Add recipe
    app.post('/api/save', function(req, res) {
        console.log(req.query);
        db.Recipe.create({
            name: req.query.name,
            image: req.query.image,
            instructions: req.query.instructions,
            ingredientName: req.query.ingredientName,
            ingredientMeasure: req.query.ingredientMeasure
        }).then(function(response) {
            res.json(response);
        });
    });

    // Get saved recipes
    app.get('/api/save', function(req, res) {
        db.Recipe.findAll({}).then(function(recipes) {
            res.json(recipes);
        });
    });
}