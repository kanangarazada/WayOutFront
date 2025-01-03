class DepositModalHandler {
    constructor() {
        // Modal elements
        this.depositModal = document.getElementById('depositModal');
        this.modalContent = this.depositModal.querySelector('.bg-gradient-to-br');
        this.closeButton = document.getElementById('closeDepositModalBtn');
        this.depositForm = document.getElementById('depositForm');
        this.amountInput = document.getElementById('depositAmount');
        
        // Get deposit buttons
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
        this.modalContent = this.earnModal.querySelector('.bg-gradient-to-br');
        this.closeButton = document.getElementById('closeModalBtn');
        this.earnForm = document.getElementById('earnForm');
        this.amountInput = document.getElementById('earnAmount');
        
        // Get earn buttons
        this.earnButtons = document.querySelectorAll('.earn-trigger');
        
        this.isAnimating = false;
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Deposit buttons
        this.earnButtons.forEach(button => {
            button.addEventListener('click', () => this.openModal());
        });

        // Close modal events
        this.earnModal.addEventListener('click', (e) => {
            if (e.target === this.earnModal) {
                this.handleClose();
            }
        });

        this.closeButton.addEventListener('click', () => this.handleClose());

        // Form submit
        this.earnForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle deposit logic here
            this.handleClose();
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

    handleClose() {
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
        }, 300);
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

document.addEventListener('DOMContentLoaded', function() {
    // Deposit Form Handler
    const depositForm = document.querySelector('#depositForm');
    if (depositForm) {
        depositForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success toast
            showToast('Deposit request submitted successfully!');
            this.reset();
        });
    }

    // Earn Form Handler
    const earnForm = document.querySelector('form#earnForm');
    if (earnForm) {
        earnForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success toast
            showToast('Earn request submitted successfully!');
            this.reset();
        });
    }
});