// Install/require dependencies
// const path = require("path");
var express = require("express")
var exphbs = require("express-handlebars");

module.exports = function(app) {
    app.get('/login', function(req,res) {
        res.render('index');
    });
    
    app.get('/profile/user', function(req,res) {
        res.render('profile');
    });

    app.get('/profile/newuser', function(req,res) {
        res.render('newUser');
    });

    app.get('/profile/home', function(req,res) {
        res.render('home');
    });

    app.get('/profile/search', function(req,res) {
        res.render('search');
    });

    app.get('/profile/favorites', function(req,res) {
        res.render('favorites');
    });

}
