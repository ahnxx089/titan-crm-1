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
var OrganizationDiv = require('./OrganizationDiv');
var PartySupplementalDiv = require('../../common/PartySupplementalDiv');
var PartyContactDiv = require('../../leads/create-lead/PartyContactDiv');
var SubmitButton = require('./SubmitButton');
var AccountForm = require('./AccountForm');
var CreateAccountPage = React.createClass({
    
    getInitialState: function () {
        return ({
            emptyAccount: {
                accountName: '',
                parentAccount: '',
                statusId: 'PARTY_ENABLED',
                orgName: '',
                companyName: '',
                officeSiteName: '',
                currencyUomId: '',
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
                contactMech: '', //TODO: Replace with what people are using to initialize contact mech fields
            },
            dirty: false
        });
    },
    /* jshint ignore: start */
    render: function () {
        return (
            <div className="container">

                {/* Form For Account Creation */}

                <legend>New Account</legend>

                <div className="row">
                    <div className="col-md-8 col-lg-12 col-md-offset-2 col-lg-offset-1">
            {/*<AccountForm /> */}
                        <OrganizationDiv />
                        <PartySupplementalDiv ent={this.state.emptyAccount} />
                        
                    </div>
                </div>
    
            </div>
        );
        /* jshint ignore:end */
    },
    
    handleClick: function(ev) {
        
    }
    
});

module.exports = CreateAccountPage;