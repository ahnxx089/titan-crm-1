/////////////////////////////////////////////////
// Home page component.
//
// @file:   HomePage.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var React = require('react');
var Link = require('react-router').Link;
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
        var result = HomeStore.getContactDetails();
        // If it's is an error, eg. permission error, add it to ErrorBox
        if (!result.hasOwnProperty('contactId') && result.hasOwnProperty('message')) {
            this.props.updateErrorBox(result.message);
        }
        // Otherwise we have received our expected result;
        // call setState to force a re-render of <ContactDetails>
        else {
            this.props.updateErrorBox([]);
            this.setState({
                contactDetails: result
            });
        }
    },
    
    render: function () {
        return (
            <div>
                <div className="jumbotron">
                    <h1>API Demo</h1>
                    <p>Clicking the button calls the getContactById API.</p>
                    <GetContactForm onButtonClick={ this._getContactDetails }/>
                    <Link to="/cp/home/home-sub">A sub page</Link>
                </div>
                <ContactDetails contact={ this.state.contactDetails }/>
            </div>
        );
    }
});

module.exports = HomePage;