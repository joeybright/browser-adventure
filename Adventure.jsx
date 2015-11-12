
// Adventure.jsx
var AdventureData = require('./data/adventures/mainAdventure.jsx')
var AdventureLog = require('./data/adventureLog.jsx')
var _ = require('underscore')

var Adventure = ({

  startAdventure: function() {
    // Starts the adventure!
        // Finds the first line (based off of the first line as
        // specified in the adventure)
    var firstLine = this.findLineById(AdventureData.info.startLine),
        text = firstLine.text,
        id = firstLine.id;
    // Updates the log with the text of the first line
    this.addLineToLog(text);
    return AdventureLog;
  },
  checkForUpdate: function(passedString) {
        //
    var foundUpdate,
        //
        line = this.findLineByString(passedString);
    // Checks to make sure the line is actually a thing
    if(line != undefined) {
      // Checks for any after text instructions
      if(line.afterText != undefined) {
        var afterTextLine = this.findLineById(line.afterText.goToLine);
        console.log(afterTextLine);
        if(afterTextLine != undefined) {
          return this.addLineToLog(afterTextLine.text);
        }
      }
    }
    //
  },
  addLineToLog: function(passedString) {
    AdventureLog.log.push({text: passedString});
    this.checkForUpdate(passedString);
    return AdventureLog;
  },
  findLineByString: function(passedString) {
    var foundLine = _.find(AdventureData.lines, function(line) {
          return line.text == passedString;
        });
    return foundLine;
  },
  findLineById: function(passedId) {
    var foundLine = _.find(AdventureData.lines, function(line) {
          return line.id == passedId;
        });
    return foundLine;
  }

});

module.exports = Adventure
