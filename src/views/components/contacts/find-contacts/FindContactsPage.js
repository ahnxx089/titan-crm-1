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
            contactsFound: []            
        };
    },

    componentDidMount: function() {
        ContactsStore.addGetByIdListener(this._onGetById);
        ContactsStore.addGetByIdentityListener(this._onGetByIdentity);
    },
    
    componentWillUnmount: function() {
        ContactsStore.removeListener('getById', this._onGetById);
        ContactsStore.removeListener('getByIdentity', this._onGetByIdentity);
    },
    
    setSearchByState: function(event) {
        var field = event.target.id;
        var value = event.target.value;
        this.state.searchBy[ field ] = value;
        return this.setState( {searchBy: this.state.searchBy} );
    },
    
    _findContacts: function(event){
        event.preventDefault();
        // if user filled in a partyId, search by that and ignore any first or last name
        if (this.state.searchBy.partyId.length > 0){
            ContactsActions.getContactById(this.state.searchBy.partyId);
        }
        // else if use left partyId blank it is a search by first and/or last name
        // (those could also be empty strings, but that's fine, api will return zero results)
        else
        {
            var identity = { 
                firstName: this.state.searchBy.firstName, 
                lastName: this.state.searchBy.lastName
            };
            ContactsActions.getContactsByIdentity(identity);
        }
        
    },
    
    _onGetById: function(){
        this.setState({
            contactsFound: ContactsStore.getById()
        });
    },
    
    _onGetByIdentity: function(){
        this.setState({
            contactsFound: ContactsStore.getByIdentity()
        });
    },
    
    render: function(){

        /* jshint ignore:start */
        var contacts = this.state.contactsFound;
        var contactsJSX = [];

        // a single found contact is an object, not an array
        if (Object.prototype.toString.call(contacts) === '[object Object]'){
            contactsJSX.push(<ContactRow key={ 'contact_0' } contact={ contacts }/>)
        }
        // for more than one found contact, we have an array to make rows out of
        else if (Object.prototype.toString.call(contacts) === '[object Array]'){            
            for (var i = 0; i < contacts.length; i++) {
                // See https://facebook.github.io/react/docs/multiple-components.html#dynamic-children
                // for an explanation for passing a "key" prop to a child component in for loop
                contactsJSX.push(<ContactRow key={ 'contact_' + i } contact={ contacts[i]}/>);
            }
        }
    
        return(
            <div>
                <div className="container">
                    
                    {/* First panel: holds Search Form */}
                    <div className="panel panel-default">
                        <div className="panel-heading panel-heading-custom">
                            <h1>Find Contacts By ID or Name</h1>
                        </div>
                        <div className="panel-body">
                            <SearchForm 
                                searchBy={ this.state.searchBy } 
                                onChange={ this.setSearchByState } 
                                onFormSubmit={ this._findContacts }/>                                            
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