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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ModalHandler();
}); 