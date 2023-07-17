

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.


const textSize = document.querySelector("#text");
const sizeControl = document.querySelector("#font-size-control");

sizeControl.addEventListener("input", onSizeChandge);
function onSizeChandge(event) {
  textSize.style.fontSize = event.currentTarget.value + "px";
}