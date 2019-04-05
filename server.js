// Dependencies
// Express
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var path = require('path');


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// Handlebars
var exphbs = require("express-handlebars");
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/apiCalls")(app);

var db = require('./models')

db.sequelize.sync({force: true}).then(function(){
    app.listen(PORT, function() {
        console.log("Listening on port: " + PORT);
    });    
})


