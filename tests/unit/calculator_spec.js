var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it("it can add numbers", function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5);
  });

  it("it can subtract numbers", function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  });

  it("it can multiply numbers", function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  });

  it("it can divide numbers", function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3)
  });

  it("it can concatenate numbers clicked", function(){
    calculator.numberClick(9);
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 95);
  });

  it("it can chain multiple operations together", function(){
    calculator.previousTotal = 7;
    calculator.operatorClick("+");
    assert.equal(calculator.newTotal, true);
  });

  it("it can clear the running total", function(){
    calculator.runningTotal = 7;
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  });

});
