/////////////////////////////////////////////////
// A quote row on My Quotes page.
//
// @file:   QuoteRow.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var React = require('react');

var QuoteRow = React.createClass({

    render: function () {
        /* jshint ignore:start */
        return (
            <tr>
                <td>{ this.props.quote.quoteId }</td>
                <td>{ this.props.quote.quoteName }</td>
                <td>{ this.props.quote.partyId }</td>
                <td>{ this.props.quote.issueDate }</td>
                <td>{ this.props.quote.statusId }</td>
                <td>{ this.props.quote.currencyUomId }</td>
                <td>{ this.props.quote.salesChannelEnumId }</td>
                <td>{ this.props.quote.validThruDate }</td>
            </tr>
        );
        /* jshint ignore:end */
    }

});

module.exports = QuoteRow;