// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // generates an array of character codes for the standard alphabet
  const alpha = Array.from(Array(26)).map((element, index) => index + 65);

  // generates an array of the standard alphabet from the array of character codes
  const standardAlpha = alpha.map((code) =>
    // convers each character to lower case
    String.fromCharCode(code).toLowerCase()
  );

  function checkIfUnique(alphabet) {
    // creates an array to store unique characters
    const charArray = [];

    // iterates through the alphabet
    for (let character in alphabet) {
      // if the current character is already in the charArray it is skipped
      if (!charArray.includes(alphabet[character])) {
        // pushes the character at the current index to the charArray
        charArray.push(alphabet[character]);
      }
    }
    // returns the ternary sta
    return charArray.length != 26 ? false : true;
  }

  function substitution(input, alphabet, encode = true) {
    // checks if there is an alphabet, it's length is exactly 26,
    // and if it passes the unique check and returns false if either check fails
    if (!alphabet || alphabet.length != 26 || !checkIfUnique(alphabet)) {
      return false;
    }
    // converts alphabet to lower case if necessary
    const substAlpha = alphabet.toLowerCase();

    // converts input to lower case to ignore input case
    const inputMsg = input.toLowerCase();

    // declares the string to store the output message
    let outputMsg = "";

    // iterates through the input message
    for (let character of inputMsg) {
      // adds a space to the output message if the current character is a space
      if (character === " ") {
        outputMsg += " ";
      } else if (!encode) {
        // *********   decoding   *********

        // gets the index of where current character is in the substitution alphabet
        let index = substAlpha.indexOf(character);

        // uses the index above to get the character at the same index
        outputMsg += standardAlpha[index];
      } else {
        // *********   encoding   *********
        // gets the index of where current character is in the standard alphabet
        let index = standardAlpha.indexOf(character);

        // uses the index above to get the character at the same index
        outputMsg += substAlpha[index];
      }
    }
    // returns the completed encoded or decoded message
    return outputMsg;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
