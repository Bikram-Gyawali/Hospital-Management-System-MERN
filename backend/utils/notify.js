const OneSignal = require("onesignal-node");
const client = new OneSignal.Client(
  "565f762f-a729-44e0-9d04-39ffa4564580",
  "NWQwMmE1OTItOWUxZS00ZWNkLWIzODgtYTVkYTE0MjFjM2Vh"
);

var playersId = [];

client
  .viewDevices()
  .then((response) => {
    let result = response.body.players;
    result.map((res) => {
      playersId.push(res.id);
    });
    // console.log("id haru insisde", response);
  })
  .catch((e) => {
    console.log(e);
  });
module.exports = () => {
  var sendNotification = function (data) {
    var headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Basic NWQwMmE1OTItOWUxZS00ZWNkLWIzODgtYTVkYTE0MjFjM2Vh",
    };

    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers,
    };

    var req = https.request(options, function (res) {
      res.on("data", function (data) {
        console.log("Response:");
        console.log(JSON.parse(data));
      });
    });

    req.on("error", function (e) {
      console.log("ERROR:");
      console.log(e);
    });

    req.write(JSON.stringify(data));
    req.end();
  };
};
