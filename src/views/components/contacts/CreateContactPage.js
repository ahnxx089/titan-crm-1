/////////////////////////////////////////////////
// Create Contact page component.
// ON HOLD UNTIL FIRST GET MY CONTACTS PAGE WORKING
//
// @file:   CreateContactPage.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var React = require('react');

// if this component has children, require them in here with e.g.:
// the way HomePage.js requires in its children
//var GetContactForm = require('./GetContactForm');
//var ContactDetails = require('./ContactDetails');

// eventually when this view is hooked up to a Flux unidirectional
// dataflow, the Store will be required in here, e.g.,
//var CreateContactStore = require('../../stores/CreateContactStore'); // IS THAT THE NAME I WANT?

// and since the info filled into fields on this page needs to flow back out,
// will need to require in the Action in order to the data out to it, where 
// it will make the ajax call and get back something from contactApi.addContact
// (which might need modification) . . . per discussion with Anurag, the end result
// of clicking Submit on this page should be to re-direct to the My Contacts page,
// which will display results of getContactsByOwner for this user.  (That MyContactsPage
// should use a nice table display such as jQuery table, look it up and hopefully it
// is pretty easy to use like a bootstrap table?)

// BTW, IF THE FORM GETS TOO, TOO BIG IN THE render function here, FINE, MAKE A CHILD LIKE
// ContactDetails is a child of HomePage and send on some prop down to the child, like that...