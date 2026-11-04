let myName = "ESTLEX";
const myAge = 14;

console.log(myName);
console.log(myAge);
function sayHellop() {
  console.log("Привет, я функция!");
}

// Вызов функции:
sayHellop();

// 1. Находим кнопку по её id
const button = document.getElementById("myButton");
// 2. Находим карточку (первую на странице)
const card = document.querySelector(".card");

// 3. Говорим: "когда на кнопку кликнут — сделай вот это"
button.addEventListener("click", function() {
  // Добавляем класс active к карточке (или убираем, если он уже есть)
  card.classList.toggle("active");
});