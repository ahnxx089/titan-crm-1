/////////////////////////////////////////////////
// Add Item Form component.
//
// @file:   AddItemForm.js
// @authors: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var withRouter = require('react-router').withRouter;

var QuotesStore = require('../../../stores/QuotesStore');
var QuotesActions = require('../../../actions/QuotesActions');
var CommonStore = require('../../../stores/CommonStore');
var CommonActions = require('../../../actions/CommonActions');
var ProductOption = require('./ProductOption');

var AddItemForm = React.createClass({

    getInitialState: function() {
        return {
            quoteItem: {
                        quoteId: this.props.quote.quoteId,
                        quoteItemSeqId: '',
                        productId: 'testProd1',
                        quantity: null,
                        selectedAmount: null,
                        quoteUnitPrice: '',
                        estimatedDeliveryDate: '',
                        comments: '',
                        isPromo: null,
                        description: ''
                    },
            existingQuoteItems: {},
            highestQuoteItemSeqId: '',
            productsObjArray: []
        };
    },

    componentDidMount: function() {
        QuotesStore.addedQuoteItemListener(this._onAddedQuoteItem);
        QuotesStore.addGetQuoteItemsListener(this._onGetQuoteItems);
        CommonStore.addGetProductsListener(this._onGetProducts);
        QuotesActions.getQuoteItems(this.props.quote.quoteId);
        CommonActions.getProducts();

        var thisAddItemForm = this;
        $('#addItemForm').validator().on('submit', function (e) {
            if (e.isDefaultPrevented()) {
                // Handle the invalid form
            } else {
                // Proceed with form submission if all input data is valid
                thisAddItemForm._addQuoteItem();
            }
        });

    },

    componentWillUnmount: function() {
        QuotesStore.removeListener('addedQuoteItem', this._onAddedQuoteItem);
        QuotesStore.removeListener('getQuoteItems', this._onGetQuoteItems);
        CommonStore.removeListener('getProducts', this._onGetProducts);
    },

    _onGetQuoteItems: function () {
        /* Determine highest quoteItemSeqId of all the existingQuoteItems,
            and set this.state.quoteItem.quoteItemSeqId one digit higher.  */
        this.setState({
            existingQuoteItems: QuotesStore.gotQuoteItems()
        });
        var highest = 0;
        var existing = this.state.existingQuoteItems;
        for (var i = 0 ; i < existing.length ; i++ ){
            if (existing[i].quoteItemSeqId > highest){
                highest = existing[i].quoteItemSeqId;
            }
        }
        this.state.quoteItem.quoteId = this.props.quote.quoteId;
        this.state.quoteItem.quoteItemSeqId = Math.floor(highest) + 1;
        this.setState( {quoteItem: this.state.quoteItem} );
    },

    _onGetProducts: function () { this.setState({ productsObjArray: CommonStore.getProductsObjArray() }); },

    setQuoteItemState: function(event) {
        var field = event.target.id;
        var value = event.target.value;
        this.state.quoteItem[ field ] = value;
        this.setState( {quoteItem: this.state.quoteItem} );
    },

    _addQuoteItem: function(event) {
        QuotesActions.addQuoteItem(this.state.quoteItem);
    },

    _onAddedQuoteItem: function() {

        // After a successful ajax call in the store, calling QuotesStore.addedQuoteItem() will return
        // one of the three results from quoteApi.addQuote, handle with if-else-if-else block
        var result = QuotesStore.addedQuoteItem();

        // User lacks security permission to addQuote
        if (result.hasOwnProperty('message'))
        {
            this.props.updateErrorBox(result.message);
        }
        // User has permission, but there were one or more validation errors
        else if (Object.prototype.toString.call(result) === '[object Array]')
        {
            this.props.updateErrorBox(result);
        }
        // User had permission and no validation errors-- api should return the number of rows inserted.
        // If that equals 1, then the update was successful, redirect to Quote Details page
        else if (result.numRowsInserted === 1) {
            this.props.router.replace('/cp/quotes/quote-details/' + this.props.quote.quoteId );
        }
    },

    render: function (){

        /* jshint ignore:start */

        // make products drop-down menu
        var products = this.state.productsObjArray;
        var productsJSX = [];
        for (var i = 0; i < products.length; i++) {
            productsJSX.push(<ProductOption key={ 'product_' + i } product={ products[i] }/>);
        }

        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <form id="addItemForm">

                            <div className="row">
                                <div className="col-lg-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="productId">Product ID</label>
                                        <div className="input-group">
                                            <div className="input-group-addon">
                                                <i className="fa fa-bars" aria-hidden="true"></i>
                                            </div>
                                            <select
                                                className="form-control"
                                                id="productId"
                                                onChange={ this.setQuoteItemState }
                                                value={ this.state.quoteItem.productId }>
                                                { productsJSX }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="comments">Comments</label>
                                        <div className="input-group">
                                            <div className="input-group-addon">
                                                <i className="fa fa-bars" aria-hidden="true"></i>
                                            </div>
                                            <input type="text"
                                                className="form-control"
                                                id="comments"
                                                placeholder="(255 characters or less)"
                                                pattern="^[\x20-\x7E\u00C0-\u00FC]{1,255}$"
                                                data-error="(max length 255 characters)"
                                                onChange={ this.setQuoteItemState }
                                                value={ this.state.quoteItem.comments } />
                                        </div>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="estimatedDeliveryDate">Estimated Delivery Date</label>
                                        <div className="input-group">
                                            <div className="input-group-addon">
                                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                            </div>
                                            <input type="date"
                                                className="form-control"
                                                id="estimatedDeliveryDate"
                                                onChange={ this.setQuoteItemState }
                                                value={ this.state.quoteItem.estimatedDeliveryDate }/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <div className="input-group">
                                            <div className="input-group-addon">
                                                <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                            </div>
                                            <input type="text"
                                                className="form-control"
                                                id="description"
                                                placeholder="(255 characters or less)"
                                                pattern="^[\x20-\x7E\u00C0-\u00FC]{1,255}$"
                                                data-error="(max length 255 characters)"
                                                onChange={ this.setQuoteItemState }
                                                value={ this.state.quoteItem.description } />
                                            </div>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12">
                                    <button className="btn btn-primary btn-sm" type="submit" data-disable="true">Submit</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
});

// when doing the usual module.exports, wrap AddItemForm in withRouter in order to have
// property this.props.router.replace to do the redirect to QuoteDetailsPage upon submitting form data
module.exports = withRouter(AddItemForm);