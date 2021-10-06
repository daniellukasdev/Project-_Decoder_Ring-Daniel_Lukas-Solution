// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// create an object of letters and a corresponding code as the value for each

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  // for A-I
  // for J-Z (col-1) + ((row-1) * 5) + 98 = charCode
  // D  A  N  I  E  L
  // 41 11 33 42 51 13
  
  // D = (4-1) + ((1-1) * 5)
  // D =  (3)  +  ((0)) * 5)
  // D = 3 + 97
  // D = charCode(100)
  // console.log(String.fromCharCode())

  // creates an array (of length 26) consisting of numbers (0-25)
  const alphaCodes = Array.from(Array(26)).map((element, index) => {
    //console.log(element)
    return index + 65
  });
  console.log(alphaCodes);
  // creates an array of letters in alphabetical order from the array of charCodes
  const alphabet = alphaCodes.map((code) => {
    if (code === 73 || code === 74) {
      return "(I/J)";
    } else {
      return String.fromCharCode(code);
    }
  });
  console.log(alphabet);

    
  function polybius(input, encode = true) {
    // your solution code here
    
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };


// const alpha = Array.from(Array(26)).map((element, index) => index + 65);
// const alphabet = alpha.map((code) => String.fromCharCode(code));
// console.log(alphabet);