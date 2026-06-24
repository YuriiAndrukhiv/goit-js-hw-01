let china = 'КИТАЙ';
const costDeliveryForChina = '100 кредитів';
let chile = 'ЧИЛІ';
const costDeliveryForChile = '250 кредитів';
let australia = 'АВСТРАЛІЯ';
const costDeliveryForAustralia = '170 кредитів';
let india = 'ІНДІЯ';
const costDeliveryForIndia = '80 кредитів';
let jamaica = 'ЯМАЙКА';
const costDeliveryForJamaica = '120 кредитів';

let message;

let countryName = prompt('Введіть країну доставки');

if (countryName) {
  countryName = countryName.toLocaleLowerCase();
}

switch (countryName) {
  case china:
    message = `Доставка в ${china} буде коштувати ${costDeliveryForChina}`;
    break;
  case chile:
    message = `Доставка в ${chile} буде коштувати ${costDeliveryForChile}`;
    break;
  case australia:
    message = `Доставка в ${australia} буде коштувати ${costDeliveryForAustralia}`;
    break;
  case india:
    message = `Доставка в ${india} буде коштувати ${costDeliveryForIndia}`;
    break;
  case jamaica:
    message = `Доставка в ${jamaica} буде коштувати ${costDeliveryForJamaica}`;
    break;
  default:
    message = 'У вашій країні доставка недоступна';
    break;
}

alert(message);
