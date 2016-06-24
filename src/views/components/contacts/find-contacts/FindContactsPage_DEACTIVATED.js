/////////////////////////////////////////////////
// Find Contacts page component -- DEACTIVATED, DELETE EVENTUALLY
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

    /* Each type of search gets a separate state:
        "Find By ID #" --> idField.partyId
        "Find By Name" --> nameField.firstName, nameField.lastName
    */
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

        /* When this page has loaded the very first time, the URL appears as:
        
            http://localhost:5000/#/cp/contacts/find?_k=wyyv21 

        (the wyyv21 is a random string tacked on, the important part is #/cp/contacts/find)

        On that first use of this page, the user fills in either a partyId number or fills in a
        firstName and/or lastName and clicks the Submit button.  In SearchForm.js the form tag 
        <form method="GET" action="#/cp/contacts/find" onReset={ this.props.onFormReset } >
        results in redirecting to this same page.  The goal is to have the URL now loaded up with 
        query strings containing either the partyId or the firstName/lastName the user wanted to search by.
        Whatever query string comes in, it should be able to be parse and, depending whether partyId
        is non-zero length or firstName/lastName is non-zero length, I would call the appropriate
        action with a simple logic block such as:

            if (partyId.length > 0){
                ContactsActions.getContactById(partyId);
            }
            if ( (firstName.length > 0) || (lastName.length > 0) ){
                ContactsActions.getContactsByIdentity(identity);
            }

        Right now, however, when clicking Submit causes the redirect to this same page, the URL is not 
        quite like the Google example depicted in the <Anurag> tags above the render function below.
        For example, if on a first use of this page I submit a search for Jane Doe then upon redirect
        to this page the URL has changed to:

            http://localhost:5000/?partyId=&firstName=Jane&lastName=Doe#/cp/contacts/find?_k=tmr11e

        The query string portion ?partyId=&firstName=Jane&lastName=Doe preceeds the #/cp/contacts/find?

        Or for example if instead of searching by name I search for partyId=142 and click Submit, then
        I see the URL change to:  

            http://localhost:5000/?partyId=142&firstName=&lastName=#/cp/contacts/find?_k=bo1e7u

        Again, the query string ?partyId=142&firstName=&lastName= preceeds the #/cp/contacts/find?

        Maybe where the query string appears in the URL does not matter so much, as long as I can access it...
        But I cannot figure out how to access the query string.  I believe the query string should be 
        among the "injected props" that this page has.  I am not sure about this page having "injected props", 
        since I have not wrapped this page in withRouter.  I did not seem to need wrap this page in withRouter
        in order to find out this page has "injected props" as discussed on the react-router page:

                https://github.com/reactjs/react-router/blob/master/docs/API.md#route-components

        What I do know for sure is that the following diagnostic console.log statement when viewed in the 
        dev tools console shows that this.props contains this.props.location.query.  That makes it
        look like I should be able to access the query string and parse it out and initiate the appropriate
        Action to result in either _onGetById or _onGetByIdentity below eventually receiving an emit
        from the Store with the Contact(s) (if any) to render in the table.  Here's the diagnostic console.log 
        statement:  */

        console.log('in componentDidMount, this.props = ', this.props);

        /* Within this.props are:

            this.props.location
            this.props.location.query
            this.props.params

        I cannot find the query string in any of these.  (There are also this.props.route, this.props.routeParams, 
        and this.routes.   I through them as well but cannot find the query string, and anyway it seems more likely
        that the query string would be in this.props.location.query or this.props.params).

        */

    },

    componentWillUnmount: function () {
        ContactsStore.removeListener('getData', this._onGetById);
        ContactsStore.removeListener('getByIdentity', this._onGetByIdentity);
    },

    // saves numbers typed in "Find By ID #" and resets other states to empty 
    setIdFieldState: function (event) {
        var field = event.target.id;
        var value = event.target.value;
        this.state.idField[field] = value;
        this.setState({ idField: this.state.idField });
        this.setState({ nameField: { firstName: '', lastName: '' } });
    },

    // saves strings typed in "Find By Name" and resets other states to empty 
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

    _onGetById: function () {
        this.setState({
            contactsFound: ContactsStore.gotContact()
        });
    },

    _onGetByIdentity: function () {
        this.setState({
            contactsFound: ContactsStore.getByIdentity()
        });
        $('#findContactsTable').DataTable({
            'order': [[ 0, 'desc']]
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

        var contacts = this.state.contactsFound;
        var contactsJSX = [];

        // for a result from initiating action ContactsActions.getContactById(partyId)
        if ( Object.prototype.toString.call(contacts) === '[object Object]' ){
            // when search by Id turns up no result, the returned object lacks a partyId, 
            // so this prevents an empty row from rendering
            if (contacts.hasOwnProperty('partyId')){
                contactsJSX.push(<ContactRow key={ 'contact_0' } contact={ contacts }/>);
            }
        }

        // for a result from initiating action ContactsActions.getContactsByIdentity(identity)
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
                                        <th>Actions</th>
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
