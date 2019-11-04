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

// display the word on screen with _ _ _ _ _
// flag =
// chosenWordDisplay = chosenWord[flag];
