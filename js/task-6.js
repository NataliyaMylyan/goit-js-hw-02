let input;
const numbers = [];
let total = 0;
let i = 0;

do {
  input = prompt("Введите число:");

  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers[i] = Number(input);
    i += 1;
  }
} while (input !== null); //false

for (i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}

console.log(`Общая сумма чисел равна ${total}`);
