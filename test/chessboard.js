const chai = require('chai');
const chessboard = require('../chessboard');
const expect = chai.expect;

describe('chessboard.js functionality', () => {
  it('should return undefined with input of less than 2 rows', () => {
    expect(chessboard(1)).to.equal(undefined);
  });

  it('should return a 8x8 chessboard with input of 8 rows', () => {
    const eightByEightBoard = '# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n';
    expect(chessboard(8)).to.equal(eightByEightBoard);
  });
});

