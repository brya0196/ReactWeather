var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>
                This is a weather application build using React.
            </p>
            <ul>
                <li>
                    <a href="https://reactjs.org/" target="_blank">
                        React
                    </a>
                </li>
                <li>
                    <a href="https://openweathermap.org/" target="_blank">
                        Open Weather Map
                    </a> 
                </li>
            </ul>
        </div>
    ); 
};

module.exports = About;