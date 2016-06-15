/////////////////////////////////////////////////
// Update Contact Form component.
//
// @file:   UpdateContactForm.js
// @author: 
/////////////////////////////////////////////////

var React = require('react');

var UpdateContactForm = React.createClass({


    _onFirstNameChange: function(event) {
        this.setState({
            firstName: event.target.value
        });
    },
    _onMiddleNameChange: function(event) {
        this.setState({
            middleName: event.target.value
        });
    },
    _onLastNameChange: function(event) {
        this.setState({
            lastName: event.target.value
        });
    },
    _onSalutationChange: function(event) {
        this.setState({
            salutation: event.target.value
        });
    },
    _onCurrencyChange: function(event) {
        this.setState({
            prefferedCurrencyUom: event.target.value
        });
    },
    _onBirthDateChange: function(event) {
        this.setState({
            birthDate: event.target.value
        });
    },
    _onCommentsChange: function(event) {
        this.setState({
            comments: event.target.value
        });
    },
    
    _onButtonClick: function(event) {
        this.props.onButtonClick(this.state.contact);
    },

    render: function () {
        /* jshint ignore:start */
        var contact = this.state.contact;

        return ( 
            <div class="container">

                <form name="updateContact" method="post">

                    <!-- PERSONAL INFO heading -->
                    <div class="row">
                        <div class="col-xs-12 bg-success">
                            <h2>Personal Info</h2>
                        </div>
                    </div>
                    <br/>

                    <!-- PERSONAL INFO form fields:  4 class="row" divs -->
                    <div class="row">
                        <div class="col-lg-6 col-xs-12">
                            <div class="form-group">
                                <label for="firstName">First Name</label>
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="fa fa-file-text-o" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" class="form-control" id="firstName" value={contact.firstName} onChange={this._onfirstNameChange}>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-xs-12">
                            <div class="form-group">
                                <label for="middleName">Middle Name (optional)</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="fa fa-file-text-o" aria-hidden="true"></i></div>
                                    <input type="text" class="form-control" id="middleName"  value={contact.middleName} onChange={this._onMiddleNameChange}>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 col-xs-12">
                            <div class="form-group">
                                <label for="lastName">Last Name</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="fa fa-file-text-o" aria-hidden="true"></i></div>
                                    <input type="text" class="form-control" id="lastName"  value={contact.lastName} onChange={this._onLastNameChange}>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-xs-12">
                            <div class="form-group">
                                <label for="salutation">Salutation</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="fa fa-file-text-o" aria-hidden="true"></i></div>
                                    <input type="text" class="form-control" id="salutation"  value={contact.salutation} onChange={this._onSalutationChange}>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 col-xs-12">
                            <div class="form-group">
                                <label for="currency">Currency</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="fa fa-usd" aria-hidden="true"></i></div>
                                    <select id="currency" class="form-control">
                                        <!-- TODO get list from database-->
                                        <option>USD</option>
                                        <option>CAD</option>
                                        <option>EUR</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-xs-12">
                            <div class="form-group">
                                <label for="birthDate">Birth Date (optional)</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="fa fa-calendar" aria-hidden="true"></i></div>
                                    <input type="date" class="form-control" id="birthDate"  value={contact.birthDate} onChange={this._onBirthDateChange}>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group">
                                <label for="comments">Comments</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="fa fa-file-text-o" aria-hidden="true"></i></div>
                                    <textarea class="form-control" id="comments" rows="4" onChange={this._onCommentsChange}>{contact.comments}</textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>

                    <!-- UPDATE CONTACT BUTTON -->
                    <div class="row">
                        <div class="col-xs-12">
                            <button type="submit" class="btn btn-primary" onClick={this._onButtonClick}>Update Contact</button>
                        </div>
                    </div>

                </form>

            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = ContactDetails;