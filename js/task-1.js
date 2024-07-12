//оголошення ф-ції з двома параметрами
function makeTransaction (quantity, priceDroid) {
    // обчислення загальної вартості замовлення
    const totalPrice = quantity * priceDroid;
    // повернення повідомлення про покупку (ф-ція makeTransaction має повернути рядок, в якому інфо про покупку)
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

//перевірка роботи ф-ції
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

