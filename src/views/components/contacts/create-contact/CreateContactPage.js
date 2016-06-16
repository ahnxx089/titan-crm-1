/////////////////////////////////////////////////
// Create Contact page component.
//
// @file:   CreateContactPage.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var ContactsStore = require('../../../stores/ContactsStore');
var ContactsActions = require('../../../actions/ContactsActions');

var CreateContactPage = React.createClass({
    
    // NOT SURE YET IF INDEED I WILL RENDER ON THE PAGE ITSELF THE PARTY ID OF THE JUST-ADDED CONTACT...
    // PER DISCUSSION AT START OF SPRINT, THE PLAN UPON SUCCESSFUL ADDING OF A CONTACT IS TO REDIRECT
    // THE USER TO THE MY CONTACTS PAGE.  BUT I ALSO WANT TO DISPLAY THE NEWLY GENERATED PARTY ID 
    // NUMBER OF THE JUST-ADDED CONTACT IN AN ALERT POP-UP PROBABLY.  WHY?  BECAUSE SUPPOSE THIS
    // USER ALREADY OWNS A LARGE NUMBER OF CONTACTS; WHEN RE-DIRECTED TO THE MY CONTACTS PAGE THEY
    // MIGHT HAVE TO PAGE THROUGH A LONG LIST TO SEE THE ADDED CONTACT.
    
    // SO I AM SETTING THE INITIAL STATE OF addedContactPartyId, but likely not rendering it on the page.
    // Its state will get updated in function _onAddedContact below.  That will trigger a re-render,
    // so now I need to think about 
    getInitialState: function() {
        return {
            addedContactPartyId: ''  
        };
    },
    
    componentDidMount: function() {
        ContactsStore.addedContactListener(this._onAddedContact);
    },
    
    componentWillUnmount: function() {
        ContactsStore.removeListener('change', this._onAddedContact);
    },

    _addContact: function(contact) {
        ContactsActions.addContact(contact); 
    },

    _onAddedContact: function() {
        // compare with HomePage.js, in here likely will go if-else block to either display an 
        // error message due to invalid input, or if successful to display a success message in
        // maybe an alert or a toaster popup, and redirect to My Contacts back for this user...
        
        // FOR STARTERS:  Test with a hopefully-all-correct Contact so that ContactsStore.emitAddedContact 
        // is emitting the partyId of the new contact I just added.  I probably won't render this new
        // state on the page ultimately, versus put in a pop-up alert of some kind.  But I do need to
        // update its state, and so a re-render of the page will trigger.
        this.setState({
            addedContactPartyId: ContactsStore.addedContact()
        });  
    },
                                          
    render: function (){
        /* jshint ignore:start */    
        
        return (
            <div>
                {/* compare to HomePage, there will be a button to click after filling in some fields.
                    Maybe just get one field working, or at most only the 7 of Personal Info first, because
                    if that works to do addContact empty of contact mechanisms, great, then I'll make the
                    reusable component for contact mechanisms as soon as possible afterwards.
                */}
                <div className="container">
                    <div className="panel-heading panel-heading-custom">
                        <h2>Create Contact</h2>
                    </div>
                    <p>Hi There!</p>
                    <p>{ this.state.addedContactPartyId }</p>
                    <p>What is the state of addedContactPartyId?</p>
                    {/* The form will go in here.  Like HomePage, I'll have AddContactForm and will do this:
                        <AddContactForm onButtonClick={ this._addContact }/>
                        *** OF COURSE THAT CHILD AddContactForm ITSELF WILL NEED TO HAVE AddContactMech AS A CHILD!

                        ***RIGHT NOW TO JUST GET IT WORKING, I MAY PUT THE WHOLE FORM HERE, BECAUSE IF IT WORKS HERE,
                        THEN I CAN MORE PROPERLY BREAK IT UP INTO SMALLER COMPONENTS
                    
                    */}
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = CreateContactPage;