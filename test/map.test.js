_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps through an array\'s indexes', () => {
    const arr = ['a', 'b', 'c'];
    const mappedArr = _.map(arr, (item, index) => index);
    expect(mappedArr).toEqual([0, 1, 2]);
  });
});