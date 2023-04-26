let counterValue = document.querySelector("#value");
counterValue.textContent = 0;
const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
decrBtn.addEventListener("click", () => {
 counterValue.textContent = Number(counterValue.textContent) - 1 ;
});
incrBtn.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) + 1 ;
});