function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.basicCalc = function(num1, num2, operation) {
  var result = "";

  if (operation == "add" ) {
    result = num1 + num2;
  }else if (operation == "subtract") {
    result = num1 - num2;
  }else if (operation == "multiply") {
    result = num1 * num2;
  }else if (operation == "divide") {
    result = num1 / num2;
  } else {
    alert("try again");
}
return result;
};

exports.calculatorModule = Calculator;
