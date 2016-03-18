function Calculator() {
  this.operation = []
}
Calculator.prototype.input = function (num) {
  this.operation.push(num)
};
Calculator.prototype.add = function () {
  this.operation.push('+')
};
Calculator.prototype.subtract = function() {
  this.operation.push('-')
}
Calculator.prototype.multiply = function () {
  this.operation.push('*')
};
Calculator.prototype.divide = function () {
  this.operation.push('/')
};
Calculator.prototype.equals = function () {
  return eval(this.operation.join(""))
};
Calculator.prototype.delete = function () {
  this.operation.pop();
};
Calculator.prototype.clear = function () {
  this.operation = []
};
