/////////////////////////////////////////////////
// A contact row on My Contacts page.
//
// @file:   .js
// @author: 
/////////////////////////////////////////////////

var React = require('react');
var Link = require('react-router').Link;

var PostalEntry = React.createClass({
    render: function () {
        /* jshint ignore:start */
        var contactMech = this.props.contactMech;
        
        return (
            <div>
                <h3>Address</h3>
                <dl>
                    <dt>To Name</dt>
                    <dd>{contactMech.toName}</dd>
                    <dt>Attention Name</dt>
                    <dd>{contactMech.attnName}</dd>
                    <dt>Address Line 1</dt>
                    <dd>{contactMech.address1}</dd>
                    <dt>Address Line 2</dt>
                    <dd>{contactMech.address2}</dd>
                    <dt>Directions</dt>
                    <dd>{contactMech.directions}</dd>
                    <dt>City</dt>
                    <dd>{contactMech.city}</dd>
                    <dt>State (or Province)</dt>
                    <dd>{contactMech.stateProvinceGeoId}</dd>
                    <dt>Zip or Postal Code</dt>
                    <dd>{contactMech.zipOrPostalCode}</dd>
                    <dt>Country</dt>
                    <dd>{contactMech.countryGeoId}</dd>
                    <dt>Purpose</dt>
                    <dd>{contactMech.contactMechPurposeTypeId}</dd>
                </dl>
            </div>
        );
        /* jshint ignore:end */
    }

});

module.exports = PostalEntry;