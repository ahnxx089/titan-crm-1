// not

/////////////////////////////////////////////////
// Create Lead page component.
//
// @file:   CreateLeadPage.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

var React = require('react');
//var LeadRow = require('./LeadRow');
var PartyDiv = require('./PartyDiv');
var PersonDiv = require('./PersonDiv');
var PartySupplementalDiv = require('./PartySupplementalDiv');
var PartyContactDiv = require('./PartyContactDiv');
var SubmitButton = require('./SubmitButton');

var LeadsStore = require('../../../stores/LeadsStore'); 
var LeadsActions = require('../../../actions/LeadsActions'); 

var MyLeadsPage = React.createClass({

    getInitialState: function () {
        return {
//            leadsOwned: []
        };
    },

//    componentDidMount: function () {
//        // Event listener to fire when data retrieved-- 
//        // when Store emits,informs this View something happened
//        LeadsStore.addGetDataListener(this._onGetData);
//        
//        // Call the async function to get my leads
//        LeadsActions.getLeadsByOwner();
//    },

//    componentWillUnmount: function() {
//        // Avoids console error
//        LeadsStore.removeListener('getData', this._onGetData);
//    },

    // An event registered with the store-- fires when emitGet()
    // is called inside getLeadsByOwner's success callback
//    _onGetData: function () {
//        this.setState({
//            leadsOwned: LeadsStore.getLeadsOwned()
//        });
//    },

    render: function () {

        /* jshint ignore:start */        
//        var leads = this.state.leadsOwned;        
//        var leadsJSX = [];

//        for (var i = 0; i < leads.length; i++) {
            // See https://facebook.github.io/react/docs/multiple-components.html#dynamic-children
            // for an explanation for passing a "key" prop to a child component in for loop
//            leadsJSX.push(<LeadRow key={ 'lead_' + i } lead={ leads[i] }/>);
//        }

        return (
            <div>
                <div className="container" >
                    <div className="panel panel-default">
                        <div className="panel-heading panel-heading-custom">
                            <h2>Create Lead</h2>
                        </div>
                        Hello1
                        <p>Hello2</p>
                        <form method="post" action="https://www.google.com">
                            <PartyDiv/>
                            <PersonDiv/>
                            <PartySupplementalDiv/>
                            <PartyContactDiv/>
                            <SubmitButton/>
                        </form>
                    </div>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = MyLeadsPage;