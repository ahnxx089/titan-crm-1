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

    componentDidMount: function(){
        //('#addContactForm').validator();
    },
    
    render: function() {
        /* jshint ignore:start */
        return (
            <div>
                <form id="addContactForm" onSubmit={ this.props.onButtonClick }>
                    <AddPersonalInfo 
                            contact={ this.props.contact } 
                            onChange={ this.props.onChange } />     
                    <AddContactMech 
                            contact={ this.props.contact } 
                            onChange={ this.props.onChange } />     
                    <div className="row">
                        <div className="col-xs-12">
                            <button className="btn btn-primary" type="submit" data-disable="true">Submit</button>
                        </div>
                    </div>
                </form>                
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = AddContactForm;