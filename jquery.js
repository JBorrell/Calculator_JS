$(document).ready(function(){
  var calc = new Calculator();

  $("#1").click(function(){
    calc.input(1);
    $("#operation").text(calc.operation.join(" "))
  });
  $("#2").click(function(){
    calc.input(2);
    $("#operation").text(calc.operation.join(" "))
  });
  $("#3").click(function(){
    calc.input(3);
    $("#operation").text(calc.operation.join(" "))
  });
  $("#4").click(function(){
    calc.input(4);
    $("#operation").text(calc.operation.join(" "))
  });
  $("#5").click(function(){
    calc.input(5);
    $("#operation").text(calc.operation.join(" "))
  });
  $("#6").click(function(){
    calc.input(6);
    $("#operation").text(calc.operation.join(" "))
  });
  $("#7").click(function(){
    calc.input(7);
    $("#operation").text(calc.operation.join(" "))
  });
  $("#8").click(function(){
    calc.input(8);
    $("#operation").text(calc.operation.join(" "))
  });
  $("#9").click(function(){
    calc.input(9);
    $("#operation").text(calc.operation.join(" "))
  });
  $("#add").click(function(){
    calc.add();
    $("#operation").text(calc.operation.join(" "))
  });
  $("#subtract").click(function(){
    calc.subtract();
    $("#operation").text(calc.operation.join(" "))
  });
  $("#multiply").click(function(){
    calc.multiply();
    $("#operation").text(calc.operation.join(" "))
  });
  $("#divide").click(function(){
    calc.divide();
    $("#operation").text(calc.operation.join(" "))
  });
  $("#equals").click(function(){
    $("#result").text(calc.equals())
  });
});
