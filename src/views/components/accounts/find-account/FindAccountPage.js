/////////////////////////////////////////////////
// Find Acccount page component.
//
// @file:   FindAccountPage.js
// @author: DukJin Ahn(ahnxx089@gmail.com)
/////////////////////////////////////////////////

var React = require('react');
var ReactRouter = require('react-router');

var FindAccountForm = require('./FindAccountForm'); 
var AccountsStore = require('../../../stores/AccountsStore');
var AccountsActions = require('../../../actions/AccountsActions');

var FindAccountPage = React.createClass({
    mixins: [
        ReactRouter.Navigation
    ],
    
    getInitialState: function() {
        return {
            accountsOwned: []
        };
    },
    
    componentDidMount: function() {
        // register with Store as a listener for emit of new party_id of the added Account
        AccountsStore.addGetDataListener(this._onFindedAccount);
        AccountsActions.getAccountsByOwner();
    },
    
    componentWillUnmount: function() {
        // avoids console error, accompanies function call in componentDidMount
        AccountsStore.removeListener('getData', this._onFindedAccount);
    },
        
    _findAccount: function(event) {
        AccountsActions.getAccountsByOwner();
    },
    
    _onFindedAccount: function() {
        //TODO
        this.setState({
            accountsOwned: AccountsStore.getAccountsOwned()
        });
        $('#findAccountsTable').DataTable();
    },
    render: function (){
        /* jshint ignore:start */  
        var accounts = this.state.accountsOwned;
        var accountsJSX = [];
        for (var i = 0; i < accounts.length; i++){
            
            accountsJSX.push(<AccountRow key={ 'account_' + i} account={ accounts[i]}/>);
            
        }
    
        return (
            <div>
                <div>
                    <div className="container">
                        <div className="panel panel-default">
                            <div className="panel-heading panel-heading-custom">
                                <h1>Find Account</h1>
                            </div>
                            <FindAccountForm
                                onChange={ this.setAccountState } 
                                onButtonClick={ this._findAccount }/>                        
                        </div>
                    </div>
                </div>

                <div>
                    <div className="container" >
                        <div className="panel panel-default">
                            <div className="panel-heading panel-heading-custom">
                                <h4>Account Lists</h4>
                            </div>
                            <div className="panel-body">
                                <table id="findAccountsTable" className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Account ID</th>
                                            <th>Account Name</th>
                                            <th>Address Line</th>
                                            <th>City</th>
                                            <th>State</th>
                                            <th>Phone Number</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { accountsJSX }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = FindAccountPage;