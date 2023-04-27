function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elBoxes = document.querySelector("#boxes");
const elInput = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

function createBoxes() {
  const amount = elInput.value;
  for (let i = 1; i <= amount; i = i + 1) {
    let elDiv = `<div style="background-color:${getRandomHexColor()}; width:${30+10*(i-1)}px; height:${30+10*(i-1)}px;"></div>`;
    elBoxes.insertAdjacentHTML("afterbegin", elDiv);
  }
};
function destroyBoxes() {
  elBoxes.innerHTML = "";
  elInput.value = "";
};
btnCreate.addEventListener("click", createBoxes);
 btnDestroy.addEventListener("click", destroyBoxes);
