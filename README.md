# Yum-me
A fully RESTful web application that allows users to search, save, edit, create and delete recipes. Yum(me) is the new age equivalent of a personalized cookbook! 

<strong>Video Demonstration:</strong>
<strong>Heroku Link:</strong>
  
## Set-Up
LIRI is powered by and styled with NPM packages! After running `npm init -y` &mdash; to initialize the `package.json` file &mdash; proceed installing all of the following node packages:

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
###`server.js`


## Primary Functionalities of <em>Yum(me)!</em>



### Future Development
1. Database efficiency
2. Render only x number of results to page then when user clicks "Next" button more recipes will populate
3. Social engagement and sharing
4. Better api for search results page
5. Filter recipes on favorites page
6. Mobile app
7. Toast/Snackbar

<hr>
##The Creators

### [Nate Micinski]()
- Primary Contributions:
- Team Strengths:
- Favorite Aspect:
- What I learned: "<em>insert what you learned throught his project!<em>"

### [Hanna Lauth]()
- Primary Contributions:
- Team Strengths:
- Favorite Aspect:
- What I learned: "<em>insert what you learned throught his project!<em>"
  
### [Mike Wilkenson]()
- Primary Contributions:
- Team Strengths:
- Favorite Aspect:
- What I learned: "<em>insert what you learned throught his project!<em>"

### [Jenn Goldman]()
- Primary Contributions:
- Team Strengths:
- Favorite Aspect:
- What I learned: "<em>insert what you learned throught his project!<em>"
