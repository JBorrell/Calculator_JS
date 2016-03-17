function Calculator() {
  this.operation = []
  this.addition = false
  this.subtraction = false
}
Calculator.prototype.input = function (num) {
  this.operation.push(num)
};
Calculator.prototype.add = function () {
  this.addition = true
};
Calculator.prototype.subtract = function() {
  this.subtraction = true
}
Calculator.prototype.equals = function () {
  if (this.addition) {return this.operation.reduce(function(a, b) { return a + b; }, 0)};
  if (this.subtraction) {return this.operation[0] - this.operation[1]};
};
