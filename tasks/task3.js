// Задача: Напишіть функцію sumArray, яка приймає масив чисел і 
// повертає їхню суму. Використовуйте цикл для обчислення суми.

function sumArray(numbers) {
  let sum = 0; // Ініціалізуємо змінну для зберігання суми
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // Додаємо кожен елемент масиву до суми
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); // Виведе: 15
console.log(sumArray([10, 20, 30]));    // Виведе: 60

module.exports = sumArray;