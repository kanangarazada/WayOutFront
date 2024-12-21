
function copyToClipboard(button, text) {
    if (button.disabled) return;
    
    navigator.clipboard.writeText(text).then(() => {
        const icon = button.querySelector('i');
        button.disabled = true;
        
        // Change to check icon with animation
        icon.classList.remove('fa-copy');
        icon.classList.add('fa-check');
        button.classList.remove('text-blue-500', 'bg-blue-500/10', 'hover:bg-blue-500/20');
        button.classList.add('text-emerald-500', 'bg-emerald-500/10');
        
        // Reset after 2 seconds
        setTimeout(() => {
            icon.classList.remove('fa-check');
            icon.classList.add('fa-copy');
            button.classList.remove('text-emerald-500', 'bg-emerald-500/10');
            button.classList.add('text-blue-500', 'bg-blue-500/10', 'hover:bg-blue-500/20');
            button.disabled = false;
        }, 2000);
    });
}

function shareLink(text) {
    if (navigator.share) {
        navigator.share({
            title: 'Join Zypher',
            text: 'Join Zypher using my referral:',
            url: text
        });
    }
}

function toggleReferrals() {
    const referralList = document.getElementById('referralList');
    const referralArrow = document.getElementById('referralArrow');
    
    if (referralList.style.maxHeight) {
        referralList.style.maxHeight = null;
        referralList.classList.add('opacity-0');
        referralList.classList.remove('mt-6');
        referralArrow.style.transform = 'rotate(0deg)';
    } else {
        referralList.style.maxHeight = referralList.scrollHeight + "px";
        referralList.classList.remove('opacity-0');
        referralList.classList.add('mt-6');
        referralArrow.style.transform = 'rotate(180deg)';
    }
}