const monthlyBill = document.querySelector("#monthly");
const annuallyBill = document.querySelector("#annually");
const slider = document.querySelector(".slider");

const basicPriceText = document.querySelector("#basicMonthlyCost");
const proPriceText = document.querySelector("#proMonthlyCost");
const enterprisePriceText = document.querySelector("#enterpriseMonthlyCost");

const subDurations = document.querySelectorAll(".sub_duration");

let basicPrice = 10;
let proPrice = 25;
let enterprisePrice = 50;

const discountRate = 0.2;

function calculateAnnualCost() {
  basicPrice = (basicPrice - basicPrice * discountRate) * 12;
  basicPriceText.innerHTML = `$${basicPrice}/`;

  proPrice = (proPrice - proPrice * discountRate) * 12;
  proPriceText.innerHTML = `$${proPrice}/`;

  enterprisePrice = (enterprisePrice - enterprisePrice * discountRate) * 12;
  enterprisePriceText.innerHTML = `$${enterprisePrice}/`;

  subDurations.forEach((sub_Duration) => {
    sub_Duration.innerHTML = "year";
  });
}

function calculateMonthlyCost() {
  basicPrice = 10;
  basicPriceText.innerHTML = `$${basicPrice}/`;

  proPrice = 25;
  proPriceText.innerHTML = `$${proPrice}/`;

  enterprisePrice = 50;
  enterprisePriceText.innerHTML = `$${enterprisePrice}/`;
}

monthlyBill.addEventListener("click", () => {
  slider.style.transform = `translateX(0%)`;
  monthlyBill.classList.add("active");
  annuallyBill.classList.remove("active");

  calculateMonthlyCost();
});

annuallyBill.addEventListener("click", () => {
  slider.style.transform = `translateX(100%)`;
  annuallyBill.classList.add("active");
  monthlyBill.classList.remove("active");

  calculateAnnualCost();
});
