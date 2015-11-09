
// components/Adventure.jsx
var React = require('react')
var Input = require('./Input.jsx')
var Log = require('./Log.jsx')
var Adventure = require('../Adventure.jsx')
// styles
var reset = require('../styles/reset.scss')
var css = require('../styles/error.scss')

var App = React.createClass({
  // Initial state is empty
  getInitialState: function() {
    // Starts the adventure!
    return Adventure.startAdventure();
  },
  updateAdventure: function(string) {
    // Gets the new state by updating the adventure
    var newState = Adventure.updateLog(string);
    // The adventures state is set based on the object returned from updating the Adventure
    return this.setState(newState);
  },
  focusInput: function(event) {
    // Focus the input on click of the app
    return this.setState({focus: true});
  },
  render: function () {
    return (
      <div className="text-adventure" onClick={this.focusInput}>
        <Log data={this.state} />
        <Input onAdd={this.updateAdventure} focus={this.state.focus} />
      </div>
    )
  }
});

module.exports = App
