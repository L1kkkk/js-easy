function reverseWithoutNumbers(str) {
  let filteredStr = [];

  for (let i = 0; i < str.length; i++) {

    if (str[i] < '0' || str[i] > '9') {
      filteredStr.push(str[i]);
    }
  }
  return filteredStr.reverse().join('');
}
console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;
