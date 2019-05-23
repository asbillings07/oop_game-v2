/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */

  createPhrases() {
    const phrases = [
      new Phrase("Life Is Like a Box of Chocolates"),
      new Phrase("There is nothing to it but to do it"),
      new Phrase("Life will find a way"),
      new Phrase("If at first you don't succeed try again"),
      new Phrase("You can do anything you put your mind to")
    ];

    return phrases;
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */

  startGame() {
    $("#overlay").hide();
    this.activePhrase = this.getRandomPhrase();
    return this.activePhrase.addPhraseToDisplay();

    // The `startGame()` method hides the start screen overlay (the `div` element with an `id` of
    // `overlay`), calls the `getRandomPhrase()` method to select a Phrase object from the Game
    // object’s array of phrases, and then adds the phrase to the gameboard by calling the
    // `addPhraseToDisplay()` method (which is a method on the Phrase class) on the selected Phrase
    // object. The selected phrase should be stored in the Game’s `activePhrase` property, so it can be
    // easily accessed throughout the game.
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */

  getRandomPhrase() {
    const random = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[random];
    return randomPhrase;
  }
  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    /*

    Build out the `handleInteraction()` method in the Game class making use of the support
methods that you created in step 9. This method controls most of the game logic. It checks to
see if the onscreen keyboard button clicked by the player matches a letter in the phrase, and
then directs the game based on a correct or incorrect guess. This method should:

● Disable the selected letter’s onscreen keyboard button.

● If the phrase does not include the guessed letter, add the `wrong` CSS class to the
selected letter's keyboard button and call the `removeLife()` method.

● If the phrase includes the guessed letter, add the `chosen` CSS class to the selected
letter's keyboard button, call the `showMatchedLetter()` method on the phrase, and then
call the `checkForWin()` method. If the player has won the game, also call the
`gameOver()` method.

*/
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const $score = $(".tries img");

    $($score[this.missed]).attr("src", "images/lostHeart.png");
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/

  checkForWin() {
    const $letters = $("#phrase li");
    let bool;

    $letters.each((index, letter) => {
      if ($(letter).hasClass("hide letter") && !$(letter).hasClass("space")) {
        bool = false;
      } else {
        bool = true;
      }
    });
    return bool;

    //     `checkForWin()`: This method checks to see if the player has revealed all of the
    // letters in the active phrase.
  }
  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    $("#overlay").show();
    if (gameWon) {
      $("#overlay").toggleClass("win");
      $("#game-over-message").text(
        `Congrats, You've won the game! to play again press the start button`
      );
    } else {
      $("#game-over-message").text(
        `You lost, you've ran out of lives. To play again, press the start button `
      );
      $("#overlay").toggleClass("lose");
    }
  }
}
