// Write your tests here!
const { expect } = require('chai');
const { substitution } = require('../src/substitution');

describe('substitutionModule', () => {
  describe('substitution', () => {
    it('should encode the input string using the provided alphabet', () => {
      const input = 'hello';
      const alphabet = 'zyxwvutsrqponmlkjihgfedcba';
      const expectedOutput = 'svool';

      const result = substitution(input, alphabet, true);

      expect(result).to.equal(expectedOutput);
    });

    it('should decode the input string using the provided alphabet', () => {
      const input = 'svool';
      const alphabet = 'zyxwvutsrqponmlkjihgfedcba';
      const expectedOutput = 'hello';

      const result = substitution(input, alphabet, false);

      expect(result).to.equal(expectedOutput);
    });

    it('should return false if the alphabet is missing or invalid', () => {
      const input = 'hello';
      const alphabet = 'zyxwvutsrqponmlkjihgfedcb'; // Invalid alphabet

      const result = substitution(input, alphabet);

      expect(result).to.be.false;
    });

    it('should handle spaces correctly during encoding and decoding', () => {
      const input = 'hello world';
      const alphabet = 'zyxwvutsrqponmlkjihgfedcba';
      const expectedOutput = 'svool dliow';

      const result = substitution(input, alphabet, true);

      expect(result).to.equal(expectedOutput);
    });

    // Add more test cases as needed
  });
});
