/////////////////////////////////////////////////
// My Quotes page component.
//
// @file:   MyQuotesPage.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var withRouter = require('react-router').withRouter;
var CommonStore = require('../../../stores/CommonStore');
var CommonActions = require('../../../actions/CommonActions');

var QuoteRow = require('./QuoteRow');
var QuotesStore = require('../../../stores/QuotesStore');
var QuotesActions = require('../../../actions/QuotesActions');

var MyQuotesPage = React.createClass({

    getInitialState: function () {
        return {
            quotesOwned: []
        };
    },

    componentWillMount: function () {
        CommonStore.addGetTokenValidityListener(this._onGetTokenValidity);
        CommonActions.getTokenValidity();
    },

    componentDidMount: function () {
        QuotesStore.addGetDataListener(this._onGetData);

        // Call the async function to get my quotes
        QuotesActions.getQuotesByOwner();
    },

    componentWillUnmount: function () {
        QuotesStore.removeListener('getData', this._onGetData);
    },

    _onGetTokenValidity: function (){
        // if user's token is expired, redirect to login page.
        if ( CommonStore.getTokenMockMessage().tokenExpired === true ){
            this.props.router.replace('/login');
        }
    },

    _onGetData: function () {
        this.setState({
            quotesOwned: QuotesStore.getQuotesOwned()
        });
        // Convert the My Quotes HTML table into a nice looking jQuery DataTable
        $('#myQuotesTable').DataTable({
            'order': [[ 0, 'desc' ]]
        });
    },

    render: function () {

        /* jshint ignore:start */
        var quotes = this.state.quotesOwned;
        var quotesJSX = [];

        for (var i = 0; i < quotes.length; i++) {
            // See https://facebook.github.io/react/docs/multiple-components.html#dynamic-children
            // for an explanation for passing a "key" prop to a child component in for loop
            quotesJSX.push(<QuoteRow key={ 'quote_' + i } quote={ quotes[i]}/>);
        }

        return (
            <div>
                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-heading panel-heading-custom">
                            <h2>My Quotes</h2>
                        </div>
                        <div className="panel-body">
                            <table id="myQuotesTable" className='table'>
                                <thead>
                                    <tr>
                                        <th>Quote ID</th>
                                        <th>Quote Name</th>
                                        <th>Account Party ID</th>
                                        <th>Contact Party ID</th>
                                        <th>Issue Date (UT)</th>
                                        <th>Status Id</th>
                                        <th>Valid Thru (UT)</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { quotesJSX }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
});

// when doing the usual module.exports, wrap this component in withRouter in order to have
// property this.props.router.replace to do the redirect to Login page if token is expired
module.exports = withRouter(MyQuotesPage);
