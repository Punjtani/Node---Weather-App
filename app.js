// const request = require('request');
const request = require('request-promise');

const url = 'https://api.darksky.net/forecast/dd2cd4dd1b7014b4dc0135d4890fc31a/26.2183,78.1828?units=si';

/*
if you are giving arguments inside the reqest function directly
then it is necessary to first call the body then you can access the json objects properties
*/
request({ url: url, json: true }, (error, response) => {
  console.log('//////////////////////////// 1st FUNCTION ////////////////////////////')
  const res = response.body;
  console.log(res.currently);
  console.log('There is ' + res.currently.temperature + ' degrees out. There is a ' + res.currently.precipProbability + '% chance of rain.');
});


/*
if you are using promise and in then function you are using response
then this is directly coming from body and there is no need to fetch this from body
therefore you can directly call the json object properties
*/
request({ url: url, json: true })
  .then((res) => {
    console.log('//////////////////////////// 2nd FUNCTION ////////////////////////////')
    console.log(res.currently);
    console.log('There is ' + res.currently.temperature + ' degrees out. There is a ' + res.currently.precipProbability + '% chance of rain.');
  })
  .catch((error) => {
    console.log(error);
  })