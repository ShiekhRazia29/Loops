//To check given string is a palindrome
// const readname=require("readline-sync");
// var name=readname.question("enter name: ")
// const temp=name;
// var string=""
// for (let i=name.length-1;i>=0;i--) {
//    string=string+name[i]
// }
// if (temp===string) {
//    console.log("its palindrome string")
// }
// else {
//    console.log("it's not a palindrome string")
// }
//To check a number is palindrome or not
var NumCheck=require("readline-sync")
var number=NumCheck.question("Enter a number to check it is a paindrome or not:")
const temp=number;
var num=""
for (let t=number.length-1;t>=0;t--){
    num=num + number[t]
}
if(temp===num){
    console.log("palindrome");
}else{
    console.log("Not a palindrome");
}