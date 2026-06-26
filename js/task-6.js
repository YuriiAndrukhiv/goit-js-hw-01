let input;
let total = 0;

input = prompt('Введіть число');

while (input !== null) {
  // input = Number(input);
  if (Number.isNaN(Number(input))) {
    alert('Було написано не число, спробуйте ще раз');
  } else {
    total += Number(input);
  }
  input = prompt('Введіть наступне число');
}
alert(`Загальна сума чисел дорівнює ${total}`);
