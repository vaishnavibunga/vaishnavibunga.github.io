const add = (a, b) => {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
     dvAdd.innerHTML = "Addition: " + (a+b);
    
    
  };
  
  const sub = (a, b) => {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
     dvSub.innerHTML = "subtraction: " + (a-b);
    return a - b;
  };
  
  const mul = (a, b) => {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
     dvMul.innerHTML = "multiplication: " + (a*b);
    return a * b;
  };
  
  const div = (a, b) => {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
     dvDiv.innerHTML = "division: " + (a/b);
    return a / b;
  };
  