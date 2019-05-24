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
      new Phrase("Obi wan kenobi"),
      new Phrase("Master Yoda"),
      new Phrase("Mace Windu"),
      new Phrase("Kit Fisto"),
      new Phrase("Plo Koon"),
      new Phrase("Agen Kolar"),
      new Phrase("Shaak Ti"),
      new Phrase("Luke Skywalker"),
      new Phrase("Qui Gon Ginn"),
      new Phrase("Ahsoka Tano")
    ];

    return phrases;
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */

  startGame() {
    $("#overlay").hide();
    $("#qwerty").slideDown(500);
    $("#scoreboard").show();
    this.activePhrase = this.getRandomPhrase();
    return this.activePhrase.addPhraseToDisplay();
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
  handleInteraction(char) {
    const $button = $(`.key:contains('${char}')`);
    if ($button.attr("disabled")) {
      return;
    }
    $button.attr("disabled", true);

    if (game.activePhrase.checkLetter(char)) {
      $button.toggleClass("chosen");
      game.activePhrase.showMatchedLetter(char);
      if (game.checkForWin()) {
        game.gameOver(true);
      }
    } else {
      $button.toggleClass("wrong");
      game.removeLife();
    }
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
    const $hideClass = $(".hide");
    let bool;

    if ($hideClass.length === 0) {
      bool = true;
    } else {
      bool = false;
    }
    return bool;
  }
  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    if (gameWon) {
      $("#overlay")
        .show()
        .removeClass()
        .addClass("win");

      $("#game-over-message").text(
        `You have succeed in your mission, to hunt more Jedi press the start game button`
      );
      game.resetGame();
    } else {
      $("#overlay")
        .show()
        .removeClass()
        .addClass("lose");
      $("#game-over-message").text(
        `The Jedi outsmarted you this time, to try again press the start game button `
      );
      game.resetGame();
    }
  }

  resetGame() {
    const $newScore = $(".tries img");
    $("ul li").remove();
    $(".key").attr("disabled", false);
    $(".key")
      .removeClass("chosen wrong")
      .addClass("key");
    $newScore.each((indexInArray, heart) => {
      $(heart).attr("src", "images/liveHeart.png");
    });
    this.missed = 0;
  }
}
