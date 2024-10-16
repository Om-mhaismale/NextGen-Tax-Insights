document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const gains = parseFloat(document.getElementById('gains').value);
  
  
    if (!isNaN(gains)) {
       
        const result = (gains * 30) / 100;
  
        
        document.getElementById('result').textContent = `Your Tax Calculated is ${result}`;
    } else {
  
        document.getElementById('result').textContent = 'Please enter a valid number';
    }
  });