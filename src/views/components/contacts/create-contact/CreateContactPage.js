/////////////////////////////////////////////////
// Create Contact page component.
//
// @file:   CreateContactPage.js
// @authors: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var withRouter = require('react-router').withRouter;

var AddContactForm = require('./AddContactForm'); 
var ContactsStore = require('../../../stores/ContactsStore');
var ContactsActions = require('../../../actions/ContactsActions');

var CreateContactPage = React.createClass({
    
    // protection against browsing away from page before submitting form
    // THE "CONFIRM?" POP-UP IS NOT WORKING YET
    statics: {
        willTransitionFrom: function(transition, component){
            //if (component.state.dirty && !confirm('Leave this page without submitting?')){
            if (component.state.dirty){
                transition.abort();
            }
        }
    },
    
    getInitialState: function() {
        // Note:  only two properties of contact state are set initially; declaring additional properties to empty
        // strings is not really necessary, but helps me keep track of all the properties which will be bubbling up
        // from the child AddContactForm
        return {
            contact: {
                        partyTypeId: 'PERSON',
                        preferredCurrencyUomId: '',
                        description: '',
                        statusId: 'PARTY_ENABLED',
                        createdBy: '',
                        salutation: '',
                        firstName: '',
                        middleName: '',
                        lastName: '',
                        birthDate: '',
                        comments: '',
                        emailAddress: '',
                        webAddress: '',
                        countryCode: '',
                        areaCode: '',
                        contactNumber: '',
                        askForName: '',
                        toName: '',
                        attnName: '',
                        address1: '',
                        address2: '',
                        directions: '',
                        city: '',
                        stateProvinceGeoId: '',
                        zipOrPostalCode: '',
                        countryGeoId: ''
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
        this.setState( { dirty: true } );
        var field = event.target.id;
        var value = event.target.value;
        this.state.contact[ field ] = value;
        return this.setState( {contact: this.state.contact} );
    },
        
    _addContact: function(event) {
        event.preventDefault();
        
        console.log('\nCreateContactPage._addContact: this.state.contact = ', this.state.contact);
        
        ContactsActions.addContact(this.state.contact); // start the Flux unidirectional flow!
        this.setState({ dirty: false });                // consider form empty again, fields have been sent out
    },

    _onAddedContact: function() {
        
        // After a successful ajax call in the store, calling ContactsStore.addedContact() will return 
        // one of the three results from contactApi.addContact, handle with if-else-if-else block
        var result = ContactsStore.addedContact();

        // User lacks security permission to addContact
        if (result.hasOwnProperty('message'))
        {
            this.props.updateErrorBox(result.message);
            //return; // prevents the redirect at end of this function
        }
        // User has permission, but there were one or more validation errors
        else if (Object.prototype.toString.call(result) === '[object Array]') 
        {
            this.props.updateErrorBox(result);
            //return; // prevents the redirect at end of this function
        }
        // User had permission and no validation errors-- api should return the new partyId. 
        // Note:  the new partyId won't actually get 
        else if (result.hasOwnProperty('partyId')) {
            this.setState({
                addedContactPartyId: result.partyId
            });
            
            console.log('\nCreateContactPage._onAddedContact:  after this.setState, this.state.addedContactPartyId = ', this.state.addedContactPartyId);
            
            // for successful post to database, redirect to MyContactsPage
            this.props.router.replace('/cp/contacts/my-contacts');
        }
    },
                                          
    render: function (){
        
        /* jshint ignore:start */    
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading panel-heading-custom">
                        <h1>Create Contact</h1>
                    </div>
                    <div className="panel-body">
                        <AddContactForm 
                            contact={ this.state.contact } 
                            onChange={ this.setContactState } 
                            onFormSubmit={ this._addContact } />                                            
                    </div>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
});

// when doing the usual module.exports, wrap CreateContactPage in with.router in order to have
// property this.props.router.replace to do the redirect to MyContactsPage upon submitting form data
module.exports = withRouter(CreateContactPage);