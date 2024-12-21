
class DepositModalHandler {
    constructor() {
        // Modal elements
        this.depositModal = document.getElementById('depositModal');
        this.modalContent = this.depositModal.querySelector('.balance-card');
        this.closeButton = document.getElementById('closeDepositModalBtn');
        this.depositForm = document.getElementById('depositForm');
        this.amountInput = document.getElementById('depositAmount');
        
        // Get both deposit buttons (Add USDT and Deposit)
        this.depositButtons = document.querySelectorAll('.deposit-trigger');
        
        this.isAnimating = false;
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Deposit buttons
        this.depositButtons.forEach(button => {
            button.addEventListener('click', () => this.openModal());
        });

        // Close modal events
        this.depositModal.addEventListener('click', (e) => {
            if (e.target === this.depositModal) {
                this.handleClose();
            }
        });

        this.closeButton.addEventListener('click', () => this.handleClose());

        // Form submit
        this.depositForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle deposit logic here
            this.handleClose();
        });

        // Escape key handler
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.depositModal.classList.contains('hidden')) {
                this.handleClose();
            }
        });
    }

    openModal() {
        if (this.isAnimating) return;
        
        this.depositModal.classList.remove('hidden');
        this.depositModal.classList.add('flex', 'opacity-0');
        this.modalContent.classList.add('scale-95', 'translate-y-4');
        document.body.style.overflow = 'hidden';
        
        // Force browser reflow
        this.depositModal.offsetHeight;
        
        requestAnimationFrame(() => {
            this.depositModal.classList.remove('opacity-0');
            this.modalContent.classList.remove('scale-95', 'translate-y-4');
            this.modalContent.classList.add('scale-100', 'translate-y-0');
        });
    }

    handleClose() {
        if (this.isAnimating) return;
        this.isAnimating = true;

        this.depositModal.classList.add('opacity-0');
        this.modalContent.classList.remove('scale-100', 'translate-y-0');
        this.modalContent.classList.add('scale-95', 'translate-y-4');
        
        setTimeout(() => {
            this.depositModal.classList.add('hidden');
            this.depositModal.classList.remove('flex');
            document.body.style.overflow = '';
            this.amountInput.value = '';
            this.isAnimating = false;
        }, 300);
    }
}

// Initialize deposit modal handler
document.addEventListener('DOMContentLoaded', () => {
    new DepositModalHandler();
});

// Quick amount setter function
function setAmount(amount) {
    document.getElementById('depositAmount').value = amount;
}

function setEarnAmount(amount) {
    const earnInput = document.querySelector('#earnModal input[type="number"]');
    if (earnInput) {
        earnInput.value = amount;
    }
}