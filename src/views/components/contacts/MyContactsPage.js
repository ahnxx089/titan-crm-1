/////////////////////////////////////////////////
// My Contacts page component.
//
// @file:   MyContacts.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');

// children will be required in here, e.g. as HomePage.js requires in GetContactForm and ContactDetails

// the store will be required in here as (probably):
//var MyContactsStore = require('../../stores/MyContactsStore');

// unlike CreateContactPage and HomePage, this page should not need to need to send out
// any info to a MyContactsAction after this page is rendered . . . MyContactsAction
// will of course be sending down this user's Contacts to MyContactsStore which will
// be sending it down here, but this page will not later be sending info back out. . . 

var MyContactsPage = React.createClass({
    getInitialState: function() {
        // JUST FOR NOW HAVE THE STORE SEND DOWN ONE CONTACT, BUT YEAH, VERY SOON OF COURSE THE STATE
        // OF "contacts" IS GOING TO HAVE TO BE SOMETHING LIKE A JSON OBJECT IN WHICH EACH OBJECT IS A JSON
        // FORMATTED CONTACT'S INFORMATION. .. . THAT IS FORMATTING, JUST GET ONE HERE FIRST!
        return {
            contacts: MyContactsStore.getContactsByOwner()
        };
    },
    
    componentDidMount: function() {
        MyContactsStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount: function() {
        MyContactsStore.removeListener('change', this._onChange);
    },
    
    render: function() {
        // TEMPORARY -- OBVIOUSLY I MUST WORK OUT A WAY TO RENDER AN UNKNOWN NUMBER OF CONTACTS
        // OWNED BY THE USER, BUT RIGHT NOW I HAVE MY DB RIGGED UP TO RETURN EXACTLY ONE, SO THAT
        // IF I GET THE UNIDIRECTIONAL DATA FLOW WORKING, THEN this.state.contacts WILL BE A SINGLE
        // CONTACT ENTITY WITH party_id = 20, who is Agent Smith.
        var contact = this.state.contacts;
        
        return (
            <div>
            
                {/* This container is the kind of table I could use, or probably a jQuery
                    DataTable would be better, but for now just keep it since it does 
                    display after some effort!  
                    NOTE:  ON THIS FIRST PASS, NOT ATTEMPTING TO PULL IN CONTACT MECHANISMS,
                    LET ME JUST GET THIS WORKING FIRST TO DISPLAY NOTHING BUT A FEW IMPORTANT
                    COLUMNS OF THE CONTACT ENTITY(IES) RETURNED BY getContactsByOwner ITSELF... */}
                <div className="container" >
                    <div className="panel panel-default">
                        <div className="panel-heading panel-heading-custom">
                            <h2>My Contacts</h2>
                        </div>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Salutation</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>                        
                                    <th>{ contact.partyId }</th>
                                    <th>{ contact.salutation }</th>
                                    <th>{ contact.firstName }</th>
                                    <th>{ contact.lastName }</th>
                                </tr>
                                {/* This row is just proof the table className works, get rid of eventually
                                <tr>                        
                                    <th>0000</th>
                                    <th>Mr.</th>
                                    <th>Dinesh</th>
                                    <th>Shenoy</th>
                                </tr>
                                */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = MyContactsPage;