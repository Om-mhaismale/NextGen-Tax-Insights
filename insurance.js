function calculateTax() {
    // Get input values from the form
    let lifePremium = parseFloat(document.getElementById('lifePremium').value) || 0;
    let maturityProceeds = parseFloat(document.getElementById('maturityProceeds').value) || 0;
    let healthPremium = parseFloat(document.getElementById('healthPremium').value) || 0;
    let familyCover = document.querySelector('input[name="familyCover"]:checked')?.value || 'no';
    let vehiclePremium = parseFloat(document.getElementById('vehiclePremium').value) || 0;
    let vehicleUse = document.querySelector('input[name="vehicleUse"]:checked')?.value || 'personal';
    
    // Get the user's annual income
    let annualIncome = parseFloat(prompt("Enter your annual income (₹):")) || 0;

    // Tax benefits based on new regime FY 2024-25
    let taxDeductionLife = 0;
    let taxDeductionHealth = 0;
    let taxDeductionVehicle = 0;

    // Life Insurance - Check if maturity proceeds were received
    let maturityTax = '';
    let taxableMaturityProceeds = 0;
    if (maturityProceeds > 0) {
        if (lifePremium > 0.10 * maturityProceeds) {
            // Tax is applicable if the premium exceeds 10% of sum assured (maturity proceeds)
            maturityTax = `Taxable under Section 10(10D), since the premium exceeds 10% of the maturity proceeds (₹${maturityProceeds})`;
            taxableMaturityProceeds = maturityProceeds; // Add maturity proceeds to income
        } else {
            // No tax if premium does not exceed 10% of the maturity proceeds
            maturityTax = `No tax as premium does not exceed 10% of the maturity proceeds (₹${maturityProceeds})`;
        }
    } else {
        maturityTax = 'No tax as no proceeds received';
    }

    // Health Insurance - No tax benefit under new regime
    if (familyCover === 'yes') {
        taxDeductionHealth = 0; // No deduction
    }

    // Vehicle Insurance - No tax benefit under new regime
    if (vehicleUse === 'personal') {
        taxDeductionVehicle = 0; // No deduction
    }

    // Total premium paid (without tax benefits as per new regime)
    let totalPremium = lifePremium + healthPremium + vehiclePremium;

    // Calculate total taxable income including maturity proceeds
    let totalIncome = annualIncome + taxableMaturityProceeds;

    // Calculate tax based on the new regime for FY 2024-25
    let totalTax = 0;
    
    // Slab-wise tax calculation
    if (totalIncome <= 300000) {
        totalTax = 0; // No tax for income up to ₹3,00,000
    } else if (totalIncome <= 700000) {
        totalTax = (totalIncome - 300000) * 0.05; // 5% tax on income exceeding ₹3,00,000
    } else if (totalIncome <= 1000000) {
        totalTax = 20000 + (totalIncome - 700000) * 0.10; // ₹20,000 + 10% on income exceeding ₹7,00,000
    } else if (totalIncome <= 1200000) {
        totalTax = 50000 + (totalIncome - 1000000) * 0.15; // ₹70,000 + 15% on income exceeding ₹10,00,000
    } else if (totalIncome <= 1500000) {
        totalTax = 80000 + (totalIncome - 1200000) * 0.20; // ₹1,70,000 + 20% on income exceeding ₹12,00,000
    } else {
        totalTax = 140000 + (totalIncome - 1500000) * 0.30; // ₹3,70,000 + 30% on income exceeding ₹15,00,000
    }

    // Display the result
    let resultText = `
        Total Insurance Premium Paid: ₹${totalPremium.toFixed(2)}<br>
        Tax Deduction Available (New Regime): ₹0 (No benefit)<br>
        Maturity Proceeds Tax: ${maturityTax}<br>
        Total Taxable Income (Including Maturity Proceeds): ₹${totalIncome.toFixed(2)}<br>
        Total Tax Payable: ₹${totalTax.toFixed(2)}
    `;

    document.getElementById('result').innerHTML = resultText;
}
