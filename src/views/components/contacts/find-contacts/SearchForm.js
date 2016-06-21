/////////////////////////////////////////////////
// Search form component
//
// @file:   SearchForm.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var ReactDOM = require('react-dom');

var SearchForm = React.createClass({

    componentDidMount: function(){
        $('#accordion').accordion();    // for jquery-ui accordion
    },
    
    render: function(){
        
        /* jshint ignore:start */
        
        return(
            <form onSubmit={ this.props.onFormSubmit } onReset={ this.props.onFormReset }>
                
                <div id="accordion">

                    <h2><span className="label label-default">Find By ID #</span></h2>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="form-group">
                                <label htmlFor="partyId">ID #</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="partyId" 
                                        placeholder="123" 
                                        onChange={ this.props.onChange } 
                                        value={ this.props.searchBy.partyId } />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2><span className="label label-default">Find By Name</span></h2>
                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="firstName" 
                                        placeholder="Jane"  
                                        onChange={ this.props.onChange } 
                                        value={ this.props.searchBy.firstName } />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="lastName" 
                                        placeholder="Doe"  
                                        onChange={ this.props.onChange } 
                                        value={ this.props.searchBy.lastName } />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
                {/* Submit button is outside the on row below search boxes */}
                <div className="row">
                    <div className="col-lg-1 col-xs-6">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                    <div className="col-lg-10 "></div>
                    <div className="col-lg-1 col-xs-6">
                        <button className="btn btn-primary" type="reset">Reset</button>
                    </div>
                </div>

            </form>
        );
        
        /* jshint ignore:end */
        
    }
    
});

module.exports = SearchForm;