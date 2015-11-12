
var mainAdventure = {
  "info": {
    "startLine": 0
  },
  "characters": [
    {
      name: "User",
      id: 0
    },
    {
      name: "Computer",
      id: 1
    }
  ],
  "lines": [
    {
      owner: 0,
      id: 0,
      text: "im here",
      afterText: {
          goToLine: 5
      }
    },
    {
      owner: 0,
      id: 1,
      text: "who are you?"
    },
    {
      owner: 1,
      id: 2,
      text: ["Oh, thank you!! Somebody is finally responding"],
      characterRespondingID: 0,
      expectedResponseLineIDs: [2]
    },
    {
      owner: 1,
      id: 3,
      text: ["Who I am doesn't matter"],
      characterRespondingID: 0,
      expectedResponseLineIDs: [3]
    },
    {
      owner: 0,
      id: 4,
      text: ["Hello?"],
      characterRespondingID: 0,
      expectedResponseLineIDs: [0],
      afterText: {
        goToLine: 0
      }
    },
    {
      owner: 0,
      id: 5,
      text: ["Hello?"],
      characterRespondingID: 0,
      expectedResponseLineIDs: [0],
      afterText: {
        goToLine: 1
      }
    }
  ]
}

module.exports = mainAdventure;
