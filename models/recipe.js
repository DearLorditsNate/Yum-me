module.exports = function(sequelize, DataTypes){
    var Recipe = sequelize.define('Recipe', {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        instructions: DataTypes.TEXT,
        ingredientName: DataTypes.STRING,
        ingredientMeasure: DataTypes.STRING,
    });
    return Recipe;
};

