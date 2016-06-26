/////////////////////////////////////////////////
// A contact row on My Contacts page.
//
// @file:   .js
// @author: 
/////////////////////////////////////////////////

var React = require('react');
var Link = require('react-router').Link;

var WebEntry = React.createClass({
    render: function () {
        /* jshint ignore:start */
        var contactMech = this.props.contactMech;
        
        return (
            <div>
                <h3>Website</h3>
                <dl>
                    <dt>URL</dt>
                    <dd>{contactMech.infoString}</dd>
                    <dt>Purpose</dt>
                    <dd>{contactMech.contactMechPurposeTypeId}</dd>
            {/* <dt>Purpose</dt>
                    <dd>{contactMech.contactMechPurposeTypeId}</dd> */}
                </dl>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = WebEntry;