/////////////////////////////////////////////////
// Find Contacts page component.
//
// @file:   FindContactsPage.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var SearchForm = require('./SearchForm');
var ContactRow = require('../my-contacts/ContactRow');
var ContactsStore = require('../../../stores/ContactsStore');
var ContactsActions = require('../../../actions/ContactsActions');

var FindContactsPage = React.createClass({

    getInitialState: function () {
        return {
            idField: { partyId: '' }, 
            nameField: { firstName: '', lastName: '' },
            contactsFound: null
        };
    },

    componentDidMount: function () {
        ContactsStore.addGetDataListener(this._onGetById);
        ContactsStore.addGetByIdentityListener(this._onGetByIdentity);
    },

    componentWillUnmount: function () {
        ContactsStore.removeListener('getData', this._onGetById);
        ContactsStore.removeListener('getByIdentity', this._onGetByIdentity);
    },

    setIdFieldState: function (event) {
        var field = event.target.id;
        var value = event.target.value;
        this.state.idField[field] = value;
        this.setState({ idField: this.state.idField });
        this.setState({ nameField: { firstName: '', lastName: '' } });
    },

    setNameFieldState: function (event) {
        var field = event.target.id;
        var value = event.target.value;
        this.state.nameField[field] = value;
        this.setState({ nameField: this.state.nameField });
        this.setState({ idField: { partyId: '' } });
    },

    _resetForm: function (event) {
        this.setState({
            idField: { partyId: '' }, 
            nameField: { firstName: '', lastName: '' },
            contactsFound: null
        });
    },

    _findContacts: function (event) {
        event.preventDefault();

        var partyId = this.state.idField.partyId;
        var firstName = this.state.nameField.firstName;
        var lastName = this.state.nameField.lastName;
        var identity = {
            firstName: firstName,
            lastName: lastName
        };

        if (partyId.length > 0){
            ContactsActions.getContactById(partyId);
        }
        if ( (firstName.length > 0) || (lastName.length > 0) ){
            ContactsActions.getContactsByIdentity(identity);
        }
    },

    _onGetById: function () {
        this.setState({
            contactsFound: ContactsStore.gotContact()
        });
    },

    _onGetByIdentity: function () {
        this.setState({
            contactsFound: ContactsStore.getByIdentity()
        });
    },

    // <Anurag>
    // Tip: Searches are GET requests by convention.
    // Not just in Ajax/API calls but also in UI.
    // 
    // Instead of preventing the default behavior (e.preventDefault()) of the form submit event
    // and handling it using Ajax, if you set <form> as:
    // <form method="GET" action="/cp/contacts/find">
    // clicking the Submit button will then automatically redirect to the same page
    // and will pass along the captured form data as a query string.
    // Eg., /cp/contacts/find?firstName=Jane&lastName=Doe
    // The only other requirement is to have the "name" attribute set for all form input fields.
    // So on load of each page, just check for query string for search parameters.
    // This check can be added in componentDidMount().
    //
    // You have already seen this behavior in the most popular search in the world:
    // https://www.google.com/search?q=reactjs%20is%20awesome&oq=reactjs
    //
    // This approach has the advantage of giving users the ability to share/bookmark search URLs.
    //
    // This might sound confusing at first. Let me know if you need more details.
    // 
    // </Anurag>
    render: function () {

        /* jshint ignore:start */

        console.log('in render, this.state.contactsFound = ', this.state.contactsFound);

        var contacts = this.state.contactsFound;
        var contactsJSX = [];

        // for a result from contactApi.getContactById
        if ( Object.prototype.toString.call(contacts) === '[object Object]' ){
            // when search by Id turns up no result, the returned object lacks a partyId, 
            // so this prevents an empty row from rendering
            if (contacts.hasOwnProperty('partyId')){
                contactsJSX.push(<ContactRow key={ 'contact_0' } contact={ contacts }/>);
            }
        }

        // for a result from contactApi.getContactsByIdentity
        if ( Object.prototype.toString.call(contacts) === '[object Array]' ){
            for (var i = 0; i < contacts.length; i++) {
                contactsJSX.push(<ContactRow key={ 'contact_' + i } contact={ contacts[i]}/>);
            }
        }

        return (
            <div>
                <div className="container">

                    {/* First panel: holds Search Form */}
                    <div className="panel panel-default">
                        <div className="panel-heading panel-heading-custom">
                            <h1>Find Contacts</h1>
                        </div>
                        <div className="panel-body">
                            <SearchForm
                                idField={ this.state.idField }
                                nameField={ this.state.nameField }
                                onIdFieldChange={ this.setIdFieldState }
                                onNameFieldChange={ this.setNameFieldState }
                                onFormSubmit={ this._findContacts }
                                onFormReset={ this._resetForm } />
                        </div>
                    </div>

                    {/* Second panel:  holds Table with results */}
                    <div className="panel panel-default">
                        <div className="panel-heading panel-heading-custom">
                            <h2>Contact List</h2>
                        </div>
                        <div className="panel-body">
                            <table id="findContactsTable" className='table'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Salutation</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { contactsJSX }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        );
        /* jshint ignore:end */
    }

});

module.exports = FindContactsPage;