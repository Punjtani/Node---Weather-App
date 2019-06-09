const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/dd2cd4dd1b7014b4dc0135d4890fc31a/" +
    longitude +
    "," +
    latitude +
    "?units=si";

  request({ url: url, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect to weather service!", undefined);
    } else if (res.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        res.body.daily.data[0].summary +
          " There is " +
          res.body.currently.temperature +
          " degrees out. There is a " +
          res.body.currently.precipProbability +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;