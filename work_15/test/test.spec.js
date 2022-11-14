const assert = require('assert');
const Calculator = require('../func');

describe('Calculator Tests', () => {
  beforeEach(() => {
    calculator = new Calculator();
  });

  it('returns 2-1=1', () => {
    assert.equal(calculator.subtraction(2, 1), 2 - 1);
  });

  it('return 1+2+3=6', () => {
    assert.equal(calculator.add(1, 2, 3), 1 + 2 + 3);
  });

  it('return 4/2=2', () => {
    assert.equal(calculator.divide(4, 2), 2);
  });

  it('return 4/0=infinity', () => {
    assert.equal(calculator.divide(4, 0), Infinity);
  });

  it('return 2*1=2', () => {
    assert.equal(calculator.exponentiation(2, 1), 2);
  });

  it('return 2*3=8', () => {
    assert.equal(calculator.exponentiation(2, 3), 8);
  });
  it('return 2*2=4', () => {
    assert.equal(calculator.multiply(2, 2), 4);
  });
});
