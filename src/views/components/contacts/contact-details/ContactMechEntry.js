/////////////////////////////////////////////////
// A contact row on My Contacts page.
//
// @file:   ContactMechRow.js
// @author: 
/////////////////////////////////////////////////

var React = require('react');
var Link = require('react-router').Link;
var EmailEntry = require('./EmailEntry');
var TelecomEntry = require('./TelecomEntry');
var PostalEntry = require('./PostalEntry');
var WebEntry = require('./WebEntry');


var ContactMechEntry = React.createClass({
    render: function () {
        /* jshint ignore:start */
        var contactMech = this.props.contactMech;
        var type = contactMech.contactMechTypeId;
        var contactMechJSX = null;

        switch (type) {
            case 'EMAIL_ADDRESS':
                contactMechJSX = <EmailEntry contactMech = {contactMech} />;
                break;
            case 'TELECOM_NUMBER':
                contactMechJSX = <TelecomEntry contactMech = {contactMech} />;
                break;
            case 'POSTAL_ADDRESS':
                contactMechJSX = <PostalEntry contactMech = {contactMech} />;
                break;
            case 'WEB_ADDRESS':
                contactMechJSX = <WebEntry contactMech = {contactMech} />;
                break;
            default:
                contactMechJSX = <div></div>;
        }
        
        return (
            <div>{contactMechJSX}</div>
        );
        /* jshint ignore:end */
    }

});

module.exports = ContactMechEntry;