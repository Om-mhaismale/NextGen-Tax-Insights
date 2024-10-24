function calculateTax() {
    const purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    const sellingPrice = parseFloat(document.getElementById("sellingPrice").value);
    const holdingPeriod = parseInt(document.getElementById("holdingPeriod").value);
    const purchaseYear = parseInt(document.getElementById("purchaseYear").value);
    const saleYear = parseInt(document.getElementById("saleYear").value);

    const CII = { // Example CII (Cost Inflation Index) data
        2022: 317,
        2023: 331,
        2024: 348
    };
    
    let tax = 0;

    if (holdingPeriod <= 24) {
        // Short-Term Capital Gains
        const STCG = sellingPrice - purchasePrice;
        const taxSlabRate = 0.2;  // Assuming 20% tax slab for simplicity
        tax = STCG * taxSlabRate;
        document.getElementById("result").innerText = `Short-Term Capital Gains Tax: ₹${tax.toFixed(2)}`;
    } else {
        // Long-Term Capital Gains
        const indexedPurchasePrice = purchasePrice * (CII[saleYear] / CII[purchaseYear]);
        const LTCG = sellingPrice - indexedPurchasePrice;
        tax = LTCG * 0.20;  // 20% LTCG tax rate
        document.getElementById("result").innerText = `Long-Term Capital Gains Tax: ₹${tax.toFixed(2)}`;
    }
}
