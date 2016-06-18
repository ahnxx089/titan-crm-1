/////////////////////////////////////////////////
// Add Lead form component.
//
// @file:   AddLeadForm.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');

//var AddPersonalInfo = require('./AddPersonalInfo');
//var AddContactMech = require('../../common/AddContactMech'); 

var PartyDiv = require('./PartyDiv');
var PersonDiv = require('./PersonDiv');
var PartySupplementalDiv = require('../../common/PartySupplementalDiv');
var PartyContactDiv = require('./PartyContactDiv');


// ON HOLD:  I tried to use Lucas' new common Submit Button, see commented out 
// <SubmitButton /> tag below in render.   I passed down this.props.onButtonClick 
// to SubmitButton.js, in which I temporarily edited the <button> tag to include
// onClick={ this.props.onButtonClick } but that did not make the button work.
// So for now I restored SubmitButton to Lucas' original version and for now
// am continuing to use the locally defined button in the render below.
var SubmitButton = require('../../common/SubmitButton');

var AddLeadForm = React.createClass({
    
    _onButtonClick: function(event) {
        event.preventDefault();
        // this.props.onSubmit(); // Label A
        this.props.onButtonClick();
    },
    
    render: function() {
        /* jshint ignore:start */
        return (
            <div>
                <form>
                {/* <form onSubmit={ this._onButtonClick } > // Label A */}

                    <PartyDiv 
                        lead={ this.props.lead } 
                        onChange={ this.props.onChange } />     
                    <PersonDiv 
                        lead={ this.props.lead } 
                        onChange={ this.props.onChange } />
                {/*
                    <PartySupplementalDiv 
                        lead={ this.props.lead } 
                        onChange={ this.props.onChange } />     
                    <PartyContactDiv 
                        lead={ this.props.lead } 
                        onChange={ this.props.onChange } />     
                    <SubmitButton 
                        lead={ this.props.lead } 
                        onChange={ this.props.onChange } />       
                */}

                    {/* ON HOLD:  ATTEMPT AGAIN AT SOME POINT TO USE THE NEW COMMON SUBMIT BUTTON */}
                    {/*<SubmitButton onClick={ this.props.onButtonClick } />*/}

                    {/* <SubmitButton /> */} {/* Label A */}
                    <SubmitButton onButtonClick={this._onButtonClick} />


                    {/* Locally defined submit button, would like to replace with <SubmitButton /> if possible... */}
                {/*
                    <div className="row">
                        <div className="col-xs-12" text-right>
                            <a className="btn btn-primary" href="#" role="button" 
                                onClick={ this.props.onButtonClick }>Submit</a>
                        </div>
                    </div>
                */}
            </form>
                
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = AddLeadForm;