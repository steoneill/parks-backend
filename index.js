const express = require("express"),
  app = express(),
  axios = require("axios"),
  themeparks = require("themeparks"),
  moment = require("moment");

app.get("/parks/:parkId", (req, res) => {
  let park = new themeparks.Parks[parkId]();
  park.GetWaitTimes().then(function(rides) {
    // print each wait time
    for (var i = 0, ride; (ride = rides[i++]); ) {
      console.log(ride.name + ": " + ride.waitTime + " minutes wait");
    }
  }, console.error);
});

app.listen(process.env.PORT, () => {
  console.log("app listening on " + process.end.PORT);
});
