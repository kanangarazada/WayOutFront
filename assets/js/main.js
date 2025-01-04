document.addEventListener('DOMContentLoaded', function () {

    const decimalsElement = document.getElementById('decimals');
    let currentValue = 0.000033;

    function updateBalance() {
        currentValue = parseFloat((currentValue + 0.000033).toFixed(6));
        // Format to 6 decimal places and ensure leading zeros
        let decimalStr = currentValue.toFixed(6).split('.')[1];
        decimalsElement.textContent = decimalStr;
    }

    // Initial update
    updateBalance();

    // Update every second
    setInterval(updateBalance, 1000);
});

