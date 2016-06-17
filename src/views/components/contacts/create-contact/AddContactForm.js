/////////////////////////////////////////////////
// Add Contact form component.
//
// @file:   AddContactForm.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');

var AddPersonalInfo = require('./AddPersonalInfo');
var AddContactMech = require('./AddContactMech'); 

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
                <div className="row">
                    <div className="col-xs-12" text-right>
                        <a className="btn btn-primary" href="#" role="button" 
                            onClick={ this.props.onButtonClick }>Create Contact</a>
                    </div>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = AddContactForm;