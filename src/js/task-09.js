function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChange = document.querySelector(".change-color");
const infoChange = document.querySelector(".color");
btnChange.addEventListener("click", () => {
  infoChange.textContent = getRandomHexColor();
  document.body.style.backgroundColor = infoChange.textContent;
});
