const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2]; 

if (!location)
{
    return;
}

geoCode(location, (error, data) => {
    if (error) {
        console.log(error);
    } else {
        forecast( data, (error, weatherdata) => {
            if (error) {
                console.log(error);
            } else {
                console.log(data.name);
                console.log(weatherdata);
            }
        })
    }
})