//оголошення ф-ції з трьома параметрами
function getElementWidth(content, padding, border) {
    // перетворення значеннь всіх параметрів з формату Npx в числа
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);
    // обчислення загальної ширини елемента
    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
    // повернення загальної ширини елемента
    return totalWidth;
}

//перевірка роботи ф-ції
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
