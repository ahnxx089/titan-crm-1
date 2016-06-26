/////////////////////////////////////////////////
// A contact row on My Contacts page.
//
// @file:   ContactMechRow.js
// @author: 
/////////////////////////////////////////////////

var React = require('react');
var Link = require('react-router').Link;


var ContactMechRow = React.createClass({
    formatTelecom: function () {
        var string = '';
        //TODO
        return string
    },
    formatAddress: function () {
        var string = '';
        //TODO
        return string
    },
    render: function () {
        /* jshint ignore:start */
        var contactMech = this.props.contactMech;
        var type = null;
        var information = null;

        switch (contactMech.contactMechTypeId) {
            case 'EMAIL_ADDRESS':
                type = <td>Email</td>
                information = <td>{ contactMech.infoString }</td>;
                break;
            case 'TELECOM_NUMBER':
                type = <td>Telephone</td>
                information = <td>{ formatNumber() }</td>;
                break;
            case 'POSTAL_ADDRESS':
                type = <td>Address</td>
                information = <td>{ formatAddress() }</td>;
                break;
            case 'WEB_ADDRESS':
                type = <td>Website</td>
                information = <td>{ contactMech.infoString }</td>;
                break;
            default:
                type = <td></td>
                information = <td></td>;
        }
        
        return (
            <tr>
                { type }
                { information }
                <td>{ contactMech.contactMechPurposeTypeId }</td>
                <td>
                    <Link to={ '#' } className="btn btn-primary btn-xs">
                        <span className="fa fa-pencil-square-o"></span> Edit
                    </Link>
                    <Link to={ '#' } className="btn btn-primary btn-xs">
                        <span className="fa fa-trash "></span> Remove
                    </Link>
                </td>
            </tr>
        );
        /* jshint ignore:end */
    }

});

module.exports = ContactMechRow;