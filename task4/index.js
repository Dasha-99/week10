//вывод результата через alert
/*
function calculateTotalPrice(quantity = 2, price = 1000) {
  alert(`Стоимость покупки: ${quantity * price} рублей`);
}
*/

//вывод результата на страницу
function calculateTotalPrice(quantity = 2, price = 1000) {
  let text = document.getElementsByClassName("result")[0];
  text.textContent = `Стоимость покупки: ${(quantity * price).toLocaleString('ru-RU')} рублей.`;
}

function setPriceAndQuantity(price) {
  let quantity = prompt("Введите количество данного товара:", 2);
  calculateTotalPrice(quantity, price);
}
