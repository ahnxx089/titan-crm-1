/////////////////////////////////////////////////
// The form component for the Create Account page
// 
//
// @file:   AccountForm.js
// @author: Eric Brichetto <brichett13@gmail.com>
/////////////////////////////////////////////////
var React = require('react');
var OrganizationDiv = require('./OrganizationDiv');
var PartySupplementalDiv = require('../../common/PartySupplementalDiv');
var AddContactMech = require('../../common/AddContactMech');
var SubmitButton = require('../../common/SubmitButton');

var AccountForm = React.createClass({
    
    componentDidMount: function () {
        var thisForm = this;
        
        $('#addAccountForm').validator().on('submit', function (event) {
            if (event.isDefaultPrevented()) {
                console.log('Default is Prevented');
            } 
            else {
                thisForm.props.onFormSubmit(event);
            }
        });
    },
    
    render: function () {
        /* jshint ignore: start */
        return (
            <form role="form" id="addAccountForm">
                <OrganizationDiv account={this.props.account} onChange={this.props.onChange }/>
                <PartySupplementalDiv ent={this.props.account} onChange={this.props.onChange} />
                <AddContactMech contact={this.props.account} onChange={this.props.onChange} />
            {/*
                

                <div className="form-inline">
                    <div className="form-group col-lg-6">
                      <label className="col-sm-12 col-lg-6 control-label" htmlFor="SelectCurrencyUom">Preferred Currency</label>
                      <div className="col-sm-12 col-lg-6">
                        <div className="input-group">
                          <span className="input-group-addon glyphicon glyphicon-yen"></span>
                          <select id="SelectCurrencyUom" name="SelectCurrencyUom" className="form-control input-md" onChange={this.props.onChange} >
                              <option value="ADP">ADP - Andoran peseta</option>
                            <option value="AFA">AFA - Afghani</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-group col-lg-6">
                      <label className="col-sm-12 col-lg-6 control-label" htmlFor="annualRevenue">Annual Revenue</label>
                      <div className="col-sm-12 col-lg-6">
                        <div className="input-group">
                          <span className="input-group-addon">$</span>
                          <input id="annualRevenue" name="annualRevenue" className="form-control" placeholder="Revenue in USD" type="text" onChange={this.props.onChange} value={this.props.account.annualRevenue} ></input>
                        </div>
                      </div>
                    </div>
                </div>

                

                
                 <br/>

                <div className="form-group col-sm-12 col-lg-6">
                    <label className="col-sm-12 col-lg-3 control-label" htmlFor="importantNote">Important Note</label>
                    <div className="col-sm-12 col-lg-8">                     
                        <textarea className="form-control inputBox" rows="4" cols="40" id="importantNote" name="importantNote" onChange={this.props.onChange} value={this.props.account.importantNote}></textarea>
                    </div>
                </div>



                <div className="form-group col-sm-12 col-lg-6">
                  <label className="col-sm-12 col-lg-3 control-label" htmlFor="description">Description</label>
                  <div className="col-sm-12 col-lg-8">                     
                    <textarea className="form-control inputBox" rows="4" cols="40" id="description" name="description" onChange={this.props.onChange} value={this.props.account.description}></textarea>
                  </div>
                </div> */}

                {/*<SubmitButton onClick={this.props.onClick} />*/}

                <SubmitButton />
            </form>
        
        );
        /*jshint ignore: end */
    }
    
}); 

module.exports = AccountForm;