/////////////////////////////////////////////////
// Quotes Details page component.
//
// @file:   QuotesDetailsPage.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
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
                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-heading panel-heading-custom">
                            <h1>Quote Details</h1>
                        </div>
                    </div>
                    {/* TRY:  This panel body could contain one or more panels inside it; well, for now
                        at least get the info from the retrieved quote dumped into it. */}
                    <div className="panel-body">
                        <pre>{JSON.stringify(this.state.quote,null,'\t')}</pre>
                    </div>
                </div>
            </div>

        );

        /* jshint ignore:end */
    }

});

module.exports = QuotesDetailsPage;