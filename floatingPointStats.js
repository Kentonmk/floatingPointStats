const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
let total = 0;
let max = -Infinity;
let min = Infinity;
let values = [];

function askForNumber() {
  if (count < 5) {
    rl.question(`Enter floating-point number ${count + 1}: `, (input) => {
      const number = parseFloat(input);

      if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid floating-point number.");
        askForNumber(); // retry current input
      } else {
        values.push(number);
        total += number;
        if (number > max) max = number;
        if (number < min) min = number;
        count++;
        askForNumber(); // move to next input
      }
    });
  } else {
    rl.close();

    const average = total / 5;
    const interest = total * 0.20;

    console.log("\n--- Results ---");
    console.log(`Values: ${values.join(', ')}`);
    console.log(`Total: ${total.toFixed(2)}`);
    console.log(`Average: ${average.toFixed(2)}`);
    console.log(`Maximum: ${max.toFixed(2)}`);
    console.log(`Minimum: ${min.toFixed(2)}`);
    console.log(`Interest on Total (20%): ${interest.toFixed(2)}`);
  }
}

askForNumber();

