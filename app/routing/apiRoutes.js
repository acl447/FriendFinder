//Load Data
//Link routes to data source

let friendsData = require("../data/friends")


//Routing

module.exports = function (app) {

    // API GET Requests
    // Below code handles when users "visit" a page.
    // When a user visits a link
    // they are shown a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {

        res.json(friendsData);


    });



    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    //This will be used to handle incoming survey results. 
    //For example, User fills out survey... this data is then sent to the server...
    // Then the server saves the data to the friends array)
    //This route will also be used to handle the compatibility logic.
    // app.post("/api/friends", function (req, res) {

    //     let totalDifference = 0;

    //     if (userData) {

    //         for (let i = 0; i < friends.length; i++) {

    //             let scores = friends[i].scores;

    //             for (let j = 0; j < scores.length; j++) {

    //                 if (scores[j] - userScores[k] !== 0) {

    //                     let difference = scores[j] - userScores[k];

    //                     console.log(difference);

    //                     totalDifference += difference;

    //                     console.log(totalDifference);
    //                 }
    //             }
    //         }

    //     }

    // })

};

