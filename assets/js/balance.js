
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
        referralList.classList.add('mt-0');
        referralArrow.style.transform = 'rotate(180deg)';
    }
}
