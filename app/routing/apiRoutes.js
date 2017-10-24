const express = require("express");
const appAPI = express();
const friends = require("../data/friends")


appAPI.get("/APIall", function(req, res) {
  res.json(friends);
});

appAPI.post("/api/match", function(req, res) {
  let currentFriend = req.body;
  res.json(currentFriend);
  let currentMatch = MatchMe(currentFriend);
  console.log("CurrentMatch: ",currentMatch);
  // friends.push(currentFriend);
  appAPI.get("/api/matchResult", function(req, res) {
    res.json(currentMatch);
  });
});

function MatchMe(friend){
    var results= []; 
    for (var i = 0; i < friends.length; i++) {
                var totalScore = 0;
                for (var x = 0; x < friend.scores.length; x++) {
                     totalScore+=Math.abs(friend.scores[x]-friends[i].scores[x]);
        }
        results.push(totalScore);
    }
    let myfriend = results.indexOf(Math.min.apply(null,results));
    let myfriendObj = {
      name: friends[myfriend].name,
      photo:friends[myfriend].photo,
    }
    return myfriendObj
}

module.exports = appAPI;