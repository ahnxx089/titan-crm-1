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
        /* jshint ignore: start */
        return (
            <div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="h2">
                            
                            <div className="btn-toolbar pull-right">

                                <button className="btn btn-secondary btn-sm btn-custom">Edit Account</button>
                                <button className="btn btn-secondary btn-sm btn-danger">Deactivate Account</button>
                            </div>
                            <h2>Account</h2>

                        </div>
                    </div>
                </div>
                        

                <div className="well">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            <span><strong>Local Name: </strong></span>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            <span><strong>Site Name: </strong></span>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            <span><strong>Annual Revenue: </strong></span>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            <span><strong>Preferred Currency: </strong></span>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            <span><strong>Industry: </strong></span>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            <span><strong>Ownership: </strong></span>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            <span><strong>Number of Employees: </strong></span>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            <span><strong>Ticker Symbol: </strong></span>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            <span><strong>Description: </strong></span>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            <span><strong>Comments: </strong></span>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            <span><strong>Important Note: </strong></span>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            <span><strong>Person Responsible For: </strong></span>
                        </div>
                    </div>
                </div>
            </div>
            
        );
        /* jshint ignore: end */
    }
}); 

module.exports = MainInfoDiv;