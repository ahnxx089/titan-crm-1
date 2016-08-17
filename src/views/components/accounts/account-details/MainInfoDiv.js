/////////////////////////////////////////////////
// The first content subcomponent section of the 
// Account Details page, containing the table of 
// core info associated with the account.
// 
//
// @file:   MainInfoDiv.js
// @author: Eric Brichetto <brichett13@gmail.com>
/////////////////////////////////////////////////

var React = require('react');

var MainInfoDiv = React.createClass({
    
    render: function () {
        var account = this.props.account;
        /* jshint ignore: start */
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading col-md-12">
                        <div className="h2">
                            
                            <div className="btn-toolbar pull-right">

                                <button className="btn btn-primary btn-sm">Edit</button>
                                <button className="btn btn-secondary btn-sm btn-danger">Deactivate</button>
                            </div>
                            <h2>Account</h2>

                        </div>
                    </div>
                </div>
                        

                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className = "panel-title">Main Info</h3>
                    </div>
                    <div className = "panel-body">
                        <div className="row">
                            <div className="col-xs-12 col-md-6 col-lg-3">
                                <span className="label label-default">Local Name:</span> {account.companyName}
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-3">
                                <span className="label label-default">Site Name:</span> {account.officeSiteName}
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-3">
                                <span className="label label-default">Annual Revenue:</span> {account.annualRevenue}
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-3">
                                <span className="label label-default">Preferred Currency:</span> {account.currencyUomId || account.preferredCurrencyUomId}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-md-6 col-lg-3">
                                <span className="label label-default">Industry:</span> {account.industryEnumId}
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-3">
                                <span className="label label-default">Ownership:</span> {account.ownershipEnumId}
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-3">
                                <span className="label label-default">Number of Employees:</span> {account.numEmployees}
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-3">
                                <span className="label label-default">Ticker Symbol:</span> {account.tickerSymbol}
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-xs-12 col-md-6 col-lg-3">
                                <span className="label label-default">Description:</span> {account.description}
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-3">
                                <span className="label label-default">Comments:</span> {account.comments}
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-3">
                                <span className="label label-default">Important Note:</span> {account.importantNote}
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-3">
                                <span className="label label-default">Person Responsible For:</span> {account.createdBy}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
        /* jshint ignore: end */
    }
}); 

module.exports = MainInfoDiv;