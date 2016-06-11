/////////////////////////////////////////////////
// The top-level parent component.
//
// @file:   ControlPanel.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var React = require('react');
var Cookies = require('js-cookie');
var Header = require('./common/Header');
var Footer = require('./common/Footer');

var ControlPanel = React.createClass({
    render: function () {
        return (
            <div>
                <Header username={ Cookies.get('titanAuthUser') }/>
                <div className="container page-content">
                    {this.props.children}
                </div>
                {/*<Footer/>*/}
            </div>
        );
    }
});

module.exports = ControlPanel;