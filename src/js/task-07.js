const sizeControl = document.querySelector("#font-size-control");
const elText = document.querySelector("#text");
sizeControl.addEventListener("input", (event) => {
  elText.style.fontSize = `${event.currentTarget.value}px`;
});
