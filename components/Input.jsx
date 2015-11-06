
// components/Input.jsx
var React = require('react')

var Input = React.createClass({
  // Add event to bubble up to parent
  propTypes: {
    onAdd: React.PropTypes.func.isRequired
  },
  // Run when the component recieves new props
  componentWillReceiveProps: function(props) {
    // If focus is true
    if(props.focus) {
      // Get the DOM node of the component and focus it
      this.getDOMNode().focus();
    }
  },
  handleChange: function(event) {
    // On enter button pressed
    var ENTER = 13;
    // Run the onAdd function in props (accessed by App.jsx)
    if(event.keyCode == ENTER) {
      // Get the string in the input
      var string = event.target.value;
      // Bubble up the string using the onAdd event
      this.props.onAdd(string);
      // Reset the value in the input field
      return event.target.value = "";
    }
  },
  render: function () {
    return (
      <input type="text" ref="playerInput" className="input" onKeyDown={this.handleChange} autofocus>
      </input>
    )
  }
});

module.exports = Input
