import { count } from './../src/coincounter.js';

describe('count', () => {
  test('it should start counting from the inputted number', () => {
  const testInput = count(10);
  
  expect(testInput).toEqual(10,11,12,13,14,15);
  });
});
