
// Adventure.jsx
var AdventureData = require('./data/adventures/mainAdventure.jsx')
var AdventureLog = require('./data/adventureLog.jsx')
var _ = require('underscore')

var Adventure = ({

  startAdventure: function() {
    // Starts the adventure!
    var firstLine = _.find(AdventureData.lines, function(line) {
      return line.id == AdventureData.info.startLine;
    });
    this.updateLog(firstLine.text);
    return AdventureLog;
  },
  updateLog: function(string) {
    AdventureLog.log.push({text: string});
    return AdventureLog;
  }

});

module.exports = Adventure
