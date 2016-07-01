/////////////////////////////////////////////////
// The main React component for rendering the
// Create Account page.
//
//
// @file:   CreateAccountPage.js
// @author: Eric Brichetto <brichett13@gmail.com>
/////////////////////////////////////////////////
var React = require('react');
var Link = require('react-router');
var AccountsStore = require('../../../stores/AccountsStore');
var AccountsActions = require('../../../actions/AccountsActions');
var OrganizationDiv = require('./OrganizationDiv');
var PartySupplementalDiv = require('../../common/PartySupplementalDiv');
var PartyContactDiv = require('../../leads/create-lead/PartyContactDiv');
var SubmitButton = require('./SubmitButton');
var AccountForm = require('./AccountForm');
var CreateAccountPage = React.createClass({

    getInitialState: function () {
        return ({
            emptyAccount: {
                partyId: '',
                orgName: '',
                parentAccount: '',
                statusId: 'PARTY_ENABLED',
                companyName: '',
                officeSiteName: '',
                preferredCurrencyUomId: '',
                annualRevenue: '',
                numEmployees: '',
                industryEnumId: '',
                ownershipEnumId: '',
                comments: '',
                tickerSymbol: '',
                importantNote: '',
                description: '',//TODO: Add in an input field for this
                logoImgURL: '',
                contactMech: '' //TODO: Replace with what people are using to initialize contact mech fields
            },
            addedAccountPartyId: '',
            dirty: false
        });
    },

    setAccountState: function (event) {
        var accField = event.target.id;
        var newValue = event.target.value;
        this.state.emptyAccount[accField] = newValue;
        this.setState({
            emptyAccount: this.state.emptyAccount
        });
    },

    componentDidMount: function () {
        AccountsStore.addAddedAccountListener(this._onAddedAccount);
    },

    componentWillUnmount: function () {
        AccountsStore.removeListener('change', this._onAddedAccount);
    },

    _onAddAccount: function (e) {
        e.preventDefault();
        AccountsActions.addAccount(this.state.emptyAccount);
    },

    _onAddedAccount: function () {
        var newId = AccountsStore.getAddedAccountId;
        this.setState({
            addedAccountPartyId: newId
        });
    },

    render: function () {
        /* jshint ignore: start */
        return (
            <div className="container">

                {/* Form For Account Creation */}

                <legend>New Account</legend>

                <div className="row">
                    <div className="col-md-8 col-lg-12 col-md-offset-2 col-lg-offset-1">
            {/*<AccountForm /> */}
                        <AccountForm onChange={this.setAccountState} onFormSubmit={this._onAddAccount}/>
                        <OrganizationDiv onChange={this.setAccountState }/>
                        <PartySupplementalDiv ent={this.state.emptyAccount} />

                    </div>
                </div>

            </div>
        );
        /* jshint ignore:end */
    }


});

module.exports = CreateAccountPage;