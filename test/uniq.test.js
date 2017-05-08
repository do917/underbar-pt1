const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups a list of strings', () => {
    const strings = ['apple', 'apple', 'banana'];
    expect(_.uniq(strings)).toEqual(['apple', 'banana']);
  });
});