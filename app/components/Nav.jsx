var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = (props) => {
    return (
        <div>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'Bold'}}>
                Get Weather
            </IndexLink>
            <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'Bold'}}>
                About
            </Link>
            <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'Bold'}}>
                Examples
            </Link>
        </div>
    );
}

module.exports = Nav;
