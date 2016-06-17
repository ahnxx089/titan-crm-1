/////////////////////////////////////////////////
// Create Contact page component.
//
// @file:   CreateContactPage.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var ReactRouter = require('react-router');

var AddContactForm = require('./AddContactForm'); 
var ContactsStore = require('../../../stores/ContactsStore');
var ContactsActions = require('../../../actions/ContactsActions');

var CreateContactPage = React.createClass({
    
    // This mixins array is for redirecting to MyContactsPage after clicking "Create Contact".
    mixins: [
        ReactRouter.Navigation
    ],
    
    // protection against browsing away from page before submitting form
    statics: {
        willTransitionFrom: function(transition, component){
            //if (component.state.dirty && !confirm('Leave this page without submitting?')){
            if (component.state.dirty){
                transition.abort();
            }
        }
    },
    
    getInitialState: function() {
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
        ContactsActions.addContact(this.state.contact); // start the Flux unidirectional flow!
        this.setState({ dirty: false });                // consider form empty again, safe to redirect
        this.transitionTo('my-contacts');               // redirect to MyContactsPage -- NOT WORKING YET
    },

    _onAddedContact: function() {
        //
        // NOTE:  ERROR HANDLING PROBABLY NEEDS TO BE ADDED HERE, FOR NOW ONLY SUBMIT VALID DATA!
        // (compare to HomePage._onChange, do I need that here?)
        //
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