const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const list = document.querySelector('#ingredients')
const liArray = []

ingredients.forEach(ingredient => {
  const item = document.createElement('li')
  item.className = 'item'
  item.textContent = ingredient
  liArray.push(item)
})

list.append(...liArray)
console.log(liArray);





// const ulEl = document.createElement("li");
// ulEl.textContent = ingredients;
// console.log(ulEl)
//  const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

// ulEl.innerHTML = list;

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.