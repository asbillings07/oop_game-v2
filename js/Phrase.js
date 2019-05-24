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
        $("#phrase ul").append(`<li class='hide letter'>${letter}</li>`);
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
  showMatchedLetter(letterMatch) {
    const $listLetters = $("#phrase li");

    $listLetters.each((index, letter) => {
      if (letter.textContent === letterMatch) {
        $(letter)
          .removeClass("hide letter")
          .addClass("show");
      }
    });
  }
}
