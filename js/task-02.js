'use strict';

const invoice = 100;
const stock = 100;

let message;

invoice > stock ? message = "На складе недостаточно товаров!" : message = "Заказ оформлен, с вами свяжется менеджер";
console.log(message);