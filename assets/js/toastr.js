let toastTimeout;

function showToast(message) {
    const toast = document.getElementById('successToast');
    const messageEl = document.getElementById('toastMessage');
    
    // Set the message
    messageEl.textContent = message;
    
    // Show the toast
    toast.classList.remove('translate-x-full', 'opacity-0');
    
    // Hide after 3 seconds
    setTimeout(hideToast, 3000);
}

function hideToast() {
    const toast = document.getElementById('successToast');
    toast.classList.add('translate-x-full', 'opacity-0');
}