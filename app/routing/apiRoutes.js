const express = require("express");
const appAPI = express();
const friends = require("../data/friends")

appAPI.get("/APIall", function(req, res) {
  res.json(friends);
});

appAPI.post("/api/match", function(req, res) {
  let currentFriend = req.body;

    var results= []; 
    for (var i = 0; i < friends.length; i++) {
                var totalScore = 0;
                for (var x = 0; x < currentFriend.scores.length; x++) {
                     totalScore+=Math.abs(currentFriend.scores[x]-friends[i].scores[x]);
        }
        results.push(totalScore);
    }
    let myfriend = results.indexOf(Math.min.apply(null,results));
    let myfriendObj = {
      name: friends[myfriend].name,
      photo:friends[myfriend].photo,
    }
    
    friends.push(currentFriend);

    res.json(myfriendObj);
});

module.exports = appAPI;