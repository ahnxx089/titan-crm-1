/////////////////////////////////////////////////
// My Contacts page component.
//
// @file:   MyContactsPage.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');

// the Store from which data flows down to this View
var MyContactsStore = require('../../stores/MyContactsStore');

var MyContactsPage = React.createClass({
    
    getInitialState: function() {
        return {
            contactsOwned: MyContactsStore.getContactsByOwner()
        };
    },

    /* ASYNCHRONICITY PROBLEM: Two alternatives I have attempted:
        1.  With the next three functions componentDidMount, componentWillUnmount and _onChange
            (modeled from HomePage.js) commented out so that this React class goes from 
            getInitialState immediately to render, the render is happening before the initial state
            of contactsOwned is even set-- pursue that in a moment....
        2.  With the next three functions commented in, I see in the I'm getting stuck in an
            infinite loop of execution of some kind, clearly that is not the way to go...
            
        So I think I've articulated my problem, and that now I need to explore React or Flux
        documentation further.  Strictly speaking, I don't think this is a Flux issue (although
        it happens to be that the reason I want the render to wait is because I want contactsOwned
        to get its state set before the render happens, and that needed info is coming from the Store...)
    
    componentDidMount: function() {
        MyContactsStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount: function() {
        MyContactsStore.removeListener('change', this._onChange);
    },
    
    _onChange: function() {
        this.setState({
            contactsOwned: MyContactsStore.getContactsByOwner()
        });
    },
    */
    render: function() {
        
        console.log('In MyContactsPage render, this.state.contactsOwned = ', this.state.contactsOwned);
        
        // IFF I can figure out how to get the state of contactsOwned to be set before this render
        // happens, use this shorthand variable or something similar
        //var contactsToRender = this.state.contactsOwned;
        
        return (
            <div>
                <p>(This paragraph precedes the table, remove this paragraph eventually...)</p>
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
                                {/* TEMPORARY ROW OF FILLER MATERIAL JUST FOR VISUALIZING... */}
                                <tr>                        
                                    <th>0</th>
                                    <th>Mr.</th>
                                    <th>Dinesh</th>
                                    <th>Shenoy</th>
                                </tr>
                                {/*  COMMENT IN ONLY WHEN ACTUALLY HAVE data coming in to render!
                                <tr>                        
                                    <th>{ contact.partyId }</th>
                                    <th>{ contact.salutation }</th>
                                    <th>{ contact.firstName }</th>
                                    <th>{ contact.lastName }</th>
                                </tr>
                                */}
                            </tbody>
                        </table>
                    </div>
                </div> 
            
                <p>(This paragraph follows the table, remove it eventually...)</p>

            </div>
        );
    }
});

module.exports = MyContactsPage;