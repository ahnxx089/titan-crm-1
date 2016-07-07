/////////////////////////////////////////////////
// Quotes Details page component.
//
// @file:   QuotesDetailsPage.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var QuotePanelBody = require('./QuotePanelBody');

var QuotesStore = require('../../../stores/QuotesStore');
var QuotesActions = require('../../../actions/QuotesActions');

var QuotesDetailsPage = React.createClass({

    /*  NOTE FOR ADDING/UPDATING OPTIONS OF ITEMS OF QUOTES: As with Items, quoteItemOptions will need to be
        defined here . . . but since they are specific to Items, no, maybe down in each Item?  */

    getInitialState: function(){
        return {
            quote: {},
            quoteItems: {}
        };
    },

    componentDidMount: function () {
        QuotesStore.addGetDataListener(this._onGetQuote);
        QuotesStore.addGetQuoteItemsListener(this._onGetQuoteItems);
        QuotesActions.getQuoteById(this.props.params.id);
        QuotesActions.getQuoteItems(this.props.params.id);
    },

    componentWillUnmount: function () {
        QuotesStore.removeListener('getData', this._onGetQuote);
        QuotesStore.removeListener('getQuoteItems', this._onGetQuoteItems);
    },

    _onGetQuote: function () {
        this.setState({
            quote: QuotesStore.gotQuote()
        });
    },

    _onGetQuoteItems: function () {
        this.setState({
            quoteItems: QuotesStore.gotQuoteItems()
        });
    },

    render: function () {

        /* jshint ignore:start */
        return (
            <div className="container">
                    <QuotePanelBody
                        quote={ this.state.quote }
                        quoteItems={ this.state.quoteItems } />
            </div>
        );

        /* jshint ignore:end */
    }

});

module.exports = QuotesDetailsPage;