// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    // checks if there is no shift value given, if it's 0, less than -25, or greater than 25
    // returns false if either are true
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    // converts input to lower case
    input = input.toLocaleLowerCase();

    // if decoding, turn the shift value negative or possitive to reverse
    if (!encode) shift *= -1;

    // if the shift is negative, it adds 26 to stay in range
    if (shift < 0) shift += 26;

    // creates an empty string to store the output message
    let output = "";

    for (let character of input) {
      // shifts the letters to the left or right
      if (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) {
        // stores the new code after getting it by subtracting 97 from the current code 
        // to work with numbers ranging from 0 to 25
        // adding the shift, getting the remainder from dividing by 26 using the mod operator
        // then adds 97 to get back to the correct character code range
        let newCode = ((character.charCodeAt(0) - 97 + shift) % 26) + 97;

        // adds the character with the given charCode to the output message
        output += String.fromCharCode(newCode);
      } else {
        // in all other cases, the current character should be added to the output message
        output += character;
      }
    }
    // returns the output message
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
