// Получаем ссылку на элемент печеньки
const cookieElement = document.getElementById("cookie");

// Получаем ссылку на элемент счетчика кликов
const clickerCounter = document.getElementById("clicker__counter");

// Инициализируем счетчик кликов
let clickCount = 0;

// Добавляем обработчик события клика на печеньку
cookieElement.addEventListener("click", () => {
  // Увеличиваем счетчик кликов
  clickCount++;
  
  // Обновляем значение счетчика на странице
  clickerCounter.textContent = clickCount;
  
  // Чередуем уменьшение и увеличение размеров печеньки
  if (cookieElement.width === 200) {
    cookieElement.width = 180;
    cookieElement.height = 180;
  } else {
    cookieElement.width = 200;
    cookieElement.height = 200;
  }
});