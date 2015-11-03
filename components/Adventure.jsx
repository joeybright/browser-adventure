
// components/Adventure.jsx
var React = require('react')

var Adventure = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.data.title}
      </div>
    )
  }
});

module.exports = Adventure
