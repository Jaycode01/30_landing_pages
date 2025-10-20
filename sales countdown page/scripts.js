function updateClock() {
  const targetDate = new Date("2025-10-29 23:59:59");

  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    updateDigit("hour-tens", "0");
    updateDigit("hour-ones", "0");
    updateDigit("min-tens", "0");
    updateDigit("min-ones", "0");
    updateDigit("sec-tens", "0");
    updateDigit("sec-ones", "0");
    return;
  }

  // Calculate time remaining
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const hoursStr = String(hours).padStart(2, "0");
  const minutesStr = String(minutes).padStart(2, "0");
  const secondsStr = String(seconds).padStart(2, "0");

  updateDigit("hour-tens", hoursStr[0]);
  updateDigit("hour-ones", hoursStr[1]);
  updateDigit("min-tens", minutesStr[0]);
  updateDigit("min-ones", minutesStr[1]);
  updateDigit("sec-tens", secondsStr[0]);
  updateDigit("sec-ones", secondsStr[1]);
}

function updateDigit(id, newValue) {
  const card = document.getElementById(id);
  const cardFace = card.querySelector(".card-face");
  const currentValue = cardFace.textContent;

  if (currentValue !== newValue) {
    card.classList.add("flipping");

    setTimeout(() => {
      cardFace.textContent = newValue;
    }, 300);

    setTimeout(() => {
      card.classList.remove("flipping");
    }, 600);
  }
}

updateClock();
setInterval(updateClock, 1000);
