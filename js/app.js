document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobileMenu');
    const navContainer = document.querySelector('.container');
    const menuBtns = document.querySelectorAll('.mobileSubpage');
    const test = document.querySelector('.ham8');

    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    if(mobileMenu.classList.contains('active')){
        navContainer.style.position = 'fixed'
    }
    else{
        navContainer.style.position = 'relative'
    }
})

const upArrow = document.querySelector('.arrowUp');

    // Funkcja, która pokazuje lub ukrywa przycisk w zależności od przewinięcia
    function toggleUpArrow() {
        if (window.scrollY > 100) {
            upArrow.classList.add('show');
        } else {
            upArrow.classList.remove('show');
        }
    }
    menuBtns.forEach(menubutton =>{
        menubutton.addEventListener('click', ()=>{
            mobileMenu.classList.toggle('active')
            test.classList.toggle('active')
        navContainer.style.position = 'relative'
        })
    })

    // Funkcja, która przewija stronę do góry po kliknięciu
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Nasłuchujemy na zdarzenie scroll i kliknięcie
    window.addEventListener('scroll', toggleUpArrow);
    upArrow.addEventListener('click', scrollToTop);

    // Inicjalne sprawdzenie pozycji przewijania przy załadowaniu strony
    toggleUpArrow();


});