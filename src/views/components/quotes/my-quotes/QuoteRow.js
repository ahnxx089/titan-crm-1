/////////////////////////////////////////////////
// A quote row on My Quotes page.
//
// @file:   QuoteRow.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var React = require('react');
var Link = require('react-router').Link;

var QuoteRow = React.createClass({

    render: function () {

        // for displaying UT issueDate more readably
        var issueDate = new Date(this.props.quote.issueDate).toDateString();

        // for displaying UT validThruDate more readably & deal with null case (empty string)
        var validThruDate = this.props.quote.validThruDate;
        validThruDate = (validThruDate === '' ? '' : new Date(validThruDate).toDateString() )

        /* jshint ignore:start */
        return (
            <tr>
                <td>
                    <Link to={ '/cp/quotes/quote-details/' + this.props.quote.quoteId }>
                        { this.props.quote.quoteId }
                    </Link>
                </td>
                <td>{ this.props.quote.quoteName }</td>
                <td>
                    <Link to={ '/cp/accounts/account-details/' + this.props.quote.partyId }>
                        { this.props.quote.partyId }
                    </Link>
                </td>
                <td>{ issueDate }</td>
                <td>{ this.props.quote.statusId }</td>
                <td>{ this.props.quote.currencyUomId }</td>
                <td>{ this.props.quote.salesChannelEnumId }</td>
                <td>{ validThruDate }</td>
                <td>
                    <Link to={ '/cp/quotes/update-quote/' + this.props.quote.quoteId } className="btn btn-primary btn-xs">
                        <span className="fa fa-pencil-square-o"></span> Edit
                    </Link>
                </td>
            </tr>
        );
        /* jshint ignore:end */
    }

});

module.exports = QuoteRow;