
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
class ModalHandler {
    constructor() {
        // Modal elements
        this.earnModal = document.getElementById('earnModal');
        this.modalContent = this.earnModal.querySelector('.balance-card');
        this.amountInput = this.earnModal.querySelector('input[type="number"]');
        this.closeButton = document.getElementById('closeModalBtn');
        this.quickAmountButtons = this.earnModal.querySelectorAll('.mt-3 button');
        this.earnButtons = document.querySelectorAll('.from-emerald-500');
        
        this.isAnimating = false;
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Earn buttons
        this.earnButtons.forEach(button => {
            if (!button.disabled) {
                button.addEventListener('click', () => this.openModal());
            }
        });

        // Quick amount buttons
        this.quickAmountButtons.forEach(button => {
            button.addEventListener('click', () => {
                const amount = parseInt(button.textContent);
                this.amountInput.value = amount;
            });
        });

        // Close modal events
        this.earnModal.addEventListener('click', (e) => {
            if (e.target === this.earnModal) {
                this.handleClose(e);
            }
        });

        this.closeButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const clickEvent = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            this.earnModal.dispatchEvent(clickEvent);
        });

        // Escape key handler
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.earnModal.classList.contains('hidden')) {
                this.handleClose();
            }
        });
    }

    openModal() {
        if (this.isAnimating) return;
        
        this.earnModal.classList.remove('hidden');
        this.earnModal.classList.add('flex', 'opacity-0');
        this.modalContent.classList.add('scale-95', 'translate-y-4');
        document.body.style.overflow = 'hidden';
        
        // Force browser reflow
        this.earnModal.offsetHeight;
        
        requestAnimationFrame(() => {
            this.earnModal.classList.remove('opacity-0');
            this.modalContent.classList.remove('scale-95', 'translate-y-4');
            this.modalContent.classList.add('scale-100', 'translate-y-0');
        });
    }

    handleClose(e) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        this.earnModal.classList.add('opacity-0');
        this.modalContent.classList.remove('scale-100', 'translate-y-0');
        this.modalContent.classList.add('scale-95', 'translate-y-4');
        
        setTimeout(() => {
            this.earnModal.classList.add('hidden');
            this.earnModal.classList.remove('flex');
            document.body.style.overflow = '';
            this.amountInput.value = '';
            this.isAnimating = false;
        }, 500);
    }
}
// Initialize deposit modal handler
document.addEventListener('DOMContentLoaded', () => {
    new DepositModalHandler();
    new ModalHandler();
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