/////////////////////////////////////////////////
// Add Contact Mech form component.
//
// @file:   AddContactMech.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');

var AddContactMech = React.createClass({

    render: function(){
        /* jshint ignore:start */
        return (
            <div>

                <form>
                    
                    {/* E-CONTACT INFO heading */}
                    <div className="row">
                        <div className="col-xs-12">
                            <h2>Electronic Contact Info</h2>
                        </div>
                    </div>

                    {/* E-CONTACT INFO form fields:  1 className="row" div */}
                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="emailAddress">Email</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-envelope-o" aria-hidden="true"></i></div>
                                    <input type="email" 
                                        className="form-control" 
                                        id="emailAddress" 
                                        placeholder="e.g., first.last@gmail.com" 
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.emailAddress } />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="webAddress">Web Address</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-globe" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="webAddress" 
                                        placeholder="e.g., www.google.com"
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.webAddress } />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PHONE CONTACT INFO heading */}
                    <div className="row">
                        <div className="col-xs-12">
                            <h2>Phone Number</h2>
                        </div>
                    </div>

                    {/* PHONE CONTACT INFO form fields:  2 className="row" divs */}
                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="countryCode">Country Code</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="countryCode" 
                                        placeholder="e.g., 1"
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.countryCode } />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="areaCode">Area Code</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="areaCode" 
                                        placeholder="e.g., 123"
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.areaCode } />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="contactNumber">Phone Number</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="contactNumber" 
                                        placeholder="e.g., 555-1234"
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.contactNumber }/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="askForName">Ask For Name</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="askForName" 
                                        placeholder="e.g., First Last"
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.askForName }/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* POSTAL ADDRESS heading */}
                    <div className="row">
                        <div className="col-xs-12">
                            <h2>Primary Postal Address</h2>
                        </div>
                    </div>

                    {/* POSTAL ADDRESS form fields:  5 className="row" divs */}
                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="toName">To Name</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="toName" 
                                        placeholder="e.g., First Last"
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.toName }/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="attnName">Attention Name</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="attnName" 
                                        placeholder="e.g., First Last"
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.attnName }/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="address1">Address Line 1</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="address1" 
                                        placeholder="e.g., 123 Anywhere Lane"
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.address1 }/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="address2">Address Line 2</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="address2" 
                                        placeholder="Suite or Apt #"
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.address2 }/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="city" 
                                        placeholder="e.g., St. Louis"
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.city }/>
                                </div>
                            </div>
                        </div>
                        {/*
                        <Anurag>
                            The State field should be populated based on the selected country.
                            That is, fill this dropdown in the onChange event of country dropdown.
                        </Anurag>
                        */}
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="stateOrProvinceGeoId">State or Province (select)</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-fw" aria-hidden="true"></i>
                                    </div>
                                    {/* DINESH IS TEMPORARILY MAKING THIS NOTHING MORE THAN input type="text" FOR NOW, 
                                    TO BE REPLACED BY DROP-DOWN SOON, FOR NOW JUST TRYING TO GET IT WORKING AT A BASIC LEVEL.
                                    <select id="stateOrProvinceGeoId" className="form-control">
                                        <option>IA</option>
                                        <option>MN</option>
                                        <option>WI</option>
                                    </select>
                                    */}
                                    <input type="text" 
                                        className="form-control" 
                                        id="stateProvinceGeoId" 
                                        placeholder="AL, AK, AZ, etc." 
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.stateProvinceGeoId } />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="zipOrPostalCode">ZIP or Postal Code</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="zipOrPostalCode" 
                                        placeholder="e.g., 12345"
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.zipOrPostalCode }/>
                                </div>
                            </div>
                        </div>
                        {/*}
                        <Anurag>
                            Data should come from something like /api/common-data?type=geoCountry
                        </Anurag>
                        */}
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="countryGeoId">Country (select)</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-globe" aria-hidden="true"></i>
                                    </div>
                                    {/* DINESH IS TEMPORARILY MAKING THIS NOTHING MORE THAN input type="text" FOR NOW, 
                                    TO BE REPLACED BY DROP-DOWN SOON, FOR NOW JUST TRYING TO GET IT WORKING AT A BASIC LEVEL.
                                    <select id="countryGeoId" className="form-control">
                                        <option>USA</option>
                                        <option>CAN</option>
                                        <option>MEX</option>
                                    </select>
                                    */}
                                    <input type="text" 
                                        className="form-control" 
                                        id="countryGeoId" 
                                        placeholder="e.g., USA"
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.countryGeoId }/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12">
                            <div className="form-group">
                                <label htmlFor="directions">Directions</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-compass" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="directions" 
                                        placeholder="describe briefly"
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.directions }/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </form>
                
            </div>
        );
        /* jshint ignore:end */
    }
    
});

module.exports = AddContactMech;