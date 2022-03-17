const { queryString } = require('./queryString');
describe('Object to query string', () => {
  it('should create a valid query string when an object is provide', () => {
    const obj = {
      name: 'Gabriel',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Gabriel&profession=developer');
  });
});
