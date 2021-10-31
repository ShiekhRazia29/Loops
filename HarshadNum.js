// var readline=require("readline-sync")
// num1=readline.question("Enter a number to find Harshad:")
// var rem=0
// var sum=0
// var num = num1
// while(num1>0){
//     rem==num1%10
//     sum==sum+rem
//     num1==num1/10
// }
//  if (num%sum===0){
//     console.log("Harshad Number");
// }
//  else{
//      console.log("Not harshad number");

//  }
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

