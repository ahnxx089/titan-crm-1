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
var CommonStore = require('../../../stores/CommonStore');
var CommonActions = require('../../../actions/CommonActions');

var UpdateContactPage = React.createClass({
    getInitialState: function () {
        return {
            contactId: this.props.params.id,
            contact: {},
            currencies: []
        };
    },
    componentDidMount: function () {
        ContactsStore.addGetDataListener(this._onGetContact);
        ContactsActions.getContactById(this.state.contactId);
        CommonStore.addGetAllCurrenciesListener(this._onGetCurrencies);
        CommonActions.getAllCurrencies();
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
    _onGetCurrencies: function (event) {
        return this.setState({
            currencies: CommonStore.getCurrenciesObjArray()
        });
    },
    render: function () {
        /* jshint ignore:start */
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading panel-heading-custom">
                        <h1>Update Contact</h1>
                    </div>
                    <div className="panel-body">
                        <UpdateContactForm
                            contact={ this.state.contact }
                            currencies={ this.state.currencies}
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