
        // Auto-focus next input
        document.querySelectorAll('input[type="text"]').forEach((input, index) => {
            input.addEventListener('input', function() {
                if (this.value.length === 1) {
                    const nextInput = document.querySelectorAll('input[type="text"]')[index + 1];
                    if (nextInput) nextInput.focus();
                }
            });

            // Allow backspace to go to previous input
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Backspace' && !this.value) {
                    const prevInput = document.querySelectorAll('input[type="text"]')[index - 1];
                    if (prevInput) prevInput.focus();
                }
            });
        });

        // Countdown Timer
        function startTimer(duration, display) {
            let timer = duration;
            const resendButton = document.getElementById('resendButton');
            const countdownElement = document.getElementById('countdown');
            
            const countdown = setInterval(function () {
                const minutes = parseInt(timer / 60, 10);
                const seconds = parseInt(timer % 60, 10);

                display.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

                if (--timer < 0) {
                    clearInterval(countdown);
                    countdownElement.classList.add('hidden');
                    resendButton.classList.remove('hidden');
                }
            }, 1000);
        }

        window.onload = function () {
            const tenSeconds = 10;
            const display = document.querySelector('#timer');
            startTimer(tenSeconds, display);
        };

        // Code validation function
        function validateCode() {
            const inputs = document.querySelectorAll('input[type="text"]');
            const errorMessage = document.getElementById('errorMessage');
            
            // Combine the input values
            const code = Array.from(inputs).map(input => input.value).join('');
            
            // Check if code is complete
            if (code.length !== 4) {
                errorMessage.textContent = 'Please enter all 4 digits.';
                errorMessage.classList.remove('hidden');
                return;
            }
            
            // Validate against correct code (1234)
            if (code === '1234') {
                // Redirect to reset password page
                window.location.href = 'reset-password.html';
            } else {
                // Show error message
                errorMessage.textContent = 'Invalid verification code. Please try again.';
                errorMessage.classList.remove('hidden');
                
                // Clear inputs
                inputs.forEach(input => {
                    input.value = '';
                });
                
                // Focus first input
                inputs[0].focus();
            }
        }