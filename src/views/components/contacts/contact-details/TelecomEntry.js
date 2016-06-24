/////////////////////////////////////////////////
// A contact row on My Contacts page.
//
// @file:   .js
// @author: 
/////////////////////////////////////////////////

var React = require('react');
var Link = require('react-router').Link;

var TelecomEntry = React.createClass({
    render: function () {
        /* jshint ignore:start */
        var contactMech = this.props.contactMech;
        
        return (
            <div>
                <h3>Phone</h3>
                <dl>
                    <dt>Country Code</dt>
                    <dd>{contactMech.countryCode}</dd>
                    <dt>Area Code</dt>
                    <dd>{contactMech.areaCode}</dd>
                    <dt>Contact Number</dt>
                    <dd>{contactMech.contactNumber}</dd>
                    <dt>Ask-for Name</dt>
                    <dd>{contactMech.askForName}</dd>
                    <dt>Purpose</dt>
                    <dd>{contactMech.contactMechPurposeTypeId}</dd>
                </dl>
            </div>
        );
        /* jshint ignore:end */
    }

});

module.exports = TelecomEntry;