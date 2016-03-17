function Calculator() {
  this.operation = []
  this.addition = false
}
Calculator.prototype.input = function (num) {
  this.operation.push(num)
};
Calculator.prototype.add = function () {
  this.addition = true
};
Calculator.prototype.equals = function () {
  if (this.addition) {return this.operation.reduce(function(a, b) { return a + b; }, 0)};
};

// Calculator.prototype.subtract = function (x, y) {
//   this.result = (x - y)
// };
