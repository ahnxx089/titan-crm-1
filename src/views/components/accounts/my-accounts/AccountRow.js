/////////////////////////////////////////////////
// The row component for the My Accounts table.
// 
//
// @file:   AccountRow.js
// @author: Eric Brichetto <brichett13@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var Link = require('react-router').Link;

var AccountRow = React.createClass({
    
    render: function () {
        var account = this.props.account;
        return (
            /* jshint ignore: start */
            <tr>
                <td>
                    <label>
                        <input type="checkbox"></input>
                    </label>
                </td>
                <td>
                    <a href="#">{account.partyId}</a>
                </td>
                <td>
                    <a href="#">{account.orgName}</a>
                </td>
                <td>
                    {account.officeSiteName}
                </td>
                <td>
                    <a href="#">{account.parentPartyId}</a>
                </td>
                <td>
                    {account.statusId}
                </td>
            </tr>
            /*jshint ignore: end */
        );
    }
});

module.exports = AccountRow;