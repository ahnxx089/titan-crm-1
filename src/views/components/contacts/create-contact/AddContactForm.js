/////////////////////////////////////////////////
// Add Contact form component.
//
// @file:   AddContactForm.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');

// ON HOLD FOR NOW, THESE CHILDREN WILL BE IMPLEMENTED AS SOON AS I CAN...
//var AddPersonalInfo = require('./AddPersonalInfo'); // child of this component
//var AddContactMech = require('./AddContactMech'); // child of this component

var AddContactForm = React.createClass({
    
    // Not setting an initial state for "contact" here in the child; rather, this child has
    // a prop called contact it inherits from parent
    
    _onButtonClick: function(event) {
        this.props.onButtonClick(this.state.contact);
    },

    render: function() {
        /* jshint ignore:start */
        return (
            <div>
                {/* FUTURE CHILD COMPONENTS WILL GO HERE, SUCH AS:
                        <AddPersonalInfoForm />     <--- but what props to send down? hence doing form here for now...
                        <AddContactMechForm />                        
                */}
                
                {/* TEMPORARY ADD PERSONAL INFO FORM-- Best practice ultimately is to have child components AddPersonalInfo and
                    a reusable AddContactMechForm (assigned to me to create).  For the moment I am going to 
                    create just the AddPersonalInfo form right here; if it actually works, then I'll have understood
                    enough about this AddContactForm being a child of CreateContactPage to go that extra step.
                    For now, bear with me on having seven form fields right here in this component...
                */}
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
                                    <input type="text" className="form-control" id="firstName" placeholder="First Name" onChange={ this.props.onChange } value={ this.props.contact.firstName } />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="middleName">Middle Name (optional)</label>
                                <div className="input-group">
                                    <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                    <input type="text" className="form-control" id="middleName" placeholder="Middle Name (optional)" onChange={ this.props.onChange } value={ this.props.contact.middleName } />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <div className="input-group">
                                    <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                    <input type="text" className="form-control" id="lastName" placeholder="Last Name" onChange={ this.props.onChange } value={ this.props.contact.lastName } />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="salutation">Salutation</label>
                                <div className="input-group">
                                    <div className="input-group-addon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                    <input type="text" className="form-control" id="salutation" placeholder="Mr., Ms., etc. (optional)" onChange={ this.props.onChange } value={ this.props.contact.salutation } />
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
                                    DINESH:  I WILL IMPLEMENT IN HERE SOON ONCE MORE BASIC FUNCTIONALITY OF THIS FORM IS WORKING.
                                    DITTO FOR STATE/COUNTRY, ALL OTHER PULL-DOWN MENU VALUES.  RIGHT NOW, I AM DELIBERATELY
                                    MAKING CURRENCY A TEXT BOX INPUT JUST LIKE FIRST NAME.
                                    
                                    <select id="currency" className="form-control">
                                        <option value="USD">USD - American Dollar</option>
                                        <option value="CAD">CAD - Canadian Dollar</option>
                                        <option value="EUR">EUR - Euro</option>
                                    </select>
                                    */}
                                    <input type="text" className="form-control" id="currency" placeholder="e.g., USD" onChange={ this.props.onChange } value={ this.props.contact.preferredCurrencyUomId } />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="birthDate">Birth Date (optional)</label>
                                <div className="input-group">
                                    <div className="input-group-addon"><i className="fa fa-calendar" aria-hidden="true"></i></div>
                                    <input type="date" className="form-control" id="birthDate" placeholder="Birth Date" onChange={ this.props.onChange } value={ this.props.contact.birthDate }/>
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
                                    <textarea className="form-control" id="comments" rows="4" placeholder="enter any comments here" onChange={ this.props.onChange } value={ this.props.contact.comments } ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* The submit button */}
                    <div className="row">
                        <div className="col-xs-12" text-right>
                            <a className="btn btn-primary" href="#" role="button" onClick={ this._onButtonClick }>Create Contact</a>
                        </div>
                    </div>
                    
                </form>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = AddContactForm;