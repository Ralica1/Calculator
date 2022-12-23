const addToInput = (value) => {
  document.getElementById("input").value += value;
};

const calculate = () => {
  let input = document.getElementById("input").value;
  let result = 0;
  let numbers = input.split(/\+|\-|\*|\//g);
  let operations = input.replace(/[0-9]|\./g, "").split("");
  let decimalAdded = false;

  // Perform multiplication and division first
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "*" || operations[i] === "/") {
      let first = parseFloat(numbers[i]);
      let second = parseFloat(numbers[i + 1]);

      if (operations[i] === "*") {
        result = first * second;
      } else {
        result = first / second;
      }

      numbers.splice(i, 2, result);
      operations.splice(i, 1);
    }
  }

  // Perform addition and subtraction
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "+") {
      result = parseFloat(numbers[i]) + parseFloat(numbers[i + 1]);
      numbers.splice(i, 2, result);
      operations.splice(i, 1);
    } else if (operations[i] === "-") {
      result = parseFloat(numbers[i]) - parseFloat(numbers[i + 1]);
      numbers.splice(i, 2, result);
      operations.splice(i, 1);
    }
  }

  // If there are no more operations, return the result
  if (operations.length === 0) {
    document.getElementById("input").value = result;
  }
};

const clearInput = () => {
  document.getElementById("input").value = "";
};
