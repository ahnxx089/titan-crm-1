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
var ContactMechTable = require('../../common/ContactMechTable');

var AccountDetailsPage = React.createClass({
    getInitialState: function () {
        return {
            account: {}
        };
    },

    componentDidMount: function () {
        var id = this.props.params.id;
        AccountsStore.addGetDataListener(this._onGetData);

        AccountsActions.getAccountById(id);
    },

    componentWillUnmount: function () {
        AccountsStore.removeListener('getData', this._onGetData);
    },

    _onGetData: function () {
        this.setState({
            account: AccountsStore.getSingleAccount()
        });
    },

    render: function () {

        var account = this.state.account;
        var contactMechs = account.contactMechs || [];
        console.log(contactMechs);
        return (
            /* jshint ignore: start */
            <div className="container" id="container">
                <div className="panel panel-default">
                    <div className="col-sm-9 col-md-10 main"> 
            {/*<div className="panel-heading panel-heading-custom">*/}
                        <h1 className="page-header">Account Details</h1>
                        <DetailsHeading account={account} />
                        <MainInfoDiv account={account}/>
                        <ContactInfoDiv contactMechs={contactMechs}/>
                        <ContactMechTable contactMechs={contactMechs} />
                    </div>
                </div>
            </div>
            /* jshint ignore: end */
        );

    }
});

module.exports = AccountDetailsPage;