var Calculator = require('./../js/pingpong.js').calculatorModule;

describe('Calculator', function(){
  var simpleCalculator;

  beforeEach(function() {
    simpleCalculator = new Calculator("hot pink");
  });

  it('should test whether it can instantiate', function() {
    expect(simpleCalculator.skin).toEqual("hot pink")
  });

  it ('should test whether it can add two numbers', function() {
    expect(simpleCalculator.basicCalc(2, 3, "add")).toEqual(5);
  });
  
  it ('should test whether it returns "ping" when divisible by 3', function() {
    expect(simpleCalculator.pingPong(3)).toEqual([1, 2, "ping"]);
  });
});
