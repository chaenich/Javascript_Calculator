var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  it('should update the display of the running total', function(){
    // should update the display of the running total when number buttons pressed
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#number7')).click();
    element(by.css('#number8')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('578')

  });

  // it('should update the display with the result of the operation after arithmetical operations', function(){
  //
  // });
  // it('should chain multiple operations together', function(){
  //
  // });
  //
  // it('should provide expected output for a range of numbers', function(){
  //   // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  //
  // });
  //
  // it('should display Not a number if a numberis divided by zero', function(){
  //
  // });

});
