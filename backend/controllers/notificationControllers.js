var https = require("https");
const OneSignal = require("onesignal-node");
const client = new OneSignal.Client(
  // "565f762f-a729-44e0-9d04-39ffa4564580",
  "561aeb8f-a644-4d7c-9c8b-0a2de9878340",
  "NzQ4OGU4MGYtNjcwZS00ZWNhLWE1ZTktZGFkOTFkYjg0YjRm"
);

var playersId = [];
var externalUserId = [];
client
  .viewDevices()
  .then((response) => {
    console.log(response.body);
    let result = response.body.players;
    result.map((res) => {
      playersId.push(res.id);
      externalUserId.push(res.external_user_id);
    });
    // console.log("id haru insisde", response);
  })
  .catch((e) => {
    console.log(e);
  });

// appointments notifications
var sendNotification = function (data) {
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: "Basic NzQ4OGU4MGYtNjcwZS00ZWNhLWE1ZTktZGFkOTFkYjg0YjRm",
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

module.exports = { sendNotification, playersId, externalUserId };
