
// components/Adventure.jsx
var React = require('react')
var Input = require('./Input.jsx')
var Log = require('./Log.jsx')
var Adventure = require('../Adventure.jsx')

var App = React.createClass({
  // Initial state is empty
  handleChange: function(string) {
    // Gets the new state by updating the adventure
    var newState = Adventure.update(string);
    // The adventures state is set based on the object returned from updating the Adventure
    this.setState(newState);
  },
  render: function () {
    return (
      <div className="adventure">
        <Log data={this.state} />
        <Input onAdd={this.handleChange} />
      </div>
    )
  }
});

module.exports = App
