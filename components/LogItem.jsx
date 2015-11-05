
// components/LogItem.jsx
var React = require('react')

var LogItem = React.createClass({
  // No initial state or props
  render: function () {
    // Currently just displays all of the data passed to it
    return (
      <div className="adventure-log-item">
        {this.props.logText}
      </div>
    )
  }
});

module.exports = LogItem
