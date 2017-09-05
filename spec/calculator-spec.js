var Calculator = require('./../js/pingpong.js').calculatorModule;

describe('Calculator', function(){

  it('should test whether it can instantiate', function() {
    var simpleCalculator = new Calculator("hot pink")
    expect(simpleCalculator.skin).toEqual("hot pink")
  });
});

describe('Calculator', function() {
  it ('should test whether it can add two numbers', function() {
    var simpleCalculator = new Calculator("hot pink")
    expect(simpleCalculator.basicCalc(2, 3, "add")).toEqual(5);
  });
});

describe('Calculator', function() {
  it ('should test whether it returns "ping" when divisible by 3', function() {
    var simpleCalculator = new Calculator("hot pink")
    expect(simpleCalculator.pingPong(3)).toEqual([1, 2, "ping"]);
  });
});
