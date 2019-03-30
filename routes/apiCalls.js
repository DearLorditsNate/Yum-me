require("dotenv").config();
var keys = require("../keys.js");
var axios = require("axios");

module.exports = function(app) {
  app.get("/search", function(req, res) {
      axios
          .get(
              "https://api.edamam.com/search?app_id=" +
              keys.edamam.id +
              "&app_key=" +
              keys.edamam.key +
              "&q=steak"
          )
          .then(function (response) {
              for (var i = 0; i < 5; i++) {
                  console.log(response.data.hits[i]);
                  res.json(response.data.hits);
              }
          });
  });  
}