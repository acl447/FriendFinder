//Load Data
//Link routes to data source

let friendsData = require("../data/friends");

//Declare function to compare 2 arrays of data 

function compare(entireFriendsList, newFriendArray) {

    let totalDifference = 0;
    let totalDifferencesArray = [];

    for (let i = 0; i < entireFriendsList.length; i++) {


        for (let j = 0; j < entireFriendsList[i].scores.length; j++) {

            let difference = Math.abs(entireFriendsList[i].scores[j] - newFriendArray[j]);

            if (difference !== 0) {

                //console.log(difference);

                totalDifference += difference;

            }

        };

        console.log(totalDifference);

        totalDifferencesArray.push(totalDifference);


    }

    let sortedtotalDiffArray = totalDifferencesArray.sort();

    console.log("The lowest total difference is " + sortedtotalDiffArray[0]);


};




//Routing

module.exports = function (app) {

    // API GET Request
    // Below code handles when users "visit" a page.
    // When a user visits a link
    // they are shown a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {

        res.json(friendsData);



    });



    // API POST Request
    // Below code handles when a user submits a form and thus submits data to the server.
    //This will be used to handle incoming survey results. 
    //For example, User fills out survey... this data is then sent to the server...
    // Then the server saves the data to the friends array)
    //This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function (req, res) {

        //Converts the array of new survey answers from strings to integers
        let parsedScoresArray = [];

        let newFriendScores = req.body.scores;

        for (let i = 0; i < newFriendScores.length; i++) {

            parsedScoresArray.push(parseInt(newFriendScores[i]));

        }
        console.log(parsedScoresArray);

        //Compare the array of new survey answers to the other old arrays of survey answers
        compare(friendsData, parsedScoresArray);

        //Add the whole newFriend object-- name, photo, scores -- to the array of friends data
        friendsData.push(req.body);

        res.json(true);

        console.log(friendsData);

    })

};

