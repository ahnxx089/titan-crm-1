/////////////////////////////////////////////////
// A party supplemental data div on Add Lead page.
// Dont use this. Use the one in ../../common/ instead
//
// @file:   PartySupplementalDiv.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

var React = require('react');

var PartySupplementalDiv = React.createClass({
    // changed class to className, noon June 16
    render: function () {
        /* jshint ignore:start */
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Basic Info [PARTY SUPPLEMENTAL]</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label for="parentAccount">Parent Account</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <input type="text" className="form-control" id="parentAccount" placeholder="Parent Account" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label for="companyName">Company Name</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <input type="text" className="form-control" id="companyName" placeholder="Company Name" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label for="annualRevenue">Annual revenue</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-money" aria-hidden="true"></i></div>
                                <input type="number" className="form-control" id="annualRevenue" placeholder="Annual revenue" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label for="numEmployees">Number of Employees</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <input type="number" className="form-control" id="numEmployees" placeholder="Number of Employees" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label for="industry">Industry</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-industry" aria-hidden="true"></i></div>
                                <select id="industry" className="form-control">
                                    <option disabled selected> -- select an option -- </option>
                                    <option value="IND_HARDWARE">HARDWARE</option>
                                    <option value="IND_FINANCE">FINANCE</option>
                                    <option value="IND_RETAIL">RETAIL</option>
                                    <option value="IND_MEDIA">MEDIA</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label for="ownership">Ownership</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-usd" aria-hidden="true"></i></div>
                                <select id="ownership" className="form-control">
                                    <option disabled selected> -- select an option -- </option>
                                    <option value="OWN_CCORP">CCORP</option>
                                    <option value="OWN_LLC_LLP">LLC_LLP</option>
                                    <option value="OWN_PARTNERSHIP">PARTNERSHIP</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label for="ticker">Ticker Symbol</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <input type="text" className="form-control" id="ticker" placeholder="Type a Ticker Symbol" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label for="note">Important Note</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <textarea className="form-control" id="note" rows="4" placeholder="Note"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
        /* jshint ignore:end */
    }

});

// It is not okay to use double slash // for comments within the render function, 
// at least not after its return statement, OR at least not with HTML tags
// No             <!-- BASIC PERSON INFO heading -->             style comments either.
module.exports = PartySupplementalDiv;