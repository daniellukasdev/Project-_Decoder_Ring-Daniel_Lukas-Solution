// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // declares an array of codes for the polyius square
  let squareCodes = [
    "11","21","31","41","51",
    "12","22","32","42","42",
    "52","13","23","33","43",
    "53","14","24","34","44",
    "54","15","25","35","45","55",
  ];
  // generates an array of character codes for the standard alphabet
  const alpha = Array.from(Array(26)).map((element, index) => index + 65);
  // generates an array of the standard alphabet from the array of character codes
  const squareAlphas = alpha.map((code) =>
    // convers each character to lower case
    String.fromCharCode(code).toLowerCase()
  );

  function polybius(input, encode = true) {
    // creates an empty string to store the output message
    let result = "";
    //   **********   decoding   **********

    // this code runs if encode is set to false
    if (!encode) {
      // creates an array from the input, separating it at all spaces
      let inputArr = input.split(" ");

      // joins that array with two spaces in bewtween each index of the array
      let inputDoubleSpaced = inputArr.join("  ");

      // checks if the number of number characters is even since spaces are now even
      // returns false if number of number characters is odd
      if (inputDoubleSpaced.length % 2 != 0) return false;

      // creates an object by reducing through the array of polybius codes
      let alphaObj = squareCodes.reduce((acc, element, index) => {
        // with each iteration, it adds a new key value pair
        // if the current code is 42, the value of key 42 is specified
        // the key's value is overwritten on the next iteration
        if (element === "42") {
          acc[element] = "(i/j)";
          return acc;
        }
        // each key is the current code
        // each value is the alphabetic character at the given index
        acc[element] = squareAlphas[index];
        return acc;
      }, {});
      // stores the length of the input with double spaces
      const charCount = inputDoubleSpaced.length;

      // iterates through an array of with a length equal to half the length of charCount
      // using an array constructor
      // the result is stored in the inputPair array
      const inputPairs = Array.from(Array(charCount / 2)).map(
        (element, index) => {
          // if the current character is a space, a space is added to the array
          if (inputDoubleSpaced[index * 2] === " ") return " ";

          // each iteration adds the first two numbers, or the numbers
          // starting after the last number from the prev iteration to the array
          return `${inputDoubleSpaced[index * 2]}${
            inputDoubleSpaced[index * 2 + 1]
          }`;
        }
      );

      // iterates over the array of number pairs
      for (let pair of inputPairs) {
        // if the current element is a space, adds a space to the decoded message
        if (pair === " ") {
          result += " ";
        } else {
          // adds the value of the alphaObj key with name equal to current number pair
          result += alphaObj[pair];
        }
      }
      // returns the output message
      return result;
    }

    //   **********   encoding   **********

    // iterates over the alphabet array and stores the results in an object
    // each iteration creates a key value pair
    let alphabet = squareAlphas.reduce((acc, element, index) => {
      // each key is the current element
      // and each value is the code from the codes array at the given index
      acc[element] = squareCodes[index];
      return acc;
    }, {});
    // stores the input as lower case
    let encodedMsg = input.toLowerCase();
    // iterates through the input
    for (let character of encodedMsg) {
      // adds a space to the result if the current character is a space
      if (character === " ") {
        result += " ";
      } else {
        // adds the alphabetic character to the result from the key of the character
        result += alphabet[character];
      }
    }
    // returns the endoded message
    return result;
  }

  return {
    polybius,
  };
})();
module.exports = { polybius: polybiusModule.polybius };
