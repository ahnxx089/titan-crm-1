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

                    {/*
                        <Anurag>
                            Changes made from UX perspective:
                            1. Added a background color to the <h2> heading to make it more pronounced and heading-like.
                            2. Added an anchor inside <h2> to let the user know that this thing is clickable.
                            3. Added a minor CSS rule for this. Please check line 88 in titan.css.
                        </Anurag>
                    */}
                    <h2 className="bg-info"><a href="#">Find By ID #</a></h2>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="form-group">
                                <label htmlFor="partyId">ID #</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                    </div>
                                    <input type="number" 
                                        className="form-control" 
                                        id="partyId" 
                                        placeholder="123" 
                                        onChange={ this.props.onIdFieldChange } 
                                        value={ this.props.idField.partyId } />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="bg-info"><a href="#">Find By Name</a></h2>
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
                                        onChange={ this.props.onNameFieldChange } 
                                        value={ this.props.nameField.firstName } />
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
                                        onChange={ this.props.onNameFieldChange } 
                                        value={ this.props.nameField.lastName } />
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