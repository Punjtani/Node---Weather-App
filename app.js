const request = require("request");
// const request = require('request-promise');

/////////////////////////////////// DARKSKY API ///////////////////////////////////
const darkskyUrl =
  "https://api.darksky.net/forecast/dd2cd4dd1b7014b4dc0135d4890fc31a/26.2183,78.1828?units=si";

request({ url: darkskyUrl, json: true }, (err, res) => {
  if (err) {
    console.log("Unable to connect to weather service!");
  } else {
    if (res.body.error) {
      console.log(res.body.error);
    } else {
      console.log(
        res.body.daily.data[0].summary +
          " There is " +
          res.body.currently.temperature +
          " degrees out. There is a " +
          res.body.currently.precipProbability +
          "% chance of rain."
      );
    }
  }
});

/////////////////////////////////// GE0CODING API ///////////////////////////////////
const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieWFzaGphaW4wMzA3IiwiYSI6ImNqd245Z3M5ZDBmem80OG96a21icm81b2wifQ.1Dl3xZCvCKE_FYR4v5epkA";

request({ url: geocodeUrl, json: true }, (err, res) => {
  if (err) {
    console.log("Unable to connect to location servive!");
  } else {
    if (res.body.message) {
      console.log(res.body.message);
    } else {
      const latitude = res.body.features[0].center[0];
      const longitude = res.body.features[0].center[1];
      console.log(latitude, longitude);
    }
  }
});
