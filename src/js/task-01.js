
const elItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${elItems.length}`);
// Number of categories: 3
elItems.forEach((item) => {
    const heading = item.querySelector(".item > h2");
    const itemList = item.querySelector(".item > ul");
    console.log(`Category: ${heading.textContent}`);
    console.log(`Elements: ${itemList.children.length}`);
    });
// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

