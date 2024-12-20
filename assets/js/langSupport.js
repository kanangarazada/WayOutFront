
const languageBtn = document.getElementById('languageBtn');
const languageModal = document.getElementById('languageModal');

// Toggle language modal
languageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    languageModal.classList.toggle('hidden');
});

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (!languageModal.contains(e.target) && !languageBtn.contains(e.target)) {
        languageModal.classList.add('hidden');
    }
});

// Close modal when pressing escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        languageModal.classList.add('hidden');
    }
});