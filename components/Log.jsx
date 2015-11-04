
// components/Log.jsx
var React = require('react')

var Log = React.createClass({
  // No initial state or props
  render: function () {
    // Currently just displays all of the data passed to it
    return (
      <div className="adventure-log">
        {this.props.data}
      </div>
    )
  }
});

module.exports = Log
