/////////////////////////////////////////////////
// A party supplemental data div on Add XX page.
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
                            <label htmlFor="parentPartyId">Parent Account * </label>
                            {/* TODO: need to make this really required, rather than setting up in CreateLeadPage */}
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <input type="text" className="form-control" id="parentPartyId" placeholder="Parent Account, default 120" onChange={ this.props.onChange } /*value={ this.props.ent.parentPartyId}*/ />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="companyName">Company Name</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <input type="text" className="form-control" id="companyName" placeholder="Company Name" maxlength="100" onChange={ this.props.onChange } value={ this.props.ent.companyName} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="annualRevenue">Annual revenue</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-money" aria-hidden="true"></i></div>
                                <input type="number" className="form-control" id="annualRevenue" placeholder="Annual revenue" onChange={ this.props.onChange } value={ this.props.ent.annualRevenue} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="numEmployees">Number of Employees</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <input type="number" className="form-control" id="numEmployees" placeholder="Number of Employees" onChange={ this.props.onChange } value={ this.props.ent.numEmployees} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="industryEnumId">Industry</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-industry" aria-hidden="true"></i></div>
                                <select id="industryEnumId" className="form-control" onChange={ this.props.onChange } value={ this.props.ent.industry} >
                                    <option disabled value=""> -- select an option -- </option>

                                    <option value="IND_AEROSPACE">AEROSPACE</option>
                                    <option value="IND_DISTRIBUTION">DISTRIBUTION</option>
                                    <option value="IND_ETAILER">ETAILER</option>
                                    <option value="IND_FINANCE">FINANCE</option>
                                    <option value="IND_GEN_SERVICES">GEN_SERVICES</option>
                                    <option value="IND_HARDWARE">HARDWARE</option>
                                    <option value="IND_HEALTH_CARE">HEALTH_CARE</option>
                                    <option value="IND_INSURANCE">INSURANCE</option>
                                    <option value="IND_MANUFACTURING">MANUFACTURING</option>
                                    <option value="IND_MEDIA">MEDIA</option>
                                    <option value="IND_NON_PROFIT">NON_PROFIT</option>
                                    <option value="IND_PRESS">PRESS</option>
                                    <option value="IND_REAL_ESTATE">REAL_ESTATE</option>
                                    <option value="IND_RETAIL">RETAIL</option>
                                    <option value="IND_SOFTWARE">SOFTWARE</option>
                                    <option value="IND_TELECOM">TELECOM</option>
                                    
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="ownershipEnumId">Ownership</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-usd" aria-hidden="true"></i></div>
                                <select id="ownershipEnumId" className="form-control" onChange={ this.props.onChange } value={ this.props.ent.ownership} >
                                    <option disabled value=""> -- select an option -- </option>
                                    
                                    <option value="OWN_CCORP">CCORP</option>
                                    <option value="OWN_LLC_LLP">LLC_LLP</option>
                                    <option value="OWN_PARTNERSHIP">PARTNERSHIP</option>
                                    <option value="OWN_PROPRIETOR">PROPRIETOR</option>
                                    <option value="OWN_PUBLIC_CORP">PUBLIC_CORP</option>
                                    <option value="OWN_SCORP">SCORP</option>
                                    
                                </select>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="tickerSymbol">Ticker Symbol</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <input id="tickerSymbol" type="text" className="form-control" placeholder="Type a Ticker Symbol" onChange={ this.props.onChange } value={ this.props.ent.ticker}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="importantNote">Important Note</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <textarea id="importantNote" className="form-control" rows="4" placeholder="Note" onChange={ this.props.onChange } value={ this.props.ent.note} ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
        /* jshint ignore:end */
    }

});

module.exports = PartySupplementalDiv;