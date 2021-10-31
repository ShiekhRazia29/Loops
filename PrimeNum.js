//prime number
// var read = require("readline-sync")
// var number=read.question("Enter a number:")
// i=1
// factor=0
// while(i<number){
//     if(number % i === 0){
//         factor++
//     i++
//     }
// }if(number === factor){
//     console.log("Prime");
// }else{
//     console.log("Not Prime");
// }
//second method
var n=require("readline-sync");
const num=n.question("enter number: ");
let i=2
var count=0;
while (i<num) {
       if (num%i===0) {
       count=count+1
       }
       i++;
}
if (count===0) {
       console.log("prime number")
}
else {
   console.log("not prime number")
}

