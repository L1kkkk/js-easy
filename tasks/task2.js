// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  let filteredStr = str.split('').filter(char => !/\d/.test(char));
  return filteredStr.reverse().join('');
}
console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;