const carousel = document.querySelector('.carousel');
const list = document.querySelector('.list-h');
const items = document.querySelectorAll('.item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
    const width = carousel.clientWidth;
    list.style.transform = `translateX(-${currentIndex * width}px)`;
}

function showNext() {
    if (currentIndex < items.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function showPrev() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = items.length - 1;
    }
    updateCarousel();
}

next.addEventListener('click', showNext);
prev.addEventListener('click', showPrev);

window.addEventListener('resize', updateCarousel);
updateCarousel();
