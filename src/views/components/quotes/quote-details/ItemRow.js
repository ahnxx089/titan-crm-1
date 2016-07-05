/////////////////////////////////////////////////
// Item Row-- child of Quote Panel Body
//
// @file:   ItemRow.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var Link = require('react-router').Link;

var ItemRow = React.createClass({

    render: function () {

        // for displaying UT Estimated Delivery Date more readably & deal with null case
        var estimatedDeliveryDate = this.props.quoteItem.estimatedDeliveryDate;
        estimatedDeliveryDate = (estimatedDeliveryDate === null ? '(none)' : new Date(estimatedDeliveryDate).toDateString() );

        /* jshint ignore:start */
        return (

            <div className="row">

                <div className="col-lg-10">
                    <div className="panel panel-info">
                        <div className="panel-heading">Item #{ this.props.quoteItem.quoteItemSeqId }</div>

                        <div className="panel-body">
                            {/* 2 rows of Item information */}
                                <div className="row">
                                    <div className="col-lg-3 col-xs-6">
                                        <p className="text-right"><strong>Product Id:</strong></p>
                                    </div>
                                    <div className="col-lg-3 col-xs-6">
                                        <p className="text-left">{ this.props.quoteItem.productId }</p>
                                    </div>
                                    <div className="col-lg-3 col-xs-6">
                                        <p className="text-right"><strong>Comments:</strong></p>
                                    </div>
                                    <div className="col-lg-3 col-xs-6">
                                        <p className="text-left">{ this.props.quoteItem.comments }</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-xs-6">
                                        <p className="text-right"><strong>Estimated Delivery Date:</strong></p>
                                    </div>
                                    <div className="col-lg-3 col-xs-6">
                                        <p className="text-left">{ estimatedDeliveryDate }</p>
                                    </div>
                                    <div className="col-lg-3 col-xs-6">
                                        <p className="text-right"><strong>Description:</strong></p>
                                    </div>
                                    <div className="col-lg-3 col-xs-6">
                                        <p className="text-left">{ this.props.quoteItem.description }</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2">
                        {/*  GOING TO HAVE TO HANDLE UPDATE ITEM DIFFFERENTLY-- TENTATIVELY AS AN ACCORDION HERE
                            INSIDE THIS ITEM ROW, STILL THINKING ABOUT IT...
                        <Link to={ '/cp/quotes/update-item/'+this.props.quoteItem.quoteId+'?quoteItemSeqId='+this.props.quoteItem.quoteItemSeqId } className="btn btn-primary btn-xs"><span className="fa fa-pencil-square-o"></span>Update Item #{ this.props.quoteItem.quoteItemSeqId }</Link>
                        */}
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = ItemRow;