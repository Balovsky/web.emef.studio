// document.addEventListener('DOMContentLoaded', function() {
//     const track = document.querySelector('.carousel-track');
//     const items = document.querySelectorAll('.carousel-item');
//     const dots = document.querySelectorAll('.dot');
//     let currentIndex = 0;
//     let autoScrollInterval;
//     let startX = 0;
//     let currentX = 0;

//     function updateCarousel() {
//         const itemWidth = items[0].getBoundingClientRect().width;
//         const offset = -currentIndex * itemWidth;
//         track.style.transform = `translateX(${offset}px)`;
//     }


//     function startAutoScroll() {
//         stopAutoScroll(); // Zapobiega uruchomieniu wielu interwałów
//         autoScrollInterval = setInterval(function() {
//             currentIndex = (currentIndex + 1) % items.length;
//             updateCarousel();
//         }, 2500);
//     }

//     function stopAutoScroll() {
//         clearInterval(autoScrollInterval);
//     }

//     dots.forEach(dot => {
//         dot.addEventListener('click', function() {
//             stopAutoScroll();
//             currentIndex = parseInt(this.getAttribute('data-index'));
//             updateCarousel();
//             startAutoScroll();
//         });
//     });

//     function handleTouchStart(event) {
//         stopAutoScroll();
//         startX = event.touches[0].clientX;
//         currentX = startX;
//     }

//     function handleTouchMove(event) {
//         currentX = event.touches[0].clientX;
//     }

//     function handleTouchEnd(event) {
//         const threshold = 50;
//         if (startX - currentX > threshold) {
//             currentIndex = (currentIndex + 1) % items.length;
//         } else if (currentX - startX > threshold) {
//             currentIndex = (currentIndex - 1 + items.length) % items.length;
//         }
//         updateCarousel();
//         startAutoScroll();
//     }

//     track.addEventListener('touchstart', handleTouchStart);
//     track.addEventListener('touchmove', handleTouchMove);
//     track.addEventListener('touchend', handleTouchEnd);

//     // Rozpocznij automatyczne przewijanie po załadowaniu strony
//     startAutoScroll();

//     // Zatrzymaj automatyczne przewijanie, gdy myszka najeżdża na karuzelę (opcjonalnie)
//     track.addEventListener('mouseover', stopAutoScroll);
//     track.addEventListener('mouseout', startAutoScroll);

//     // Dodaj listenera dla zmiany rozmiaru okna, aby ponownie ustawić szerokość elementów
//     window.addEventListener('resize', function() {
//         updateCarousel();
//     });

//     // Zaktualizuj karuzelę przy pierwszym załadowaniu
//     updateCarousel();

//     const upArrow = document.querySelector('.upArrow');

//     // Funkcja, która pokazuje lub ukrywa przycisk w zależności od przewinięcia
    
//     // Nasłuchujemy na zdarzenie scroll i kliknięcie


    
// });



document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const arrowLeft = document.querySelector('.arrowLeft');
    const arrowRight = document.querySelector('.arrowRight');
    let currentIndex = 0;
    let autoScrollInterval;
    let startX = 0;
    let currentX = 0;

    function updateCarousel() {
        const itemWidth = items[0].getBoundingClientRect().width;
        const offset = -currentIndex * itemWidth;
        track.style.transform = `translateX(${offset}px)`;
    }

    function startAutoScroll() {
        stopAutoScroll(); // Zapobiega uruchomieniu wielu interwałów
        autoScrollInterval = setInterval(function() {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }, 2500);
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }


    function handleTouchStart(event) {
        stopAutoScroll();
        startX = event.touches[0].clientX;
        currentX = startX;
    }

    function handleTouchMove(event) {
        currentX = event.touches[0].clientX;
    }

    function handleTouchEnd(event) {
        const threshold = 50;
        if (startX - currentX > threshold) {
            currentIndex = (currentIndex + 1) % items.length;
        } else if (currentX - startX > threshold) {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
        }
        updateCarousel();
        startAutoScroll();
    }

    track.addEventListener('touchstart', handleTouchStart);
    track.addEventListener('touchmove', handleTouchMove);
    track.addEventListener('touchend', handleTouchEnd);

    // Dodaj funkcjonalność strzałek
    arrowLeft.addEventListener('click', () => {
        stopAutoScroll();
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
        startAutoScroll();
    });

    arrowRight.addEventListener('click', () => {
        stopAutoScroll();
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
        startAutoScroll();
    });

    // Rozpocznij automatyczne przewijanie po załadowaniu strony
    startAutoScroll();

    // Zatrzymaj automatyczne przewijanie, gdy myszka najeżdża na karuzelę (opcjonalnie)
    track.addEventListener('mouseover', stopAutoScroll);
    track.addEventListener('mouseout', startAutoScroll);

    // Dodaj listenera dla zmiany rozmiaru okna, aby ponownie ustawić szerokość elementów
    window.addEventListener('resize', function() {
        updateCarousel();
    });

    // Zaktualizuj karuzelę przy pierwszym załadowaniu
    updateCarousel();


    const form = document.getElementById('contactForm');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');

    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Zatrzymuje domyślną akcję formularza

        // Przygotowanie danych formularza
        const formData = new FormData(form);

        // Wysyłanie danych formularza do Netlify
        try {
            await fetch(form.action, {
                method: 'POST',
                body: formData
            });

            // Wyświetlanie popupu po pomyślnym wysłaniu formularza
            popup.style.display = 'flex';
        } catch (error) {
            console.error('Błąd podczas wysyłania formularza:', error);
        }

        // Resetowanie formularza
        form.reset();
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none'; // Ukrywa popup po kliknięciu na przycisk zamknięcia
    });

    // Ukrywanie popupu klikając poza jego obszarem
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

});
