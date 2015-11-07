
var mainAdventure = {
  "adventure": [
    {
				characterName: "User",
				// A unique ID for each character
				// The user is ALWAYS 00000
				characterID: 0,
				// Lines are different for the user. They're expected responses
				// OR options, not lines that are spoken/said
				lines: [
					{
						lineID: 0,
						lineText: ["im here", "who are you"],
						characterRespondingID: 1,
						expectedResponseLineIDs: [3, 4]
					},
					{
						lineID: 2,
						lineText: ["who are you", "where am i"],
						characterRespondingID: 1,
						expectedResponseLineIDs: [4, 5],
						// Modifies what the expected response is depending on variables
						// expectedResponseModifer: function() {
						// 	// If the user has already asked who the character was
						// 	if (storyVariables.userAskedWhoCharacterWas == true) {
						// 		// Go to this line instead of play the next line
						// 		setExpectedResponseLineIDTo(00011);
						// 	}
						// }
					},
					{
						lineID: 3,
						lineText: ["does it"],
						characterRespondingID: 1,
						expectedResponseLineIDs: [9]
					},
					{
						lineID: 4,
						lineText: ["END"],
						characterRespondingID: 1,
						expectedResponseLineIDs: [9]
					}
				]
			},
			{
				characterName: "Computer",
				characterID: 1,
				lines: [
					{
						lineID: 0,
						lineText: ["Hello?"],
						afterLineText: {
							goToLine: 1
							// ,
							// goToPreviousLine: true,
							// hasSaidHello: true
						},
						characterRespondingID: 0,
						expectedResponseLineIDs: []
					},
					{
						lineID: 1,
						lineText: ["Is anyone there?"],
						characterRespondingID: 0,
						expectedResponseLineIDs: [0]
					},
					{
						lineID: 3,
						lineText: ["Oh, thank you!! Somebody is finally responding"],
						characterRespondingID: 0,
						expectedResponseLineIDs: [2]
					},
					{
						lineID: 4,
						lineText: ["Who I am doesn't matter"],
						characterRespondingID: 0,
						expectedResponseLineIDs: [3]
					},
					{
						lineID: 5,
						lineText: ["I don't know."],
						afterLineText: {
							goToLine: 6
						},
						characterRespondingID: 0,
						expectedResponseLineIDs: [3]
					},
					{
						lineID: 6,
						lineText: ["All I know is that I've been here for a long time."],
						afterLineText: {
							goToLine: 7
						},
						charcterRespondingID: 0,
						expectedResponseLineIDs: [4]
					},
					{
						lineID: 7,
						lineText: ["END!"],
						charcterRespondingID: 0,
						expectedResponseLineIDs: [4]
					}
				]
			}
  ]
}

module.exports = mainAdventure;
