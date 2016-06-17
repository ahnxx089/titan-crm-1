/////////////////////////////////////////////////
// A lead row on My Leads page.
//
// @file:   LeadRow.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

var React = require('react');

var LeadRow = React.createClass({

    render: function () {
        /* jshint ignore:start */
        return (
            <tr>
                <td>{ this.props.lead.partyId }</td>
                <td>{ this.props.lead.salutation }</td>
                <td>{ this.props.lead.firstName }</td>
                <td>{ this.props.lead.lastName }</td>
                <td>{ this.props.lead.description }</td>
                <td>{ this.props.lead.parentPartyId }</td>
                <td>{ this.props.lead.createdDate }</td>
            </tr>
        );
        /* jshint ignore:end */
    }

});

module.exports = LeadRow;