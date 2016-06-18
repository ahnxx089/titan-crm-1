// not finished

/////////////////////////////////////////////////
// Create Lead page component.
//
// @file:   CreateLeadPage.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

var React = require('react');
//var PartySupplementalDiv = require('./PartySupplementalDiv');
//var SubmitButton = require('./SubmitButton');
var PartyDiv = require('./PartyDiv');
var PersonDiv = require('./PersonDiv');
var PartySupplementalDiv = require('../../common/PartySupplementalDiv');
var PartyContactDiv = require('./PartyContactDiv');
var SubmitButton = require('../../common/SubmitButton');

var AddLeadForm = require('./AddLeadForm');

var LeadsStore = require('../../../stores/LeadsStore'); 
var LeadsActions = require('../../../actions/LeadsActions'); 

var MyLeadsPage = React.createClass({

    getInitialState: function () {
        return {
            emptyLead: {
                partyTypeId: 'PERSON',
                currencyUomId: '',
                description: '',
                statusId: 'PARTY_ENABLED',
                
                salutation: '',
                firstName: '',
                middleName: '',
                lastName: '',
                birthDate: '',
                comments: '',
                
                parentPartyId: '120',
                roleTypeId: 'LEAD'
            },
            dirty: false
        };
    },

    // Look at https://facebook.github.io/react/docs/component-specs.html for lifecycle functions
    /*
    componentDidMount: function () {
        // Event listener to fire when data retrieved-- 
        // when Store emits,informs this View something happened
        console.log('mounted');
        LeadsStore.addListener(this._onGetData);
    },
    
    componentWillUnmount: function() {
        // Avoids console error
        console.log('will mount');
        LeadsStore.removeListener(this._onGetData);
    },
    */

    // An event registered with the store-- fires when emitGet()
    // is called inside getLeadsByOwner's success callback
    // THIS IS BROKEN. NEED FIX WHEN ACTUALLY DEALING WITH RE-RENDERING THE PAGE (with listeners etc)
//    _onGetData: function () {
//        this.setLeadState();
//    },
    
    // not used any more as I created a form
    _onAddLeadFormSubmit: function(event) {
        event.preventDefault();
        LeadsActions.addLead(this.state.emptyLead);
    },
    
    // working
    setLeadState: function(event) {
        console.log('in set lead state');
        this.setState( { dirty: true } );
        var field = event.target.id;
        var value = event.target.value;
        this.state.emptyLead[ field ] = value;
        console.log(this.state.emptyLead);
        this.setState( {emptyLead: this.state.emptyLead} );
    },
    
    _addLead: function() {
        console.log('in _ add lead');
        LeadsActions.addLead(this.state.emptyLead); 
        this.setState({ dirty: false }); 
    },

    
    render: function () {
        console.log('in render ');
        /* jshint ignore:start */
        
        return (
            <div>
                <div className="container" >
                    <div className="panel panel-default">
                        <div className="panel-heading panel-heading-custom">
                            <h2>Create Lead</h2>
                        </div>
                        { /* <form method="post" action="https://www.google.com"> */ }
                        { /* Comments between tags */ }
            
                        {/*form method="post" onSubmit={this._onAddLeadFormSubmit} >
                            <PartyDiv onChange={ this.props.onChange } />
                            <PersonDiv onChange={ this.props.onChange } />
                            <PartySupplementalDiv/>
                            <PartyContactDiv/>
                            <SubmitButton/>
                        </form*/}
            
            
                        <AddLeadForm lead={this.state.emptyLead} onChange={this.setLeadState}  onButtonClick={ this._addLead} />
                    </div>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = MyLeadsPage;