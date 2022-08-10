function calculate(op) {
  var ans = 0;
  var x1 = document.getElementById("num1").value * 1;
  var x2 = document.getElementById("num2").value * 1;
  if (op == "Sub") {
    ans = x1 - x2;
  } else if (op == "Mod") {
    ans = x1 % x2;
  } else if (op == "Mul") {
    ans = x1 * x2;
  } else if (op == "Add") {
    ans = x1 + x2;
  } else if (op == "Div") {
    ans = x1 / x2;
  }

  document.getElementById("answer").innerHTML = ans;
}

function ChangeBGColor(x) {
  document.getElementById("bg").style.backgroundColor = x;
}

function Ezcalc() {
  document.getElementById("Ezcalc").innerHTML = eval(
    document.getElementById("EzcalcInput").value
  );
  //alert(eval(prompt("Enter Equations")))
}
