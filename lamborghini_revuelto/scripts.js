let currentSlide = 0;

const slides = document.querySelectorAll(".carousel_slide");
const wrapper = document.querySelector(".carousel_wrapper");
const navigationContainer = document.querySelector(".carousel_navigation");

slides.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.className = "navigation_dot";
  if (index === 0) {
    dot.classList.add("active");
  }
  dot.onclick = () => goToSlide(index);
  navigationContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".navigation_dot");

function updateSlide() {
  wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });

  const currentSlideContent =
    slides[currentSlide].querySelector(".slide_content");
  currentSlideContent.style.animation = "none";
  setTimeout(() => {
    currentSlideContent.style.animation = "";
  }, 10);
}

function moveSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  updateSlide();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlide();
}

setInterval(() => {
  moveSlide(1);
}, 10000);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") moveSlide(-1);
  if (e.key === "ArrowRight") moveSlide(1);
});
