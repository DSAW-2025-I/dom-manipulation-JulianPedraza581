document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel img");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;

    function updateCarousel() {
        images.forEach((img, index) => {
            img.classList.toggle("active", index === currentIndex);
        });

        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === images.length - 1;
    }

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    updateCarousel();
});
