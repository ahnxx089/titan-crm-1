/////////////////////////////////////////////////
// The heading section of the Account Details page,
// containing the logo image, name of the account, 
// its ticker symbol (as an inline glyphicon), and
// the identifier for the account's parent account. 
// 
//
// @file:   DetailsHeading.js
// @author: Eric Brichetto <brichett13@gmail.com>
/////////////////////////////////////////////////

var React = require('react');

var DetailsHeading = React.createClass({
    
    render: function () {
        /* jshint ignore: start */
        return (
            <div className="row placeholder">
                <div className="col-xs-6 col-sm-3 center-align">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Thumbnail image of the account's logo" />
                    <h4>Account Name <span>(Ticker Placeholder)</span></h4>
                        <span className="text-muted"><strong>Parent Account: </strong>(Name/ID w/ link)</span>
                </div>
            </div>
        );
        /* jshint ignore: end */
    }
}); 

module.exports = DetailsHeading;