/////////////////////////////////////////////////
// One message in ErrorBox.
// Essentially just a <li> element.
//
// @file:   ErrorBoxMsg.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var React = require('react');

var ErrorBoxMsg = React.createClass({
    render: function () {
        return (
            <li>{ this.props.message }</li>
        );
    }
});

module.exports = ErrorBoxMsg;