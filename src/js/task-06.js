// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


let inputElem = document.querySelector('#validation-input');

let inputLength = inputElem.dataset.length;

const input = document.querySelector('input');
inputElem.addEventListener('change', e => {
  const text = e.target.value;

  if (text.length === +inputLength) {
    inputElem.classList.add('valid');
    inputElem.classList.remove('invalid');
  } else {
    inputElem.classList.remove('valid');
    inputElem.classList.add('invalid');
  }
});