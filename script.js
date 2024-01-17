let display = document.getElementById('display');
let expression = '';

function updateDisplay() {
  display.innerText = expression || '0';
}

// Handling number, operation, parenthesis, and decimal inputs
document.querySelectorAll('.number, .operation, .parenthesis').forEach(button => {
  button.addEventListener('click', function() {
    expression += this.value;
    updateDisplay();
  });
});

// Handling the decimal point
document.getElementById('decimal').addEventListener('click', function() {
  if (!/[0-9]\.[0-9]*$/.test(expression)) {
    expression += this.value;
    updateDisplay();
  }
});

// Handling the calculation
document.getElementById('equals').addEventListener('click', function() {
  try {
    // Using eval to compute the expression
    let result = eval(expression.replace(/\b0+(?!\b)/g, ''));
    expression = result.toString();
    updateDisplay();
  } catch (e) {
    display.innerText = 'Error';
    expression = '';
  }
});

// Clearing the display
document.getElementById('clear').addEventListener('click', function() {
  expression = '';
  updateDisplay();
});
