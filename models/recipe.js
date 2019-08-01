
module.exports = function(sequelize, DataTypes){
    const Recipe = sequelize.define('Recipe', {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        instructions: DataTypes.TEXT,
        ingredientName: DataTypes.TEXT,
        ingredientMeasure: DataTypes.STRING,
        comment: DataTypes.TEXT,
        firebaseID: DataTypes.STRING
    });
    return Recipe;
};

