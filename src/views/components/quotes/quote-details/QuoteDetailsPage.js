/////////////////////////////////////////////////
// Quotes Details page component.
//
// @file:   QuotesDetailsPage.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var withRouter = require('react-router').withRouter;
var CommonStore = require('../../../stores/CommonStore');
var CommonActions = require('../../../actions/CommonActions');

var QuotePanelBody = require('./QuotePanelBody');
var QuotesStore = require('../../../stores/QuotesStore');
var QuotesActions = require('../../../actions/QuotesActions');

var QuotesDetailsPage = React.createClass({

    /* Note for future:  As with Items, quoteItemOptions will need to be defined.  However, since Options are
        specific to individual items, it might be best to store their state down in ItemRow...
        It should be possible to duplicate the accordion structure as well. */

    getInitialState: function(){
        return {
            quote: {},
            quoteItems: {}
        };
    },

    componentWillMount: function () {
        CommonStore.addGetTokenValidityListener(this._onGetTokenValidity);
        CommonActions.getTokenValidity();
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

    _onGetTokenValidity: function (){
        // if user's token is expired, redirect to login page.
        if ( CommonStore.getTokenMockMessage().tokenExpired === true ){
            this.props.router.replace('/login');
        }
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

// when doing the usual module.exports, wrap this component in withRouter in order to have
// property this.props.router.replace to do the redirect to Login page if token is expired
module.exports = withRouter(QuotesDetailsPage);
