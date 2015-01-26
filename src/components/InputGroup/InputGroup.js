'use strict';

require('./InputGroup.less')

var React = require('react');
var RouteActions = require('../../actions/RouteActions');

var InputGroup = React.createClass({

  handleClick(e) {
    e.preventDefault();
    RouteActions.setRoute(this.props.to);
  },

  render() {

    /* jshint ignore:start */
    return (
      <div className="col-lg-4 col-lg-offset-4">
        <div className="input-group">
          <input type="text" className="form-control" placeholder={this.props.textValue} />
          <span className="input-group-btn">
            <button className="btn btn-default" onClick={this.handleClick} type="button">{this.props.btnValue}</button>
          </span>
        </div>
      </div>
    );
    /* jshint ignore:end */
  }
});


module.exports = InputGroup;
