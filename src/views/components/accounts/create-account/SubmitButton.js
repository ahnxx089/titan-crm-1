/////////////////////////////////////////////////
// A button for submitting the Create Account form
// 
//
// @file:   SubmitButton.js
// @author: Eric Brichetto <brichett13@gmail.com>
/////////////////////////////////////////////////

var React = require('react');

var SubmitButton = React.createClass({
    getInitialState: {},
    
    render: function () {
        return (
            <div class="form-group">
                <label class="col-md-4 control-label" for="createAccount">Create Account</label>
                <div class="col-md-4">
                    <button id="createAccount" name="createAccount" class="btn btn-primary">Submit</button>
                </div>
            </div>
        );
    };
    
});

module.exports = SubmitButton;