let toastTimeout;

function showToast(message) {
    const toast = document.getElementById('successToast');
    const messageEl = document.getElementById('toastMessage');
    
    // Clear any existing timeout
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }
    
    // Set message
    messageEl.textContent = message;
    
    // Show toast
    requestAnimationFrame(() => {
        toast.classList.remove('translate-x-full', 'opacity-0');
        toast.classList.add('translate-x-0', 'opacity-100');
    });

    // Hide toast after 4 seconds
    toastTimeout = setTimeout(hideToast, 4000);
}

function hideToast() {
    const toast = document.getElementById('successToast');
    
    // Clear any existing timeout
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }
    
    // Hide toast
    toast.classList.remove('translate-x-0', 'opacity-100');
    toast.classList.add('translate-x-full', 'opacity-0');
}