/////////////////////////////////////////////////
// A contact row on My Contacts page.
//
// @file:   .js
// @author: 
/////////////////////////////////////////////////

var React = require('react');
var Link = require('react-router').Link;

var EmailEntry = React.createClass({
    render: function () {
        /* jshint ignore:start */
 
        var contactMech = this.props.contactMech;
        return (
            <div>
                <h3>Email</h3>
                <dl>
                    <dt>Address</dt>
                    <dd>{contactMech.infoString}</dd>
                    <dt>Purpose</dt>
                    <dd>{contactMech.contactMechPurposeTypeId}</dd>
                </dl>
            </div>
        );
        /* jshint ignore:end */
    }

});

module.exports = EmailEntry;