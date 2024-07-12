//оголошення ф-ції з трьома параметрами
function getShippingMessage (country, price, deliveryFee) {
    // обчислення загальної вартості замовлення
    const totalPrice = price + deliveryFee;
    // повернення повідомлення про доставку товару (ф-ція getShippingMessage має повернути рядок, в якому інфо про доставку товару)
    return `Shipping to ${country} will cost ${totalPrice} credits!`;
}

//перевірка роботи ф-ції
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
