/////////////////////////////////////////////////
// My Contacts page component.
//
// @file:   MyContactsPage.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var ContactRow = require('./ContactRow');
var ContactsStore = require('../../../stores/ContactsStore');
var ContactsActions = require('../../../actions/ContactsActions');

var MyContactsPage = React.createClass({

    getInitialState: function () {
        //console.log('In MyContactsPage getInitialState about to declare contactsOwned as an empty array');
        return {
            contactsOwned: []
        };
    },

    // <Anurag>
    // We do not want to get data before the component is ready to display it;
    // Let's do this in componentDidMount.
    // </Anurag>
    // componentWillMount: function () {
    //     //console.log('In MyContactsPage componentWillMount, about to call MyContactsActions.getContactsByOwner');
    //     MyContactsActions.getContactsByOwner();
    // },

    componentDidMount: function () {
        // <Anurag>
        // Add an event listener that will fire when data is retrieved
        // (this is the missing link between view and store;
        // if we do not do this, our store will have no event to emit
        // and thus there will be nobody to inform the view if something happened)
        // </Anurag>
        ContactsStore.addGetDataListener(this._onGetData);
        // Call the async function to get my contacts
        ContactsActions.getContactsByOwner();
    },

    componentWillUnmount: function() {
        // <Anurag>
        // Not doing this will lead to this error in console:
        /* Can only update a mounted or mounting component.
         * This usually means you called setState() on an unmounted component.
         * This is a no-op. Please check the code for the MyContactsPage component. */
        // </Anurag>
        ContactsStore.removeListener('getData', this._onGetData);
    },

    // An event registered with the store;
    // fires when emitGet() is called inside getContactsByOwner's success callback
    _onGetData: function () {
        this.setState({
            contactsOwned: ContactsStore.getContactsOwned()
        });
    },

    render: function () {

        /* jshint ignore:start */
        //console.log('In MyContactsPage render, this.state.contactsOwned = ', this.state.contactsOwned);

        // IFF I can figure out how to change the state of contactsOwned so that another render is
        // triggered, use some shorthand variable name such as this in the table:

        var contacts = this.state.contactsOwned;
        var contactsJSX = [];

        for (var i = 0; i < contacts.length; i++) {
            // See https://facebook.github.io/react/docs/multiple-components.html#dynamic-children
            // for an explanation for passing a "key" prop to a child component in for loop
            contactsJSX.push(<ContactRow key={ 'contact_' + i } contact={ contacts[i]}/>);
        }

        // NOTE:  Still have yet to determine how to handle an incoming ARRAY of contacts, there will
        // be zero, or one, or most importantly more than one.  At that point explore something like
        // a jQuery DataTable maybe, if that means I can simply feed it an array of objects and one
        // of column headings, rather than having to do some kind of FOR loop to generate rows of
        // a bootstrap <table> . . . but first must solve the problem of getting the data in here in 
        // the first place, worry about making it pretty later!

        return (
            <div>
                <p>(This precedes the table, remove once confirmed table renders real data properly...) </p>
                <div className="container" >
                    <div className="panel panel-default">
                        <div className="panel-heading panel-heading-custom">
                            <h2>My Contacts</h2>
                        </div>
                        <table className='table'>
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

                                {/* This is a temporary row of filler material just for visualizing, 
                                    delete once real data is rendering properly...  */}
                                {/* T<tr>
                                    <th>0</th>
                                    <th>Mr.</th>
                                    <th>Dinesh</th>
                                    <th>Shenoy</th>
                                </tr> */}
                                {/*  When I have real data coming in to be rendered, individual rows
                                        of the table could be filled in a manner like this . . . see
                                        comments above re: if contacts is more than length === 1 then
                                        might need a FOR loop, or preferably switch out this table for
                                        a jQuery DataTable that will be much easier to render?
                                <tr>                        
                                    <Anurag>
                                    contacts.something will not work as
                                    contacts is not an object but an array.
                                    </Anurag>
                                    <th>{ contacts.partyId }</th>
                                    <th>{ contacts.salutation }</th>
                                    <th>{ contacts.firstName }</th>
                                    <th>{ contacts.lastName }</th>
                                </tr>
                                */}
                            </tbody>
                        </table>
                    </div>
                </div>

                <p>(This follows the table, remove it eventually when real data rendering properly...) </p>

            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = MyContactsPage;