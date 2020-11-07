'use strict';

const orderPieces = 4;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice;
let balanceCredit;
let message;

if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else {
  totalPrice = orderPieces * pricePerDroid;
  
  if (totalPrice < credits) {
    balanceCredit = credits - totalPrice;
    message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
  }
  else {
    message = ACCESS_DENIED;
  }
}

console.log(message);