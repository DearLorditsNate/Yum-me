var db = require('../models')

module.exports = function (app) {
    // Add recipe
    app.post('/api/save', function (req, res) {
        db.Recipe.create({
            name: req.body.name,
            image: req.body.image,
            instructions: req.body.instructions,
            ingredientName: req.body.ingredientName,
            ingredientMeasure: req.body.ingredientMeasure,
            firebaseID: req.body.firebaseID
        }).then(function (response) {
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
 
  
    app.get('/api/favorites/:id', function (req, res) {
        db.Recipe.findAll({ where: { firebaseID: req.params.id } }).then(function (recipes) {
            res.render('favorites', { recipes: recipes });
        });
    });

    // Delete saved recipe
    app.get('/api/delete', function (req, res) {
        db.Recipe.destroy({
            where: {
                id: req.query.id
            }
        }).then(function (response) {
            res.redirect('/profile/favorites');
        });
    });

    //create new user with sign up form
    app.post('/api/newUser', function (req, res) {
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            firebaseId: req.body.firebaseId,
            email: req.body.email,
            password: req.body.password
        }).then(function (response) {
            res.json(response);
        })
    })

    //get currently signed in user's name for the nav bar
    app.get('/api/User', function (req, res) {
        console.log(req.query.firebaseId)
        db.User.findOne({
            where: {
                firebaseId: req.query.firebaseId
            }
        }).then(function (response) {
            res.json(response);
        });
    });

    // Updated saved recipe
    app.put('/api/update', function (req, res) {
        db.Recipe.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (response) {
                res.json(response);
            });
    });
}
