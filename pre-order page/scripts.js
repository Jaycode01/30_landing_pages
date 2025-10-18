let currentIndex = 1;
const totalSlides = 3;

function updateCarousel() {
  const cards = document.querySelectorAll(".product-card");
  const indicators = document.querySelectorAll(".indicator");

  cards.forEach((card, index) => {
    card.classList.remove("center", "side");

    if (index === currentIndex) {
      card.classList.add("center");
    } else {
      card.classList.add("side");
    }
  });

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

document.querySelectorAll(".indicator").forEach((indicator) => {
  indicator.addEventListener("click", (e) => {
    const index = parseInt(e.target.dataset.index);
    goToSlide(index);
  });
});

document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    const index = parseInt(e.currentTarget.dataset.index);
    goToSlide(index);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  } else if (e.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }
});

let autoplayInterval;
function startAutoplay() {
  autoplayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }, 10000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

startAutoplay();

document
  .querySelector(".carousel-container")
  .addEventListener("mouseenter", stopAutoplay);
document
  .querySelector(".carousel-container")
  .addEventListener("mouseleave", startAutoplay);

updateCarousel();
