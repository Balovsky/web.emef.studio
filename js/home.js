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


const servicesContainer = document.querySelector('.servicesContainer');
const totalServices = document.querySelectorAll('.service').length;
const serviceWidth = 350; // Szerokość pojedynczej usługi
const serviceMargin = 10; // Margines między usługami
const containerWidth = serviceWidth + serviceMargin; // Szerokość jednej usługi z marginesem
let currentIndex = 0;

// Automatyczne przewijanie
function autoScroll() {
    currentIndex = (currentIndex + 1) % totalServices; // Przewija przez wszystkie usługi
    servicesContainer.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
}

// Ustawienie automatycznego przewijania co 3 sekundy
let scrollInterval = setInterval(autoScroll, 3000);

// Obsługa przycisków przewijania
document.querySelector('.arrowLeft').addEventListener('click', () => {
    clearInterval(scrollInterval);
    currentIndex = (currentIndex - 1 + totalServices) % totalServices; // Przewija w lewo przez wszystkie usługi
    servicesContainer.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
    scrollInterval = setInterval(autoScroll, 3000);
});

document.querySelector('.arrowRight').addEventListener('click', () => {
    clearInterval(scrollInterval);
    currentIndex = (currentIndex + 1) % totalServices; // Przewija w prawo przez wszystkie usługi
    servicesContainer.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
    scrollInterval = setInterval(autoScroll, 3000);
});

// Obsługa dotyku
let startTouchX;
let isTouching = false;

servicesContainer.addEventListener('touchstart', (e) => {
    startTouchX = e.touches[0].pageX;
    isTouching = true;
    servicesContainer.style.transition = 'none'; // Wyłącz animacje podczas przesuwania
});

servicesContainer.addEventListener('touchmove', (e) => {
    if (!isTouching) return;
    const x = e.touches[0].pageX;
    const walk = (startTouchX - x) * 2; // Ilość przesunięcia
    servicesContainer.style.transform = `translateX(-${currentIndex * containerWidth + walk}px)`;
});

servicesContainer.addEventListener('touchend', () => {
    if (!isTouching) return;
    isTouching = false;
    servicesContainer.style.transition = 'transform 0.5s ease'; // Przywróć animacje
    const offset = (servicesContainer.offsetLeft - currentIndex * containerWidth) / containerWidth;
    currentIndex = Math.round(currentIndex - offset);
    currentIndex = Math.max(0, Math.min(currentIndex, totalServices - 1));
    servicesContainer.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
});


