/////////////////////////////////////////////////
// The common header component.
//
// @file:   Header.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var React = require('react');
var withRouter = require('react-router').withRouter;
var BrowserHistory = require('react-router').browserHistory;
var Link = require('react-router').Link;
var Cookies = require('js-cookie');

var Header = React.createClass({
    _Logout: function(event) {
        event.preventDefault();
        // Delete the auth cookies
        Cookies.remove('titanAuthToken');
        Cookies.remove('titanAuthUser');
        // Redirect to Login page
        this.props.router.replace('/login');
    },
    render: function () {
        /* jshint ignore:start */
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Titan CRM</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/cp/home" activeClassName="active">Home</Link></li>
            
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Leads <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="http://www.google.com">My Leads old</a></li>
                                    <li><Link to="/cp/leads/my-leads" activeClassName="active">My Leads</Link></li>
                                    <li><a href="#">Create Lead</a></li>
                                    <li><a href="#">Find Leads</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Contacts <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/cp/contacts/my-contacts" activeClassName="active">My Contacts</Link></li>
                                    <li><Link to="/cp/contacts/create-contact" activeClassName="active">Create Contact</Link></li>
                                    <li><Link to="/cp/contacts/find-contacts" activeClassName="active">Find Contacts</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Accounts <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">My Accounts</a></li>
                                    <li><a href="#">Create Account</a></li>
                                    <li><a href="#">Find Accounts</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cases <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">My Cases</a></li>
                                    <li><a href="#">Create Case</a></li>
                                    <li><a href="#">Find Cases</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Quotes <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">My Quotes</a></li>
                                    <li><a href="#">Create Quote</a></li>
                                    <li><a href="#">Find Quotes</a></li>
                                </ul>
                            </li>
                            <li><Link to="/cp/about" activeClassName="active">About</Link></li>
                        </ul>
                        
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-user" aria-hidden="true"></i>&nbsp;
                                    { this.props.username }&nbsp;
                                    <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a onClick={ this._Logout } href="#">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
        /* jshint ignore:end */
    }
});

module.exports = withRouter(Header);