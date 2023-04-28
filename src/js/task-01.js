const elItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${elItems.length}`);
elItems.forEach((item) => {
  const heading = item.querySelector(".item > h2");
  const itemList = item.querySelector(".item > ul");
  console.log(`Category: ${heading.textContent}`);
  console.log(`Elements: ${itemList.children.length}`);
});
