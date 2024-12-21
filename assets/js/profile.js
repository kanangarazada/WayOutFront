const logoutBtn = document.getElementById('logoutBtn');
const logoutModal = document.getElementById('logoutModal');
const modalContent = logoutModal.querySelector('.balance-card');
const cancelLogout = document.getElementById('cancelLogout');
const confirmLogout = document.getElementById('confirmLogout');

// Show modal
function showModal() {
    logoutModal.classList.remove('hidden');
    setTimeout(() => {
        logoutModal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95', 'translate-y-4');
    }, 10);
}

// Hide modal
function hideModal() {
    modalContent.classList.add('scale-95', 'translate-y-4');
    logoutModal.classList.add('opacity-0');
    setTimeout(() => {
        logoutModal.classList.add('hidden');
    }, 300);
}

// Event Listeners
logoutBtn.addEventListener('click', showModal);

cancelLogout.addEventListener('click', hideModal);

confirmLogout.addEventListener('click', () => {
    // Add your logout logic here
    window.location.href = 'login.html'; // or wherever you want to redirect
});

// Close on click outside
logoutModal.addEventListener('click', (e) => {
    if (e.target === logoutModal) {
        hideModal();
    }
});

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !logoutModal.classList.contains('hidden')) {
        hideModal();
    }
});

function setupModal(triggerButtonClass, modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.balance-card');
    const triggerButton = document.querySelector(`.${triggerButtonClass}`);
    const closeButton = modal.querySelector('.closeModal');
    
    function showModal() {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95', 'translate-y-4');
        }, 10);
    }

    function hideModal() {
        modalContent.classList.add('scale-95', 'translate-y-4');
        modal.classList.add('opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            // Reset form
            modal.querySelector('form').reset();
        }, 300);
    }

    // Event Listeners
    triggerButton.addEventListener('click', showModal);
    closeButton.addEventListener('click', hideModal);

    // Close on click outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });

    // Update form submission
    const form = modal.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add your form submission logic here
        
        // Show success message based on modal type
        if (modalId === 'emailModal') {
            showToast('Email updated successfully!');
        } else if (modalId === 'passwordModal') {
            showToast('Password updated successfully!');
        }
        
        hideModal();
    });
}

// Initialize modals
setupModal('change-email', 'emailModal');
setupModal('change-password', 'passwordModal');

// Close modals on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('#emailModal, #passwordModal').forEach(modal => {
            if (!modal.classList.contains('hidden')) {
                modal.querySelector('.closeModal').click();
            }
        });
    }
});