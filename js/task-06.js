

//Тернарний оператор

 const input = document.getElementById('validation-input');
 input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  (input.dataset.length);
  input.className = input.value.length === Number(input.dataset.length) ? 'valid' : 'invalid'
 }



//2 варіант

// const inputEl = document.querySelector("#validation-input");
// inputEl.addEventListener("blur", onBlur);
// const id = Number(inputEl.dataset.length);
// function onBlur(vali) {
//   const inputVal = vali.currentTarget.value.trim();
//   inputEl.classList.remove("invalid", "valid");

//   if (inputVal.length !== id) {
//     inputEl.classList.add("invalid");
//   } else {
//     inputEl.classList.add("valid");
//   }
// }