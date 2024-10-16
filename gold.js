function displayForm() {
    const transactionType = document.getElementById("transaction").value;

    // Get form elements
    const buyForm = document.getElementById("buyForm");
    const sellForm = document.getElementById("sellForm");

    // Hide both forms initially
    buyForm.classList.add("hidden");
    sellForm.classList.add("hidden");

    // Show the appropriate form based on the selection
    if (transactionType === "buy") {
        buyForm.classList.remove("hidden");
    } else if (transactionType === "sell") {
        sellForm.classList.remove("hidden");
    }
}

function calculateGST() {
    const goldValue = parseFloat(document.getElementById("buyValue").value);
    const gst = goldValue * 0.03; // 3% GST on buying gold
    document.getElementById("gstResult").innerHTML = `GST (3%): ₹${gst.toFixed(2)}`;
}

const ciiData = {
    "2001-02": 100,
    "2002-03": 105,
    "2003-04": 109,
    "2004-05": 113,
    "2005-06": 117,
    "2006-07": 122,
    "2007-08": 129,
    "2008-09": 137,
    "2009-10": 148,
    "2010-11": 167,
    "2011-12": 184,
    "2012-13": 200,
    "2013-14": 220,
    "2014-15": 240,
    "2015-16": 254,
    "2016-17": 264,
    "2017-18": 272,
    "2018-19": 280,
    "2019-20": 289,
    "2020-21": 301,
    "2021-22": 317,
    "2022-23": 331,
    "2023-24": 348,
    "2024-25": 363
};


let tax = 0;
function comparing() {
    

    const pgoldValue = parseFloat(document.getElementById("pgoldValue").value);
    const sgoldValue = parseFloat(document.getElementById("sgoldValue").value);
    const pyear = document.getElementById("purchaseYear").value
    const syear = document.getElementById("saleYear").value

    const ch = document.getElementById("compare").value;

    // Get form elements
    const gtr = document.getElementById("greaterthan3");

    // Hide both forms initially
    gtr.classList.add("hidden");

    // Logic for Long Term Capital Gains (LTCG)
    if (ch === "greater") {
        gtr.classList.remove("hidden");
        const ciiPurchase = ciiData[pyear]; // Example CII value for purchase year
        const ciiSell = ciiData[syear]; // Example CII value for sell year
        const indexedGoldValue = (sgoldValue-(pgoldValue * (ciiSell / ciiPurchase)));
        tax = indexedGoldValue * 0.20; // LTCG with 20% tax rate
    }
    // Logic for Short Term Capital Gains (STCG)
    else {
        if (goldValue <= 300000) {
            tax = 0;
        } else if (goldValue <= 700000) {
            tax = (goldValue - 300000) * 0.05;
        } else if (goldValue <= 1000000) {
            tax = 20000 + (goldValue - 700000) * 0.10;
        } else if (goldValue <= 1200000) {
            tax = 70000 + (goldValue - 1000000) * 0.15;
        } else if (goldValue <= 1500000) {
            tax = 170000 + (goldValue - 1200000) * 0.20;
        } else {
            tax = 370000 + (goldValue - 1500000) * 0.30;
        }
    }
}

function calculateTax() {

    comparing();
    let cess = 0;
    cess = tax * 0.04; // 4% cess
    const totalTax = tax + cess;
    document.getElementById("taxResult").innerHTML = `Total Tax (including cess): ₹${totalTax.toFixed(2)}`;
}