// Install/require dependencies
// const path = require("path");
var express = require("express")
var exphbs = require("express-handlebars");

module.exports = function(app) {
    app.get('/login', function(req,res) {
        res.render('index');
    });
}