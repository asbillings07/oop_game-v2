/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const $startButton = $("#btn__start");
const $resetButton = $("#btn__reset");
const $keys = $(".key");
const pressedKeys = [];

$("#qwerty").hide();
$("#scoreboard").hide();

$($resetButton).hide();
$startButton.on("click", () => {
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});

$keys.on("click", e => {
  game.handleInteraction(e.target.textContent);
});
$(document).on("keyup", e => {
  game.handleInteraction(e.key);
});

$resetButton.on("click", () => {
  game.resetGame();
});
