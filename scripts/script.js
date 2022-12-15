function addToInput(value) {
    document.getElementById('input').value += value;
  }

  function calculate() {
    var input = document.getElementById('input').value;
    var result = 0;
    var numbers = input.split(/\+|\-|\*|\//g);
    var operations = input.replace(/[0-9]|\./g, '').split('');
    var decimalAdded = false;

    // Perform multiplication and division first
    for (var i = 0; i < operations.length; i++) {
      if (operations[i] === '*' || operations[i] === '/') {
        var first = parseFloat(numbers[i]);
        var second = parseFloat(numbers[i + 1]);

        if (operations[i] === '*') {
          result = first * second;
        } else {
          result = first / second;
        }

        numbers.splice(i, 2, result);
        operations.splice(i, 1);
      }
    }

    // Perform addition and subtraction
    for (i = 0; i < operations.length; i++) {
      if (operations[i] === '+') {
        result = parseFloat(numbers[i]) + parseFloat(numbers[i + 1]);
        numbers.splice(i, 2, result);
        operations.splice(i, 1);
      } else if (operations[i] === '-') {
        result = parseFloat(numbers[i]) - parseFloat(numbers[i + 1]);
        numbers.splice(i, 2, result);
        operations.splice(i, 1);
      }
    }

    // If there are no more operations, return the result
    if (operations.length === 0) {
      document.getElementById('input').value = result;
    }
  }

  function clearInput() {
    document.getElementById('input').value = '';
  }