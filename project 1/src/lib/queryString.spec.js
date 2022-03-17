const { queryString } = require('./queryString');
describe('Object to query string', () => {
  it('should create a valid query string when an object is provide', () => {
    const obj = {
      name: 'Gabriel',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Gabriel&profession=developer');
  });

  it('should create a valid query string when an array is provide', () => {
    const obj = {
      name: 'Gabriel',
      abilitites: ['JS', 'VUE', 'TDD'],
    };
    console.log(queryString(obj));

    expect(queryString(obj)).toBe('name=Gabriel&abilitites=JS,VUE,TDD');
  });

  it('should throw an error when a object is passed as value', () => {
    const obj = {
      name: 'Gabriel',
      abilitites: {
        first: 'JS',
        second: 'VUE',
      },
    };
    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});
