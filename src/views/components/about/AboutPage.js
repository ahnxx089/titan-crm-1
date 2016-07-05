/////////////////////////////////////////////////
// About page component.
//
// @file:   AboutPage.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var React = require('react');

var AboutPage = React.createClass({
    render: function() {
        /* jshint ignore:start */
        return (
            <div className="team">
                <div className="page-header">
                    <h1>Team Titan</h1>
                </div>
                <div className="row well">
                    <div className="col-xs-2 col-lg-2 text-center">
                        <img src='img/Dinesh_avatar_200x200.jpg' alt='' />
                    </div>
                    <div className="col-xs-10 col-lg-10">
                        <h3>Dinesh Shenoy</h3>
                        <p>
                            I earned my PhD in Astrophysics at the University of Minnesota by developing custom Python scripts and modules to analyze mass-loss from hypergiant stars.  Now I use my analytical skills to create enterprise-level applications with a focus on just-in-time development.
                        </p>
                    </div>
                </div>
                <div className="row well">
                    <div className="col-xs-2 col-lg-2 text-center">
                        <img src='img/avatar.jpg' alt='' />
                    </div>
                    <div className="col-xs-10 col-lg-10">
                        <h3>DukJin Ahn</h3>
                        <p>
                            Wayward skillful less but less a much dear sobbed a sensitive pious more that
                            much frog through far and a so alas stridently that peered much yikes opposite
                            desolate moth fumed.
                        </p>
                    </div>
                </div>
                <div className="row well">
                    <div className="col-xs-2 col-lg-2 text-center">
                        <img src='img/avatar.jpg' alt='' />
                    </div>
                    <div className="col-xs-10 col-lg-10">
                        <h3>Eric Brichetto</h3>
                        <p>
                            Far more far far towards conductive courteous much so lion a armadillo famous
                            evilly beaver abidingly yikes unlike far disgracefully more distinctly far
                            readily assisted cast this less a.
                        </p>
                    </div>
                </div>
                <div className="row well">
                    <div className="col-xs-2 col-lg-2 text-center">
                        <img src='img/Lucas_avatar_200x200.jpg' alt='' />
                    </div>
                    <div className="col-xs-10 col-lg-10">
                        <h3>Xiaosiqi "Lucas" Yang</h3>
                        <p>
                            I recently graduated from University of Minnesota with a Master's Degree in Computer Science.
                            I was in the spatial Database research group, and did my graduation project on spatial data clustering and prediction in agricultural crop yield. I worked as TA before. <br/>
                            My previous work experience mostly lies in Web Developing (full statck) and Android Developing (in both academy and industry). I love programming and seeing people use tools I built.
                        </p>
                    </div>
                </div>
                <div className="row well">
                    <div className="col-xs-2 col-lg-2 text-center">
                        <img src='img/Bill_avatar_200x200.JPG' alt='' />
                    </div>
                    <div className="col-xs-10 col-lg-10">
                        <h3>Willam "Bill" Berg</h3>
                        <p>
                            Indefatigably or grotesque foolhardily barked less toward that naturally advantageously
                            less jeepers laughing crab dramatic clapped harmfully wombat consoled beyond that
                            pending oh.
                        </p>
                    </div>
                </div>
                <h3>Also featuring</h3>
                <div className="row well">
                    <div className="col-xs-2 col-lg-2 text-center">
                        <img src='img/anurag_image.jpg' alt='' />
                    </div>
                    <div className="col-xs-10 col-lg-10">
                        <h3>Anurag Bhandari</h3>
                        <p>
                            Jay among black insufferable hey athletic wherever underneath hey jeepers furrowed
                            and at well dear that and rigid by hello mongoose the this next especial inverse
                            saddled about.
                        </p>
                    </div>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = AboutPage;