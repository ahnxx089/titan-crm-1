/////////////////////////////////////////////////
// Home page component.
//
// @file:   HomePage.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var React = require('react');
var GetContactForm = require('./GetContactForm');
var ContactDetails = require('./ContactDetails');
var HomeStore = require('../../stores/HomeStore');
var HomeActions = require('../../actions/HomeActions');

var HomePage = React.createClass({
    getInitialState: function() {
        return {
            contactDetails: HomeStore.getContactDetails()
        };
    },
    
    componentDidMount: function() {
        HomeStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount: function() {
        HomeStore.removeListener('change', this._onChange);
    },
    
    _getContactDetails: function(contactId) {
        HomeActions.getContactById(contactId);
    },
    
    _onChange: function() {
        this.setState({
            contactDetails: HomeStore.getContactDetails()
        });
    },
    
    render: function () {
        return (
            <div>
                <div className="jumbotron">
                    <h1>API Demo</h1>
                    <p>Clicking the button calls the getContactById API.</p>
                    <GetContactForm onButtonClick={ this._getContactDetails }/>
                </div>
                <ContactDetails contact={ this.state.contactDetails }/>
            </div>
        );
    }
});

module.exports = HomePage;