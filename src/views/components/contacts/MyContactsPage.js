/////////////////////////////////////////////////
// My Contacts page component.
//
// @file:   MyContactsPage.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var MyContactsStore = require('../../stores/MyContactsStore');
var MyContactsActions = require('../../actions/MyContactsActions');

var MyContactsPage = React.createClass({
    
    getInitialState: function() {
        //console.log('In MyContactsPage getInitialState about to declare contactsOwned as an empty array');
        return {
            contactsOwned: []
        };
    },

    componentWillMount: function() {
        //console.log('In MyContactsPage componentWillMount, about to call MyContactsActions.getContactsByOwner');
        MyContactsActions.getContactsByOwner();
    },
    
    componentDidMount: function() {
        this.setState({
            contactsOwned: MyContactsStore.getContactsOwned()
        });
        //console.log('In MyContactsPage componentDidMount, this.state.contactsOwned = ', this.state.contactsOwned);
    },
    
    render: function() {
        
        console.log('In MyContactsPage render, this.state.contactsOwned = ', this.state.contactsOwned);
        
        // IFF I can figure out how to change the state of contactsOwned so that another render is
        // triggered, use some shorthand variable name such as this in the table:
        
        //var contacts = this.state.contactsOwned;
        
        // NOTE:  Still have yet to determine how to handle an incoming ARRAY of contacts, there will
        // be zero, or one, or most importantly more than one.  At that point explore something like
        // a jQuery DataTable maybe, if that means I can simply feed it an array of objects and one
        // of column headings, rather than having to do some kind of FOR loop to generate rows of
        // a bootstrap <table> . . . but first must solve the problem of getting the data in here in 
        // the first place, worry about making it pretty later!
    
        return (
            <div>
                <p>(This precedes the table, remove once confirmed table renders real data properly...)</p>
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
                                {/* This is a temporary row of filler material just for visualizing, 
                                    delete once real data is rendering properly...  */}
                                <tr>                        
                                    <th>0</th>
                                    <th>Mr.</th>
                                    <th>Dinesh</th>
                                    <th>Shenoy</th>
                                </tr>
                                {/*  When I have real data coming in to be rendered, individual rows
                                        of the table could be filled in a manner like this . . . see
                                        comments above re: if contacts is more than length === 1 then
                                        might need a FOR loop, or preferably switch out this table for
                                        a jQuery DataTable that will be much easier to render?
                                <tr>                        
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
            
                <p>(This follows the table, remove it eventually when real data rendering properly...)</p>

            </div>
        );
    }
});

module.exports = MyContactsPage;