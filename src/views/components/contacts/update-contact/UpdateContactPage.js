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
    getInitialState: function() {
        return {
            contactId: 20,
            contact: {}
        };
    },
    componentDidMount: function() {
        // 
        ContactsStore.addGetDataListener(this._onGetContact);
        ContactsStore.addPutDataListener(this._refreshContact);
        this._refreshContact();
    },
    componentWillUnmount: function() {
        // avoids console error, accompanies function call in componentDidMount
        ContactsStore.removeListener('change', this._onGetContact);
    },
    setContactState: function(event) {
        var contact = this.state.contact;
        contact[event.target.id] = event.target.value;
        
        return this.setState({
            contact: contact
        });
    },
    _refreshContact: function(event) {
        ContactsStore.getContactById(this.state.contactId);
    },
    _updateContact: function(event) {
        ContactsActions.updateContact(this.state.contactId, this.state.contact);
    },
    _onGetContact: function(event) {
        return this.setState({
            contact: ContactsStore.gotContact()
        });
    },
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