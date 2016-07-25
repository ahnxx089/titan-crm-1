/////////////////////////////////////////////////
// The Organization/Account-specific component of
// the AccountForm component
//
//
// @file:   AccountForm.js
// @author: Eric Brichetto <brichett13@gmail.com>
/////////////////////////////////////////////////

var React = require('react');

var OrganizationDiv = React.createClass({

    render: function () {
        var account = this.props.account;
        /* jshint ignore: start */
        return (
            <div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label className="control-label" htmlFor="accountName">Account Name (required)</label>
                    <div className="">
                        <input id="orgName" name="accountName" type="text" placeholder="Name of the organization" className="form-control input-md" required pattern="^[\x20-\x7E\u00C0-\u00FC]{1,100}$" data-error="Required; max length 100 characters" onChange={this.props.onChange} value={account.orgName}></input>
                    </div>
                    <div className="help-block with-errors"></div>
                </div>

                <div className="form-group col-md-6">
                    <label className="control-label" htmlFor="officeSiteName">Office Site Name (required)</label>
                    <div>
                        <input id="officeSiteName" name="officeSiteName" type="text" placeholder="Site Name" className="form-control input-md" required pattern="^[\x20-\x7E\u00C0-\u00FC]{1,100}$" data-error="Required; max length 100 characters" onChange={this.props.onChange} value={account.officeSiteName}></input>
                    </div>
                    <div className="help-block with-errors"></div>
                </div>

            </div>

            <div className="row">
                <div className="form-group col-md-6">
                    <label className="control-label" htmlFor="logoImgURL">Logo Image URL (required)</label>
                    <div className="">
                        <input id="logoImgURL" name="logoImgURL" type="url" placeholder="https://samplelogoimage.com" className="form-control input-md" required data-error="Required, format:  https://google.com" onChange={this.props.onChange} value={account.logoImgURL}></input>
                    </div>
                    <div className="help-block with-errors"></div>
                </div>

                <div className="form-group col-md-6">
                    <label className="control-label" htmlFor="comments">Comments (required)</label>
                    <div className="">
                        <textarea id="comments" name="comments" type="text" placeholder="Comments regarding this account" className="form-control inputBox" required pattern="^[\x20-\x7E\u00C0-\u00FC]{1,255}$" data-error="Required; max length 255 characters" onChange={this.props.onChange} value={account.comments}></textarea>
                    </div>
                    <div className="help-block with-errors"></div>
                </div>

            </div>
            </div>
        );
        /* jshint ignore: end */
    }
});

module.exports = OrganizationDiv;