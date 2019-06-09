const request = require('request');

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoieWFzaGphaW4wMzA3IiwiYSI6ImNqd251dXZkeDBiZXgzem1yZ2JlMDI1NXkifQ.bXl0Ghg_uAobEpcsJMDnTQ&limit=1";

  request({ url: url, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect to location services!", undefined);
    } else if (res.body.features.length === 0) {
      callback("Unable to find location. Try another search!", undefined);
    } else {
      callback(undefined, {
        latitude: res.body.features[0].center[0],
        longitude: res.body.features[0].center[1],
        location: res.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;