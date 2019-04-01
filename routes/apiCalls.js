require("dotenv").config();
var keys = require("../keys.js");
var axios = require("axios");

module.exports = function (app) {
    app.post("/api/search", function (req, res) {
        console.log("test");
        console.log(req.body);
        // console.log(res);
        // axios
        //     .get(
        //         "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
        //     )
        //     .then(function (response) {
        //         //   for (var i = 0; i < 5; i++) {
        //         //       console.log(response);
        //         //     //   console.log(response.meals);
        //         //     //   res.json(response.data.hits);
        //         //   }
        //         console.log(response);
        //         res.json(response.data);
        //     });
        res.send("response from the server");
    });
}