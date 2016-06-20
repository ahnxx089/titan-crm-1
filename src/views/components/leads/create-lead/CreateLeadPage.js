// not finished

/////////////////////////////////////////////////
// Create Lead page component.
//
// @file:   CreateLeadPage.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

var React = require('react');
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
                
                parentPartyId: '120', /* this is added ad hoc */
                roleTypeId: 'LEAD' /* this is added ad hoc */
            },
            dirty: false,
            addedLeadId: ''
        };
    },

    // Look at https://facebook.github.io/react/docs/component-specs.html for lifecycle functions
    
    componentDidMount: function () {
        // Event listener to fire when data retrieved-- 
        // when Store emits,informs this View something happened
        console.log('mounted');
        LeadsStore.addedLeadListener(this._onAddedLead);
    },
    
    componentWillUnmount: function() {
        // Avoids console error
        console.log('will un mount');
        LeadsStore.removeListener('addedLead', this._onAddedLead);
    },
    
    
    // listener function
    _onAddedLead: function() {
        console.log('in on added lead');

        // ajax call does not return anything. Had to put the value in a variable, then RETRIEVE that variable later
        // this value can be no-permission, validation errors, or success-msg-that-is-the-party-id
        var result = LeadsStore.addedLead(); // yes

        // User lacks security permission to addLead
        if (result.hasOwnProperty('message')) {
            // still unsure about the error box
            console.log('no permission to add lead');
            this.props.updateErrorBox(result.message);
        }
        // User has permission, but there were one or more validation errors
        else if (Object.prototype.toString.call(result) === '[object Array]') {
            console.log('add lead validation errors');
            this.props.updateErrorBox(result);
        }
        // User had permission and no validation errors-- api should return the new partyId. 
        // Note:  the new partyId won't actually get rendered on this page, but I still want
        // it to reach here for diagnostic purposes and to really prove we closed the loop.
        else if (result.hasOwnProperty('partyId')) {
            // setState seems to be async
            this.setState({
                addedLeadId: result.partyId
            });
            console.log('successful added lead. New added lead id is ' + result.partyId /* addedLeadId wont work here */);
            // for successful post to database, redirect to MyLeadsPage
            //this.props.router.replace('/cp/leads/my-leads');
        }
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
            
                        <AddLeadForm lead={this.state.emptyLead} onChange={this.setLeadState} onSubmit={this._addLead} />
                    </div>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = MyLeadsPage;