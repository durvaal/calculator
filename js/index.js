function setValueOnDisplay(value) {
  document.getElementById("container-display").value += value;
}

function clearDisplayValue() {
  document.getElementById("container-display").value = '';
}

function calculateValue() {
  const displayValue = document.getElementById("container-display").value;

  if (displayValue !== '' && displayValue !== 'Sintax error') {
    try {
      const totalValue = eval(displayValue);
    
      if (Number.isInteger(totalValue)) {
        document.getElementById("container-display").value = totalValue;
      } else {
        document.getElementById("container-display").value = totalValue.toFixed(6);
      }
    } catch (error) {
      console.log("Syntax error: ", error);
      document.getElementById("container-display").value = "Sintax error";
    }
  }
}