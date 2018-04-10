const chai = require('chai');
const map = require('../map');
const expect = chai.expect;

describe('map.js functionality', () => {
  it('should return an array', () => {
    const mappedArray = map([], () => {});
    expect(Array.isArray(mappedArray)).to.equal(true);
  });

  it('should return a new array, not the original array', () => {
    const originalArray = []
    const mappedArray = map(originalArray, () => {});
    expect(mappedArray).to.not.equal(originalArray);
  });

  it('should run the callback function array.length times', () => {
    let callbackCount = 0;
    map([1, 2, 3], () => {
      callbackCount++
    })
    expect(callbackCount).to.equal(3);
  });

  it('should accept an optional this object', () => {
    const obj = { 
      multiplier: 5 
    }
    
    // cannot use arrow function here, since 'this' value gets binded to original context
    const mappedArray = map([1, 2, 3], function(num) {
      return num * this.multiplier
    }, obj)
    expect(mappedArray).to.eql([5, 10, 15]);
  });

  it('should return a mapped array', () => {
    const mappedArray = map([1, 2, 3], element => element * 2);
    expect(mappedArray).to.eql([2, 4, 6]);
  });

  it('should skip unassigned indexes', () => {
    const arrayWithEmptyIndex = [, 2];
    const mappedArray = map(arrayWithEmptyIndex, element => element * 2);
    expect(0 in mappedArray).to.equal(false);
  });
});