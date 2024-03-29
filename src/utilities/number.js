const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: 0,
})

export function formatOperand(operand) {
    if (operand == null) return
    
    const [integer, decimal] = operand.split(".");
    
    if (decimal == null) return INTEGER_FORMATTER.format(integer);

    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

export function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev)) return currentOperand;

  let computation = "";

  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
  }

  return computation.toString();
}