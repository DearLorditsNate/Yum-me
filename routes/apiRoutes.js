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
            for (var i = 0; i < recipes.length; i++) {
                var measurementArr = [];
                var measurementString = recipes[i].ingredientMeasure;

                var itemArr = [];
                var itemString = recipes[i].ingredientName;

                measurementString = measurementString.split(',');
                for (var j = 0; j < measurementString.length; j++) {
                    if (measurementString[j] !== " ") {
                        measurementArr.push(measurementString[j].trim());
                    }
                }

                itemString = itemString.split(',');
                for (var k = 0; k < itemString.length; k++) {
                    if (itemString[k] !== " ") {
                        itemArr.push(itemString[k]);
                    }
                }

                for (var l = 0; l < measurementArr.length; l++) {
                    measurementArr[l] = measurementArr[l] + itemArr[l];
                }
                recipes[i].ingredients = measurementArr;
            }
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

    // Updated saved recipe
    app.put('/api/update', function(req, res) {
        db.Recipe.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(response) {
                res.json(response);
            });
    });
}