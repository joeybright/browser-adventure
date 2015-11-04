
// entry.jsx
var React = require('react')
var App = require ('./components/App.jsx')
var data = require('./data/adventures/main-adventure.jsx')

React.render(
  <App data={data} />,
  document.getElementById('react')
);
