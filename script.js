const slider = document.querySelector(".pricing input");
const progress = document.querySelector(".progress");

const price = document.querySelector("main h1 span");
const views = document.querySelector("main h5 span");

const discount = document.querySelector("input[type='checkbox']");

const prices = [
  { price: 8 + ".00", views: "10K", start: 0, end: 20 },
  { price: 12 + ".00", views: "50K", start: 20, end: 40 },
  { price: 16 + ".00", views: "100K", start: 40, end: 60 },
  { price: 24 + ".00", views: "500K", start: 60, end: 80 },
  { price: 36 + ".00", views: "1M", start: 80, end: 100 },
];
prices.forEach((e) => {
  e.discount = e.price - (25 / 100) * e.price + ".00";
});

// Default
views.textContent = prices[2].views;
price.textContent = prices[2].price;
discount.addEventListener("change", () => {
  if (discount.checked) {
    price.textContent = prices[2].discount;
  } else {
    price.textContent = prices[2].price;
  }
});

prices.forEach((e) => {
  slider.addEventListener("input", () => {
    progress.style.width = slider.value + "%";

    if (slider.value > e.start && slider.value <= e.end) {
      views.textContent = e.views;
      if (discount.checked) {
        price.textContent = e.discount;
      } else {
        price.textContent = e.price;
      }

      discount.addEventListener("change", () => {
        if (discount.checked) {
          price.textContent = e.discount;
        } else {
          price.textContent = e.price;
        }
      });
    }
  });
});
