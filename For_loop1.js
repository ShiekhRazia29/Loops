// Printing numbers from 1 to 10 using for loops
// for (i=0;i<10;i++){
//     if(i==5) continue; 
//     console.log(i)

// }
// sum of numbers from 1-100
// var sum=0
// for(i=1;i<=100;i++){
//     sum=sum+i
// }
// console.log(sum); 
//Ten numbers from users and makes there add
var sum=0;
for(i=1; i<=10; i++) {
const read=require('readline-sync');
var number=read.question('Enter a number:');
sum = sum + number
}; 
console.log(sum);  

