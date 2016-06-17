/////////////////////////////////////////////////
// Create Contact page component.
//
// @file:   CreateContactPage.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var ReactRouter = require('react-router');

var AddContactForm = require('./AddContactForm'); // child of this component
var ContactsStore = require('../../../stores/ContactsStore');
var ContactsActions = require('../../../actions/ContactsActions');

/* FLUX ARCHITECTURE COMMENTS:
    Unlike a View such as MyContactsPage which exists to display data flowing from the Store, 
    this page does not necessarily need to receive anything on an emit from the Store after it has
    shipped out the user's new contact to start a new Flux unidirectional flow.
    
    When that flow reaches ContactsStore.addContact and that function makes the ajax call to post
    the new contact's data to the db, if the post is successful (user has permission, no data
    validation errors), then contactApi.addContact returns the new party_id for this new Contact.
    
    That new party_id can be sent down by the Store to this View, although it does not have to be sent.
    Since this page redirects to the MyContactsPage after the data is sent out by the user clicking
    "Create Contact", this page does not really need to receive that new party_id.  This page as
    presently written is not going to do anything with the new party_id, for example it is not going to 
    render it somewhere on this page, because the user won't BE on this page anymore.
    
    However, I have still registered this page as a listener to ContactsStore.addedContactListener
    so that this page can receive an emit of the new party_id.  I did so for two reasons:
    
        (1) The new party_id could be displayed in some kind of alert pop-up to the user so that
            when they look at the MyContactsPage they have been redirected to, they know what
            party_id to look for.  Yes, I know that instead of getting a message from this page, 
            on the MyContactsPage to which they are redirected they can scroll all the way down 
            and look for the name of the Contact they just added.  But if they own a ton of Contacts,
            that could mean a lot of scrolling to see and be sure their contact got added to the db.
            They would probably appreciate getting an immediate confirmation of some kind that the 
            Contact was added successfully even as they are getting redirected.  (If we add toastr,
            that would be an alternate way to signal success prior to the redirect, in which case knowing
            the new party_id is not of much value; but at present we have not discussed installing toastr).
            
        (2) I am not sure yet how we are handling validation errors, whether we are adding any validation
            here in the UI (as depicted in the Pluralsight video) or relying on validation already
            implemented in the controller (which we know provides reliable validation).  One way at present
            to know for sure that a contact was added successfully is to see if what contactApi.addContact 
            returns is indeed a new party_id (versus null or an array of validation errors).
            So we might still want the new party_id to reach this page, even if it is not going to be
            rendered on this page.  If that is truly unnecessary and being registered as a listener 
            with ContactStore.addedContactListener is a hindrance to this page fullfilling its main purpose, 
            I can remove the listener link.
*/

var CreateContactPage = React.createClass({
    
    // This mixins array is for redirecting to MyContactsPage after clicking "Create Contact".
    mixins: [
        ReactRouter.Navigation
    ],
    
    // protection against browsing away from page before submitting form
    statics: {
        willTransitionFrom: function(transition, component){
            if (component.state.dirty && !confirm('Leave this page without submitting?')){
                transition.abort();
            }
        }
    },
    
    getInitialState: function() {
        /*  Setting initial states:
    
            contact:  Most properties start out empty other than partyTypeId and statusId. The createdBy field
                will not change from its initial empty state here. Instead, on the back-end the controller already
                takes care of filling in createdBy with user.userId ( = user_login.user_login_id ) for the logged in user.
                
            dirty:  Initially set to false, becomes true in setContactState once any form field gets a keystroke in it.
            
            addedContactPartyId:   Initially set to empty string.  Function _onAddedContact below is set up to 
                update the state to be whatever new party_id for this Contact is emitted by the Store upon successful 
                execution of the ajax call.  See comments at top of file re: Flux architecture.
        */
        return {
            contact: {
                        'partyTypeId': 'PERSON',
                        'preferredCurrencyUomId': '',
                        'description': '',
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
            dirty: false,
            addedContactPartyId: ''
        };
    },
    
    componentDidMount: function() {
        // register with Store as a listener for emit of new party_id of the added Contact
        ContactsStore.addedContactListener(this._onAddedContact);
    },
    
    componentWillUnmount: function() {
        // avoids console error, accompanies function call in componentDidMount
        ContactsStore.removeListener('change', this._onAddedContact);
    },

    setContactState: function(event) {
        // This function updates the state of contact here in the parent component whenever changes to its properties
        // bubble up from child components.  It gets called on every single keypress because it is passed down to
        // the child AddContactForm as a change handler.  So when any field is typed in (changing the value of a property
        // of contact) this function exectes and the state of contact is immediately updated.
        this.setState( { dirty: true } );
        var field = event.target.name;
        var value = event.target.value;
        this.state.contact[ field ] = value;
        return this.setState( {contact: this.state.contact} );
    },
        
    _addContact: function(event) {
        /* This function is called when the "Create Contact" button is clicked on the AddContactForm.
            I am not sure if I need the event.preventDefault() command that I have included in it.  
            I got that statement from the Pluralsight video where in the analogous "saveAuthor" function created
            there, the presenter describes the need for it as follows:  "Because we don't want the default browser 
            behavior to happen here, we're going to capture that and then use JavaScript to work with it. 
            If we didn't prevent default, then clicking that Submit button would cause the form to actually 
            submit on the page."  I don't really follow what he means, so I guess I'll include it and if it seems
            it is preventing my unidirectional dataflow from getting going, then I'll see what happens if I comment it out.
        */
        event.preventDefault();
        ContactsActions.addContact(this.state.contact); // start the Flux unidirectional flow!
        this.setState({ dirty: false });                // consider form empty again, safe to redirect
        this.transitionTo('my-contacts');               // redirect to MyContactsPage
    },

    _onAddedContact: function() {
        /*  When the Store emits the new party_id of the added Contact, update the state of addedContactPartyId.
            Note:  depending how error-handling is to be done compare to Homepage.js which in the analogous function
            _onChange has some logic for an error message.  I probably need to add that here, but for getting this
            working the first time I am going to test adding a Contact whose non-blank fields should all validate
            without errors.  Also, again, the new state of addedContactPartyId might never actually get used,
            but the new state will be here if needed...
        */
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
                        <AddContactForm 
                            contact={ this.state.contact } 
                            onChange={ this.setContactState } 
                            onButtonClick={ this._addContact }/>                        
                    </div>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = CreateContactPage;