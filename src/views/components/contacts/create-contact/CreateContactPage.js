/////////////////////////////////////////////////
// Create Contact page component.
//
// @file:   CreateContactPage.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var AddContactForm = require('./AddContactForm'); // child of this component
var ContactsStore = require('../../../stores/ContactsStore');
var ContactsActions = require('../../../actions/ContactsActions');

var CreateContactPage = React.createClass({
    
    // NOT SURE YET IF INDEED I WILL RENDER ON THE PAGE ITSELF THE PARTY ID OF THE JUST-ADDED CONTACT...
    // PER DISCUSSION AT START OF SPRINT, THE PLAN UPON SUCCESSFUL ADDING OF A CONTACT IS TO REDIRECT
    // THE USER TO THE MY CONTACTS PAGE.  BUT I ALSO WANT TO DISPLAY THE NEWLY GENERATED PARTY ID 
    // NUMBER OF THE JUST-ADDED CONTACT IN AN ALERT POP-UP PROBABLY.  WHY?  BECAUSE SUPPOSE THIS
    // USER ALREADY OWNS A LARGE NUMBER OF CONTACTS; WHEN RE-DIRECTED TO THE MY CONTACTS PAGE THEY
    // MIGHT HAVE TO PAGE THROUGH A LONG LIST TO SEE THE ADDED CONTACT.  SO AFTER CLICKING SUBMIT,
    // IF NO ERRORS AND THE ADD GOES THROUGH SUCCESSFULLY, THEY SHOULD FIND OUT RIGHT AWAY AND KNOW 
    // WHAT THE NEW PARTY ID IS.
    
    // SO I AM SETTING THE INITIAL STATE OF addedContactPartyId, but likely not rendering it on the page.
    // Its state will get updated in function _onAddedContact below.  That will trigger a re-render,
    // so now I need to think about what happens when filling in a form and pressing a button, do the
    // fields all clear?  That would not be a big deal if the form data all gets into the database successfully,
    // but what if one or more of the fields do not validate?  The user should not have to re-enter every
    // field, so think about that as I now create the form elements...
    
    // Also, I am setting the initial state of the contact with most of the fields (personal info, contact mechanisms)
    // to empty strings (except partyTypeId which for a Contact by definition is always 'PERSON', and statusId
    // to PARTY_ENABLED.).
    // That way I can pass contact down to the child component AddContactForm via props.
    
    // ***What about createdBy?  Check out contactController.addContact and contactData.addContact.  The createdBy
    // value that the controller level puts into the contactEntity passed to the data layer is the logged-in user's
    // user.user_login_id (e.g., admin, fullAdminABC, contactOwnerABC, etc.)
    // And (very importantly for ownership!) the logged-in user's partyId MUST make it into the party_relationship table..
    // well, that is already being taken care of by the controller layer passing the user object to the data layer,
    // where the insert to party_relationship.party_id_to is filled in with user.partyId...
    // Okay, and then it is probably fine that the state of createdBy here never gets changed from its initial state
    // of being an empty string because anyway contactController.addContact was never going to read the payload value,
    // it is going to fill that field with user.userId (which corresponds to user_login.user_login_id).
    getInitialState: function() {
        return {
            contact: {
                        'partyTypeId': 'PERSON',
                        'preferredCurrencyUomId': '',
                        'description': null,
                        'statusId': 'PARTY_ENABLED',
                        'createdBy': '',
                        'salutation': '',
                        'firstName': '',
                        'middleName': '',
                        'lastName': '',
                        'birthDate': '',
                        'comments': '',
                        'emailAddress': '',
                        'webAddress': '',
                        'countryCode': '',
                        'areaCode': '',
                        'contactNumber': '',
                        'askForName': '',
                        'toName': '',
                        'attnName': '',
                        'address1': '',
                        'address2': '',
                        'directions': '',
                        'city': '',
                        'stateProvinceGeoId': '',
                        'zipOrPostalCode': '',
                        'countryGeoId': ''
                    },
            addedContactPartyId: ''  
        };
    },
    
    componentDidMount: function() {
        ContactsStore.addedContactListener(this._onAddedContact);
    },
    
    componentWillUnmount: function() {
        ContactsStore.removeListener('change', this._onAddedContact);
    },

    setContactState: function(event) {
        // This function updates the state of contact here in the parent component when changes bubble up 
        // from child components.  It gets called on every single keypress.  Pass this function down to
        // the child AddContactForm as a change handler. Then when anything changes in the AddContactForm,
        // this function runs
        var field = event.target.name;
        var value = event.target.value;
        this.state.contact[field] = value;
        return this.setState( {contact: this.state.contact} );
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
                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-heading panel-heading-custom">
                            <h1>Create Contact</h1>
                        </div>
                        <AddContactForm contact={ this.state.contact } onChange={ this.setContactState } onButtonClick={ this._addContact }/>                        
                    </div>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = CreateContactPage;