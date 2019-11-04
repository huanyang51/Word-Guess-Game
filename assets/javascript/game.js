var dictionary = [
  "Skywalker",
  "Jedi",
  "Force",
  "Galaxy",
  "Alien",
  "lightsaber",
  "Resistence",
  "Chewbacca",
  "Clone",
  "Empire",
  "Sith"
];
var lives = 12;
var wins = 0;

// choose a random word from dictionary
chosenWord = dictionary[Math.floor(Math.random() * dictionary.length)];
console.log(chosenWord);

// split word into separate uppercase letters
chosenWordUpper = chosenWord.toUpperCase();
console.log(chosenWordUpper);
chosenWordUpperSplit = chosenWordUpper.split("");
console.log(chosenWordUpperSplit);

//   // display the word on screen with _ _ _ _ _
var flag = Array(chosenWord.length).fill("_");
console.log(flag.join(" "));

//set up an array to store letters entered by player
var guessedLetters = [];

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
  console.log(event.key);
  var pressedKey = event.key.toUpperCase();
  console.log(pressedKey);
  // if pressed key is a valid letter, the game start
  if (validGuess.indexOf(pressedKey) !== -1) {
    var guessTimes = guessedLetters.push(pressedKey);
    console.log(guessedLetters);
    console.log(guessedLetters.join(" "));
  }
};
