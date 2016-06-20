/////////////////////////////////////////////////
// Search form component.
// NOTE:  This may be replaced, pending working out accordion
// For now it has both get by ID and by first/last name
//
// @file:   SearchForm.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');

var SearchForm = React.createClass({

    render: function(){

        /* jshint ignore:start */
        return(
            <form onSubmit={ this.props.onFormSubmit }>
                <div className="row">
                    <div className="col-lg-4 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="partyId">ID</label>
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
                    <div className="col-lg-4 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <input type="text" 
                                    className="form-control" 
                                    id="firstName" 
                                    placeholder="John" 
                                    onChange={ this.props.onChange } 
                                    value={ this.props.searchBy.firstName } />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xs-12">
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

                {/* Submit button on row below search boxes */}
                <div className="row">
                    <div className="col-xs-12">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        );
        /* jshint ignore:end */
    }
    
});

module.exports = SearchForm;