/////////////////////////////////////////////////
// A submit button on Add XX page.
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
                    <button type="submit" className="btn btn-primary" onClick={this.props.onButtonClick}>Submit</button>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }

});

// It is not okay to use double slash // for comments within the render function, 
// at least not after its return statement, OR at least not with HTML tags
module.exports = SubmitButton;

/*  DINESH'S NOTE TO LUCAS:  I attempted to use this SubmitButton in the AddContactForm but
    could not figure out how to successfully pass down this.props.onButtonClick from that form to here.
    I temporarily changed the <button> tag above to:
    
        <button type="submit" className="btn btn-primary" onClick = {this.props.onButtonClick}>Submit</button>
    
    But that did not work, therefore I restored the <button> tag to your version.  If I can use this button
    on the AddContactForm, I would like to.
*/
