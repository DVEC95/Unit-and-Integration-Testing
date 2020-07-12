const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('it should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  it("it should update the display with the result of arithmetical operations", function(){
    running_total = element(by.css("#running_total"));
    element(by.css("#number1")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("3");
  });

  it("it should allow multiple operations to be chained together", function(){
    running_total = element(by.css("#running_total"));
    element(by.css("#number5")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number5")).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("3");
  });

  it("it should output a negative number", function(){
    running_total = element(by.css("#running_total"));
    element(by.css("#number5")).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("-2");
  });

});
