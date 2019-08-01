

module.exports = function(sequelize, DataTypes){
    const User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        firebaseId: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING

    });
    return User;
};

