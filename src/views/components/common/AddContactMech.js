/////////////////////////////////////////////////
// Add Contact Mech form component.
//
// @file:   AddContactMech.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');
var StateProvinceOption = require('./StateProvinceOption');
var CountryOption = require('./CountryOption');
var CommonStore = require('../../stores/CommonStore');
var CommonActions = require('../../actions/CommonActions');

var AddContactMech = React.createClass({

    getInitialState: function () {
        return {
            stateProvinceObjArray: [],
            countriesObjArray: []
        };
    },

    componentDidMount: function () {
        CommonStore.addGetAllStatesOrProvincesListener(this._onGetData);  // register as listener with Store
        CommonStore.addGetAllCountriesListener(this._onGetData);  // register as listener with Store
        CommonActions.getAllStatesOrProvinces();    // initiate Flux unidirectional flow
        CommonActions.getAllCountries();    // initiate Flux unidirectional flow
    },

    componentWillUnmount: function() {
        CommonStore.removeListener('getAllStatesOrProvinces', this._onGetData);
        CommonStore.removeListener('getAllCountries', this._onGetData);
    },

    _onGetData: function () {
        this.setState({
            stateProvinceObjArray: CommonStore.getStatesOrProvincesObjArray()
        });
        this.setState({
            countriesObjArray: CommonStore.getCountriesObjArray()
        });
    },
    
    render: function(){
        
        /* jshint ignore:start */
        
        var statesProvinces = this.state.stateProvinceObjArray;        
        var statesProvincesJSX = [];

        for (var i = 0; i < statesProvinces.length; i++) {
            // See https://facebook.github.io/react/docs/multiple-components.html#dynamic-children
            // for an explanation for passing a "key" prop to a child component in for loop
            statesProvincesJSX.push(<StateProvinceOption key={ 'stateProvince_' + i } stateProvince={ statesProvinces[i] }/>);
        }
        
        var countries = this.state.countriesObjArray;        
        var countriesJSX = [];

        for (var i = 0; i < countries.length; i++) {
            // See https://facebook.github.io/react/docs/multiple-components.html#dynamic-children
            // for an explanation for passing a "key" prop to a child component in for loop
            countriesJSX.push(<CountryOption key={ 'country_' + i } country={ countries[i] }/>);
        }
        
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
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="stateOrProvinceGeoId">State or Province (select)</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-fw" aria-hidden="true"></i>
                                    </div>
                                    <select 
                                        className="form-control"
                                        id="stateProvinceGeoId"
                                        onChange={ this.props.onChange }
                                        value={ this.props.contact.stateProvinceGeoId }>
                                        { statesProvincesJSX }
                                    </select>
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
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="countryGeoId">Country (select)</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-globe" aria-hidden="true"></i>
                                    </div>
                                    <select 
                                        className="form-control"
                                        id="countryGeoId"
                                        onChange={ this.props.onChange }
                                        value={ this.props.contact.countryGeoId }>
                                        { countriesJSX }
                                    </select>
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