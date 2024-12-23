document.getElementById('withdrawForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const successMessage = document.getElementById('successMessage');
    const messageContent = successMessage.querySelector('.bg-gradient-to-br');
    
    // Show the modal
    successMessage.classList.remove('pointer-events-none', 'opacity-0');
    // Animate the content
    setTimeout(() => {
        messageContent.classList.remove('scale-95', 'opacity-0');
    }, 10);
});

function hideSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    const messageContent = successMessage.querySelector('.bg-gradient-to-br');
    
    // Animate out
    messageContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        successMessage.classList.add('pointer-events-none', 'opacity-0');
        // Reset form
        document.getElementById('withdrawForm').reset();
    }, 200);
}
