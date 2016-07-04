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

    /* GONNA BE TRICKY TO GET THE OPTIONS OF ALL ITEMS OF THIS QUOTE-- GETTING THE QUOTE ITEMS THEMSELVES
        IS EASY, BUT THEN FOR EACH ITEM, HOW GET THEM TOO?  I LEARNED THAT I CANNOT RETRIEVE STUFF DOWN
        IN THE CHILDREN BEFORE GETTING THE QUOTE HERE IN THE PARENT, BECAUSE THE CHILDREN GET RENDERED FIRST,
        AND DON'T GET RE-RENDERED UNTIL SOME CHANGE OF STATE HERE IN THE PARENT.  SO, FOR SURE I MUST
        GET THE OPTIONS HERE AS WELL-- ANYWAY, THAT'S BETTER NOT TO BE STORING STATES DOWN IN THE CHILDREN. */

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