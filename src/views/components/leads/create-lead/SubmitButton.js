/////////////////////////////////////////////////
// A submit button on Add Lead page.
// Dont use this. Use the one in ../../common/ instead
//
// @file:   SubmitButton.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

var React = require('react');

var SubmitButton = React.createClass({
    // changed class to className, noon June 16
    // what is the difference between className and activeClassName?
    render: function () {
        /* jshint ignore:start */
        return (
            <div className="row">
                <div className="col-xs-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }

});

// It is not okay to use double slash // for comments within the render function, 
// at least not after its return statement, OR at least not with HTML tags
module.exports = SubmitButton;