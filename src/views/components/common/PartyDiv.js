/////////////////////////////////////////////////
// A party info div on Add XX page.
//
// @file:   PartyDiv.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

var React = require('react');

var PartyDiv = React.createClass({
    // changed class to className, noon June 16
    render: function () {
        /* jshint ignore:start */
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Basic Info [PARTY]</h2>
                    </div>
                </div>
            {/* ent stands for entity, either a lead or account */}
                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="partyTypeId">Party Type Id *</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <select id="partyTypeId" className="form-control" required>
                                 <option value="PERSON">PERSON</option>
                                 <option value="ORGANIZATION">Organization</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="currencyUomId">Currency</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-usd" aria-hidden="true"></i></div>
                                <select id="currencyUomId" className="form-control" onChange={ this.props.onChange } value={this.props.ent.currencyUomId} >
                                    <option value="USD">USD</option>
                                    <option value="CAD">CAD</option>
                                    <option value="EUR">EUR</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <textarea className="form-control" id="description" rows="4" placeholder="description of a lead/account " onChange={ this.props.onChange } value={this.props.ent.description}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="statusId">Status *</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <select id="statusId" className="form-control" onChange={ this.props.onChange} value={this.props.ent.statusId} required >
                                    <option disabled value=''> -- select an option -- </option>
                                    <option value="PARTY_ENABLED">ENABLED</option>
                                    <option value="PARTY_DISABLED">DISABLED</option>
                                    <option value="PTYLEAD_CONVERTED">CONVERTED</option>
                                </select>
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
module.exports = PartyDiv;