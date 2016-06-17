/////////////////////////////////////////////////
// Add Contact form component.
//
// @file:   AddContactForm.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');

var AddPersonalInfo = require('./AddPersonalInfo');
var AddContactMech = require('../../common/AddContactMech'); 

// ON HOLD:  I tried to use Lucas' new common Submit Button, see commented out 
// <SubmitButton /> tag below in render.   I passed down this.props.onButtonClick 
// to SubmitButton.js, in which I temporarily edited the <button> tag to include
// onClick={ this.props.onButtonClick } but that did not make the button work.
// So for now I restored SubmitButton to Lucas' original version and for now
// am continuing to use the locally defined button in the render below.
var SubmitButton = require('../../common/SubmitButton');

var AddContactForm = React.createClass({
    
    render: function() {
        /* jshint ignore:start */
        return (
            <div>
                <AddPersonalInfo 
                        contact={ this.props.contact } 
                        onChange={ this.props.onChange } />     
                <AddContactMech 
                        contact={ this.props.contact } 
                        onChange={ this.props.onChange } />     
                
                {/* ON HOLD:  ATTEMPT AGAIN AT SOME POINT TO USE THE NEW COMMON SUBMIT BUTTON */}
                {/*<SubmitButton onClick={ this.props.onButtonClick } />*/}
                
                {/* Locally defined submit button, would like to replace with <SubmitButton /> if possible... */}
                <div className="row">
                    <div className="col-xs-12" text-right>
                        <a className="btn btn-primary" href="#" role="button" 
                            onClick={ this.props.onButtonClick }>Submit</a>
                    </div>
                </div>
                
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = AddContactForm;