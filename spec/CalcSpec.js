describe("Calculator", function() {
  var player;

  beforeEach(function() {
    calculator = new Calculator();
  });

  describe("Addition", function() {
    it("Calculates 1 + 2", function() {
      calculator.input(1);
      calculator.add();
      calculator.input(2);
      expect(calculator.equals()).toEqual(3);
    });
    it("Adds double digit numbers", function(){
      calculator.input(1);
      calculator.input(2);
      calculator.add();
      calculator.input(1);
      calculator.input(3);
      expect(calculator.equals()).toEqual(25);
    })
  });
  describe("Subtraction", function() {
    it("Calculates 5 - 3", function() {
      calculator.input(5);
      calculator.subtract();
      calculator.input(3);
      expect(calculator.equals()).toEqual(2);
    });
  });
  describe("Multiplication", function() {
    it("Calculates 3 * 5", function() {
      calculator.input(3);
      calculator.multiply();
      calculator.input(5);
      expect(calculator.equals()).toEqual(15);
    });
    it("Multiplies decimal numbers", function(){
      calculator.input(3);
      calculator.multiply();
      calculator.input(2);
      calculator.input(".");
      calculator.input(5);
      expect(calculator.equals()).toEqual(7.5);
    })
  });
  describe("Division", function() {
    it("Calculates 7 / 2", function() {
      calculator.input(7);
      calculator.divide();
      calculator.input(2);
      expect(calculator.equals()).toEqual(3.5);
    });
  });
  describe("Deleting", function(){
    it("Can delete last input from equation", function(){
      calculator.input(5);
      calculator.add();
      calculator.input(7);
      calculator.delete();
      expect(calculator.operation).toEqual([5, '+']);
    })
    it("Can clear entire current operation", function(){
      calculator.input(1);
      calculator.input(4);
      calculator.subtract();
      calculator.input(3);
      calculator.clear();
      expect(calculator.operation).toEqual([]);
    });
  });
});
