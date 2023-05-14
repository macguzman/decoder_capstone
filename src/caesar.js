// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

 function caesar(input, shift, encode = true) {
  if (!shift || shift < -25 || shift > 25 || shift === 0) {
    return false;
  }

  const normalAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const inputArray = input.toLowerCase().split("");

  const outputArray = inputArray.map((char) => {
    if (!normalAlphabet.includes(char)) {
      return char;
    }

    const index = normalAlphabet.indexOf(char);
    let shiftedIndex = encode ? (index + shift) : (index - shift);
    if (shiftedIndex < 0) {
      shiftedIndex += normalAlphabet.length;
    } else if (shiftedIndex >= normalAlphabet.length) {
      shiftedIndex -= normalAlphabet.length;
    }
    const shiftedChar = normalAlphabet[shiftedIndex];

    return shiftedChar;
  });

  return outputArray.join("");
}





  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
