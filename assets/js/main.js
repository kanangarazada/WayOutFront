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

const depositModal = document.getElementById('depositModal');
const depositModalContent = depositModal.querySelector('.balance-card');
const closeDepositModalBtn = document.getElementById('closeDepositModalBtn');
const depositForm = document.getElementById('depositForm');

// Show modal function
function showDepositModal() {
    depositModal.classList.remove('hidden');
    setTimeout(() => {
        depositModal.classList.remove('opacity-0');
        depositModalContent.classList.remove('scale-95', 'translate-y-4');
    }, 10);
}

// Hide modal function
function hideDepositModal() {
    depositModalContent.classList.add('scale-95', 'translate-y-4');
    depositModal.classList.add('opacity-0');
    setTimeout(() => {
        depositModal.classList.add('hidden');
    }, 300);
}

// Set amount function
function setAmount(amount) {
    document.getElementById('depositAmount').value = amount;
}

// Add event listeners
document.querySelector('.deposit-btn').addEventListener('click', showDepositModal);
closeDepositModalBtn.addEventListener('click', hideDepositModal);

depositForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Handle deposit logic here
    hideDepositModal();
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the deposit form
    const depositForm = document.querySelector('#depositForm');
    
    if (depositForm) {
        depositForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success toast
            showToast('Deposit request submitted successfully!');
            
            // Close modal with animation
            const modal = document.querySelector('#depositModal');
            const modalContent = modal.querySelector('.balance-card');
            
            modalContent.classList.add('scale-95', 'translate-y-4');
            modal.classList.add('opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
                this.reset();
            }, 300);
        });
    }
});

