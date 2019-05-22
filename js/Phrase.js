/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js
 **/

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */

  addPhraseToDisplay() {
    const letters = [...this.phrase];
    letters.forEach(letter => {
      if (letter !== " ") {
        $("#phrase ul").append(
          `<li class="hide letter ${letter} ">${letter}</li>`
        );
      }
      if (letter === " ") {
        $("#phrase ul").append(`<li class="space">`);
      }
    });
  }
  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */

  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    }
    return false;
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    const listLetters = $("#phrase ul");

    listLetters.forEach(listLetter => {
      if (listLetter === letter.toLowerCase()) {
        $(listLetter).toggleClass("show letter");
      }
    });

    // showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection.
    // To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and
    // replace each selected element's hide CSS class with the show CSS class.
  }
}
