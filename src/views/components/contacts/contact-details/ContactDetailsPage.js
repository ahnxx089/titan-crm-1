/////////////////////////////////////////////////
// Create Contact page component.
//
// @file:   ContactDetailsPage.js
// @author: 
/////////////////////////////////////////////////

var React = require('react');
var ReactRouter = require('react-router');
var Link = require('react-router').Link;
var withRouter = require('react-router').withRouter;
var ContactMechEntry = require('./ContactMechEntry');

var ContactsStore = require('../../../stores/ContactsStore');
var ContactsActions = require('../../../actions/ContactsActions');

var ContactDetailPage = React.createClass({
    getInitialState: function () {
        return {
            contactId: this.props.params.id,
            contact: {},
            accounts: [],
            case: []
        };
    },
    componentDidMount: function () {
        //get contact
        ContactsStore.addGetDataListener(this._onGetContact);
        ContactsActions.getContactById(this.state.contactId);
        
        //get accounts
        
        //get cases
        
    },
    componentWillUnmount: function () {
        ContactsStore.removeListener('getData', this._onGetContact);
    },
    _onGetContact: function (event) {
        return this.setState({
            contact: ContactsStore.gotContact()
        });
    },
    render: function () {
        var contact = this.state.contact;
        var contactMechs = contact.contactMechs || [];
        var contactMechsJSX = [];
        
        
        for (var i = 0; i < contactMechs.length; i++) {
            /* jshint ignore:start */
            contactMechsJSX.push(<ContactMechEntry key={ 'contact_mech_' + i } contactMech={ contactMechs[i]}/>);
            /* jshint ignore:end */
        }
        
        
        /* jshint ignore:start */
        return (
            <div>
                <Link to="/cp/contacts/my-contacts" className="btn btn-primary">
                    <span className="fa fa-arrow-left"></span> Back
                </Link>
                <div className="panel panel-default">
                    <div className="panel-heading panel-heading-custom">
                        <h1>Update Contact</h1>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-xs-12">
                                <h2>Contact</h2>
                            </div>
                            <div>
                                <dl>
                                    <dt>Salutation</dt>
                                    <dd>{contact.salutation}</dd>
                                    <dt>First Name</dt>
                                    <dd>{contact.firstName}</dd>
                                    <dt>Middle Name</dt>
                                    <dd>{contact.middleName}</dd>
                                    <dt>Last Name</dt>
                                    <dd>{contact.lastName}</dd>
                                    <dt>Salutation</dt>
                                    <dd>{contact.salutation}</dd>
                                    <dt>Currency</dt>
                                    <dd>{contact.preferredCurrencyUomId}</dd>
                                    <dt>Birth Date</dt>
                                    <dd>{contact.birthDate}</dd>
                                    <dt>Comments</dt>
                                    <dd>{contact.comments}</dd>
                                    <dt>Description</dt>
                                    <dd>{contact.description}</dd>
                                    <dt>Birth Date</dt>
                                    <dd>{contact.birthDate}</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <h2>Contact Information</h2>
                            </div>
                            <div className="panel-body">
                                { contactMechsJSX }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <h2>Accounts</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <h2>Cases</h2>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = withRouter(ContactDetailPage);