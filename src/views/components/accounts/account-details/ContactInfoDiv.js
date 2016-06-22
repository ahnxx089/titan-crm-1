/////////////////////////////////////////////////
// The second large content subcomponent of the 
// Account Details page, containing the table of 
// contact mechanisms listed for the account.
// 
// 
//
// @file:   ContactInfoDiv.js
// @author: Eric Brichetto <brichett13@gmail.com>
/////////////////////////////////////////////////

var React = require('react');

var ContactInfoDiv = React.createClass({
    
    render: function () {
        /* jshint ignore: start */
        return (
            <div>
            <div className="row">
                <div className="h2">
                    <div className="btn-toolbar pull-right">
                        <div className="btn-group dropdown dropdown-menu-right">
                            <button type="button" className="btn btn-secondary btn-custom dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Add New
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li><a href="#">Address</a></li>
                                <li><a href="#">Phone Number</a></li>
                                <li><a href="#">Email</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="#">Web URL</a></li>
                            </ul>
                        </div>
                    </div>
                    <h2>Contact Information</h2>
                    
                </div>

            </div>
            <div className="row">
                
            </div>
            </div>

        );
        /* jshint ignore: end */
    }
});

module.exports = ContactInfoDiv;