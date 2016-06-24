/////////////////////////////////////////////////
// Lead Details component.
// Re-used from /home directory: (render function of ContactDetails) + (other functions of HomePage)
//
// @file:   LeadDetailPage.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

var React = require('react');
var LeadsStore = require('../../../stores/LeadsStore');
var LeadsActions = require('../../../actions/LeadsActions');

const timezoneOffset = new Date().getTimezoneOffset(); // 300 in CDT

var LeadDetailPage = React.createClass({
    
    getInitialState: function () {
        return {
            leadId: this.props.params.id,
            leadDetails: {}
        };
    },
    
    componentDidMount: function () {
        // Event listener to fire when data retrieved-- 
        // when Store emits,informs this View something happened
        LeadsStore.addGetDataListener(this._onGetData);
        
        var leadId = this.state.leadId;
//        console.log('in did mount ' + leadId);
        // Call the async function to get my leads
        LeadsActions.getLeadById(leadId);
    },

    componentWillUnmount: function() {
        // Avoids console error
        LeadsStore.removeListener('getData', this._onGetData);
    },
    
    
    _getLeadDetails: function() {
        var leadId = this.state.leadId;
//        console.log('in _ get lead details ' + leadId);
        LeadsActions.getLeadById(leadId);
    },
    
    // Listener to Store's getDate event. Once received, re-render
    _onGetData: function() {
        var result = LeadsStore.getLeadFound();
        // If it's is an error, eg. permission error, add it to ErrorBox
        // Cite from HomePage.js, but why????? 
        if (!result.hasOwnProperty('leadsssId') && result.hasOwnProperty('message')) {
            this.props.updateErrorBox(result.message);
        }
        
        // Otherwise we have received our expected result;
        // call setState to force a re-render of <LeadDetailPage>
        
        else {
            this.props.updateErrorBox([]); // clear the ErrorBox
            this.setState({
                leadDetails: result
            });
        }
    },
    
    
    render: function() {
        /* jshint ignore:start */
        
//        var lead = this.props.lead; // lead is undefined
//        console.log("lead is " + lead); 
//        console.log("path is " + path); // path is underfined
//        console.log("location is " + window.location); // something hard to use
        var allProps = this.props;
//        console.log(allProps);
        var leadId = this.state.leadId;
//        console.log('in render ' + leadId);
        var leadDetails = this.state.leadDetails;
        
        // TODO: re-modify this time in LeadsStore when first GET them
        // DONT forget line 120, 121
        var alreadyChanged = leadDetails.createdDate;
        var originalInLocal = new Date(alreadyChanged); // Date Object
        originalInLocal.setMinutes(originalInLocal.getMinutes() - timezoneOffset);
        
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Lead Details</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-xs-12 col-lg-6">
                            <span className="label label-default">Party Id</span>&nbsp;
                            { leadDetails.partyId }
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <span className="label label-default">Party Type</span>&nbsp;
                            { leadDetails.partyTypeId }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-lg-6">
                            <span className="label label-default">First Name</span>&nbsp;
                            { leadDetails.salutation + ' ' + leadDetails.firstName + ' ' + leadDetails.middleName }
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <span className="label label-default">Last Name</span>&nbsp;
                            { leadDetails.lastName }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-lg-6">
                            <span className="label label-default">Created By</span>&nbsp;
                            { leadDetails.createdBy }
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <span className="label label-default">Created Date</span>&nbsp;
                            {/* leadDetails.createdDate */}
                            { originalInLocal.toString() }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-lg-12">
                            <span className="label label-default">Description</span>&nbsp;
                            { leadDetails.description }
                        </div>
                    </div>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = LeadDetailPage;