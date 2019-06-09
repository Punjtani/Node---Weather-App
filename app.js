const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Gwalior", (err, data) => {
  if (err) {
    console.log("Error -->", err);
  } else {
    console.log("Data -->", data);

    forecast(data.latitude, data.longitude, (err, data) => {
      if (err) {
        console.log("Error -->", err);
      } else {
        console.log("Data -->", data);
      }
    });
  }
});
