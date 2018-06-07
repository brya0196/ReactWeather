var React = require('react');

var WeatherMessages = ({ temp, location }) => {
    return (
        <div>
            <h3>It's it {temp} in {location}</h3>
        </div>
    );
}

module.exports = WeatherMessages;