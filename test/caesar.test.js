// Write your tests here!
const { expect } = require('chai');
const caesarModule = require("../src/caesar"); 

describe('caesarModule', () => {
  describe('caesar', () => {
    it('should encode the input string with the specified shift value', () => {
      const input = 'hello';
      const shift = 3;
      const expectedOutput = 'khoor';

      const result = caesarModule.caesar(input, shift, true);

      expect(result).to.equal(expectedOutput);
    });

    it('should decode the input string with the specified shift value', () => {
      const input = 'khoor';
      const shift = 3;
      const expectedOutput = 'hello';

      const result = caesarModule.caesar(input, shift, false);

      expect(result).to.equal(expectedOutput);
    });

    it('should return false if the shift value is invalid', () => {
      const input = 'hello';
      const shift = 0;

      const result = caesarModule.caesar(input, shift);

      expect(result).to.be.false;
    });

 
  });
});
