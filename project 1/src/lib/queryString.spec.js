const { queryString, parse } = require('./queryString');
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

describe('Query string to object', () => {
  it('should convert query string to object ', () => {
    const qs = 'name=Gabriel&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Gabriel',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value ', () => {
    const qs = 'name=Gabriel';

    expect(parse(qs)).toEqual({
      name: 'Gabriel',
    });
  });

  it('should convert a query string to an object taking care of comma separeted values', () => {
    const qs = 'name=Gabriel&abilitites=JS,VUE,TDD';

    expect(parse(qs)).toEqual({
      name: 'Gabriel',
      abilitites: ['JS', 'VUE', 'TDD'],
    });
  });
});
