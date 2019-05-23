/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

$("#btn__reset").on("click", () => {
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});

$("#qwerty").on("click", () => {
  game.checkForWin();
});

/**
  * Update the app.js file.
Create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons:
Add a click event listener to the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.
Add click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls the handleInteraction() method on the Game object. Event delegation can also be used in order to avoid having to add an event listener to each individual keyboard button. Clicking the space between and around the onscreen keyboard buttons should not result in the handleInteraction() method being called.
Resetting the gameboard between games.
After a game is completed, the gameboard needs to be reset so that clicking the "Start Game" button will successfully load a new game.
Remove all li elements from the Phrase ul element.
Enable all of the onscreen keyboard buttons and update each to use the key CSS class, and not use the chosen or wrong CSS classes.
Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the liveHeart.png image.
  * 
  */
