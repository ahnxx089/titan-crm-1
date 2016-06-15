/////////////////////////////////////////////////
// A contact row on My Contacts page.
//
// @file:   ContactRow.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var React = require('react');

var ContactRow = React.createClass({

    render: function () {
        /* jshint ignore:start */
        return (
            <tr>
                <td>{ this.props.contact.partyId }</td>
                <td>{ this.props.contact.salutation }</td>
                <td>{ this.props.contact.firstName }</td>
                <td>{ this.props.contact.lastName }</td>
            </tr>
        );
        /* jshint ignore:end */
    }

});

module.exports = ContactRow;