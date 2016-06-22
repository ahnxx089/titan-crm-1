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
            searchBy: { partyId: '', firstName: '', lastName: '' },
            contactFoundById: [],
            contactsFoundByIdentity: [],
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

    setSearchByState: function (event) {
        var field = event.target.id;
        var value = event.target.value;
        this.state.searchBy[field] = value;
        this.setState({ searchBy: this.state.searchBy });
    },

    _resetForm: function (event) {
        this.setState({
            searchBy: { partyId: '', firstName: '', lastName: '' },
            contactFoundById: [],
            contactsFoundByIdentity: [],
        });
    },

    _findContacts: function (event) {
        event.preventDefault();
        var identity = {
            firstName: this.state.searchBy.firstName,
            lastName: this.state.searchBy.lastName
        };
        ContactsActions.getContactsByIdentity(identity);
        ContactsActions.getContactById(this.state.searchBy.partyId);
    },

    _onGetById: function () {
        this.setState({
            contactFoundById: ContactsStore.gotContact()
        });
    },

    _onGetByIdentity: function () {
        this.setState({
            contactsFoundByIdentity: ContactsStore.getByIdentity()
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
        var contactById = this.state.contactFoundById;
        var contactsByIdentity = this.state.contactsFoundByIdentity;
        var contactsJSX = [];

        contactsJSX.push(<ContactRow key={ 'contact_' } contact={ contactById }/>)

        for (var i = 0; i < contactsByIdentity.length; i++) {
            contactsJSX.push(<ContactRow key={ 'contact_' + i } contact={ contactsByIdentity[i]}/>);
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
                                searchBy={ this.state.searchBy }
                                onChange={ this.setSearchByState }
                                onFormSubmit={ this._findContacts }
                                onFormReset={ this._resetForm } />
                        </div>
                    </div>

                    {/*
                        <Anurag>
                            By default, this table shows 1 row with no values for
                            id, salutation, first name and last name.
                            But one can see the Edit button in that row.
                        </Anurag>
                    */}
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