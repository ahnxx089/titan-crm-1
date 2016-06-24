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
        /* jshint ignore: start */
        return (
            <div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label className="control-label" htmlFor="accountName">Account Name</label>  
                    <div className="">
                        <input id="accountName" name="accountName" type="text" placeholder="Name of the organization" className="form-control input-md" required=""></input>
                    </div>
                </div>

                <div className="form-group col-md-6">
                    <label className="control-label" htmlFor="officeSiteName">Office Site Name</label>
                    <div>
                        <input id="officeSiteName" name="officeSiteName" type="text" placeholder="Site Name" className="form-control input-md" required=""></input>
                    </div>
                </div>
                
            </div>
            
            <div className="row">
                <div className="form-group col-md-6">
                    <label className="control-label" htmlFor="logoImgURL">Logo</label>  
                    <div className="">
                        <input id="logoImgURL" name="logoImgURL" type="url" placeholder="www.samplelogoimage.com" className="form-control input-md" required=""></input>
                    </div>
                </div>
            
                <div className="form-group col-md-6">
                    <label className="control-label" htmlFor="logoImgURL">Comments</label>  
                    <div className="">
                        <textarea id="comments" name="comments" type="text" placeholder="Comments regarding this account" className="form-control inputBox" required=""></textarea>
                    </div>
                </div>
            
            </div>
            </div>
        ); 
        /* jshint ignore: end */
    }
});

module.exports = OrganizationDiv;