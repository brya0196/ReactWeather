var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=94ecb5068c46a41aa9a56503894d22c9&units=metric';

module.exports = {
    getTemp: function (location) {
        var encodeLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;

        return axios.get(requestUrl)
            .then(function (res) {
                if (res.data.cod && res.data.message) {
                    throw new Error(res.data.message)
                } else {
                    return res.data.main.temp
                }
            })
            .catch(function (res) {
                throw new Error(res.response.data.message);
            });
    }
}