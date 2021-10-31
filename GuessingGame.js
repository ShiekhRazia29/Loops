var random=Math.floor(Math.random()*10+1);
var readline=require("readline-sync")
var guess = readline.question("Enter your guess:")
var x=random
console.log(x);
for(let i;i<=5;i++){
    if(guess==x){
       console.log("Congratulation! You Won");
    }else{
        console.log("Sorry Guess again");
    }
}