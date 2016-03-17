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
  if (this.operation[1] === '+') {return this.operation[0] + this.operation[2]};
  if (this.operation[1] === '-') {return this.operation[0] - this.operation[2]};
  if (this.operation[1] === '*') {return this.operation[0] * this.operation[2]};
  if (this.operation[1] === '/') {return this.operation[0] / this.operation[2]};
};
