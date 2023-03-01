const request = require('postman-request');

const urlWeather = 'http://api.weatherstack.com/current?access_key=cf5655c384dea1036d774b4aa0c0ea77&query=39.9526,75.1652&units=f';

request({ url: urlWeather, json: true }, (error, response) => {
    // console.log(JSON.parse(response.body).current);
    const data = response.body.current;
    const weatherDesc = `The day seems ${data.weather_descriptions[0]}`;
    const actualWeather = `. It is currently ${data.temperature} degrees out.`;
    const apparentWeather = ` But it feels like ${data.feelslike} degrees out.`;
    console.log(weatherDesc + actualWeather + apparentWeather);
})

const urlGeo = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmlzaGFiaGdsIiwiYSI6ImNsZXA3MzJ6MzAxYzgzeHFnemJ0emQ4dHkifQ.i4gT4gaTI1O_t9bMQS44hw";

request({url: urlGeo, json: true}, (error, response) => {
    const geoData = response.body.features[0];
    const lat = geoData.center[1];
    const lon = geoData.center[0];
    console.log('The latitude, longitude coordinates of the given target are: ' + lat + ', ' + lon);
})