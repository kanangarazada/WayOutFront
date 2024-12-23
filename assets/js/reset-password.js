
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const icon = input.nextElementSibling.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
}

function validatePasswords() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    if (password === '' || confirmPassword === '') {
        errorMessage.textContent = 'Please fill in both password fields.';
        errorMessage.classList.remove('hidden');
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match. Please try again.';
        errorMessage.classList.remove('hidden');
        return;
    }

    // If passwords match, redirect to login page
    window.location.href = 'login.html';
}