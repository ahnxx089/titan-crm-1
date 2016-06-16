/////////////////////////////////////////////////
// A person info div on Add Lead page.
//
// @file:   PersonDiv.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

var React = require('react');

var PersonDiv = React.createClass({
    // changed class to className, noon June 16
    render: function () {
        /* jshint ignore:start */
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Basic Info [PERSON]</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label for="salutation">Salutation</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <input type="text" className="form-control" id="salutation" placeholder="Salutation" />
                            </div>
                        </div>
                    </div>                
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label for="firstName">First Name *</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <input type="text" className="form-control" id="firstName" placeholder="First Name" required /> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label for="middleName">Middle Name</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <input type="text" className="form-control" id="middleName" placeholder="Middle Name"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label for="lastName">Last Name *</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <input type="text" className="form-control" id="lastName" placeholder="Last Name" required/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label for="birthDate">Birth Date</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-calendar" aria-hidden="true"></i></div>
                                <input type="date" className="form-control" id="birthDate"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label for="comments">Comments</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <textarea className="form-control" id="comments" rows="4" placeholder="Comments of a person"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
        /* jshint ignore:end */
    }

});

// It is not okay to use double slash // for comments within the render function, 
// at least not after its return statement, OR at least not with HTML tags
// No             <!-- BASIC PERSON INFO heading -->             style comments either.
module.exports = PersonDiv;