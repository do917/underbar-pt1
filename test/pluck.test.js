const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array of titles, given an array of book objects', () => {
    const book = [
      { title: 'Harry Potter', author: 'J.K. Rowling'},
      { title: '1984', author: 'George Orwell'}
    ];

    const result = _.pluck(book, 'title');
    expect(result).toEqual(['Harry Potter', '1984']);
  });
});