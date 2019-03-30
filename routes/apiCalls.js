require("dotenv").config();
var keys = require("../keys.js");
var axios = require("axios");

module.exports = function (app) {
    app.get("/search", function (req, res) {
        axios
            .get(
                "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken_breast"
            )
            .then(function (response) {
                //   for (var i = 0; i < 5; i++) {
                //       console.log(response);
                //     //   console.log(response.meals);
                //     //   res.json(response.data.hits);
                //   }
                console.log(response);
                res.json(response.data);
            });
    });
}