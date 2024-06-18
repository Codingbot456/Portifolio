document.querySelectorAll('.portfolio-projects').forEach((portfolio, portfolioIndex) => {
    const slides = portfolio.querySelectorAll('.slide');
    const sliderWrapper = portfolio.querySelector('.slider-wrapper');
    const prevButton = portfolio.querySelector('.prev');
    const nextButton = portfolio.querySelector('.next');
    const dots = portfolio.querySelectorAll('.dot');

    let currentIndex = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[currentIndex]) dots[currentIndex].classList.add('active');
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideIndex = e.target.getAttribute('data-slide');
            showSlide(parseInt(slideIndex));
        });
    });

    showSlide(currentIndex);
});
