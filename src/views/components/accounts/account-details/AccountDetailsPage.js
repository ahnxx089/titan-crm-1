/////////////////////////////////////////////////
// The main component for the Account Details page.
// 
//
// @file:   AccountDetailsPage.js
// @author: Eric Brichetto <brichett13@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var DetailsHeading = require('./DetailsHeading');
var MainInfoDiv = require('./MainInfoDiv');
var ContactInfoDiv = require('./ContactInfoDiv');

var AccountDetailsPage = React.createClass({
    
    render: function () {
        /* jshint ignore: start */
        return (
            <div class="container" id="container">
                <div class="row">
                    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        <h1 class="page-header">Account Details</h1>
                        <DetailsHeading />
                        <MainInfoDiv />
                        <ContactInfoDiv />
                    </div>
                </div>
            </div>
        );
        /* jshint ignore: end */
    }
});

module.exports = AccountDetailsPage;