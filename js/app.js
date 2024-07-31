document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobileMenu');
    const navContainer = document.querySelector('.container');

    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    if(mobileMenu.classList.contains('active')){
        navContainer.style.position = 'fixed'
    }
    else{
        navContainer.style.position = 'relative'
    }
})
});