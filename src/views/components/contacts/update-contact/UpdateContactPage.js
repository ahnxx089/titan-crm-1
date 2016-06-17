/////////////////////////////////////////////////
// Create Contact page component.
//
// @file:   UpdateContactPage.js
// @author: 
/////////////////////////////////////////////////

var React = require('react');
var ReactRouter = require('react-router');

var UpdateContactForm = require('./UpdateContactForm'); 
var ContactsStore = require('../../../stores/ContactsStore');
var ContactsActions = require('../../../actions/ContactsActions');

var UpdateContactPage = React.createClass({
    mixins: [
        ReactRouter.Navigation
    ],
    componentDidMount: function() {
        // register with Store as a listener for emit of new party_id of the added Contact
        ContactsStore.addedContactListener(this._onUpdatedContact);
    },
    componentWillUnmount: function() {
        // avoids console error, accompanies function call in componentDidMount
        ContactsStore.removeListener('change', this._onUpdatedContact);
    },
    setContactState: function(event) {
        var field = event.target.id;
        var value = event.target.value;
        this.state.contact[ field ] = value;
        return this.setState( {contact: this.state.contact} );
    },
        
    _updateContact: function(event) {
        ContactsActions.updateContact(this.state.contact);
    },
    _onUpdatedContact: function() {
        
        }
    ,
    render: function (){
        /* jshint ignore:start */    
        return (
            <div>
                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-heading panel-heading-custom">
                            <h1>Update Contact</h1>
                        </div>
                        <UpdateContactForm 
                            contact={ this.state.contact } 
                            onChange={ this.setContactState } 
                            onButtonClick={ this._updateContact }/>                        
                    </div>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = UpdateContactPage;