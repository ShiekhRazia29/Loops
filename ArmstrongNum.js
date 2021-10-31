

// JavaScript program to find the number is armstrong number 
let sum = 0;
var readline=require("readline-sync")
const number =readline.question('Enter a three-digit positive integer: ');

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    console.log(number,'is an Armstrong number');
}
else {
    console.log(number,'is not an Armstrong number.');
}