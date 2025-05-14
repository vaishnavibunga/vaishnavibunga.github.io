const add = () => {
  const a = parseFloat(document.getElementById("n1").value);
  const b = parseFloat(document.getElementById("n2").value);
  document.getElementById("dvAdd").innerHTML = "Addition: " + (a + b);
};

const sub = () => {
  const a = parseFloat(document.getElementById("n1").value);
  const b = parseFloat(document.getElementById("n2").value);
  document.getElementById("dvSub").innerHTML = "Subtraction: " + (a - b);
};

const mul = () => {
  const a = parseFloat(document.getElementById("n1").value);
  const b = parseFloat(document.getElementById("n2").value);
  document.getElementById("dvMul").innerHTML = "Multiplication: " + (a * b);
};

const div = () => {
  const a = parseFloat(document.getElementById("n1").value);
  const b = parseFloat(document.getElementById("n2").value);
  if (b === 0) {
    document.getElementById("dvDiv").innerHTML = "Division: Cannot divide by zero";
  } else {
    document.getElementById("dvDiv").innerHTML = "Division: " + (a / b);
  }
};
