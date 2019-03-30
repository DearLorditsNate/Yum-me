var db = require('../models')

module.exports = function(app){
    app.post('/api', function(req, res){
        db.Recipe.create({
            name: req.body.name,
            image: req.body.image,
            instructions: req.body.instructions,
            ingredientName: req.body.ingredientName,
            ingredientMeasure: req.body.ingredientMeasure
        }).then(function(response){res.json(response)})
    })
}