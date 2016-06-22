/////////////////////////////////////////////////
// Find Contacts page component.
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
    
    getInitialState: function() {
        return {
            searchBy: { partyId: '', firstName: '', lastName: '' },
            contactFoundById: [],         
            contactsFoundByIdentity: [],         
        };
    },

    componentDidMount: function() {
        ContactsStore.addGetDataListener(this._onGetById);
        ContactsStore.addGetByIdentityListener(this._onGetByIdentity);
    },
    
    componentWillUnmount: function() {
        ContactsStore.removeListener('getData', this._onGetById);
        ContactsStore.removeListener('getByIdentity', this._onGetByIdentity);
    },
    
    setSearchByState: function(event) {
        var field = event.target.id;
        var value = event.target.value;
        this.state.searchBy[ field ] = value;
        this.setState( {searchBy: this.state.searchBy} );       
    },
    
    _resetForm: function(event){
        this.setState({ 
            searchBy: { partyId: '', firstName: '', lastName: '' },
            contactFoundById: [],         
            contactsFoundByIdentity: [],         
        });
    },

    _findContacts: function(event){
        event.preventDefault();
        var identity = { 
            firstName: this.state.searchBy.firstName, 
            lastName: this.state.searchBy.lastName
        };
        ContactsActions.getContactsByIdentity(identity);
        ContactsActions.getContactById(this.state.searchBy.partyId);
    },

    _onGetById: function(){
        this.setState({
            contactFoundById: ContactsStore.gotContact()
        });
    },
    
    _onGetByIdentity: function(){
        this.setState({
            contactsFoundByIdentity: ContactsStore.getByIdentity()
        });
    },
    
    render: function(){

        /* jshint ignore:start */
        var contactById = this.state.contactFoundById;
        var contactsByIdentity = this.state.contactsFoundByIdentity;
        var contactsJSX = [];
        
        contactsJSX.push(<ContactRow key={ 'contact_' } contact={ contactById }/>)

        for (var i = 0; i < contactsByIdentity.length; i++) {
            contactsJSX.push(<ContactRow key={ 'contact_' + i } contact={ contactsByIdentity[i]}/>);
        }
            
        return(
            <div>
                <div className="container">
                    
                    {/* First panel: holds Search Form */}
                    <div className="panel panel-default">
                        <div className="panel-heading panel-heading-custom">
                            <h1>Find Contacts</h1>
                        </div>
                        <div className="panel-body">
                            <SearchForm 
                                searchBy={ this.state.searchBy } 
                                onChange={ this.setSearchByState } 
                                onFormSubmit={ this._findContacts }
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