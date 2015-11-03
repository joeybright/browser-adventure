
// entry.jsx
var React = require('react')
var Adventure = require ('./components/Adventure.jsx')
var data = require('./data/adventures/main-adventure.jsx')

React.render(
  <Adventure data={data} />,
  document.getElementById('react')
);
