
// components/Log.jsx
var React = require('react')
var LogItem = require('./LogItem.jsx')

var Log = React.createClass({
  // No initial state or props
  render: function () {
    // Currently just displays all of the data passed to it
    var logNodes = this.props.data.log.map(function (data) {
      console.log(data);
      return (
        <LogItem logText={data.text} />
      );
    });
    return (
      <div className="adventure-log">
        {logNodes}
      </div>
    )
  }
});

module.exports = Log
