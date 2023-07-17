// Напиши скрипт, який:
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5



const list = document.querySelectorAll('li.item');

console.log(` Number of categories ${list.length} `);

const ul = document.querySelectorAll('#categories>li');
ul.forEach(el => {

  console.log(
    `Category: ${el.firstElementChild.textContent}, Elements: ${el.lastElementChild.children.length}`,
  );
});