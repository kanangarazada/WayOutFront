document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const moonIcon = themeToggle.querySelector('.fa-moon');
    
    // Function to set theme
    function setTheme(isDark) {
        if (isDark) {
            document.documentElement.classList.add('dark');
            moonIcon.classList.remove('fa-moon');
            moonIcon.classList.add('fa-sun');
        } else {
            document.documentElement.classList.remove('dark');
            moonIcon.classList.remove('fa-sun');
            moonIcon.classList.add('fa-moon');
        }
        // Save theme preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        setTheme(true);
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const isDark = !document.documentElement.classList.contains('dark');
        setTheme(isDark);
    });

    // Handle system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) { // Only if user hasn't manually set theme
            setTheme(e.matches);
        }
    });

    const decimalsElement = document.getElementById('decimals');
    let currentValue = 0.000033;
    
    function updateBalance() {
        currentValue += 0.000033;
        // Format to 6 decimal places
        decimalsElement.textContent = currentValue.toFixed(6).split('.')[1];
    }

    // Update every second
    setInterval(updateBalance, 1000);
});
