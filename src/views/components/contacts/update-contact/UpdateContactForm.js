/////////////////////////////////////////////////
// Update Contact Form component.
//
// @file:   UpdateContactForm.js
// @author: 
/////////////////////////////////////////////////

var React = require('react');

var UpdateContactForm = React.createClass({
    getInitialState: function () {
        return {
            contact: {}
        }
    },
    render: function () {

        /* jshint ignore:start */
        //this.setState({contact: this.props.contact});
        var contact = this.props.contact;
        var onChange = this.props.onChange;
        var currencies = this.props.currencies;
        var currenciesJsx = [];
        
        for (var i=0; i < currencies.length; i++) {
            var uomId = currencies[i].uom_id;
            var label = currencies[i].abbreviation;
            currenciesJsx.push(<option value={uomId}>{label}</option>);
        }

        return (
            <form name="updateContact" method="post" onSubmit={ this.props.onFormSubmit }>

                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name (Required) </label>
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                </div>
                                <input type="text" className="form-control" id="firstName" value={ contact.firstName || '' } onChange={ onChange }></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="middleName">Middle Name</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <input type="text" className="form-control" id="middleName"  value={ contact.middleName || '' } onChange={ onChange }></input>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name (Required) </label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <input type="text" className="form-control" id="lastName"  value={ contact.lastName || '' } onChange={ onChange }></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="salutation">Salutation</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <input type="text" className="form-control" id="salutation"  value={ contact.salutation || '' } onChange={ onChange }></input>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="currency">Currency</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-usd" aria-hidden="true"></i></div>
                                <select id="preferredCurrencyUomId" className="form-control" value={ contact.preferredCurrencyUomId} onChange={ onChange }>
                                    <option value={null}></option>
                                    {currenciesJsx}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="birthDate">Birth Date</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-calendar" aria-hidden="true"></i></div>
                                <input type="date" className="form-control" id="birthDate"  value={ contact.birthDate || '' } onChange={ onChange }></input>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <div className="form-group">
                            <label htmlFor="comments">Comments</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                <textarea className="form-control" id="comments" rows="4" value={ contact.comments || '' } onChange={ onChange }>{ contact.comments }</textarea>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xs-12">
                        <button type="submit" className="btn btn-primary">Update Contact</button>
                    </div>
                </div>

            </form>
        );
        /* jshint ignore:end */
    }
});

module.exports = UpdateContactForm;