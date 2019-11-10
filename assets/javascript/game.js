var dictionary = [
  "Marvel",
  "Thor",
  "Loki",
  "Avengers",
  "Groot",
  "Nebula",
  "Gamora",
  "Mantis",
  "Thanos",
  "Strange",
  "Wolverine",
  "Hulk",
  "Ultron",
  "Vision",
  "Deadpool",
  "Daredevil",
  "Punisher",
  "Venom"
];
var lives = 12;
var wins = 0;
var chosenWord;
var flag;
//set up an array to store letters entered by player
var guessedLetters;
var htmlLettersGuessed;
// update lives and wins on screen
winNum = document.getElementById("winsNumber");
winNum.innerHTML = wins;

livesNum = document.getElementById("livesNumber");
livesNum.innerHTML = lives;

function start() {
  // choose a random word from dictionary
  chosenWord = dictionary[Math.floor(Math.random() * dictionary.length)];
  // split word into separate uppercase letters
  chosenWordUpper = chosenWord.toUpperCase();
  chosenWordUpperSplit = chosenWordUpper.split("");

  // display the word on screen with _ _ _ _ _
  flag = Array(chosenWord.length).fill("_");
  htmlCurrentWord = document.getElementById("currentWord");
  htmlCurrentWord.innerHTML = flag.join(" ");
  lives = 12;
  guessedLetters = [];
  htmlLettersGuessed = guessedLetters.join(" ");
  document.querySelector("#letterGuessed").innerHTML = htmlLettersGuessed;
}
start();
// store all possible letters in an array
var validGuess = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
// when player press any key, store pressed key
document.onkeydown = function(event) {
  var pressedKey = event.key.toUpperCase();
  var idx = chosenWordUpperSplit.indexOf(pressedKey);
  // check if pressed key is a valid letter
  if (validGuess.indexOf(pressedKey) !== -1) {
    if (guessedLetters.indexOf(pressedKey) === -1 && idx === -1) {
      guessedLetters.push(pressedKey);
      htmlLettersGuessed = guessedLetters.join(" ");
      document.querySelector("#letterGuessed").innerHTML = htmlLettersGuessed;
      console.log(htmlLettersGuessed);
      lives--;
      livesNum.innerHTML = lives;
    }
    if (idx !== -1) {
      var indices = [];
      while (idx !== -1) {
        indices.push(idx);
        flag[idx] = pressedKey;
        idx = chosenWordUpperSplit.indexOf(pressedKey, idx + 1);
      }
      htmlCurrentWord.innerHTML = flag.join(" ");
    }
  }
  if (flag.indexOf("_") === -1) {
    htmlCurrentWord.innerHTML = flag.join(" ");
    wins++;
    winNum.innerHTML = wins;
    // choose another word
    // clear letter already guessed
    // set lives to 12
    start();
  }
  if (lives === 0) {
    start();
  }
};
