
// Adventure.jsx
var AdventureData = require('./data/adventures/mainAdventure.jsx')
var AdventureLog = require('./data/adventureLog.jsx')

var Adventure = ({

  getLog: function() {
    return AdventureLog;
  },
  updateLog: function(string) {
    AdventureLog.log.push({text: string});
    return AdventureLog;
  }

});

module.exports = Adventure
