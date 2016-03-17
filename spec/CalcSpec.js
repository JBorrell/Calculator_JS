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
  });
  describe("Subtraction", function() {
    it("Calculates 5 - 3", function() {
      calculator.input(5);
      calculator.subtract();
      calculator.input(3);
      expect(calculator.equals()).toEqual(2);
    });
  });
});
