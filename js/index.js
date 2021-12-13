function setValueOnDisplay(value) {
  document.getElementById("container-display").value += value;
}

function clearDisplayValue() {
  document.getElementById("container-display").value = '';
}

function calculateValue() {
  const displayValue = document.getElementById("container-display").value;

  if (displayValue !== '') {
    const totalValue = eval(displayValue);
    
    if (Number.isInteger(totalValue)) {
      document.getElementById("container-display").value = totalValue;
    } else {
      document.getElementById("container-display").value = totalValue.toFixed(6);
    }
  }
}