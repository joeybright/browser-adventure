
// components/Input.jsx
var React = require('react')

var Input = React.createClass({
  // Add event to bubble up to parent
  propTypes: {
    onAdd: React.PropTypes.func.isRequired,
  },
  handleChange: function(event) {
    // On change, run the onAdd function in props (accessed by App.jsx)
    var ENTER = 13;
    if( event.keyCode == ENTER ) {
      var string = event.target.value;
      this.props.onAdd(string);
    }
  },
  render: function () {
    return (
      <input type="text" ref="playerInput" className="input" onKeyDown={this.handleChange}>
      </input>
    )
  }
});

module.exports = Input
