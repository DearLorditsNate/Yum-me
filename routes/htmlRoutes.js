// Install/require dependencies
// const path = require("path");
var express = require("express")
var exphbs = require("express-handlebars");

module.exports = function(app) {
    app.get('/home', function(req,res) {
        res.render('home');
    });
    
    app.get('/profile/user', function(req,res) {
        res.render('profile');
    });

    app.get('/profile/newuser', function(req,res) {
        res.render('newUser');
    });

    app.get('/profile/search', function(req,res) {
        res.render('search');
    });

    app.get('/profile/favorites', function(req,res) {
        res.render('favorites');
    });

    app.get('/profile/logout', function(req,res) {
        res.render('logout');
    });

}
