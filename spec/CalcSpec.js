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
  // describe("Subtraction", function() {
  //   it("Should subtract 2 positive whole integers", function() {
  //     calculator.subtract(7, 10);
  //     expect(calculator.result).toEqual(-3);
  //   });
  // });
});
