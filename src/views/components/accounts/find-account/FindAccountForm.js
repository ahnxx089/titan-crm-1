/////////////////////////////////////////////////
// Find Account Form component.
//
// @file:   FindAccountForm.js
// @author:  DukJin Ahn (ahnxx089@gmail.com)
/////////////////////////////////////////////////

var React = require('react');

var FindAccountForm = React.createClass({
     getInitialState: function() {
        return {
            account: {}
        };
     },
    
    _onAccountIdChange: function(event){
        this.setState({
            accountId : event.target.value
        });
    },
    
    _onAccountNameChange: function(event){
        this.setState({
            accountName : event.target.value
        });
    },
    
    _onButtonClick: function(event) {
        this.props.onButtonClick(this.state.accountId);
    },

    render: function () {
        /* jshint ignore:start */
        /*var account = this.state.account;*/
        
        return (
            <div className="container" style="margin-top:20px">
      
        <form name="findAccount" method="post">
            
            <div className ="row">
                <div className="col-xs-12 bg-success text-left">
                    <i className="fa fa-universal-access icons" aria-hidden="true">Find Accounts</i>
                </div>
            </div>
            
            <div className ="row">
                <div className="col-lg-6 bg-success text-left" style="margin-top:50px;">
                    <h4>Find by</h4>
                </div>
            </div> 
            
            <div className ="row">
                <div className="col-lg-6 panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Name and ID</h3>
                    </div>
                    <div className="panel-body">
                        <div className ="row">
                            <form className="form-horizontal">
                                <div className="form-gr oup">
                                    <label htmlFor="accountId" className="col-sm-4 control-label text-right">Account ID:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="accountId"  onChange={this._onAccountIdChange} placeholder="Account ID"/>
                                </div>
                                </div>
                            <div className="form-group">
                                    <label htmlFor="accountName" className="col-sm-4 control-label text-right">Account Name:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="accountName"  onChange={this._onAccountNameChange} placeholder="Account Name"/>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className ="row">
                        <div className="col-xs-12 text-center">
                            <button type="submit" className="btn btn-default" onClick={this._onButtonClick }>Find Accounts</button>
                        </div>
                    </div> 
                </div>
            </div>
                
            <div className ="row">
                <div className="col-lg-12 bg-success text-left">
                    <h4>Account Lists</h4>
                </div>
            </div>
        </form>
      </div>
      
    );
    /* jshint ignore:end */
    }
});

module.exports = FindAccountForm;