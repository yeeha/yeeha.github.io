/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var React = require('react');
var PageActions = require('../../actions/PageActions');
var App = require('../Application');
var InputGroup = require('../InputGroup');

var HomePage = React.createClass({

  statics: {
    layout: App
  },

  componentWillMount() {
    PageActions.set({title: 'Yeeha | Taipei Tech Student Dashboard'});
  },

  render() {

    /* jshint ignore:start */
    var header = (
      <div className="jumbotron">
        <div className="container text-center">
          <h1>Yeeha</h1>
          <p>Taipei Tech Student Dashboard</p>
          <InputGroup textValue="Type in your student ID" btnValue="Go!" to="dashboard" />
        </div>
      </div>
    );

    var container = (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3>Course Schedule</h3>
            <dl>
              <dt><a href="https://facebook.github.io/react/">React</a></dt>
              <dd>A JavaScript library for building user interfaces, developed by Facebook</dd>
              <dt><a href="https://github.com/flatiron/director">Director</a></dt>
              <dd>A tiny and isomorphic URL router for JavaScript</dd>
              <dt><a href="http://getbootstrap.com/">Bootstrap</a></dt>
              <dd>CSS framework for developing responsive, mobile first interfaces</dd>
            </dl>
          </div>
          <div className="col-sm-4">
            <h3>Course Credit Dashboard</h3>
            <dl>
              <dt><a href="http://gulpjs.com">Gulp</a></dt>
              <dd>JavaScript streaming build system and task automation</dd>
              <dt><a href="http://webpack.github.io/">Webpack</a></dt>
              <dd>Compiles front-end source code into modules / bundles</dd>
              <dt><a href="http://www.browsersync.io/">BrowserSync</a></dt>
              <dd>A lightweight HTTP server for development</dd>
            </dl>
          </div>
          <div className="col-sm-4">
            <h3>Fork me on GitHub</h3>
            <p><a href="https://github.com/yeeha/yeeha">github.com/yeeha/yeeha</a></p>
          </div>
        </div>
      </div>
    );
    /* jshint ignore:end */

    return (
      /* jshint ignore:start */
      <div>
      {header}
      {container}
      </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = HomePage;
