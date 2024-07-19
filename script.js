// ------------------------------- Робота з рядками -------------------------------

// Додавання рядків
console.log("Hello" + "World");
console.log("Hello" + " " + "World");

// // Додавання чисел в рядки
console.log(2024 + " " + "рік");

// // Унарний плюс
console.log(+"123");

// Інтерполяція
const city = "Dnipro";
console.log(`Я люблю, ${city}!`);

// Отримання символу
const carName = "Volkswagen";
console.log(carName[1]);

// // Отримання підрядка
let friends = "Василь;Артем;Марія;Дарина";
console.log(friends.slice(0, 6));

// Заміна символів
friends = "Василь;Артем;Марія;Дарина";
console.log(friends.replaceAll("Василь", "123"));

// Перевірка підрядка
friends = "Василь;Артем;Марія;Дарина";

if (friends.includes("Марія")) {
  // повертається true якщо рядок містить 'Марія'
  console.log("Марія є ✅");
} else {
  console.log("Марії немає ❌");
}

// Об'єднання в рядок
friends = ["Василь", "Артем", "Марія", "Дарина"];
console.log(friends.join(";")); // Отримаємо рядок "Василь;Артем;Марія;Дарина"

// Масив даних
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Оновлення масиву (копіювання)
const newArrayNumbers = [...arrayNumbers, 11, 12, 13, 14, 15];
// Результат
console.log(newArrayNumbers);

// // ------------------------------- Робота з cookie -------------------------------

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

// Установить значение поля ввода из cookie при загрузке страницы
window.onload = function () {
  const inputField = document.getElementById("inputField");
  const savedName = getCookie("name");
  if (savedName) {
    inputField.value = savedName;
  }
};

// Записать значение в cookie при нажатии на кнопку
document.getElementById("saveButton").onclick = function () {
  const inputField = document.getElementById("inputField");
  const userName = inputField.value;
  document.cookie = `name=${userName};max-age=86400;`;
  console.log(document.cookie);
};