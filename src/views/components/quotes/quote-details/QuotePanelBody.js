/////////////////////////////////////////////////
// Quotes Panel Body-- child of Quote Details Page
//
// @file:   QuotesPanelBody.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var Link = require('react-router').Link;
var ItemRow = require('./ItemRow');

var QuotePanelBody = React.createClass({

    render: function () {

        // for displaying UT issueDate and updatedDate more readably
        var issueDate = new Date(this.props.quote.issueDate).toDateString();
        var updatedDate = new Date(this.props.quote.updatedDate).toDateString();

        // for displaying UT validFromDate more readably & deal with null case
        var validFromDate = this.props.quote.validFromDate;
        validFromDate = (validFromDate === null ? '(none)' : new Date(validFromDate).toDateString() );

        // for displaying UT validThruDate more readably & deal with null case
        var validThruDate = this.props.quote.validThruDate;
        validThruDate = (validThruDate === null ? '(none)' : new Date(validThruDate).toDateString() );

        /* A LITTLE LOOP TO MAKE ZERO, ONE, OR MORE ITEMROW ELEMENTS, EACH OF WHICH IS A <div className="row"></div>
            WHICH WILL NEED TO HAVE PASSED DOWN TO IT ALL THE QUOTE ITEMS, BUT FIRST WIRE UP THE FLUX FLOW,
            JUST GET THEM HERE AND DUMP THEM, THEN FIX THEM UP NICE AND PRETTY.
         */

        /* jshint ignore:start */
        return(
            <div className="panel panel-default">

                {/* Panel Heading & Body:  the Quote Details */}
                <div className="panel-heading panel-heading-custom">
                    <h1>Details: Quote #{ this.props.quote.quoteId }</h1>
                </div>
                <div className="panel-body">

                    {/* 7 Rows of Quote Details information */}
                    <div className="row">
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-right"><strong>Quote Id:</strong></p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-left">{ this.props.quote.quoteId }</p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-right"><strong>Quote Name:</strong></p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-left">{ this.props.quote.quoteName }</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-right"><strong>Account Party Id:</strong></p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-left">
                                <Link to={ '/cp/accounts/account-details/' + this.props.quote.partyId }>
                                    { this.props.quote.partyId }
                                </Link>
                            </p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-right"><strong>Contact Party Id:</strong></p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-left">
                                <Link to={ '/cp/contacts/details/' + this.props.quote.contactPartyId }>
                                    { this.props.quote.contactPartyId }
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-right"><strong>Issue Date (UT):</strong></p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-left">{ issueDate }</p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-right"><strong>Current Status:</strong></p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-left">{ this.props.quote.statusId }</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-right"><strong>Quote Type Id:</strong></p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-left">{ this.props.quote.quoteTypeId }</p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-right"><strong>Sales Channel:</strong></p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-left">{ this.props.quote.salesChannelEnumId }</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-right"><strong>Valid From (UT):</strong></p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-left">{ validFromDate }</p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-right"><strong>Valid Thru (UT):</strong></p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-left">{ validThruDate }</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-right"><strong>Created By Id:</strong></p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-left">{ this.props.quote.createdByPartyId }</p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-right"><strong>Updated (UT):</strong></p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-left">{ updatedDate }</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-right"><strong>Currency:</strong></p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-left">{ this.props.quote.currencyUomId }</p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-right"><strong>Description:</strong></p>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <p className="text-left">{ this.props.quote.description }</p>
                        </div>
                    </div>

                    {/* Row for the Update Quote button */}
                    <div className="row">
                        <div className="col-lg-5 "></div>
                        <div className="col-lg-2 col-xs-12">
                            <Link to={ '/cp/quotes/update-quote/' + this.props.quote.quoteId } className="btn btn-primary"><span className="fa fa-pencil-square-o"></span>Update Quote</Link>
                        </div>
                        <div className="col-lg-5 "></div>
                    </div>

                    <div className="row">
                        <hr/>
                    </div>

                    {/* Row for the Add Item button */}
                    <div className="row">
                        <div className="col-lg-12 col-xs-12">
                            {/* REVISE:  Add Item --> an AddItem page, submission there redirects here  */}
                            <Link to={ '/cp/quotes/update-quote/' + this.props.quote.quoteId } className="btn btn-default"><span className="fa fa-pencil-square-o"></span>Add Item</Link>
                        </div>
                    </div>

                     <pre>{ JSON.stringify( this.props.quoteItems, null, '\t' ) }</pre>

                    {/* Okay, the Items are here!  Time to make:

                        { ItemRowsJSX }

                        into a reality using a child component called ItemRow, the whole render will have as its
                        wrapping element <div className="row"></div>.  Within that, the item should be a
                        panel as in the example at http://jsfiddle.net/niner911/MgcDU/8905/ and the heading
                        should be e.g. <h3>Item #{ this.props.SOMETHIN }</h3>.  And that panel will need
                        to have an Add Option button, which I've not had great luck putting in the header of
                        the panel, so ideas include each ItemRow having the panel in a div with className="col-lg-10 col-xs-10" and the Add Option button in the rest of the grid on that row.
                        Then within each ItemRow's panel the details for that Item.  And options . . . proceed! */}

                </div>
            </div>
        );
        /* jshint ignore:end */

    }
});

module.exports = QuotePanelBody;