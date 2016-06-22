/////////////////////////////////////////////////
// Routes are mappings between URLs and components.
//
// @file:   Routes.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var React = require('react');
var Cookies = require('js-cookie');

var ReactRouter = require('react-router');
var IndexRedirect = ReactRouter.IndexRedirect;
var Route = ReactRouter.Route;
var NotFoundRoute = ReactRouter.NotFoundRoute;
var Redirect = ReactRouter.Redirect;

function requireAuth(nextState, replace) {
    var titanAuthToken = Cookies.get('titanAuthToken');
    if (!titanAuthToken) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}

var routes = (
    /* jshint ignore:start */
    <Route path="/">
        <IndexRedirect to="/cp/home" />
        <Route path="cp" component={require('./components/ControlPanel') } onEnter={requireAuth}>
            {/* Home and sub pages */}
            <Route path="home" component={require('./components/home/HomePage') }/>
            <Route path="home/home-sub" component={require('./components/home/HomeSubPage') } />
            {/* About page */}
            <Route path="about" component={require('./components/about/AboutPage') } />

            {/* Contacts module pages */}
            <Route path="contacts">
                <Route path="my-contacts" component={require('./components/contacts/my-contacts/MyContactsPage') } />
                <Route path="create" component={require('./components/contacts/create-contact/CreateContactPage')} />
                <Route path="update/:id" component={require('./components/contacts/update-contact/UpdateContactPage')} />
                <Route path="find" component={require('./components/contacts/find-contacts/FindContactsPage')} />
            </Route>
            {/* Leads module pages */}
            <Route path="leads">
                <Route path="my-leads" component={ require('./components/leads/my-leads/MyLeadsPage') } />
                <Route path="create-lead" component={ require('./components/leads/create-lead/CreateLeadPage') } />
                <Route path="find-leads" component={ require('./components/leads/find-leads/FindLeadsPage') } />
            </Route>
            {/* Accounts module pages */}
            <Route path="accounts">
                <Route path="create-account" component={require('./components/accounts/create-account/CreateAccountPage') } /> 
                <Route path="find-account" component={require('./components/accounts/find-account/FindAccountPage') } />
                <Route path="account-details" component={require('./components/accounts/account-details/AccountDetailsPage') } />
            </Route>

            {/* Quotes module pages */}
            <Route path="quotes">
                <Route path="my-quotes" component={require('./components/quotes/my-quotes/MyQuotesPage') } />
                <Route path="create-quote" component={require('./components/quotes/create-quote/CreateQuotePage')} />
>>>>>>> f9652b25c0a6625a1fa80efbd245278d9ef6d174
            </Route>
            
        </Route>
        <Route path="login" component={require('./components/login/LoginPage') } />
        {/*<NotFoundRoute handler={require('./components/notFoundPage')} />*/}
        {/*<Redirect from="authors" to="authors" />
    <Redirect from="about/*" to="about" />*/}
    </Route>
    /* jshint ignore:end */
);

module.exports = routes;