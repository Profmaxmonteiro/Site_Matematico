function calculate() {
  var expression = document.getElementById("expression").value;
  var result = math.evaluate(expression);
  document.getElementById("result").innerHTML = expression + " = " + result;
}
