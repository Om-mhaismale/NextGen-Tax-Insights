function submitIncome() {
    const income = document.getElementById("income-input").value;
    if (income) {
        alert("Your income is: " + income + " INR");
    } else {
        alert("Please enter a valid amount.");
    }
}
