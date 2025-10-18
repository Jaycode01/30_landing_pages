function updateCountdown() {
  const targetDate = new Date("2025-11-15 10:00:00").getTime();
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelectorAll(".countdown-number")[0].textContent = String(
      days
    ).padStart(2, "0");
    document.querySelectorAll(".countdown-number")[1].textContent = String(
      hours
    ).padStart(2, "0");
    document.querySelectorAll(".countdown-number")[2].textContent = String(
      mins
    ).padStart(2, "0");
    document.querySelectorAll(".countdown-number")[3].textContent = String(
      secs
    ).padStart(2, "0");
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();
