/////////////////////////////////////////////////
// The main component for the Account Details page.
//
//
// @file:   AccountDetailsPage.js
// @author: Eric Brichetto <brichett13@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var AccountsStore = require('../../../stores/AccountsStore');
var AccountsActions = require('../../../actions/AccountsActions');
var DetailsHeading = require('./DetailsHeading');
var MainInfoDiv = require('./MainInfoDiv');
var ContactInfoDiv = require('./ContactInfoDiv');
var CommonStore = require('../../../stores/CommonStore');
var ContactMechTable = require('../../common/ContactMechTable');
var ContactMechRow = require('../../common/ContactMechRow');

var AccountDetailsPage = React.createClass({
    getInitialState: function () {
        return {
            account: {},
            types: [],
            purposeTypes: []
        };
    },

    componentDidMount: function () {
        var id = this.props.params.id;
        AccountsStore.addGetDataListener(this._onGetData);
        //get types crossref table
        CommonStore.addGetContactMechTypesListener(this._onGetTypes);
        
        AccountsActions.getAccountById(id);
        CommonStore.getContactMechTypes();
        //get purpose types crossref table
        CommonStore.addGetContactMechPurposeTypesListener(this._onGetPurposeTypes);
        CommonStore.getContactMechPurposeTypes();
        
    },

    componentWillUnmount: function () {
        AccountsStore.removeListener('getData', this._onGetData);
        CommonStore.removeListener('getContactMechTypes', this._onGetTypes);
        CommonStore.removeListener('getContactMechPurposeTypes', this._onGetPurposeTypes);
    },

    _onGetData: function () {
        this.setState({
            account: AccountsStore.getSingleAccount()
        });
    },
    
    _onGetTypes: function (event) {
        this.setState({
            types: CommonStore.getTypeArray()
        });
    },
    _onGetPurposeTypes: function (event) {
        this.setState({
            purposeTypes: CommonStore.getPurposeTypeArray()
        });
    },

    render: function () {

        var account = this.state.account;
        var contactMechs = account.contactMechs || [];
        
        var contactMechsJSX = [];
        /* jshint ignore: start */
        for (var i = 0; i < contactMechs.length; i++) {
            contactMechsJSX.push(<ContactMechRow key={ 'contact_mech_' + i} contactMech={contactMechs[i]} types={this.state.types} purposeTypes={this.state.purposeTypes} />);
        }
        
        return (
            
            <div className="container" id="container">
                <div className="panel panel-default">
                    <div className="col-sm-9 col-md-10 main"> 
            {/*<div className="panel-heading panel-heading-custom">*/}
                        <h1 className="page-header">Account Details</h1>
                        <DetailsHeading account={account} />
                        <MainInfoDiv account={account}/>
                        <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">Contact Information</h3>
                        </div>
                        <table id="contactMechsTable" className='table'>
                            <thead>
                                <tr>
                                    <th>Contact Type</th>
                                    <th>Contact Information</th>
                                    <th>Purpose</th>
                                    {/* <th>Actions</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                { contactMechsJSX }
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
            
        );
        /* jshint ignore: end */
    }
});

module.exports = AccountDetailsPage;