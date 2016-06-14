/////////////////////////////////////////////////
// Home sub page component.
//
// @file:   HomeSubPage.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var React = require('react');

var HomeSubPage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hello. I am a sub page of Home.</h1>
            </div>
        );
    }
});

module.exports = HomeSubPage;