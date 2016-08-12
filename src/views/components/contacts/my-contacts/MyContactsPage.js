/////////////////////////////////////////////////
// My Contacts page component.
//
// @file:   MyContactsPage.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var withRouter = require('react-router').withRouter;
var CommonStore = require('../../../stores/CommonStore');
var CommonActions = require('../../../actions/CommonActions');

var ContactRow = require('./ContactRow');
var ContactsStore = require('../../../stores/ContactsStore');
var ContactsActions = require('../../../actions/ContactsActions');

var MyContactsPage = React.createClass({

    getInitialState: function () {
        return {
            contactsOwned: []
        };
    },

    componentWillMount: function () {
        CommonStore.addGetTokenValidityListener(this._onGetTokenValidity);
        CommonActions.getTokenValidity();
    },

    componentDidMount: function () {
        // Event listener to fire when data retrieved--
        // when Store emits, informs this View something happened
        ContactsStore.addGetDataListener(this._onGetData);

        // Call the async function to get my contacts
        ContactsActions.getContactsByOwner();
    },

    componentWillUnmount: function () {
        // Avoids console error
        ContactsStore.removeListener('getData', this._onGetData);
    },

    _onGetTokenValidity: function (){
        // if user's token is expired, redirect to login page.
        if ( CommonStore.getTokenMockMessage().tokenExpired === true ){
            this.props.router.replace('/login');
        }
    },

    // An event registered with the store-- fires when emitGet()
    // is called inside getContactsByOwner's success callback
    _onGetData: function () {

        this.setState({
            contactsOwned: ContactsStore.getContactsOwned()
        });
        // Convert the My Contacts HTML table into a nice looking jQuery DataTable, sorting so that
        // most recently added Contacts (descending party_id) is at top.
        // See: https://datatables.net/examples/basic_init/table_sorting.html
        $('#myContactsTable').DataTable({
            'order': [[ 0, 'desc']]
        });
    },

    render: function () {

        /* jshint ignore:start */
        var contacts = this.state.contactsOwned;
        var contactsJSX = [];

        for (var i = 0; i < contacts.length; i++) {
            // See https://facebook.github.io/react/docs/multiple-components.html#dynamic-children
            // for an explanation for passing a "key" prop to a child component in for loop
            contactsJSX.push(<ContactRow key={ 'contact_' + i } contact={ contacts[i]}/>);
        }

        return (
            <div>
                <div className="container" >
                    <div className="panel panel-default">
                        <div className="panel-heading panel-heading-custom">
                            <h2>My Contacts</h2>
                        </div>
                        <div className="panel-body">
                            <table id="myContactsTable" className='table'>
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

// when doing the usual module.exports, wrap this component in withRouter in order to have
// property this.props.router.replace to do the redirect to Login page if token is expired
module.exports = withRouter(MyContactsPage);