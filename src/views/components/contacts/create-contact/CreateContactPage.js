/////////////////////////////////////////////////
// Create Contact page component.
//
// @file:   CreateContactPage.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var ContactsStore = require('../../../stores/ContactsStore');
var ContactsActions = require('../../../actions/ContactsActions');

var CreateContactPage = React.createClass({
    
    // getInitialState ?  Don't create it unless/until I can articulate WHETHER this page needs it or not...
    
    render: function (){
        /* jshint ignore:start */    
        
        return (
            <div>
            
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = CreateContactPage;