// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
function polybius(input, encode = true) {
  let output = "";
  const polybiusTable = {
    "a": "11",
    "b": "21",
    "c": "31",
    "d": "41",
    "e": "51",
    "f": "12",
    "g": "22",
    "h": "32",
    "i/j": "42",
    "k": "52",
    "l": "13",
    "m": "23",
    "n": "33",
    "o": "43",
    "p": "53",
    "q": "14",
    "r": "24",
    "s": "34",
    "t": "44",
    "u": "54",
    "v": "15",
    "w": "25",
    "x": "35",
    "y": "45",
    "z": "55",
  };

  if (!encode) {
    // check if input has an odd number of digits
    if (input.replace(/ /g, "").length % 2 !== 0) {
      return false;
    }

    let i = 0;
    while (i < input.length) {
      if (input[i] === " ") {
        output += " ";
        i++;
      } else {
        const code = input.slice(i, i + 2);
        for (let key in polybiusTable) {
          if (polybiusTable[key] === code) {
            output += key;
            break;
          }
        }
        i += 2;
      }
    }
  } else {
    for (let i = 0; i < input.length; i++) {
      const char = input[i].toLowerCase();
      if (char === "i" || char === "j") {
        output += "42";
      } else if (polybiusTable.hasOwnProperty(char)) {
        output += polybiusTable[char];
      } else if (char === " ") {
        output += " ";
      } else {
        output += char;
      }
    }
  }
  return output;
}






  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

