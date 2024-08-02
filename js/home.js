// // script.js
// const servicesContainer = document.querySelector('.servicesContainer');
// const totalServices = document.querySelectorAll('.service').length;
// const serviceWidth = 350; // Szerokość pojedynczej usługi
// const serviceMargin = 10; // Margines między usługami
// const containerWidth = serviceWidth + serviceMargin; // Szerokość jednej usługi z marginesem
// let currentIndex = 0;

// // Automatyczne przewijanie
// function autoScroll() {
//     currentIndex = (currentIndex + 1) % totalServices; // Przewija przez wszystkie usługi
//     servicesContainer.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
// }

// // Ustawienie automatycznego przewijania co 3 sekundy
// let scrollInterval = setInterval(autoScroll, 3000);

// // Obsługa przycisków przewijania
// document.querySelector('.arrowLeft').addEventListener('click', () => {
//     clearInterval(scrollInterval);
//     currentIndex = (currentIndex - 1 + totalServices) % totalServices; // Przewija w lewo przez wszystkie usługi
//     servicesContainer.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
//     scrollInterval = setInterval(autoScroll, 3000);
// });

// document.querySelector('.arrowRight').addEventListener('click', () => {
//     clearInterval(scrollInterval);
//     currentIndex = (currentIndex + 1) % totalServices; // Przewija w prawo przez wszystkie usługi
//     servicesContainer.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
//     scrollInterval = setInterval(autoScroll, 3000);
// });


// const servicesContainer = document.querySelector('.servicesContainer');
// const totalServices = document.querySelectorAll('.service').length;
// const serviceWidth = document.querySelector('.service').offsetWidth;
// const serviceMargin = 10; // Margines między usługami
// const containerWidth = serviceWidth + serviceMargin;
// let currentIndex = 0;

// // Automatyczne przewijanie
// function autoScroll() {
//     currentIndex = (currentIndex + 1) % totalServices; // Przewija przez wszystkie usługi
//     servicesContainer.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
// }

// // Ustawienie automatycznego przewijania co 3 sekundy
// let scrollInterval = setInterval(autoScroll, 3000);

// // Obsługa przycisków przewijania
// document.querySelector('.arrowLeft').addEventListener('click', () => {
//     clearInterval(scrollInterval);
//     currentIndex = (currentIndex - 1 + totalServices) % totalServices; // Przewija w lewo przez wszystkie usługi
//     servicesContainer.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
//     scrollInterval = setInterval(autoScroll, 3000);
// });

// document.querySelector('.arrowRight').addEventListener('click', () => {
//     clearInterval(scrollInterval);
//     currentIndex = (currentIndex + 1) % totalServices; // Przewija w prawo przez wszystkie usługi
//     servicesContainer.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
//     scrollInterval = setInterval(autoScroll, 3000);
// });

// // Obsługa dotyku na urządzeniach mobilnych
// let startX;
// let currentTranslateX = 0;

// servicesContainer.addEventListener('touchstart', (e) => {
//     startX = e.touches[0].clientX;
//     clearInterval(scrollInterval);
// });

// servicesContainer.addEventListener('touchmove', (e) => {
//     const touchX = e.touches[0].clientX;
//     const diffX = startX - touchX;
//     servicesContainer.style.transform = `translateX(${currentTranslateX - diffX}px)`;
// });

// servicesContainer.addEventListener('touchend', (e) => {
//     const touchX = e.changedTouches[0].clientX;
//     const diffX = startX - touchX;
//     currentIndex = (currentIndex + Math.round(diffX / containerWidth)) % totalServices;
//     currentIndex = (currentIndex + totalServices) % totalServices; // Ensure positive index
//     servicesContainer.style.transition = 'transform 0.5s ease-in-out';
//     servicesContainer.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
//     currentTranslateX = -currentIndex * containerWidth;
//     scrollInterval = setInterval(autoScroll, 3000);
// });


const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
const visibleItems = 3;
let index = 0;
let startX, endX;

// Funkcja do przesuwania karuzeli
function moveToNextSlide() {
    index++;
    if (index > totalItems - visibleItems) {
        index = 0;
    }
    const offset = -(index * 100 / visibleItems) + '%';
    carouselWrapper.style.transform = `translateX(${offset})`;
}

// Funkcja do obsługi dotyku
function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    if (!startX) return;
    endX = event.touches[0].clientX;
    const diffX = startX - endX;
    if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
            moveToNextSlide();
        } else {
            index--;
            if (index < 0) {
                index = totalItems - visibleItems;
            }
            const offset = -(index * 100 / visibleItems) + '%';
            carouselWrapper.style.transform = `translateX(${offset})`;
        }
        startX = null;  // Reset startX after handling swipe
    }
}

carouselWrapper.addEventListener('touchstart', handleTouchStart);
carouselWrapper.addEventListener('touchmove', handleTouchMove);

// Automatyczne przewijanie co 3 sekundy
setInterval(moveToNextSlide, 3000);


