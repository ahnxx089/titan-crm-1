/////////////////////////////////////////////////
// Add Lead form component. Currently loaded in CreateLeadPage.
//
// @file:   AddLeadForm.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

var React = require('react');

//var AddPersonalInfo = require('./AddPersonalInfo');
//var AddContactMech = require('../../common/AddContactMech'); 
//var PartyDiv = require('./PartyDiv');
//var PartySupplementalDiv = require('./PartySupplementalDiv');
//var PartyContactDiv = require('./PartyContactDiv');


var PartyDiv = require('../../common/PartyDiv');
var PersonDiv = require('./PersonDiv');
var PartySupplementalDiv = require('../../common/PartySupplementalDiv');
var AddContactMech = require('../../common/AddContactMech');



// ON HOLD:  I tried to use Lucas' new common Submit Button, see commented out 
// <SubmitButton /> tag below in render.   I passed down this.props.onButtonClick 
// to SubmitButton.js, in which I temporarily edited the <button> tag to include
// onClick={ this.props.onButtonClick } but that did not make the button work.
// So for now I restored SubmitButton to Lucas' original version and for now
// am continuing to use the locally defined button in the render below.
var SubmitButton = require('../../common/SubmitButton');

var AddLeadForm = React.createClass({
    
    render: function() {
        /* jshint ignore:start */
        return (
            <div>
                {/*<form>*/} {/* Label B */}
                <form onSubmit={ this.props.onSubmit} > 

                    <PartyDiv 
                        ent={ this.props.lead } 
                        onChange={ this.props.onChange } />     
                    <PersonDiv 
                        lead={ this.props.lead } 
                        onChange={ this.props.onChange } />
                    <PartySupplementalDiv 
                        ent={ this.props.lead } 
                        onChange={ this.props.onChange } />     
                    <AddContactMech 
                        contact={ this.props.lead } 
                        onChange={ this.props.onChange } />    
                {/*
                    <PartyContactDiv 
                        lead={ this.props.lead } 
                        onChange={ this.props.onChange } />     
                        
                    <SubmitButton 
                        lead={ this.props.lead } 
                        onChange={ this.props.onChange } />       
                */}

                    <SubmitButton />
                    {/*<SubmitButton onButtonClick={this._onButtonClick} />*/} {/* Label B */}
                </form>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = AddLeadForm;