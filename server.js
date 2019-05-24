//Dependencies
let express = require("express");

//Creates an instance of an express app
let app = express();


//Lets Heroku assign PORT or defaults to 8080
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

//Starts server listening for client requests
app.listen(PORT, function() {

    console.log("Server is listening on http://localhost" + PORT);
});
