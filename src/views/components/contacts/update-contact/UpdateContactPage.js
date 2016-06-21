/////////////////////////////////////////////////
// Create Contact page component.
//
// @file:   UpdateContactPage.js
// @author: 
/////////////////////////////////////////////////

var React = require('react');
var ReactRouter = require('react-router');
var Link = require('react-router').Link;

var UpdateContactForm = require('./UpdateContactForm');
var ContactsStore = require('../../../stores/ContactsStore');
var ContactsActions = require('../../../actions/ContactsActions');

var UpdateContactPage = React.createClass({
    getInitialState: function () {
        return {
            contactId: this.props.params.id,
            contact: {}
        };
    },
    componentDidMount: function () {
        // 
        ContactsStore.addGetDataListener(this._onGetContact);
        //ContactsStore.addPutDataListener(this._refreshContact);
        ContactsActions.getContactById(this.state.contactId);
    },
    componentWillUnmount: function () {
        // avoids console error, accompanies function call in componentDidMount
        ContactsStore.removeListener('getData', this._onGetContact);
    },
    setContactState: function (event) {
        var contact = this.state.contact;
        contact[event.target.id] = event.target.value;

        return this.setState({
            contact: contact
        });
    },
    _updateContact: function (event) {
        event.preventDefault();
        ContactsActions.updateContact(this.state.contactId, this.state.contact);
    },
    _onGetContact: function (event) {
        return this.setState({
            contact: ContactsStore.gotContact()
        });
    },
    render: function () {
        /* jshint ignore:start */
        return (
            <div>
                <Link to="/cp/contacts/my-contacts" className="btn btn-primary">
                    <span className="fa fa-arrow-left"></span> Back
                </Link>
                <br />
                <div className="panel panel-default">
                    <div className="panel-heading panel-heading-custom">
                        <h1>Update Contact</h1>
                    </div>
                    <div className="panel-body">
                        <UpdateContactForm
                            contact={ this.state.contact }
                            onChange={ this.setContactState }
                            onFormSubmit={ this._updateContact }/>
                    </div>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = UpdateContactPage;