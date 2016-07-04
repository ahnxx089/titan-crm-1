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
var StatWidget = require('./widgets/StatWidget');
var HomeStore = require('../../stores/HomeStore');
var HomeActions = require('../../actions/HomeActions');

var HomePage = React.createClass({
    getInitialState: function () {
        return {
            contactDetails: HomeStore.getContactDetails(),
            newLeads: {
                unit: 'new leads',
                amount: 3,
                icon: 'sunglasses'
            },
            convertedLeads: {
                unit: 'new lead conversions',
                amount: 5,
                icon: 'piggy-bank'
            },
            newCases: {
                unit: 'new cases assigned to me',
                amount: 9,
                icon: 'exclamation-sign'
            },
            teamCases: {
                unit: 'open case tickets',
                amount: 4,
                icon: 'flash'
            }
        };
    },
    
    componentDidMount: function () {
        HomeStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount: function () {
        HomeStore.removeListener('change', this._onChange);
    },
    
    _getContactDetails: function (contactId) {
        HomeActions.getContactById(contactId);
    },
    
    _onChange: function () {
        var result = HomeStore.getContactDetails();
        // If it's is an error, eg. permission error, add it to ErrorBox
        if (!result.hasOwnProperty('contactId') && result.hasOwnProperty('message')) {
            this.props.updateErrorBox(result.message);
        }
        // Otherwise we have received our expected result;
        // call setState to force a re-render of <ContactDetails>
        else {
            this.props.updateErrorBox([]); // clear the ErrorBox
            this.setState({
                contactDetails: result
            });
        }
    },
    
    render: function () {
        /* jshint ignore:start */
        return (
            <div>
                <div className="jumbotron">
                    <h1>API Demo</h1>
                    <p>Clicking the button calls the getContactById API.</p>
                    <GetContactForm onButtonClick={ this._getContactDetails }/>
                    <Link to="/cp/home/home-sub">A sub page</Link>
                </div>
                <div className="row">
                    <StatWidget amount={this.state.newLeads.amount} unit={this.state.newLeads.unit} icon={this.state.newLeads.icon} color="cyan"/>
                    <StatWidget amount={this.state.convertedLeads.amount} unit={this.state.convertedLeads.unit} icon={this.state.convertedLeads.icon} color="green" />
                    <StatWidget amount={this.state.newCases.amount} unit={this.state.newCases.unit} icon={this.state.newCases.icon} color="red" />
                    <StatWidget amount={this.state.teamCases.amount} unit={this.state.teamCases.unit} icon={this.state.teamCases.icon} color="purple" />
                </div>
                <ContactDetails contact={ this.state.contactDetails }/>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = HomePage;