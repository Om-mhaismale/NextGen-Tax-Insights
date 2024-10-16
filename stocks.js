document.getElementById('short').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const amount = parseFloat(document.getElementById('gains1').value); 
  
    if (!isNaN(amount)) { 
        const result = (amount * 20) / 100;
        document.getElementById('resultshort').textContent = `Your Tax Calculated is ₹${result.toFixed(2)}`; // Display result
    } else {
        document.getElementById('resultshort').textContent = 'Please enter a valid number';
    }
  });
  
  
  document.getElementById('long').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const amount = parseFloat(document.getElementById('gains').value);
  
    if (!isNaN(amount)) {
        if (amount > 125000) { 
            const result = (amount * 12.5) / 100; 
            document.getElementById('resultlong').textContent = `Your Tax Calculated is ₹${result.toFixed(2)}`;
        } else {
            document.getElementById('resultlong').textContent = 'Amount is less than ₹1,25,000.';
        }
    } else {
        document.getElementById('resultlong').textContent = 'Please enter a valid number';
    }
  });