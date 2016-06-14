/////////////////////////////////////////////////
// The top-level parent component.
//
// @file:   ControlPanel.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var React = require('react');
var Cookies = require('js-cookie');
var Header = require('./common/Header');
var ErrorBox = require('./common/ErrorBox');
var Footer = require('./common/Footer');

var ControlPanel = React.createClass({
    getInitialState: function() {
        return {
            errorMessages: []
        };
    },
    _updateErrorBox: function(messages) {
        // Update the state to force a re-render of <ErrorBox>
        this.setState({
            errorMessages: messages
        });
    },
    render: function () {
        /* jshint ignore:start */
        return (
            <div>
                <Header username={ Cookies.get('titanAuthUser') }/>
                <div className="container page-content">
                    <ErrorBox messages={ this.state.errorMessages }/>
                    {this.props.children && React.cloneElement(this.props.children, {
                      updateErrorBox: this._updateErrorBox
                    })}
                </div>
                {/*<Footer/>*/}
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = ControlPanel;