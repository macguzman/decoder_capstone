// Write your tests here!
const { expect } = require('chai');
const { polybius } = require('../src/polybius');

describe('polybiusModule', () => {
  describe('polybius', () => {
    it('should encode the input string using the Polybius square', () => {
      const input = 'hello';
      const expectedOutput = '3251131343';

      const result = polybius(input, true);

      expect(result).to.equal(expectedOutput);
    });

    it('should decode the input string using the Polybius square', () => {
      const input = '3251131343';
      const expectedOutput = 'hello';

      const result = polybius(input, false);

      expect(result).to.equal(expectedOutput);
    });

  });
});
