# Yum-me
A fully RESTful web application that allows users to search, save, edit, create and delete recipes. Yum(me) is the new age equivalent of a personalized cookbook! 

<strong>Video Demonstration:</strong>
<strong>Heroku Link:</strong>
  
## Set-Up
Yum(me)! relies heavily on NPM packages! After running `npm init -y` &mdash; to initialize the `package.json` file &mdash; proceed installing all of the following node packages:

### Node packages

  * [Axios](https://www.npmjs.com/package/axios)

  * [Express](https://www.npmjs.com/package/express)

  * [DotEnv](https://www.npmjs.com/package/dotenv)

  * [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
  
  * [mysql](https://www.npmjs.com/package/mysql)
  
  * [mysql2](https://www.npmjs.com/package/mysql2)
  
  * [path](https://www.npmjs.com/package/path)
  
  * [sequelize](https://www.npmjs.com/package/sequelize)
  
### Technologies Used
- `Node` and `Express` Web Server
- Backed by a `MySQL Database` with a `Sequelize ORM`
- CRUD routes for retrieving, adding, updating, and deleting data
- Firebase user authentication
- `Bootstrap` and `Express Handlebars` front-end frameworks
- MVC Paradigm file structure
- Heroku deployment

## Files
### `.gitignore`
`.gitignore` file, inclusive of the following lines, was created to protect API keys and "secret" information.

```
node_modules
.DS_Store
.env
```

### `.env`
`.env` holds the values of my API keys and is used by the `dotenv` package to set the environment variables to the global `process.env` object in node. These are values specific to the computer on which node runs. External users will need to obtain their own spotify API key and create their own `.env` file.

```keys.js
# Firebase API keys

exports.firebase_api_key = {
    password: process.env.api_key
}

```
## Primary Functionalities of <em>Yum(me)!</em>
- <strong>AJAX call:</strong> Pulls the value from the "search" term input and queries the mealdb API. The appropriate response object data is selected and then dynamically added as `data-attributes` to the `<a>` tag surrounding "Save to Favorites."

- <strong>POST request:</strong> When a user clicks 'Save to Favorites', jQuery selects pulls the data-attributes stored on the `<a>` link then sends that data as a POST request to be stored in the `Recipe` table.

- <strong>GET request</strong> - When a user logs in, all their saved recipes automatically appear on their Favorites page. This information is selected via their unique Firebase User ID from the `User` table.

- <strong>Input Sanitization</strong> - We have minor input validations

### Future Development
- <strong>Database Efficiency</strong> - At this time, ingredients and measurements are each stored in strings which means we have duplicates! To be scalable, we would need to store each ingredient and each measurement once and then use foreign keys to access the correct data. 

- <strong>Improved Input Sanitization</strong> - This will eventually include the functionality of updating ingredients, measurements, and instructions in the "View Full" modal on the Favorites page.

- <strong>Reduce Data</strong> - At this time there are no constraints on the number of results rendered to the page. Additionally, each card contains all requisite response object data `==` limitless data could be send to the page! Not good. Ideally, we would love to limit to 3 -5 results and then include a "Next" button in the bottom right corner. Furthermore, this will also create a nicer user experience because they will not be overwhelmed with results, exhausted from choosing, and then being unstaisfied because they weren't sure if they picked the right one! #paradoxofchoice The user will be pleased with a few options, be energized by their easy choice, and then be even more atisfied with it as they start cooking and eating!

- <strong>Better API for Search Page</strong> - The current api used for the Search page is very limited in the number and variety of recipes with only about 100 recipes to search through.

- <strong>Filter Recipes on Favorites Page</strong> - Add functionality to the Favorites page where in users could search by ingredient, cuisine or name of 
recipe, or have the option to filter alphabetically, date saved, or with a possible ranking feature. We could even include a "Top 5" most used.

- <strong>Social Commenting and Sharing</strong>

- <strong>Mobile App</strong>

<hr>
## The Creators

### [Nate Micinski]()
- Primary Contributions:
- Team Strengths:
- Favorite Aspect:
- What I learned: "<em>insert what you learned throught his project!<em>"

### [Hanna Lauth]()
- Primary Contributions:
- Team Strengths:
- Favorite Aspect: The "View Full" modal is my favorite feature!
- What I learned: "<em>That both Bootstrap and Materialize have particular functionality when it comes to buttons and input fields... you must click on the exact right spot for it to work! We spent a good 4 hours trying to figure out why I couldn't log in or sign up on the deployed heroku app from my computer... come to find out I only needed to click exactly on the text and wait 2 seconds - BOOM! Signed In. On a more technical note, I learned about pulling user input from multiple input fields simuntaneously, furthered my understanding and comfortability with `CRUD`, `back-end`, and jQuery/JavaScript, learned how to make HTML elements editable (`contentedible`), and became best friends with Modals, GitHub and Bash.<em> "
  
### [Mike Wilkenson]()
- Primary Contributions: Firebase User Authentication
- Team Strengths:
- Favorite Aspect:
- What I learned: "<em>insert what you learned throught his project!<em>"

### [Jenn Goldman]()
- Primary Contributions: 
- Team Strengths:
- Favorite Aspect:
- What I learned: "<em>insert what you learned throught his project!<em>"
