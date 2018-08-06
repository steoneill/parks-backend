const express = require("express"),
  app = express(),
  axios = require("axios"),
  themeparks = require("themeparks"),
  moment = require("moment");

app.get("/parks/:parkId", (req, res) => {
  let park = new themeparks.Parks[req.params.parkId]();
  park.GetWaitTimes().then(function(rides) {
    // print each wait time
    for (var i = 0, ride; (ride = rides[i++]); ) {
      res.send(ride.name + ": " + ride.waitTime + " minutes wait");
    }
  }, console.error);
});

app.listen(3000 || process.env.PORT, () => {
  console.log("app listening on " + process.env.PORT);
});
