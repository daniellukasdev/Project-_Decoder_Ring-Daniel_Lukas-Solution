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

  let squareCodes = [
    "11","21","31","41","51",
    "12","22","32","42","42",
    "52","13","23","33","43",
    "53","14","24","34","44",
    "54","15","25","35","45","55",
  ];

  // creates an array (of length 26) consisting of numbers (0-25)
  const alphaCodes = Array.from(Array(26)).map((element, index) => {
    //console.log(element)
    return index + 65
  });
  console.log("alphaCodes: ", alphaCodes);
  // creates an array of letters in alphabetical order from the array of charCodes
  const alphabet = alphaCodes.map((code) => {
    if (code === 73 || code === 74) {
      return "(I/J)";
    } else {
      return String.fromCharCode(code);
    }
  });
  console.log("alphabet: ", alphabet);

  const polybiusSquare = Array.from(Array(26)).map((element, index) => {
    // 
    if (index === 0) {
      return index + 11;
    } else {
      return index += ((index * 2) - 1)
    }
  })

  console.log(polybiusSquare)
    
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