/////////////////////////////////////////////////
// Add Contact form component.
//
// @file:   AddContactForm.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');

var AddPersonalInfo = require('./AddPersonalInfo');
var AddContactMech = require('../../common/AddContactMech');

var AddContactForm = React.createClass({

    componentDidMount: function () {
        var thisAddContactForm = this;
        $('#addContactForm').validator().on('submit', function (e) {
            if (e.isDefaultPrevented()) {
                // Handle the invalid form
            } else {
                // Proceed with form submission if all input data is valid
                thisAddContactForm.props.onButtonClick(e);
            }
        });
    },

    render: function () {
        /* jshint ignore:start */
        return (
            <div>
                <form id="addContactForm">
                    <AddPersonalInfo
                        contact={ this.props.contact }
                        onChange={ this.props.onChange } />
                    <AddContactMech
                        contact={ this.props.contact }
                        onChange={ this.props.onChange } />
                    <div className="row">
                        <div className="col-xs-12">
                            <button className="btn btn-primary" type="submit" data-disable="true">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = AddContactForm;