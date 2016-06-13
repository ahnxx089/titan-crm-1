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
        })
    }
}

var routes = (
  <Route path="/">
    <IndexRedirect to="/cp/home" />
    <Route path="cp" component={require('./components/ControlPanel')} onEnter={requireAuth}>
        <Route path="home" component={require('./components/home/HomePage')} />
        <Route path="about" component={require('./components/about/AboutPage')} />
        <Route path="myContacts" component={require('./components/contacts/MyContactsPage')} />
        <Route path="createContact" component={require('./components/contacts/CreateContactPage')} />
        <Route path="findContacts" component={require('./components/contacts/FindContactsPage')} />
    </Route>
    <Route path="login" component={require('./components/login/LoginPage')} />
    {/*<NotFoundRoute handler={require('./components/notFoundPage')} />*/}
    {/*<Redirect from="awthurs" to="authors" />
    <Redirect from="about/*" to="about" />*/}
  </Route>
);

module.exports = routes;