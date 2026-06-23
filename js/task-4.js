const credits = 23580;
const pricePerDroid = 3000;
let quantityPerDroids;
let message;
let totalPrice;
let balance;

quantityPerDroids = prompt('Яку кількість дроїдів Ви хоче купити?');

if (quantityPerDroids === null) {
  message = 'Скасовано користувачем!';
} else {
  quantityPerDroids = Number(quantityPerDroids);
  totalPrice = quantityPerDroids * pricePerDroid;

  if (totalPrice > credits) {
    message = 'Недостатньо коштів на рахунку!';
  } else {
    balance = Number(balance);
    balance = credits - totalPrice;
    if (quantityPerDroids === 1) {
      message = `Ви купили ${quantityPerDroids} дроїд, на рахунку залишилося ${balance} кредитів.`;
    } else if (quantityPerDroids !== 1 && quantityPerDroids < 5) {
      message = `Ви купили ${quantityPerDroids} дроїди, на рахунку залишилося ${balance} кредитів.`;
    } else {
      message = `Ви купили ${quantityPerDroids} дроїдів, на рахунку залишилося ${balance} кредитів.`;
    }
  }
}

alert(message);
