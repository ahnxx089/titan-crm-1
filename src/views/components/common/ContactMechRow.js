/////////////////////////////////////////////////
// A contact row on My Contacts page.
//
// @file:   ContactMechRow.js
// @author: 
/////////////////////////////////////////////////

var React = require('react');
var Link = require('react-router').Link;


var ContactMechRow = React.createClass({
    getInitialState: function () {
        return {
            typeDesc: '',
            purposeTypeDesc: ''
        }
    },
    componentDidMount: function () {
        //TODO: get descriptions to match type/purposeType
    },
    componentWillUnmount: function () {
        
    },
    getTypeDesc: function () {
        
    },
    getPurposeTypeDesc: function () {
        
    },
    onGotTypeDesc: function () {
        
    },
    onGotTypeDesc: function () {
        
    },
    formatTelecom: function () {
        var contactMech = this.props.contactMech;
        var string = contactMech.contactNumber;
        
        //Attach country code and are code, if applicable
        if (contactMech.areaCode) {
            string = contactMech.areaCode + '-' + string;
            if (contactMech.countryCode) {
                string = contactMech.countryCode + '-' + string;
            }
        }
        
        //Attach ask-for name, if applicable
        if (contactMech.askForName) {
            string += '<br />Ask for ' + contactMech.askForName;
        }
        
        return string
    },
    formatAddress: function () {
        var contactMech = this.props.contactMech;
        var string = '';
        
        if (contactMech.toName) {
            string += 'To: ' + contactMech.toName + '<br />';
        }
        
        if (contactMech.attnName) {
            string += 'Attn: ' + contactMech.attnName + '<br />';
        }
        
        var delimitter = '';
        
        if (contactMech.city) {
            string += contactMech.city;
            delimitter = ', ';
        }
        
        if (contactMech.stateProvinceGeoId) {
            string += delimitter + contactMech.stateProvinceGeoId;
            delimitter = ', ';
        }
        
        if (contactMech.zipOrPostalCode) {
            string += delimitter + contactMech.zipOrPostalCode;
        }
        
        return string
    },
    render: function () {
        /* jshint ignore:start */
        var contactMech = this.props.contactMech;
        var information = null;

        switch (contactMech.contactMechTypeId) {
            case 'TELECOM_NUMBER':
                information = <td>{ this.formatTelecom() }</td>;
                break;
            case 'POSTAL_ADDRESS':
                information = <td>{ this.formatAddress() }</td>;
                break;
            default:
                information = <td>{ contactMech.infoString }</td>;
        }
        
        return (
            <tr>
                <td>{ this.state.typeDesc }</td>
                { information }
                <td>{ this.state.purposeTypeDesc }</td>
                <td>
                    <Link to={ '#' } className="btn btn-primary btn-xs">
                        <span className="fa fa-pencil-square-o"></span> Edit
                    </Link>
                </td>
            </tr>
        );
        /* jshint ignore:end */
    }

});

module.exports = ContactMechRow;