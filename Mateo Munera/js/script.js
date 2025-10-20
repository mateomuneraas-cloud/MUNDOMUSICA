let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carrusel-slide');
    const totalSlides = slides.length;

    index += step;

    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }

    document.querySelector('.carrusel').style.transform = `translateX(-${index * 100}%)`;
}

// Optional: Auto slide every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);
