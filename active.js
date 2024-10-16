const form = document.getElementById('calculationForm');
        const resultDiv = document.getElementById('result');

        
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            
            const gains = parseFloat(document.getElementById('gains').value.trim());

            
            if (!isNaN(gains) && gains >= 0) {
                let result;

                
                if (gains <= 300000) {
                    result = 0; 
                } else if (gains <= 700000) {
                    result = (gains - 300000) * 0.05; 
                } else if (gains <= 1000000) {
                    result = 20000 + (gains - 700000) * 0.10; 
                } else if (gains <= 1200000) {
                    result = 70000 + (gains - 1000000) * 0.15; 
                } else if (gains <= 1500000) {
                    result = 170000 + (gains - 1200000) * 0.20; 
                } else {
                    result = 370000 + (gains - 1500000) * 0.25; 
                }

                
                resultDiv.textContent = `The calculated tax is ₹${result.toFixed(2)}`;
            } else {
                
                resultDiv.textContent = 'Please enter a valid non-negative number';
            }
        });