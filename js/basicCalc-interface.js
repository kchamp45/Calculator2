var Calculator = require('./../js/pingpong.js').calculatorModule;


$(document).ready(function() {
  $('#basicCalc-form').submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var operation = $('#operation').val();
    var simpleCalculator = new Calculator("hot pink");
    var result = simpleCalculator.basicCalc(num1, num2, operation);
    // $('#basicCalc-form').hide();
    $('#solution').prepend('<li>Answer: ' + result + '</li>');
  });
});
