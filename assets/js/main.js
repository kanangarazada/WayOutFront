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

// Modal handling
const depositModal = document.getElementById('depositModal');
const depositBtns = document.querySelectorAll('.deposit-btn');
const closeDepositModalBtn = document.getElementById('closeDepositModalBtn');

// Open modal
depositBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        depositModal.classList.remove('hidden');
        // Wait a tiny bit before removing opacity-0 to trigger transition
        setTimeout(() => {
            depositModal.classList.remove('opacity-0');
        }, 20);
    });
});

// Close modal
function closeDepositModal() {
    depositModal.classList.add('opacity-0');
    setTimeout(() => {
        depositModal.classList.add('hidden');
    }, 300); // Match this with the CSS transition duration
}

closeDepositModalBtn.addEventListener('click', closeDepositModal);

// Close on outside click
depositModal.addEventListener('click', (e) => {
    if (e.target === depositModal) {
        closeDepositModal();
    }
});

// Handle quick amount buttons
function setAmount(amount) {
    document.getElementById('depositAmount').value = amount;
}

// Handle deposit form submission
document.getElementById('depositForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = document.getElementById('depositAmount').value;
    // Add your deposit logic here
    
    closeDepositModal();
    showToast('Deposit request submitted successfully!');
});

// Prevent closing when clicking inside modal
depositModal.querySelector('.bg-gradient-to-br').addEventListener('click', (e) => {
    e.stopPropagation();
});

