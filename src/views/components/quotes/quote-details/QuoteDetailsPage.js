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

    getInitialState: function(){
        return {
            quote: {}
        }
    },

    componentDidMount: function () {
        QuotesStore.addGetDataListener(this._onGetQuote);
        QuotesActions.getQuoteById(this.props.params.id);
    },

    componentWillUnmount: function(){
        QuotesStore.removeListener('getData', this._onGetQuote);
    },

    _onGetQuote: function(){
        this.setState({
            quote: QuotesStore.gotQuote()
        });
    },

    render: function(){

        /* jshint ignore:start */
        return (
            <div>
                {/* Note: If this container winds up being the outermost div, get rid of the wrapping div */}
                <div className="container">

                    {/* Top panel is the Quote itself, displayed in a child component.
                         TO BE ADDED SOON:  Pass down a prop to respond to a click of the Update Quote button,
                         handle the redirect and sending out of     */}
                    <QuotePanelBody quote={ this.state.quote } />

                    {/* Item Panel(s)-- have to be able to have more than one... */}


                </div>
            </div>
        );

        /* jshint ignore:end */
    }

});

module.exports = QuotesDetailsPage;