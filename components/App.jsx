
// components/Adventure.jsx
var React = require('react')
var Input = require('./Input.jsx')
var Log = require('./Log.jsx')
var Adventure = require('../Adventure.jsx')

var App = React.createClass({
  // Initial state is empty
  getInitialState: function() {
    return Adventure.getLog();
  },
  updateAdventure: function(string) {
    // Gets the new state by updating the adventure
    var newState = Adventure.updateLog(string);
    // The adventures state is set based on the object returned from updating the Adventure
    this.setState(newState);
  },
  render: function () {
    return (
      <div className="adventure">
        <Log data={this.state} />
        <Input onAdd={this.updateAdventure} />
      </div>
    )
  }
});

module.exports = App
