/////////////////////////////////////////////////
// Add Personal Info form component.
//
// @file:   AddPersonalInfo.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');

var AddPersonalInfo = React.createClass({

    render: function(){
        /* jshint ignore:start */
        return (
            <div>
                <form>
                    
                    {/* Personal Info section heading */}
                    <div className="row">
                        <div className="col-xs-12">
                            <h2>Personal Info</h2>
                        </div>
                    </div>
                    
                    {/* Personal Info fields (4 rows) */}
                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="firstName" 
                                        placeholder="First Name" 
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.firstName } />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="middleName">Middle Name (optional)</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="middleName" 
                                        placeholder="Middle Name (optional)" 
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.middleName } />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="lastName" 
                                        placeholder="Last Name" 
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.lastName } />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="salutation">Salutation</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" 
                                        className="form-control" 
                                        id="salutation" 
                                        placeholder="Mr., Ms., etc. (optional)" 
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.salutation } />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="currency">Currency</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-usd" aria-hidden="true"></i>
                                    </div>
                                    {/*
                                    <!--
                                    <Anurag>
                                        The recommended approach is to fill up this dropdown through
                                        a method in something like CommonStore (for reusability purpose).
                                        Eg., CommonStore.getAllCurrencies()
                                        Of course we would need a new API for this.
                                        For reusability, we can create something like /api/common-data?type=uomCurrency
                                        You do this in componentDidMount.
                                    </Anurag>
                                    --> 
                                    <select id="currency" className="form-control">
                                        <option value="USD">USD - American Dollar</option>
                                        <option value="CAD">CAD - Canadian Dollar</option>
                                        <option value="EUR">EUR - Euro</option>
                                    </select>

                                    DINESH:  I WILL IMPLEMENT IN HERE SOON ONCE MORE BASIC FUNCTIONALITY OF THIS FORM IS WORKING.
                                    DITTO FOR STATE/COUNTRY, ALL OTHER PULL-DOWN MENU VALUES.  RIGHT NOW, I AM DELIBERATELY
                                    MAKING CURRENCY A TEXT BOX INPUT JUST LIKE FIRST NAME, IF THAT WORKS, I'LL REVISE INTO
                                    A PULL-DOWN MENU SOON...
                                    */}
                                    <input type="text" 
                                        className="form-control" 
                                        id="preferredCurrencyUomId" 
                                        placeholder="e.g., USD" 
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.preferredCurrencyUomId } />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="birthDate">Birth Date (optional)</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                    </div>
                                    <input type="date" 
                                        className="form-control" 
                                        id="birthDate" 
                                        placeholder="Birth Date" 
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.birthDate }/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                    </div>
                                    <input type="text"
                                        className="form-control" 
                                        id="description" 
                                        placeholder="enter any description here" 
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.description } />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="comments">Comments</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                    </div>
                                    <input type="text"
                                        className="form-control" 
                                        id="comments" 
                                        placeholder="enter any comments here" 
                                        onChange={ this.props.onChange } 
                                        value={ this.props.contact.comments } />
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

module.exports = AddPersonalInfo;